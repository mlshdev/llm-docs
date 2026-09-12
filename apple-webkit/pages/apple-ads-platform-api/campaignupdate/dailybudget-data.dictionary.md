> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaignupdate/dailybudget-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaignupdate/dailybudget-data.dictionary)

# CampaignUpdate.DailyBudget

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request wrapper for updating a campaign’s daily budget amount.

## Declaration

```
object CampaignUpdate.DailyBudget
```

## Properties

- `value` — `Money`: The new daily budget amount as a Money object with `amount` (decimal string) and ISO 4217 `currency` code. See [Money](../money.md).

<a id="Discussion"></a>

## Discussion

To change a campaign’s daily spend cap, use this object. Submitting a new value replaces the current daily budget outright and doesn’t affect `sharedBudgets`, which are managed independently.

See [DailyBudgetUpdate](../dailybudgetupdate.md) for the full field reference.
