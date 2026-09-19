> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscolorwell/maximumlinearexposure

# maximumLinearExposure (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The maximum linear exposure a color in this color well can be set to. Defaults to 1 and ignores any value less than 1. If set to a value \>= 2, the color picked for this well may have a linear exposure applied to it.

## Declaration

```swift
var maximumLinearExposure: CGFloat { get set }
```

# maximumLinearExposure (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The maximum linear exposure a color in this color well can be set to. Defaults to 1 and ignores any value less than 1. If set to a value \>= 2, the color picked for this well may have a linear exposure applied to it.

## Declaration

```objectivec
@property CGFloat maximumLinearExposure;
```
