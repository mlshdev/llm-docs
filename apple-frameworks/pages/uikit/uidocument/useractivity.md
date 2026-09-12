> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/useractivity](https://developer.apple.com/documentation/uikit/uidocument/useractivity)

# userActivity (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An object encapsulating a user activity supported by this document.

## Declaration

```swift
var userActivity: NSUserActivity? { get set }
```

<a id="Discussion"></a>

## Discussion

[UIDocument](../uidocument.md) automatically creates [NSUserActivity](../../foundation/nsuseractivity.md) objects. The system makes user activities eligible for Handoff if the document is iCloud-based and the app’s `Info.plist` property list file includes a [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) key of `NSUbiquitousDocumentUserActivityType`. The value of `NSUbiquitousDocumentUserActivityType` is a string that represents the [NSUserActivity](../../foundation/nsuseractivity.md) object’s activity type. The document’s URL is in the [NSUserActivity](../../foundation/nsuseractivity.md) object’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary with the [userActivityURLKey](useractivityurlkey.md).

In iOS, to make an  [NSUserActivity](../../foundation/nsuseractivity.md) object that UIKit manages current, you must either call [becomeCurrent()](../../foundation/nsuseractivity/becomecurrent%28%29.md) explicitly or have the document’s [NSUserActivity](../../foundation/nsuseractivity.md) object also set on a [UIViewController](../uiviewcontroller.md) object that’s in the view hierarchy when the app comes to the foreground.

You can use this property from any thread. It’s KVO-observable in case you share the [userActivity](useractivity.md) object with other objects that need to be kept in sync as the document moves into and out of iCloud.

## See Also

### Supporting user activities

- [restoreUserActivityState(\_:)](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.
- [updateUserActivityState(\_:)](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.

# userActivity (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

An object encapsulating a user activity supported by this document.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSUserActivity * userActivity;
```

<a id="Discussion"></a>

## Discussion

[UIDocument](../uidocument.md) automatically creates [NSUserActivity](../../foundation/nsuseractivity.md) objects. The system makes user activities eligible for Handoff if the document is iCloud-based and the app’s `Info.plist` property list file includes a [CFBundleDocumentTypes](../../bundleresources/information-property-list/cfbundledocumenttypes.md) key of `NSUbiquitousDocumentUserActivityType`. The value of `NSUbiquitousDocumentUserActivityType` is a string that represents the [NSUserActivity](../../foundation/nsuseractivity.md) object’s activity type. The document’s URL is in the [NSUserActivity](../../foundation/nsuseractivity.md) object’s [userInfo](../../foundation/nsuseractivity/userinfo.md) dictionary with the [NSUserActivityDocumentURLKey](useractivityurlkey.md).

In iOS, to make an  [NSUserActivity](../../foundation/nsuseractivity.md) object that UIKit manages current, you must either call [becomeCurrent](../../foundation/nsuseractivity/becomecurrent%28%29.md) explicitly or have the document’s [NSUserActivity](../../foundation/nsuseractivity.md) object also set on a [UIViewController](../uiviewcontroller.md) object that’s in the view hierarchy when the app comes to the foreground.

You can use this property from any thread. It’s KVO-observable in case you share the [userActivity](useractivity.md) object with other objects that need to be kept in sync as the document moves into and out of iCloud.

## See Also

### Supporting user activities

- [restoreUserActivityState:](restoreuseractivitystate%28__%29.md): Restores the state needed to continue the given user activity.
- [updateUserActivityState:](updateuseractivitystate%28__%29.md): Updates the state of the given user activity.
