> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/invalidateuseractivity()

# invalidateUserActivity() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Invalidates the most recent user activity.

## Declaration

```swift
func invalidateUserActivity()
```

<a id="Discussion"></a>

## Discussion

Use this method to invalidate an activity that should no longer be performed.

## See Also

### Coordinating Handoff activity

- [update(\_:)](update%28__%29.md): Registers the current user activity with the system.

# invalidateUserActivity (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Invalidates the most recent user activity.

## Declaration

```objectivec
- (void) invalidateUserActivity;
```

<a id="Discussion"></a>

## Discussion

Use this method to invalidate an activity that should no longer be performed.

## See Also

### Coordinating Handoff activity

- [updateUserActivity:](update%28__%29.md): Registers the current user activity with the system.
