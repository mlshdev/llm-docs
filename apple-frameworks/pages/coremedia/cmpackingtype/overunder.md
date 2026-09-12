> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmpackingtype/overunder](https://developer.apple.com/documentation/coremedia/cmpackingtype/overunder)

# CMPackingType.overUnder (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The video contains packed frames that have a left eye image on the top and right eye image on the bottom.

## Declaration

```swift
case overUnder
```

<a id="Discussion"></a>

## Discussion

For over-under packed frames, the height of a frame in video data is twice as high as the video displayed.

## See Also

### Frame Arrangement

- [CMPackingType.none](none.md): Each frame contains only a single image, and isn’t frame-packed.
- [CMPackingType.sideBySide](sidebyside.md): The video contains packed frames that have a left eye image on the left and right eye image on the right.

# kCMPackingType_OverUnder (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The video contains packed frames that have a left eye image on the top and right eye image on the bottom.

## Declaration

```objectivec
kCMPackingType_OverUnder
```

<a id="Discussion"></a>

## Discussion

For over-under packed frames, the height of a frame in video data is twice as high as the video displayed.

## See Also

### Frame Arrangement

- [kCMPackingType_None](none.md): Each frame contains only a single image, and isn’t frame-packed.
- [kCMPackingType_SideBySide](sidebyside.md): The video contains packed frames that have a left eye image on the left and right eye image on the right.
