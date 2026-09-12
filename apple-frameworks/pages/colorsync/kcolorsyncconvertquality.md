> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncconvertquality](https://developer.apple.com/documentation/colorsync/kcolorsyncconvertquality)

# kColorSyncConvertQuality (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the quality of the conversion performed by the transform.

## Declaration

```swift
var kColorSyncConvertQuality: Unmanaged<CFString>!
```

## See Also

### Setting conversion quality

- [kColorSyncBestQuality](kcolorsyncbestquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that does not coalesce profile transforms; the default.
- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A key whose `CFBooleanRef` value enables or disables black point compensation.
- [kColorSyncDraftQuality](kcolorsyncdraftquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms and does not interpolate.
- [kColorSyncNormalQuality](kcolorsyncnormalquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms.

# kColorSyncConvertQuality (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the quality of the conversion performed by the transform.

## Declaration

```objectivec
extern CFStringRef kColorSyncConvertQuality;
```

## See Also

### Setting conversion quality

- [kColorSyncBestQuality](kcolorsyncbestquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that does not coalesce profile transforms; the default.
- [kColorSyncBlackPointCompensation](kcolorsyncblackpointcompensation.md): A key whose `CFBooleanRef` value enables or disables black point compensation.
- [kColorSyncDraftQuality](kcolorsyncdraftquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms and does not interpolate.
- [kColorSyncNormalQuality](kcolorsyncnormalquality.md): A [kColorSyncConvertQuality](kcolorsyncconvertquality.md) value that coalesces all transforms.
