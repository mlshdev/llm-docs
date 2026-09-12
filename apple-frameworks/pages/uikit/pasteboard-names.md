> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/pasteboard-names](https://developer.apple.com/documentation/uikit/pasteboard-names)

# Pasteboard Names (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Names identifying the system pasteboards.

<a id="overview"></a>

## Overview

You can access the general system pasteboard by calling the class method [init(name:create:)](uipasteboard/init%28name_create_%29.md), specifying the `UIPasteboardNameGeneral` constant as the first argument. You can alternatively access the general pasteboard by calling the [general](uipasteboard/general.md) class method. The general system pasteboard is persistent across device restarts, app uninstalls, and app restores.

## Topics

### Constants

- [general](uipasteboard/name-swift.struct/general.md): The name identifying the general pasteboard, which you use for general copy-cut-paste operations.
- [UIPasteboardNameFind](uipasteboardnamefind.md): Deprecated. A name that identifies the Find pasteboard.

## See Also

### Constants

- [UIPasteboard.Name](uipasteboard/name-swift.struct.md): Constants that identify the name of a pasteboard.
- [UIPasteboard.OptionsKey](uipasteboard/optionskey.md): Options for describing pasteboard privacy.
- [Pasteboard Data Type Representations](pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.
- [UserInfo Dictionary Keys](userinfo-dictionary-keys.md): Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.

# Pasteboard Names (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Names identifying the system pasteboards.

<a id="overview"></a>

## Overview

You can access the general system pasteboard by calling the class method [pasteboardWithName:create:](uipasteboard/init%28name_create_%29.md), specifying the `UIPasteboardNameGeneral` constant as the first argument. You can alternatively access the general pasteboard by calling the [generalPasteboard](uipasteboard/general.md) class method. The general system pasteboard is persistent across device restarts, app uninstalls, and app restores.

## Topics

### Constants

- [UIPasteboardNameGeneral](uipasteboard/name-swift.struct/general.md): The name identifying the general pasteboard, which you use for general copy-cut-paste operations.
- [UIPasteboardNameFind](uipasteboardnamefind.md): Deprecated. A name that identifies the Find pasteboard.

## See Also

### Constants

- [UIPasteboardName](uipasteboard/name-swift.struct.md): Constants that identify the name of a pasteboard.
- [UIPasteboardOption](uipasteboard/optionskey.md): Options for describing pasteboard privacy.
- [Pasteboard Data Type Representations](pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.
- [UserInfo Dictionary Keys](userinfo-dictionary-keys.md): Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.
