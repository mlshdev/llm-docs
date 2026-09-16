> Pinned source for Vast.ai main: [guides/serverless/pricing.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/guides/serverless/pricing.mdx)
> Canonical documentation: https://docs.vast.ai/guides/serverless/pricing

# Pricing

Learn how Vast.ai Serverless pricing works and when resources are billed

Unlike other providers, Vast Serverless offers pay-per-second pricing for all workloads at the same price as Vast.ai’s non-Serverless GPU instances.

As a Serverless endpoint takes requests, it will automatically scale its number of workers up or down depending on the incoming and forecasted demand. When scaling up, the engine recruits from the Vast.ai GPU marketplace to find the best price-performance worker available. Once identified, its cost is added to the running sum of all GPU instances running on your Serverless instance. As demand reduces, the engine will remove the GPU with the worst price-performance first.

## Billing for Workers

The following table breaks down the specific charges based on worker state:

| State    | Description       | GPU compute | Storage | Bandwidth (in/out) |
| -------- | ----------------- | ----------- | ------- | ------------------ |
| Ready    | An active worker  | Billed      | Billed  | Billed             |
| Loading  | Model is loading  | Billed      | Billed  | Billed             |
| Creating | Worker recruiting | Not billed  | Billed  | Billed             |
| Inactive | A cold worker     | Not billed  | Billed  | Billed             |

## Billing for Endpoints

The following table breaks down the specific charges based on endpoint state:

| State     | Description                                                                           | Billing Description                                                                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Active    | - Engine is actively managing worker recruitment and release  - Workers are active    | All workers billed at their relevant states                                                                                                                                          |
| Suspended | - Engine is NOT managing worker recruitment and release  - Workers are active.        | Workers are billed based on their state at time of suspension.  Any workers that are currently being created or are loading, will complete to a ready state (and be billed as such). |
| Stopped   | - Engine is NOT managing worker recruitment and release  - Workers are all inactive   | All workers are changed to and are billed in the inactive state                                                                                                                      |
| Destroyed | - Engine is NOT managing worker recruitment and released  - All workers are destroyed | All billing stops                                                                                                                                                                    |
