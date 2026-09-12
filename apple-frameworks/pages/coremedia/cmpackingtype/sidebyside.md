> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmpackingtype/sidebyside](https://developer.apple.com/documentation/coremedia/cmpackingtype/sidebyside)

# CMPackingType.sideBySide (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The video contains packed frames that have a left eye image on the left and right eye image on the right.

## Declaration

```swift
case sideBySide
```

<a id="Discussion"></a>

## Discussion

For side-by-side packed frames, the width of a frame in video data is twice as wide as the video displayed.

## See Also

### Frame Arrangement

- [CMPackingType.none](none.md): Each frame contains only a single image, and isn’t frame-packed.
- [CMPackingType.overUnder](overunder.md): The video contains packed frames that have a left eye image on the top and right eye image on the bottom.

# kCMPackingType_SideBySide (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The video contains packed frames that have a left eye image on the left and right eye image on the right.

## Declaration

```objectivec
kCMPackingType_SideBySide
```

<a id="Discussion"></a>

## Discussion

For side-by-side packed frames, the width of a frame in video data is twice as wide as the video displayed.

## See Also

### Frame Arrangement

- [kCMPackingType_None](none.md): Each frame contains only a single image, and isn’t frame-packed.
- [kCMPackingType_OverUnder](overunder.md): The video contains packed frames that have a left eye image on the top and right eye image on the bottom.
