> Pinned source for ZITADEL v4.20.1: [apps/docs/content/concepts/principles.mdx](https://github.com/zitadel/zitadel/blob/709968cdd4257d7377bb95f22c840ee39ba951c6/apps/docs/content/concepts/principles.mdx)
> Canonical documentation: https://zitadel.com/docs/concepts/principles

## ZITADEL engineering and design principles

- Be transparent about your decisions
- Embrace stateless application design
- System of records is the event store
- Everything else needs to be able to be regenerated
- Try not to solve complex problems outside the IAM Domain
- Use a scalable storage for the event store and read models
- Try to be idempotent whenever possible
- Reduce necessity of external systems or dependencies as much as possible
- Embrace automation
- Design API first
- Optimize all components for day-two operations
- Use only open source projects with permissive licenses
- Don't roll your own crypto algorithm
- Embrace (industry) standard as much as possible
- Make use of platform features
- Be able to run with a CDN and WAF
- Releases utilized semantic versioning and release whenever feasible
