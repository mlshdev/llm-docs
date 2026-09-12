> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsitemisinvisible](https://developer.apple.com/documentation/coreservices/klsitemisinvisible)

# kLSItemIsInvisible (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

A Boolean value that indicates the item is hidden from users.

## Declaration

```swift
let kLSItemIsInvisible: CFString!
```

<a id="discussion"></a>

## Discussion

Use the URL resource property [kCFURLIsHiddenKey](../corefoundation/kcfurlishiddenkey.md)/[isHiddenKey](../foundation/urlresourcekey/ishiddenkey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

# kLSItemIsInvisible (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

A Boolean value that indicates the item is hidden from users.

## Declaration

```objectivec
const CFStringRef kLSItemIsInvisible;
```

<a id="discussion"></a>

## Discussion

Use the URL resource property [kCFURLIsHiddenKey](../corefoundation/kcfurlishiddenkey.md)/[NSURLIsHiddenKey](../foundation/urlresourcekey/ishiddenkey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.
