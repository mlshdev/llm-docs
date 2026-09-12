> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetslibrarychangednotification](https://developer.apple.com/documentation/assetslibrary/alassetslibrarychangednotification)

# ALAssetsLibraryChangedNotification

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Global Variable

Sent when the contents of the assets library have changed from under the app that is using the data.

## Declaration

```objectivec
extern NSString * const ALAssetsLibraryChangedNotification;
```

<a id="Discussion"></a>

## Discussion

In iOS 4.0, the notification’s [object](https://developer.apple.com/documentation/foundation/nsnotification/object) is `nil`. In iOS 4.1 and later, the notification object is the library object that posted the notification.

In iOS 6.0 and later, the user information dictionary describes what changed:

- If the user information dictionary is `nil`, reload all assets and asset groups.
- If the user information dictionary an empty dictionary, there is no need to reload assets and asset groups.
- If the user information dictionary is not empty, reload the effected assets and asset groups. For the keys used, see [Notification Keys](notification-keys.md).

This notification is sent on an arbitrary thread.
