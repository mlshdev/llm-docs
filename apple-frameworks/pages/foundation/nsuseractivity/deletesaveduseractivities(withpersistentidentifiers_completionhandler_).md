> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/deletesaveduseractivities(withpersistentidentifiers:completionhandler:)](https://developer.apple.com/documentation/foundation/nsuseractivity/deletesaveduseractivities(withpersistentidentifiers:completionhandler:))

# deleteSavedUserActivities(withPersistentIdentifiers:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 5.0+

Deletes user activities created by your app that have the specified persistent identifiers.

## Declaration

```swift
class func deleteSavedUserActivities(withPersistentIdentifiers persistentIdentifiers: [NSUserActivityPersistentIdentifier], completionHandler handler: @escaping @Sendable () -> Void)
```

```swift
class func deleteSavedUserActivities(withPersistentIdentifiers persistentIdentifiers: [NSUserActivityPersistentIdentifier]) async
```

## Parameters

- `persistentIdentifiers`: The list of persistent identifiers that the system uses to determine which user activities to delete.
- `handler`: The block that the system invokes after deleting the user activities. Wait for the system to call this block to ensure that the system deletes the activities (or marks them for deletion).

<a id="Discussion"></a>

## Discussion

Deletes user activities with a persistent identifier matching any identifier in the `persistentIdentifiers` array.

## See Also

### Registering and invalidating activities

- [becomeCurrent()](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent()](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate()](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivities(completionHandler:)](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.

# deleteSavedUserActivitiesWithPersistentIdentifiers:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 5.0+

Deletes user activities created by your app that have the specified persistent identifiers.

## Declaration

```objectivec
+ (void) deleteSavedUserActivitiesWithPersistentIdentifiers:(NSArray<NSString *> *) persistentIdentifiers completionHandler:(void (^)()) handler;
```

## Parameters

- `persistentIdentifiers`: The list of persistent identifiers that the system uses to determine which user activities to delete.
- `handler`: The block that the system invokes after deleting the user activities. Wait for the system to call this block to ensure that the system deletes the activities (or marks them for deletion).

<a id="Discussion"></a>

## Discussion

Deletes user activities with a persistent identifier matching any identifier in the `persistentIdentifiers` array.

## See Also

### Registering and invalidating activities

- [becomeCurrent](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [needsSave](needssave.md): A Boolean value that indicates whether the state of the activity needs to be updated.
- [deleteAllSavedUserActivitiesWithCompletionHandler:](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
