> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/deleteallsaveduseractivities(completionhandler:)](https://developer.apple.com/documentation/foundation/nsuseractivity/deleteallsaveduseractivities(completionhandler:))

# deleteAllSavedUserActivities(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 5.0+

Deletes all user activities created by your app.

## Declaration

```swift
class func deleteAllSavedUserActivities(completionHandler handler: @escaping @Sendable () -> Void)
```

```swift
class func deleteAllSavedUserActivities() async
```

## Parameters

- `handler`: The block that the system invokes after deleting the user activities. Wait for the system to call this block to ensure that the system deletes the activities (or marks them for deletion).

<a id="Discussion"></a>

## Discussion

Deletes all user activities stored by Core Spotlight or donated as Siri shortcuts.

## See Also

### Registering and invalidating activities

- [becomeCurrent()](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent()](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate()](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteSavedUserActivities(withPersistentIdentifiers:completionHandler:)](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.

# deleteAllSavedUserActivitiesWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 5.0+

Deletes all user activities created by your app.

## Declaration

```objectivec
+ (void) deleteAllSavedUserActivitiesWithCompletionHandler:(void (^)()) handler;
```

## Parameters

- `handler`: The block that the system invokes after deleting the user activities. Wait for the system to call this block to ensure that the system deletes the activities (or marks them for deletion).

<a id="Discussion"></a>

## Discussion

Deletes all user activities stored by Core Spotlight or donated as Siri shortcuts.

## See Also

### Registering and invalidating activities

- [becomeCurrent](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteSavedUserActivitiesWithPersistentIdentifiers:completionHandler:](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.
