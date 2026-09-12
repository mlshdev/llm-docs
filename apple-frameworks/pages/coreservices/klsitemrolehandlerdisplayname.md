> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsitemrolehandlerdisplayname](https://developer.apple.com/documentation/coreservices/klsitemrolehandlerdisplayname)

# kLSItemRoleHandlerDisplayName (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The display name of the application that is set to handle this item, subject to the role mask.

## Declaration

```swift
let kLSItemRoleHandlerDisplayName: CFString!
```

<a id="discussion"></a>

## Discussion

Instead of using this constant, resolve the desired role handler for the file, then use the URL resource property [kCFURLLocalizedNameKey](../corefoundation/kcfurllocalizednamekey.md)/[localizedNameKey](../foundation/urlresourcekey/localizednamekey.md) on the role handler's URL.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

# kLSItemRoleHandlerDisplayName (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The display name of the application that is set to handle this item, subject to the role mask.

## Declaration

```objectivec
const CFStringRef kLSItemRoleHandlerDisplayName;
```

<a id="discussion"></a>

## Discussion

Instead of using this constant, resolve the desired role handler for the file, then use the URL resource property [kCFURLLocalizedNameKey](../corefoundation/kcfurllocalizednamekey.md)/[NSURLLocalizedNameKey](../foundation/urlresourcekey/localizednamekey.md) on the role handler's URL.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemExtension](klsitemextension.md): Deprecated. The item’s filename extension.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.
