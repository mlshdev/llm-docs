> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmpackingtype/none](https://developer.apple.com/documentation/coremedia/cmpackingtype/none)

# CMPackingType.none (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Each frame contains only a single image, and isn’t frame-packed.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

This is the default frame-packing type for 3D video.

## See Also

### Frame Arrangement

- [CMPackingType.sideBySide](sidebyside.md): The video contains packed frames that have a left eye image on the left and right eye image on the right.
- [CMPackingType.overUnder](overunder.md): The video contains packed frames that have a left eye image on the top and right eye image on the bottom.

# kCMPackingType_None (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Each frame contains only a single image, and isn’t frame-packed.

## Declaration

```objectivec
kCMPackingType_None
```

<a id="Discussion"></a>

## Discussion

This is the default frame-packing type for 3D video.

## See Also

### Frame Arrangement

- [kCMPackingType_SideBySide](sidebyside.md): The video contains packed frames that have a left eye image on the left and right eye image on the right.
- [kCMPackingType_OverUnder](overunder.md): The video contains packed frames that have a left eye image on the top and right eye image on the bottom.
