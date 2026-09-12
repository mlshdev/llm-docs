> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/invalidate()](https://developer.apple.com/documentation/foundation/nsuseractivity/invalidate())

# invalidate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates an activity and marks it as no longer eligible for continuation.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

Call this method when the user stops engaging in the associated activity and that activity is no longer available. For example, you might call this method when the user closes the window associated with the activity. After calling this method on a user activity object, calling the [becomeCurrent()](becomecurrent%28%29.md) method on that object has no effect.

## See Also

### Registering and invalidating activities

- [becomeCurrent()](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent()](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivities(completionHandler:)](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivities(withPersistentIdentifiers:completionHandler:)](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.

# invalidate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates an activity and marks it as no longer eligible for continuation.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

Call this method when the user stops engaging in the associated activity and that activity is no longer available. For example, you might call this method when the user closes the window associated with the activity. After calling this method on a user activity object, calling the [becomeCurrent](becomecurrent%28%29.md) method on that object has no effect.

## See Also

### Registering and invalidating activities

- [becomeCurrent](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivitiesWithCompletionHandler:](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivitiesWithPersistentIdentifiers:completionHandler:](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.
