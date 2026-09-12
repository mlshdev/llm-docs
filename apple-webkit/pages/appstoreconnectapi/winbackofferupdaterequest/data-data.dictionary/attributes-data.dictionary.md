> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/winbackofferupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/winbackofferupdaterequest/data-data.dictionary/attributes-data.dictionary)

# WinBackOfferUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

Attributes that describe a win-back offer update resource.

## Declaration

```
object WinBackOfferUpdateRequest.Data.Attributes
```

## Properties

- `customerEligibilityPaidSubscriptionDurationInMonths` — `integer`: How long a customer was a subscriber. Possible values:

  - **`1-24`**: 1 to 24 months, as integers
  - **`36`**: 3 years
  - **`48`**: 4 years
  - **`60`**: 5 years
- `customerEligibilityTimeSinceLastSubscribedInMonths` — `IntegerRange`: How long since the subscribe last had an active subscription.
- `customerEligibilityWaitBetweenOffersInMonths` — `integer`: How long since the subscribe last had an active subscription.
- `endDate` — `date`:
- `priority` — `string`: Select how this offer ranks among your other offers and in-app events. `HIGH` priority offers will appear above other offers and events on your appʼs product page.
  **Allowed values:** `HIGH`, `NORMAL`
- `promotionIntent` — `string`: You can promote this offer on your App Store product page. Promoted offers can also display in search results and may be featured on the Today, Games, and Apps tabs. If your win-back offer is live and `promotionIntent` is set to `USE_AUTO_GENERATED_ASSETS` you need to delete the win-back offer in order to remove it from promotion.
  **Allowed values:** `NOT_PROMOTED`, `USE_AUTO_GENERATED_ASSETS`
- `startDate` — `date`: First available date is today + 1 day.
