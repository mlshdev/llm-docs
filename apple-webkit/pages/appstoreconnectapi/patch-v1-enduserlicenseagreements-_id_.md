> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-enduserlicenseagreements-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-enduserlicenseagreements-_id_)

# Modify an end user license agreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Update the text or territories for your custom end user license agreement.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `EndUserLicenseAgreementUpdateRequest`

## Response Codes

- `200` OK — `EndUserLicenseAgreementResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

Use this endpoint to change the license agreement text or associate the agreement with different App Store territories.

In the following example the request contains a blank value for the `agreementText` attribute. Replace that attribute value with your actual agreement text.

If you change the territories relationship, the new territories replace the original territories.

<a id="Change-the-Text-of-a-License-Agreement"></a>

### Change the Text of a License Agreement

**Request**

```
PATCH /v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a

{
  "data": {
    "type": "endUserLicenseAgreements",
    "attributes": {
      "agreementText": "..."
    }
  }
}
```

**Response**

```json
{
  "data" : {
    "type" : "endUserLicenseAgreements",
    "id" : "b25d1669-d6b1-4e9b-8679-02863557222a",
    "attributes" : {
      "agreementText" : "..."
    },
    "relationships" : {
      "app" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/relationships/app",
          "related" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/app"
        }
      },
      "territories" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/relationships/territories",
          "related" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/territories"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements"
  }
}
```

<a id="Replace-the-Territories-of-a-License-Agreement-with-Japan-and-Canada"></a>

### Replace the Territories of a License Agreement with Japan and Canada

**Request**

```
PATCH https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a

{
  "data": {
    "type": "endUserLicenseAgreements",
    "relationships": {
      "territories": {
        "data": [
          {
            "type": "territories",
            "id": "JPN"
          },
          {
            "type": "territories",
            "id": "CAN"
          }
        ]
      }
    }
  }
}
```

**Response**

```json
{
  "data" : {
    "type" : "endUserLicenseAgreements",
    "id" : "b25d1669-d6b1-4e9b-8679-02863557222a",
    "attributes" : {
      "agreementText" : "..."
    },
    "relationships" : {
      "app" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/relationships/app",
          "related" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/app"
        }
      },
      "territories" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/relationships/territories",
          "related" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a/territories"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/b25d1669-d6b1-4e9b-8679-02863557222a"
    }
  },
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements"
  }
}
```

## See Also

### Creating, Modifying, and Deleting an EULA

- [Create an end user license agreement](post-v1-enduserlicenseagreements.md): Add a custom end user license agreement (EULA) to an app and configure the territories to which it applies.
- [Delete an end user license agreement](delete-v1-enduserlicenseagreements-_id_.md): Delete the custom end user license agreement that is associated with an app.
