> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityuidismissalpolicy](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy)

# ActivityUIDismissalPolicy

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The structure that describes when the system should remove a Live Activity that ended.

## Declaration

```swift
struct ActivityUIDismissalPolicy
```

## Topics

### Dismissing a Live Activity

- [default](activityuidismissalpolicy/default.md): The system’s default dismissal policy for the Live Activity.
- [immediate](activityuidismissalpolicy/immediate.md): The system immediately removes the Live Activity that ended.
- [after(\_:)](activityuidismissalpolicy/after%28__%29.md): The system removes the Live Activity that ended at the specified time within a four-hour window.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Ending a Live Activity

- [end(\_:dismissalPolicy:)](activity/end%28__dismissalpolicy_%29.md): Ends an active Live Activity.
- [end(\_:dismissalPolicy:timestamp:)](activity/end%28__dismissalpolicy_timestamp_%29.md): Ends an active Live Activity.
