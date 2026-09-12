> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/authorizationstatus/unavailable](https://developer.apple.com/documentation/trustinsights/insightevaluator/authorizationstatus/unavailable)

# InsightEvaluator.AuthorizationStatus.unavailable

**Framework:** Trust Insights  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A value that indicates insights aren’t available on the current device.

## Declaration

```swift
case unavailable
```

<a id="Discussion"></a>

## Discussion

This may occur on unsupported devices (such as simulators), the app isn’t entitled to use the framework, or the framework isn’t available in a specific region.

## See Also

### Authorization status values

- [InsightEvaluator.AuthorizationStatus.authorized](authorized.md): A value that indicates a person has authorized this app to request evaluations.
- [InsightEvaluator.AuthorizationStatus.denied](denied.md): A value that indicates a person denied permission to use the framework.
- [InsightEvaluator.AuthorizationStatus.deniedRequestable](deniedrequestable.md): A value that indicates a person has previously denied authorization to use the framework, but the app can present a request again at a later time.
- [InsightEvaluator.AuthorizationStatus.notDetermined](notdetermined.md): A person hasn’t yet consented to allow this app to request evaluations.
