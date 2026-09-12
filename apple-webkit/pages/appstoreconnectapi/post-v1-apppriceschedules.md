> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-apppriceschedules](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-apppriceschedules)

# Add a Scheduled Price Change to an App

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+

Create a scheduled price change for an app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appPriceSchedules
```

## HTTP Body

Content type: `application/json`

Type: `AppPriceScheduleCreateRequest`

## Response Codes

- `201` Created — `AppPriceScheduleResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 2.3 release notes](app-store-connect-api-2-3-release-notes.md)

<a id="Discussion"></a>

## Discussion

> **Warning**

>  If you use this endpoint to add a scheduled price change to your app, you can’t use `AppPriceInlineCreate` to change your app’s price.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/appPriceSchedules
```

**Response**

```json
{
  "data": {
    "type": "appPriceSchedules",
    "attributes": {},
    "relationships": {
      "app": {
        "data": {
          "type": "apps",
          "id": "6447402192"
        }
      },
      "manualPrices": {
        "data": [
          {
            "type": "appPrices",
            "id": "${newprice-0}"
          },
          {
            "type": "appPrices",
            "id": "${newprice-1}"
          },
          {
            "type": "appPrices",
            "id": "${newprice-2}"
          },
          {
            "type": "appPrices",
            "id": "${newprice-3}"
          }
        ]
      },
      "baseTerritory": {
        "data": {
          "type": "territories",
          "id": "CAN"
        }
      }
    }
  },
  "included": [
    {
      "id": "${newprice-0}",
      "relationships": {
        "appPricePoint": {
          "data": {
            "type": "appPricePoints",
            "id": "eyJzIjoiNjQ0NzQwMjE5MiIsInQiOiJBTEIiLCJwIjoiMTAwMTQifQ"
          }
        }
      },
      "type": "appPrices",
      "attributes": {
        "startDate": null,
        "endDate": "2023-03-11"
      }
    },
    {
      "id": "${newprice-1}",
      "relationships": {
        "appPricePoint": {
          "data": {
            "type": "appPricePoints",
            "id": "eyJzIjoiNjQ0NzQwMjE5MiIsInQiOiJBUkciLCJwIjoiMTAwMzQifQ"
          }
        }
      },
      "type": "appPrices",
      "attributes": {
        "startDate": null,
        "endDate": "2023-03-11"
      }
    },
    {
      "id": "${newprice-2}",
      "relationships": {
        "appPricePoint": {
          "data": {
            "type": "appPricePoints",
            "id": "eyJzIjoiNjQ0NzQwMjE5MiIsInQiOiJDQU4iLCJwIjoiMTAwMDcifQ"
          }
        }
      },
      "type": "appPrices",
      "attributes": {
        "startDate": null,
        "endDate": "2023-03-11"
      }
    },
    {
      "id": "${newprice-3}",
      "relationships": {
        "appPricePoint": {
          "data": {
            "type": "appPricePoints",
            "id": "eyJzIjoiNjQ0NzQwMjE5MiIsInQiOiJDQU4iLCJwIjoiMTAwMTAifQ"
          }
        }
      },
      "type": "appPrices",
      "attributes": {
        "startDate": "2023-03-11",
        "endDate": null
      }
    }
  ]
}
```

## See Also

### Getting and managing an app’s price schedules

- [Read Price Schedule Information for an App](get-v1-apps-_id_-apppriceschedule.md): Read price schedule details for a specific app.
- [Get the app price schedule ID for an app](get-v1-apps-_id_-relationships-apppriceschedule.md)
- [Read an App's Price Schedule Information](get-v1-apppriceschedules-_id_.md): List the price schedule details for a specific app.
- [List Automatically Generated Prices for an App](get-v1-apppriceschedules-_id_-automaticprices.md): List the automatically calculated prices for an app generated from a base territory.
- [Read the Base Territory for an App's Price Schedule](get-v1-apppriceschedules-_id_-baseterritory.md): Read the base territory and currency for a specific app.
- [List Manually Chosen Prices for an App](get-v1-apppriceschedules-_id_-manualprices.md): List the prices you chose for a specific app.
- [List automatic price IDs for an app price schedule](get-v1-apppriceschedules-_id_-relationships-automaticprices.md)
- [Get the base territory ID for an app price schedule](get-v1-apppriceschedules-_id_-relationships-baseterritory.md)
- [List manual price IDs for an app price schedule](get-v1-apppriceschedules-_id_-relationships-manualprices.md)
