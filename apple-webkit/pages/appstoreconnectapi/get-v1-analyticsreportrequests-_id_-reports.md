> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-analyticsreportrequests-_id_-reports](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-analyticsreportrequests-_id_-reports)

# Read Reports for a Specific Request

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4+

Get a list of reports generated from a specific analytics report request.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/{id}/reports
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the analytics report request resource ID from the [Read Report Requests](get-v1-apps-_id_-analyticsreportrequests.md) response.

## Query Parameters

- `fields[analyticsReports]` — `[string]`: Additional fields to include for each analytics reports resource returned by the response.
  **Allowed values:** `name`, `category`, `instances`
- `filter[category]` — `[string]`: Filter the returned reports by category. Possible values: -`APP_USAGE`: A string representing the App Usage category. -`APP_STORE_ENGAGEMENT`: A string representing the App Store Engagement category. -`COMMERCE`: A string representing the App Store Commerce category. -`FRAMEWORK_USAGE`: A string representing the Framework Usage category. -`PERFORMANCE`: A string representing the Performance category.
  **Allowed values:** `APP_USAGE`, `APP_STORE_ENGAGEMENT`, `COMMERCE`, `FRAMEWORK_USAGE`, `PERFORMANCE`
- `filter[name]` — `[string]`: Filter the returned reports by name.
- `limit` — `integer`: The maximum number of analytics reports resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AnalyticsReportsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Downloading Analytics Reports](downloading-analytics-reports.md)

<a id="Discussion"></a>

## Discussion

<a id="Examples-Request-and-Response"></a>

### Examples Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231/reports?limit=5
```

**Response**

```json
{
  "data": [
    {
      "type": "analyticsReports",
      "id": "r19-d48c69c5-9bcb-4592-abbd-08a9411b0231",
      "attributes": {
        "name": "Streaming Playback Performance",
        "category": "PERFORMANCE"
      },
      "relationships": {
        "instances": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r19-d48c69c5-9bcb-4592-abbd-08a9411b0231/relationships/instances",
            "related": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r19-d48c69c5-9bcb-4592-abbd-08a9411b0231/instances"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r19-d48c69c5-9bcb-4592-abbd-08a9411b0231"
      }
    },
    {
      "type": "analyticsReports",
      "id": "r20-d48c69c5-9bcb-4592-abbd-08a9411b0231",
      "attributes": {
        "name": "Streaming Downloads Performance",
        "category": "PERFORMANCE"
      },
      "relationships": {
        "instances": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r20-d48c69c5-9bcb-4592-abbd-08a9411b0231/relationships/instances",
            "related": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r20-d48c69c5-9bcb-4592-abbd-08a9411b0231/instances"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r20-d48c69c5-9bcb-4592-abbd-08a9411b0231"
      }
    },
    {
      "type": "analyticsReports",
      "id": "r142-d48c69c5-9bcb-4592-abbd-08a9411b0231",
      "attributes": {
        "name": "App Crashes Expanded",
        "category": "PERFORMANCE"
      },
      "relationships": {
        "instances": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r142-d48c69c5-9bcb-4592-abbd-08a9411b0231/relationships/instances",
            "related": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r142-d48c69c5-9bcb-4592-abbd-08a9411b0231/instances"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r142-d48c69c5-9bcb-4592-abbd-08a9411b0231"
      }
    },
    {
      "type": "analyticsReports",
      "id": "r143-d48c69c5-9bcb-4592-abbd-08a9411b0231",
      "attributes": {
        "name": "App Storage Reads and Writes",
        "category": "PERFORMANCE"
      },
      "relationships": {
        "instances": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r143-d48c69c5-9bcb-4592-abbd-08a9411b0231/relationships/instances",
            "related": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r143-d48c69c5-9bcb-4592-abbd-08a9411b0231/instances"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r143-d48c69c5-9bcb-4592-abbd-08a9411b0231"
      }
    },
    {
      "type": "analyticsReports",
      "id": "r23-d48c69c5-9bcb-4592-abbd-08a9411b0231",
      "attributes": {
        "name": "AirPlay Performance",
        "category": "PERFORMANCE"
      },
      "relationships": {
        "instances": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r23-d48c69c5-9bcb-4592-abbd-08a9411b0231/relationships/instances",
            "related": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r23-d48c69c5-9bcb-4592-abbd-08a9411b0231/instances"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/analyticsReports/r23-d48c69c5-9bcb-4592-abbd-08a9411b0231"
      }
    }
  ],
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231/reports?limit=5",
    "next": "https://api.appstoreconnect.apple.com/v1/analyticsReportRequests/d48c69c5-9bcb-4592-abbd-08a9411b0231/reports?cursor=BQ.ALHoGBE&limit=5"
  },
  "meta": {
    "paging": {
      "total": 116,
      "limit": 5
    }
  }
}
```

## See Also

### Making, Reading, and Deleting Requests

- [Request Reports](post-v1-analyticsreportrequests.md): Request analytics reports for your apps.
- [Read Report Requests](get-v1-apps-_id_-analyticsreportrequests.md): Read analytics report requests for a specific app.
- [Read Report Request Information](get-v1-analyticsreportrequests-_id_.md): Get details for and the state of a specific analytics report request.
- [Read reports ids for a specific request](get-v1-analyticsreportrequests-_id_-relationships-reports.md): Get a list of reports Ids from a specific analytics report request.
- [Delete a Report Request](delete-v1-analyticsreportrequests-_id_.md): Remove a specific analytics report request.
