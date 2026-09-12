> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/campaign/dailybudget-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/campaign/dailybudget-data.dictionary)

# Campaign.DailyBudget

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Daily budget cap for a campaign.

## Declaration

```
object Campaign.DailyBudget
```

## Properties

- `value` — `Money`: The daily budget amount as a Money object with amount and ISO 4217 currency code. The currency must match the ad account’s currency. See [Money](../money.md). Mutable.

<a id="Discussion"></a>

## Discussion

A `Money` object specifying the campaign’s daily spend cap. Once the daily budget is exhausted, the campaign stops delivering ads for the remainder of that day. The `dailyBudget` field is required on all campaigns. A shared budget assignment, if any, enforces a separate flight-period cap independently.
