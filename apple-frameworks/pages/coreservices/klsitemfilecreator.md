> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsitemfilecreator](https://developer.apple.com/documentation/coreservices/klsitemfilecreator)

# kLSItemFileCreator (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The item’s file creator.

## Declaration

```swift
let kLSItemFileCreator: CFString!
```

<a id="discussion"></a>

## Discussion

Use the URL resource property [kCFURLTypeIdentifierKey](../corefoundation/kcfurltypeidentifierkey.md)/[typeIdentifierKey](../foundation/urlresourcekey/typeidentifierkey.md) to get the file's UTI instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

# kLSItemFileCreator (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The item’s file creator.

## Declaration

```objectivec
const CFStringRef kLSItemFileCreator;
```

<a id="discussion"></a>

## Discussion

Use the URL resource property [kCFURLTypeIdentifierKey](../corefoundation/kcfurltypeidentifierkey.md)/[NSURLTypeIdentifierKey](../foundation/urlresourcekey/typeidentifierkey.md) to get the file's UTI instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.
