> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/authorizationstatus/denied](https://developer.apple.com/documentation/trustinsights/insightevaluator/authorizationstatus/denied)

# InsightEvaluator.AuthorizationStatus.denied

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A value that indicates a person denied permission to use the framework.

## Declaration

```swift
case denied
```

## See Also

### Authorization status values

- [InsightEvaluator.AuthorizationStatus.authorized](authorized.md): A value that indicates a person has authorized this app to request evaluations.
- [InsightEvaluator.AuthorizationStatus.deniedRequestable](deniedrequestable.md): A value that indicates a person has previously denied authorization to use the framework, but the app can present a request again at a later time.
- [InsightEvaluator.AuthorizationStatus.notDetermined](notdetermined.md): A person hasn’t yet consented to allow this app to request evaluations.
- [InsightEvaluator.AuthorizationStatus.unavailable](unavailable.md): A value that indicates insights aren’t available on the current device.
