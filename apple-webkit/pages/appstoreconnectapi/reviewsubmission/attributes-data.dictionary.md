> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/reviewsubmission/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/reviewsubmission/attributes-data.dictionary)

# ReviewSubmission.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

Attributes that describe a review submission resource.

## Declaration

```
object ReviewSubmission.Attributes
```

## Properties

- `platform` — `Platform`:
- `state` — `string`: **Allowed values:** `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `UNRESOLVED_ISSUES`, `CANCELING`, `COMPLETING`, `COMPLETE`
- `submittedDate` — `date-time`:

## See Also

### Objects

- [ReviewSubmission.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
