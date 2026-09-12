> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/updateuseractivitystate(_:)](https://developer.apple.com/documentation/uikit/uidocument/updateuseractivitystate(_:))

# updateUserActivityState(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Updates the state of the given user activity.

## Declaration

```swift
func updateUserActivityState(_ userActivity: NSUserActivity)
```

## Parameters

- `userActivity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

The default implementation of this method puts the document’s [fileURL](fileurl.md) into the [NSUserActivity](../../foundation/nsuseractivity.md) object’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary with the [userActivityURLKey](useractivityurlkey.md). [UIDocument](../uidocument.md) automatically sets the [needsSave](../../foundation/nsuseractivity/needssave.md) property of the [NSUserActivity](../../foundation/nsuseractivity.md) object to [true](https://developer.apple.com/documentation/swift/true) when the [fileURL](fileurl.md) changes.

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this document.
- [restoreUserActivityState(\_:)](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.

# updateUserActivityState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Updates the state of the given user activity.

## Declaration

```objectivec
- (void) updateUserActivityState:(NSUserActivity *) userActivity;
```

## Parameters

- `userActivity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

The default implementation of this method puts the document’s [fileURL](fileurl.md) into the [NSUserActivity](../../foundation/nsuseractivity.md) object’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary with the [NSUserActivityDocumentURLKey](useractivityurlkey.md). [UIDocument](../uidocument.md) automatically sets the [needsSave](../../foundation/nsuseractivity/needssave.md) property of the [NSUserActivity](../../foundation/nsuseractivity.md) object to [true](https://developer.apple.com/documentation/swift/true) when the [fileURL](fileurl.md) changes.

## See Also

### Supporting user activities

- [userActivity](useractivity.md): An object encapsulating a user activity supported by this document.
- [restoreUserActivityState:](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.
