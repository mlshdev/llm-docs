> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsitemextensionishidden](https://developer.apple.com/documentation/coreservices/klsitemextensionishidden)

# kLSItemExtensionIsHidden (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

A Boolean value that indicates the item’s extension is hidden.

## Declaration

```swift
let kLSItemExtensionIsHidden: CFString!
```

<a id="discussion"></a>

## Discussion

Use [LSSetExtensionHiddenForURL(\_:\_:)](1443948-lssetextensionhiddenforurl.md) or the URL resource property [kCFURLHasHiddenExtensionKey](../corefoundation/kcfurlhashiddenextensionkey.md)/[hasHiddenExtensionKey](../foundation/urlresourcekey/hashiddenextensionkey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.

# kLSItemExtensionIsHidden (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

A Boolean value that indicates the item’s extension is hidden.

## Declaration

```objectivec
const CFStringRef kLSItemExtensionIsHidden;
```

<a id="discussion"></a>

## Discussion

Use [LSSetExtensionHiddenForURL](1443948-lssetextensionhiddenforurl.md) or the URL resource property [kCFURLHasHiddenExtensionKey](../corefoundation/kcfurlhashiddenextensionkey.md)/[NSURLHasHiddenExtensionKey](../foundation/urlresourcekey/hashiddenextensionkey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
