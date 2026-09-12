> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/changedtypesremoveduserinfokey](https://developer.apple.com/documentation/uikit/uipasteboard/changedtypesremoveduserinfokey)

# changedTypesRemovedUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

With the notification named [changedNotification](changednotification.md), use this key to access the removed representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

## Declaration

```swift
nonisolated class let changedTypesRemovedUserInfoKey: String
```

## See Also

### Constants

- [changedTypesAddedUserInfoKey](changedtypesaddeduserinfokey.md): With the notification named [changedNotification](changednotification.md), use this key to access the added representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

# UIPasteboardChangedTypesRemovedKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

With the notification named [UIPasteboardChangedNotification](changednotification.md), use this key to access the removed representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

## Declaration

```objectivec
extern NSString * const UIPasteboardChangedTypesRemovedKey;
```

## See Also

### Constants

- [UIPasteboardChangedTypesAddedKey](changedtypesaddeduserinfokey.md): With the notification named [UIPasteboardChangedNotification](changednotification.md), use this key to access the added representation types. These types are stored as an array in the notification’s `userInfo` dictionary.
