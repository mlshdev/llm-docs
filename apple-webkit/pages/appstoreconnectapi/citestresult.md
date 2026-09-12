> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/citestresult](https://developer.apple.com/documentation/appstoreconnectapi/citestresult)

# CiTestResult

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The outcome of a single test case in an Xcode Cloud test action, including its pass/fail status and duration.

## Declaration

```
object CiTestResult
```

## Properties

- `attributes` — `CiTestResult.Attributes`: The attributes that describe the Test Results resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Test Results resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciTestResults`

## Topics

### Objects

- [CiTestResult.Attributes](citestresult/attributes-data.dictionary.md): The attributes that describe a Test Results resource.

## See Also

### Objects and types

- [CiTestResultResponse](citestresultresponse.md): The response body for endpoints that read a single test result from an Xcode Cloud build action.
