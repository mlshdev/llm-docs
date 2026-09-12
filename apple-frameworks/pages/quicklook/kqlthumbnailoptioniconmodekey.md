> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/kqlthumbnailoptioniconmodekey](https://developer.apple.com/documentation/quicklook/kqlthumbnailoptioniconmodekey)

# kQLThumbnailOptionIconModeKey (Swift)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The Quick Look generator produces the thumbnail as an icon with decor.

## Declaration

```swift
let kQLThumbnailOptionIconModeKey: CFString!
```

<a id="Discussion"></a>

## Discussion

The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). If you use the default, the Quick Look feature creates a thumbnail image with no icon decor. To create the thumbnail as an icon, set the value to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md). The icon’s image includes all the typical icon decor, such as shadows and a curled corner.

## See Also

### Constants

- [kQLReturnMask](kqlreturnmask.md): The Quick Look generator can create a preview.
- [kQLReturnHasMore](kqlreturnhasmore.md): The Quick Look generator has more content to display as part of the preview.
- [kQLThumbnailOptionScaleFactorKey](kqlthumbnailoptionscalefactorkey.md): The scale factor for the thumbnail.
- [QUICKLOOK_VERSION](quicklook_version.md)

# kQLThumbnailOptionIconModeKey (Objective-C)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The Quick Look generator produces the thumbnail as an icon with decor.

## Declaration

```objectivec
extern CFStringRef const kQLThumbnailOptionIconModeKey;
```

<a id="Discussion"></a>

## Discussion

The default value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). If you use the default, the Quick Look feature creates a thumbnail image with no icon decor. To create the thumbnail as an icon, set the value to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md). The icon’s image includes all the typical icon decor, such as shadows and a curled corner.

## See Also

### Constants

- [kQLReturnMask](kqlreturnmask.md): The Quick Look generator can create a preview.
- [kQLReturnHasMore](kqlreturnhasmore.md): The Quick Look generator has more content to display as part of the preview.
- [kQLThumbnailOptionScaleFactorKey](kqlthumbnailoptionscalefactorkey.md): The scale factor for the thumbnail.
- [QUICKLOOK_VERSION](quicklook_version.md)
