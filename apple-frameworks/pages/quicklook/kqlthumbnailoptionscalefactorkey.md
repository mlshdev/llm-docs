> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/kqlthumbnailoptionscalefactorkey](https://developer.apple.com/documentation/quicklook/kqlthumbnailoptionscalefactorkey)

# kQLThumbnailOptionScaleFactorKey (Swift)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The scale factor for the thumbnail.

## Declaration

```swift
let kQLThumbnailOptionScaleFactorKey: CFString!
```

<a id="Discussion"></a>

## Discussion

The scale factor is a `float` value that’s encapsulated in a [CFNumber](../corefoundation/cfnumber.md) object. If this option is absent, the default value is `1.0`.

## See Also

### Constants

- [kQLReturnMask](kqlreturnmask.md): The Quick Look generator can create a preview.
- [kQLReturnHasMore](kqlreturnhasmore.md): The Quick Look generator has more content to display as part of the preview.
- [kQLThumbnailOptionIconModeKey](kqlthumbnailoptioniconmodekey.md): The Quick Look generator produces the thumbnail as an icon with decor.
- [QUICKLOOK_VERSION](quicklook_version.md)

# kQLThumbnailOptionScaleFactorKey (Objective-C)

**Framework:** Quick Look  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The scale factor for the thumbnail.

## Declaration

```objectivec
extern CFStringRef const kQLThumbnailOptionScaleFactorKey;
```

<a id="Discussion"></a>

## Discussion

The scale factor is a `float` value that’s encapsulated in a [CFNumberRef](../corefoundation/cfnumber.md) object. If this option is absent, the default value is `1.0`.

## See Also

### Constants

- [kQLReturnMask](kqlreturnmask.md): The Quick Look generator can create a preview.
- [kQLReturnHasMore](kqlreturnhasmore.md): The Quick Look generator has more content to display as part of the preview.
- [kQLThumbnailOptionIconModeKey](kqlthumbnailoptioniconmodekey.md): The Quick Look generator produces the thumbnail as an icon with decor.
- [QUICKLOOK_VERSION](quicklook_version.md)
