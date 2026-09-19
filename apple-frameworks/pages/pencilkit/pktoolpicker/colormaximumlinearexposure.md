> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pktoolpicker/colormaximumlinearexposure

# colorMaximumLinearExposure (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Maximum linear exposure for the color picker used by the tool picker. Can be used to enable picking HDR colors.

## Declaration

```swift
var colorMaximumLinearExposure: CGFloat { get set }
```

<a id="discussion"></a>

## Discussion

Default value is 1.0 which means only SDR colors can be picked.

# colorMaximumLinearExposure (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Maximum linear exposure for the color picker used by the tool picker. Can be used to enable picking HDR colors.

## Declaration

```objectivec
@property (nonatomic, assign) CGFloat colorMaximumLinearExposure;
```

<a id="discussion"></a>

## Discussion

Default value is 1.0 which means only SDR colors can be picked.
