> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaigncreate/dailybudget-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaigncreate/dailybudget-data.dictionary)

# CampaignCreate.DailyBudget

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Request wrapper for setting a campaign’s daily budget at creation time.

## Declaration

```
object CampaignCreate.DailyBudget
```

## Properties

- `value` — `Money`: The daily budget amount as a Money object with `amount` (decimal string) and ISO 4217 `currency` code. See [Money](../money.md).

<a id="Discussion"></a>

## Discussion

Sets the daily spend cap for a new campaign at creation time, using a `Money` object.

See [DailyBudgetCreate](../dailybudgetcreate.md) for the full field reference and behavior.
