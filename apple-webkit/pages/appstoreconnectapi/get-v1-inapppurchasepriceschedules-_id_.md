> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchasepriceschedules-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchasepriceschedules-_id_)

# Read In-App Purchase Price Schedule Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get information about a specific scheduled price change for an in-app purchase.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchasePriceSchedules]` — `[string]`: **Allowed values:** `baseTerritory`, `manualPrices`, `automaticPrices`
- `fields[inAppPurchasePrices]` — `[string]`: **Allowed values:** `startDate`, `endDate`, `manual`, `inAppPurchasePricePoint`, `territory`
- `include` — `[string]`: **Allowed values:** `baseTerritory`, `manualPrices`, `automaticPrices`
- `limit[manualPrices]` — `integer`: **Maximum:** `50`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `limit[automaticPrices]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `InAppPurchasePriceScheduleResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593
```

**Response**

```json
{
  "data" : {
    "type" : "inAppPurchasePriceSchedules",
    "id" : "6447501593",
    "relationships" : {
      "baseTerritory" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593/relationships/baseTerritory",
          "related" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593/baseTerritory"
        }
      },
      "manualPrices" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593/relationships/manualPrices",
          "related" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593/manualPrices"
        }
      },
      "automaticPrices" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593/relationships/automaticPrices",
          "related" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593/automaticPrices"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/inAppPurchasePriceSchedules/6447501593"
  }
}
```

## See Also

### Endpoints

- [Read Price Information for an In-App Purchase Price Schedule](get-v1-inapppurchasepriceschedules-_id_-manualprices.md): Get information about a set price or prices for an in-app purchase price schedule.
- [List manual price IDs for an in-app purchase price schedule](get-v1-inapppurchasepriceschedules-_id_-relationships-manualprices.md)
- [Add a Scheduled Price Change to an In-App Purchase](post-v1-inapppurchasepriceschedules.md): Create a scheduled price change for an in-app purchase.
- [List Automatically Generated Prices for an In-App Purchase Price](get-v1-inapppurchasepriceschedules-_id_-automaticprices.md): Get information about a price or prices automatically set based on a base territory for an in-app purchase price schedule.
- [List automatic price IDs for an in-app purchase price schedule](get-v1-inapppurchasepriceschedules-_id_-relationships-automaticprices.md)
- [Read the Selected Base Territory for an In-App Purchase Price Schedule](get-v1-inapppurchasepriceschedules-_id_-baseterritory.md): Get information about the selected base territory for an in-app purchase price schedule.
- [Get the base territory ID for an in-app purchase price schedule](get-v1-inapppurchasepriceschedules-_id_-relationships-baseterritory.md)
