> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/customerreview/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/customerreview/attributes-data.dictionary)

# CustomerReview.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

The attributes of the customer’s review including its content.

## Declaration

```
object CustomerReview.Attributes
```

## Properties

- `body` — `string`: The review text that the customer wrote.
- `createdDate` — `date-time`: The date and time the customer created the review.
- `rating` — `integer`: The rating the customer provided.
  **Minimum:** `1`  
  **Maximum:** `5`
- `reviewerNickname` — `string`: The customer’s nickname used in the review.
- `title` — `string`: The title that the customer wrote for the review.
- `territory` — `TerritoryCode`: The App Store territory.

## Topics

### Types

- [TerritoryCode](../territorycode.md): The App Store territory codes.

## See Also

### Objects

- [CustomerReview.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
