> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/displayscale](https://developer.apple.com/documentation/uikit/uitraitcollection/displayscale)

# displayScale (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The display scale of the trait collection.

## Declaration

```swift
var displayScale: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

A value of `1.0` indicates a non-Retina display, `2.0` indicates a Retina display, and `3.0` indicates a Super Retina display. The default display scale for a trait collection is `0.0` (indicating unspecified).

## See Also

### Retrieving display-related traits

- [displayGamut](displaygamut.md): The gamut of the current display.
- [UIDisplayGamut](../uidisplaygamut.md): Constants that indicate the gamut of the current display.

# displayScale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The display scale of the trait collection.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat displayScale;
```

<a id="Discussion"></a>

## Discussion

A value of `1.0` indicates a non-Retina display, `2.0` indicates a Retina display, and `3.0` indicates a Super Retina display. The default display scale for a trait collection is `0.0` (indicating unspecified).

## See Also

### Retrieving display-related traits

- [displayGamut](displaygamut.md): The gamut of the current display.
- [UIDisplayGamut](../uidisplaygamut.md): Constants that indicate the gamut of the current display.
