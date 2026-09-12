> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-winbackoffers-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-winbackoffers-_id_)

# Modify a Win-Back Offer

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

The data structure that represents a patch-v1-win back offers-{id} resource.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/winBackOffers/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `winBackOffers` resource ID from the [List Win-Back Offers](get-v1-subscriptions-_id_-winbackoffers.md) response.

## HTTP Body

Content type: `application/json`

Type: `WinBackOfferUpdateRequest`

## Response Codes

- `200` OK — `WinBackOfferResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

Edit details for a specific win-back offer.

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/winBackOffers/10759170294
{
  "data": {
    "type": "winBackOffers",
    "id": "10778326500",
    "attributes": {
      "promotionIntent": "USE_AUTO_GENERATED_ASSETS",
      "startDate": "2024-07-04",
      "endDate": "2024-07-31"
    }
  }
}        
```

**Response**

```json
"data": {
  "type": "winBackOffers",
  "id": "10778326500",
  "attributes": {
    "referenceName": "6 Months for 3 A",
    "offerId": "6Monthfor3_a",
    "duration": "SIX_MONTHS",
    "offerMode": "PAY_UP_FRONT",
    "periodCount": 1,
    "customerEligibilityPaidSubscriptionTenureInMonths": null,
    "customerEligibilityPaidSubscriptionDurationInMonths": 6,
    "customerEligibilityTimeSinceLastSubscribedInMonths": {
      "minimum": 2,
      "maximum": 24
    },
    "customerEligibilityWaitBetweenOffersInMonths": 2,
    "startDate": "2024-07-04",
    "endDate": "2024-07-31",
    "priority": "HIGH",
    "promotionIntent": "USE_AUTO_GENERATED_ASSETS"
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
},
"links": {
  "self": "https://api.appstoreconnect.apple.com/v1/winBackOffers/10778326500"
}
}
```

## See Also

### Endpoints

- [Creating and configuring win-back offers](creating-and-configuring-win-back-offers.md): Configure win-back offers for your auto-renewable subscriptions with the App Store Connect API.
- [List Win-Back Offers](get-v1-subscriptions-_id_-winbackoffers.md): The data structure that represents a get-v1-subscriptions-{id}-win back offers resource.
- [List win-back offer IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-winbackoffers.md)
- [Read Win-Back Offer Information](get-v1-winbackoffers-_id_.md): The data structure that represents a get-v1-win back offers-{id} resource.
- [List Win-Back Offer Prices](get-v1-winbackoffers-_id_-prices.md): The data structure that represents a get-v1-win back offers-{id}-prices resource.
- [List price IDs for a win-back offer](get-v1-winbackoffers-_id_-relationships-prices.md)
- [Create a Win-Back Offer](post-v1-winbackoffers.md): Create a win-back offer for a specific subscription.
- [Delete a Win-Back Offer](delete-v1-winbackoffers-_id_.md): The data structure that represents a delete-v1-win back offers-{id} resource.
