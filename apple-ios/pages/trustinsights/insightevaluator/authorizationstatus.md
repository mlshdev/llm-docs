> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/trustinsights/insightevaluator/authorizationstatus](https://developer.apple.com/documentation/trustinsights/insightevaluator/authorizationstatus)

# InsightEvaluator.AuthorizationStatus

**Framework:** Trust Insights  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Values that indicate the status of the app’s authorization to request evaluations.

## Declaration

```swift
@nonexhaustive enum AuthorizationStatus
```

## Topics

### Authorization status values

- [InsightEvaluator.AuthorizationStatus.authorized](authorizationstatus/authorized.md): A value that indicates a person has authorized this app to request evaluations.
- [InsightEvaluator.AuthorizationStatus.denied](authorizationstatus/denied.md): A value that indicates a person denied permission to use the framework.
- [InsightEvaluator.AuthorizationStatus.deniedRequestable](authorizationstatus/deniedrequestable.md): A value that indicates a person has previously denied authorization to use the framework, but the app can present a request again at a later time.
- [InsightEvaluator.AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md): A person hasn’t yet consented to allow this app to request evaluations.
- [InsightEvaluator.AuthorizationStatus.unavailable](authorizationstatus/unavailable.md): A value that indicates insights aren’t available on the current device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Obtaining permission or checking authorization to perform evaluations

- [requestAuthorization(for:)](requestauthorization%28for_%29.md): Requests authorization from a person to generate evaluations.
- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Returns an authorization status that indicates whether a person permitted the app to request evaluations for the given context.
