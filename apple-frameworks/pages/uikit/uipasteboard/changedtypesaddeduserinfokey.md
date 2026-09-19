> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipasteboard/changedtypesaddeduserinfokey

# changedTypesAddedUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

With the notification named [changedNotification](changednotification.md), use this key to access the added representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

## Declaration

```swift
nonisolated class let changedTypesAddedUserInfoKey: String
```

## See Also

### Constants

- [changedTypesRemovedUserInfoKey](changedtypesremoveduserinfokey.md): With the notification named [changedNotification](changednotification.md), use this key to access the removed representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

# UIPasteboardChangedTypesAddedKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

With the notification named [UIPasteboardChangedNotification](changednotification.md), use this key to access the added representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

## Declaration

```objectivec
extern NSString * const UIPasteboardChangedTypesAddedKey;
```

## See Also

### Constants

- [UIPasteboardChangedTypesRemovedKey](changedtypesremoveduserinfokey.md): With the notification named [UIPasteboardChangedNotification](changednotification.md), use this key to access the removed representation types. These types are stored as an array in the notification’s `userInfo` dictionary.
