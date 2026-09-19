> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmmanager/requestauthorization()

# requestAuthorization()

**Framework:** AlarmKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Requests permission to use the alarm system if it hasn’t been requested before.

## Declaration

```swift
func requestAuthorization() async throws -> AlarmManager.AuthorizationState
```

<a id="discussion"></a>

## Discussion

If a person using your app denies authorization, all attempts to schedule alarms fail.
