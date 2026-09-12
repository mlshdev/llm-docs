> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/update(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/update(_:))

# update(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Registers the current user activity with the system.

## Declaration

```swift
func update(_ userActivity: NSUserActivity)
```

## See Also

### Coordinating Handoff activity

- [invalidateUserActivity()](invalidateuseractivity%28%29.md): Invalidates the most recent user activity.

# updateUserActivity: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 5.0+

Registers the current user activity with the system.

## Declaration

```objectivec
- (void) updateUserActivity:(NSUserActivity *) userActivity;
```

## See Also

### Coordinating Handoff activity

- [invalidateUserActivity](invalidateuseractivity%28%29.md): Invalidates the most recent user activity.
