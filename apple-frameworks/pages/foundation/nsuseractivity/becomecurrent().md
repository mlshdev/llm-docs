> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/becomecurrent()](https://developer.apple.com/documentation/foundation/nsuseractivity/becomecurrent())

# becomeCurrent() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the activity as currently in use by the user.

## Declaration

```swift
func becomeCurrent()
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)
- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Call this method to let the system know that the user is performing the associated activity. The system makes this object the current user activity object, which makes it available for Handoff and search indexing. If another user activity object was previously active, that object is made inactive.

Don’t call this method when providing a user activity object for a Siri request. Siri holds on to user activity objects and passes them along to your app automatically in response to specific events.

If you previously called the [invalidate()](invalidate%28%29.md) method on the current object, calling this method has no effect.

## See Also

### Registering and invalidating activities

- [resignCurrent()](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate()](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivities(completionHandler:)](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivities(withPersistentIdentifiers:completionHandler:)](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.

# becomeCurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Marks the activity as currently in use by the user.

## Declaration

```objectivec
- (void) becomeCurrent;
```

## Mentioned In

- [Creating a user activity object](../creating-a-user-activity-object.md)
- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)

<a id="Discussion"></a>

## Discussion

Call this method to let the system know that the user is performing the associated activity. The system makes this object the current user activity object, which makes it available for Handoff and search indexing. If another user activity object was previously active, that object is made inactive.

Don’t call this method when providing a user activity object for a Siri request. Siri holds on to user activity objects and passes them along to your app automatically in response to specific events.

If you previously called the [invalidate](invalidate%28%29.md) method on the current object, calling this method has no effect.

## See Also

### Registering and invalidating activities

- [resignCurrent](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivitiesWithCompletionHandler:](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivitiesWithPersistentIdentifiers:completionHandler:](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.
