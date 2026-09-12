> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewresponsev1createrequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewresponsev1createrequest/data-data.dictionary)

# CustomerReviewResponseV1CreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The data element of the request body for creating a response to a customer review.

## Declaration

```
object CustomerReviewResponseV1CreateRequest.Data
```

## Properties

- `attributes` — `CustomerReviewResponseV1CreateRequest.Data.Attributes` (required): The attributes of the customer review response, including its text content.
- `relationships` — `CustomerReviewResponseV1CreateRequest.Data.Relationships` (required): Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `customerReviewResponses`

## Topics

### Objects

- [CustomerReviewResponseV1CreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes of the customer review response, including its text content.
- [CustomerReviewResponseV1CreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
