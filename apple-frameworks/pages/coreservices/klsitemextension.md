> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsitemextension](https://developer.apple.com/documentation/coreservices/klsitemextension)

# kLSItemExtension (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The item’s filename extension.

## Declaration

```swift
let kLSItemExtension: CFString!
```

<a id="discussion"></a>

## Discussion

Use [CFURLCopyPathExtension(\_:)](../corefoundation/cfurlcopypathextension%28__%29.md) or [pathExtension](../foundation/nsurl/pathextension.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.

# kLSItemExtension (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10)

The item’s filename extension.

## Declaration

```objectivec
const CFStringRef kLSItemExtension;
```

<a id="discussion"></a>

## Discussion

Use [CFURLCopyPathExtension(\_:)](../corefoundation/cfurlcopypathextension%28__%29.md) or [pathExtension](../foundation/nsurl/pathextension.md) instead.

## See Also

### Deprecated Constants

- [kLSItemContentType](klsitemcontenttype.md): Deprecated. The item’s content type identifier, which is a uniform type identifier string.
- [kLSItemFileType](klsitemfiletype.md): Deprecated. The item’s file type.
- [kLSItemFileCreator](klsitemfilecreator.md): Deprecated. The item’s file creator.
- [kLSItemDisplayName](klsitemdisplayname.md): Deprecated. The item’s name to display to the user. The display name reflects localization and extension hiding that may be in effect.
- [kLSItemDisplayKind](klsitemdisplaykind.md): Deprecated. The localized kind string that describes the item’s type.
- [kLSItemRoleHandlerDisplayName](klsitemrolehandlerdisplayname.md): Deprecated. The display name of the application that is set to handle this item, subject to the role mask.
- [kLSItemIsInvisible](klsitemisinvisible.md): Deprecated. A Boolean value that indicates the item is hidden from users.
- [kLSItemExtensionIsHidden](klsitemextensionishidden.md): Deprecated. A Boolean value that indicates the item’s extension is hidden.
