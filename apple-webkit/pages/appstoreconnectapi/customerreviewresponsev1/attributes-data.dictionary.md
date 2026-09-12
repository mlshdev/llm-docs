> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreviewresponsev1/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/customerreviewresponsev1/attributes-data.dictionary)

# CustomerReviewResponseV1.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The attributes of the response to a customer’s review including its content.

## Declaration

```
object CustomerReviewResponseV1.Attributes
```

## Properties

- `lastModifiedDate` — `date-time`: The date and time you last modified your response to the customer’s review.
- `responseBody` — `string`: The text of the response that you wrote to the customer’s review.
- `state` — `string`: The state of your response.
  **Allowed values:** `PUBLISHED`, `PENDING_PUBLISH`

## See Also

### Objects

- [CustomerReviewResponseV1.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
