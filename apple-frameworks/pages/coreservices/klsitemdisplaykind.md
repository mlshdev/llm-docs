> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsitemdisplaykind](https://developer.apple.com/documentation/coreservices/klsitemdisplaykind)

# kLSItemDisplayKind (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The localized kind string that describes the item’s type.

## Declaration

```swift
let kLSItemDisplayKind: CFString!
```

<a id="discussion"></a>

## Discussion

Use [LSCopyKindStringForURL(\_:\_:)](1447481-lscopykindstringforurl.md) or the URL resource property [kCFURLLocalizedTypeDescriptionKey](../corefoundation/kcfurllocalizedtypedescriptionkey.md)/[localizedTypeDescriptionKey](../foundation/urlresourcekey/localizedtypedescriptionkey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

# kLSItemDisplayKind (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The localized kind string that describes the item’s type.

## Declaration

```objectivec
const CFStringRef kLSItemDisplayKind;
```

<a id="discussion"></a>

## Discussion

Use [LSCopyKindStringForURL](1447481-lscopykindstringforurl.md) or the URL resource property [kCFURLLocalizedTypeDescriptionKey](../corefoundation/kcfurllocalizedtypedescriptionkey.md)/[NSURLLocalizedTypeDescriptionKey](../foundation/urlresourcekey/localizedtypedescriptionkey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.
