> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/resigncurrent()](https://developer.apple.com/documentation/foundation/nsuseractivity/resigncurrent())

# resignCurrent() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Marks this activity object as inactive without invalidating it.

## Declaration

```swift
func resignCurrent()
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Calling this method marks the user activity as no longer current, but doesn’t invalidate it entirely. You can call this method when you want to stop advertising the activity for continuation and search indexing only temporarily. You may call [becomeCurrent()](becomecurrent%28%29.md) later to restore this object as the current activity.

## See Also

### Registering and invalidating activities

- [becomeCurrent()](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [invalidate()](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivities(completionHandler:)](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivities(withPersistentIdentifiers:completionHandler:)](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.

# resignCurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Marks this activity object as inactive without invalidating it.

## Declaration

```objectivec
- (void) resignCurrent;
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Calling this method marks the user activity as no longer current, but doesn’t invalidate it entirely. You can call this method when you want to stop advertising the activity for continuation and search indexing only temporarily. You may call [becomeCurrent](becomecurrent%28%29.md) later to restore this object as the current activity.

## See Also

### Registering and invalidating activities

- [becomeCurrent](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [invalidate](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivitiesWithCompletionHandler:](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivitiesWithPersistentIdentifiers:completionHandler:](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.
