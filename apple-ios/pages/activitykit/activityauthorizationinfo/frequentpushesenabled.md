> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityauthorizationinfo/frequentpushesenabled](https://developer.apple.com/documentation/activitykit/activityauthorizationinfo/frequentpushesenabled)

# frequentPushesEnabled

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.2+ · iPadOS 16.2+

A Boolean value that indicates whether a person permitted you to update Live Activities with frequent ActivityKit push notifications.

## Declaration

```swift
final var frequentPushesEnabled: Bool { get }
```

## Mentioned In

- [Starting and updating Live Activities with ActivityKit push notifications](../starting-and-updating-live-activities-with-activitykit-push-notifications.md)

## See Also

### Observing availability of frequent ActivityKit push notifications

- [frequentPushEnablementUpdates](frequentpushenablementupdates-swift.property.md): An asynchronous sequence you use to observe whether a person permitted you to update Live Activities with frequent ActivityKit push notifications.
- [ActivityAuthorizationInfo.FrequentPushEnablementUpdates](frequentpushenablementupdates-swift.struct.md): A structure that can observe whether you can update Live Activities with frequent ActivityKit push notifications.
