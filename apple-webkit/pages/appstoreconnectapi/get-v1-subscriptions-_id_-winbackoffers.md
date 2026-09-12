> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-winbackoffers](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-winbackoffers)

# List Win-Back Offers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

The data structure that represents a get-v1-subscriptions-{id}-win back offers resource.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/winBackOffers
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[winBackOfferPrices]` — `[string]`: **Allowed values:** `territory`, `subscriptionPricePoint`
- `fields[winBackOffers]` — `[string]`: **Allowed values:** `referenceName`, `offerId`, `duration`, `offerMode`, `periodCount`, `customerEligibilityPaidSubscriptionDurationInMonths`, `customerEligibilityTimeSinceLastSubscribedInMonths`, `customerEligibilityWaitBetweenOffersInMonths`, `startDate`, `endDate`, `priority`, `promotionIntent`, `targetSubscriptionPlanType`, `prices`
- `include` — `[string]`: **Allowed values:** `prices`
- `limit` — `integer`: **Maximum:** `200`
- `limit[prices]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `WinBackOffersResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

List all win-back offers for a specific subscription.

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/subscriptions/6447497832/winBackOffers
```

**Response**

```json
{
  "data": [
    {
      "type": "winBackOffers",
      "id": "10778326500",
      "attributes": {
        "referenceName": "6 Months for 3 A",
        "offerId": "6Monthfor3_a",
        "duration": "SIX_MONTHS",
        "offerMode": "PAY_UP_FRONT",
        "periodCount": 1,
        "customerEligibilityPaidSubscriptionDurationInMonths": 6,
        "customerEligibilityTimeSinceLastSubscribedInMonths": {
          "minimum": 2,
          "maximum": 24
        },
        "customerEligibilityWaitBetweenOffersInMonths": 2,
        "startDate": "2024-07-01",
        "endDate": "2024-07-31",
        "priority": "HIGH",
        "promotionIntent": "NOT_PROMOTED"
      },
      "relationships": {
        "promotion": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/winBackOffers/10778326500/relationships/promotion",
            "related": "https://api.appstoreconnect.apple.com/v1/winBackOffers/10778326500/promotion"
          }
        },
        "prices": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/winBackOffers/10778326500/relationships/prices",
            "related": "https://api.appstoreconnect.apple.com/v1/winBackOffers/10778326500/prices"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/winBackOffers/10778326500"
      }
    }
  ],
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/subscriptions/6447497832/winBackOffers?limit=1",
  },
  "meta": {
    "paging": {
      "total": 1,
      "limit": 50
    }
  }
}
```

## See Also

### Endpoints

- [Creating and configuring win-back offers](creating-and-configuring-win-back-offers.md): Configure win-back offers for your auto-renewable subscriptions with the App Store Connect API.
- [List win-back offer IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-winbackoffers.md)
- [Read Win-Back Offer Information](get-v1-winbackoffers-_id_.md): The data structure that represents a get-v1-win back offers-{id} resource.
- [List Win-Back Offer Prices](get-v1-winbackoffers-_id_-prices.md): The data structure that represents a get-v1-win back offers-{id}-prices resource.
- [List price IDs for a win-back offer](get-v1-winbackoffers-_id_-relationships-prices.md)
- [Create a Win-Back Offer](post-v1-winbackoffers.md): Create a win-back offer for a specific subscription.
- [Modify a Win-Back Offer](patch-v1-winbackoffers-_id_.md): The data structure that represents a patch-v1-win back offers-{id} resource.
- [Delete a Win-Back Offer](delete-v1-winbackoffers-_id_.md): The data structure that represents a delete-v1-win back offers-{id} resource.
