> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/updateuseractivitystate(_:)](https://developer.apple.com/documentation/uikit/uiresponder/updateuseractivitystate(_:))

# updateUserActivityState(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Updates the state of the given user activity.

## Declaration

```swift
func updateUserActivityState(_ activity: NSUserActivity)
```

## Parameters

- `activity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to update the state of the given user activity. You should add state representing the user’s activity into the [NSUserActivity](../../foundation/nsuseractivity.md) object using its [addUserInfoEntries(from:)](../../foundation/nsuseractivity/adduserinfoentries%28from_%29.md) method. When the state is dirty, you should set the [needsSave](../../foundation/nsuseractivity/needssave.md) property of the [NSUserActivity](../../foundation/nsuseractivity.md) to [true](https://developer.apple.com/documentation/swift/true), and this method will be called at an appropriate time.

When an [NSUserActivity](../../foundation/nsuseractivity.md) object managed by UIKit is updated, an empty `userInfo` dictionary is given to the [NSUserActivity](../../foundation/nsuseractivity.md) object, and all of the objects associated with the [NSUserActivity](../../foundation/nsuseractivity.md) are then sent an [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md) message.

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this responder.
- [restoreUserActivityState(\_:)](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.

# updateUserActivityState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the state of the given user activity.

## Declaration

```objectivec
- (void) updateUserActivityState:(NSUserActivity *) activity;
```

## Parameters

- `activity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

Subclasses override this method to update the state of the given user activity. You should add state representing the user’s activity into the [NSUserActivity](../../foundation/nsuseractivity.md) object using its [addUserInfoEntriesFromDictionary:](../../foundation/nsuseractivity/adduserinfoentries%28from_%29.md) method. When the state is dirty, you should set the [needsSave](../../foundation/nsuseractivity/needssave.md) property of the [NSUserActivity](../../foundation/nsuseractivity.md) to [true](https://developer.apple.com/documentation/swift/true), and this method will be called at an appropriate time.

When an [NSUserActivity](../../foundation/nsuseractivity.md) object managed by UIKit is updated, an empty `userInfo` dictionary is given to the [NSUserActivity](../../foundation/nsuseractivity.md) object, and all of the objects associated with the [NSUserActivity](../../foundation/nsuseractivity.md) are then sent an [updateUserActivityState:](updateuseractivitystate%28__%29.md) message.

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this responder.
- [restoreUserActivityState:](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.
