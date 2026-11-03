import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, UserRound } from "lucide-react";
import { ContentCard, PageHero } from "@/components/shared";
import { researchInterns, team } from "@/data/site";

function initials(name: string) {
  const cleaned = name.replace(/^(Dr\.|Ms\.|Mr\.)\s*/i, "").trim();
  const parts = cleaned.split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our people"
        title="The team behind Bio Innospace"
        description="Scientists, managers and mentors working together to turn ideas into impact."
      />

      <section className="section-pad">
        <div className="container-site">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Core team</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <ContentCard key={member.name} className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-display text-base font-bold text-primary-foreground">
                  {initials(member.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-tint">
        <div className="container-site">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <FlaskConical className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Research interns
            </h2>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterns.map((intern) => (
              <ContentCard
                key={intern}
                className="flex items-center gap-4 !transition-transform hover:translate-y-0"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <UserRound className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-medium text-foreground">{intern}</h3>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team | Bio Innospace" },
      {
        name: "description",
        content:
          "Meet the Bio Innospace team — leadership, scientists, project staff and research interns driving biotechnology innovation.",
      },
      { property: "og:title", content: "Team | Bio Innospace" },
      {
        property: "og:description",
        content: "The people behind Bio Innospace — leadership, scientists and research interns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
