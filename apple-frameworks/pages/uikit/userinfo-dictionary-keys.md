> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/userinfo-dictionary-keys](https://developer.apple.com/documentation/uikit/userinfo-dictionary-keys)

# UserInfo Dictionary Keys (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.

## Topics

### Constants

- [changedTypesAddedUserInfoKey](uipasteboard/changedtypesaddeduserinfokey.md): With the notification named [changedNotification](uipasteboard/changednotification.md), use this key to access the added representation types. These types are stored as an array in the notification’s `userInfo` dictionary.
- [changedTypesRemovedUserInfoKey](uipasteboard/changedtypesremoveduserinfokey.md): With the notification named [changedNotification](uipasteboard/changednotification.md), use this key to access the removed representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

## See Also

### Constants

- [UIPasteboard.Name](uipasteboard/name-swift.struct.md): Constants that identify the name of a pasteboard.
- [Pasteboard Names](pasteboard-names.md): Names identifying the system pasteboards.
- [UIPasteboard.OptionsKey](uipasteboard/optionskey.md): Options for describing pasteboard privacy.
- [Pasteboard Data Type Representations](pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.

# UserInfo Dictionary Keys (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.

## Topics

### Constants

- [UIPasteboardChangedTypesAddedKey](uipasteboard/changedtypesaddeduserinfokey.md): With the notification named [UIPasteboardChangedNotification](uipasteboard/changednotification.md), use this key to access the added representation types. These types are stored as an array in the notification’s `userInfo` dictionary.
- [UIPasteboardChangedTypesRemovedKey](uipasteboard/changedtypesremoveduserinfokey.md): With the notification named [UIPasteboardChangedNotification](uipasteboard/changednotification.md), use this key to access the removed representation types. These types are stored as an array in the notification’s `userInfo` dictionary.

## See Also

### Constants

- [UIPasteboardName](uipasteboard/name-swift.struct.md): Constants that identify the name of a pasteboard.
- [Pasteboard Names](pasteboard-names.md): Names identifying the system pasteboards.
- [UIPasteboardOption](uipasteboard/optionskey.md): Options for describing pasteboard privacy.
- [Pasteboard Data Type Representations](pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.
