> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsitemdisplayname](https://developer.apple.com/documentation/coreservices/klsitemdisplayname)

# kLSItemDisplayName (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.

## Declaration

```swift
let kLSItemDisplayName: CFString!
```

<a id="discussion"></a>

## Discussion

Use [LSCopyDisplayNameForURL(\_:\_:)](1446850-lscopydisplaynameforurl.md) or the URL resource property [kCFURLLocalizedNameKey](../corefoundation/kcfurllocalizednamekey.md)/[localizedNameKey](../foundation/urlresourcekey/localizednamekey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

# kLSItemDisplayName (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.

## Declaration

```objectivec
const CFStringRef kLSItemDisplayName;
```

<a id="discussion"></a>

## Discussion

Use [LSCopyDisplayNameForURL](1446850-lscopydisplaynameforurl.md) or the URL resource property [kCFURLLocalizedNameKey](../corefoundation/kcfurllocalizednamekey.md)/[NSURLLocalizedNameKey](../foundation/urlresourcekey/localizednamekey.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.
