> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/citestresultresponse](https://developer.apple.com/documentation/appstoreconnectapi/citestresultresponse)

# CiTestResultResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single test result from an Xcode Cloud build action.

## Declaration

```
object CiTestResultResponse
```

## Properties

- `data` — `CiTestResult` (required): The resource data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects and types

- [CiTestResult](citestresult.md): The outcome of a single test case in an Xcode Cloud test action, including its pass/fail status and duration.
