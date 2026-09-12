> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/standarddynamicrange](https://developer.apple.com/documentation/uikit/uicolor/standarddynamicrange)

# standardDynamicRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

In some cases it is useful to recover the color that was base SDR color that was exposed to generate the given HDR color. If a color’s `linearExposure` is \>1, then this will return the base SDR color.

## Declaration

```swift
@NSCopying var standardDynamicRange: UIColor { get }
```

## See Also

### Working with high dynamic range (HDR) colors

- [applyingContentHeadroom(\_:)](applyingcontentheadroom%28__%29.md): Reinterpret the color by applying a new `contentHeadroom` without changing the color components. Changing the `contentHeadroom` redefines the color relative to a different peak white, changing its behavior under tone mapping and the result of calling `standardDynamicRangeColor`. The new color will have a `contentHeadroom` \>= 1.0.

# standardDynamicRangeColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

In some cases it is useful to recover the color that was base SDR color that was exposed to generate the given HDR color. If a color’s `linearExposure` is \>1, then this will return the base SDR color.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UIColor * standardDynamicRangeColor;
```

## See Also

### Working with high dynamic range (HDR) colors

- [colorByApplyingContentHeadroom:](applyingcontentheadroom%28__%29.md): Reinterpret the color by applying a new `contentHeadroom` without changing the color components. Changing the `contentHeadroom` redefines the color relative to a different peak white, changing its behavior under tone mapping and the result of calling `standardDynamicRangeColor`. The new color will have a `contentHeadroom` \>= 1.0.
