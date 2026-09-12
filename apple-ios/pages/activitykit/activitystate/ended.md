> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activitystate/ended](https://developer.apple.com/documentation/activitykit/activitystate/ended)

# ActivityState.ended

**Framework:** ActivityKit  
**Kind:** Case  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The Live Activity is visible, but a person, the app, or the system ended it, and it won’t update its content anymore.

## Declaration

```swift
case ended
```

## See Also

### Live Activity states

- [ActivityState.active](active.md): The Live Activity is active, visible, and can receive content updates.
- [ActivityState.dismissed](dismissed.md): The Live Activity ended and is no longer visible because a person or the system removed it.
- [ActivityState.pending](pending.md): The Live Activity is scheduled to start at a specified date but hasn’t started yet.
- [ActivityState.stale](stale.md): The Live Activity content is out of date and needs an update.
