> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/needssave](https://developer.apple.com/documentation/foundation/nsuseractivity/needssave)

# needsSave (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the state of the activity needs to be updated.

## Declaration

```swift
var needsSave: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the delegate for this user activity receives a [userActivityWillSave(\_:)](../nsuseractivitydelegate/useractivitywillsave%28__%29.md) callback before the activity is sent for continuation on another device.

## See Also

### Registering and invalidating activities

- [becomeCurrent()](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent()](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate()](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [deleteAllSavedUserActivities(completionHandler:)](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivities(withPersistentIdentifiers:completionHandler:)](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.

# needsSave (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the state of the activity needs to be updated.

## Declaration

```objectivec
@property (assign) BOOL needsSave;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the delegate for this user activity receives a [userActivityWillSave:](../nsuseractivitydelegate/useractivitywillsave%28__%29.md) callback before the activity is sent for continuation on another device.

## See Also

### Registering and invalidating activities

- [becomeCurrent](becomecurrent%28%29.md): Marks the activity as currently in use by the user.
- [resignCurrent](resigncurrent%28%29.md): Marks this activity object as inactive without invalidating it.
- [invalidate](invalidate%28%29.md): Invalidates an activity and marks it as no longer eligible for continuation.
- [deleteAllSavedUserActivitiesWithCompletionHandler:](deleteallsaveduseractivities%28completionhandler_%29.md): Deletes all user activities created by your app.
- [deleteSavedUserActivitiesWithPersistentIdentifiers:completionHandler:](deletesaveduseractivities%28withpersistentidentifiers_completionhandler_%29.md): Deletes user activities created by your app that have the specified persistent identifiers.
