> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caedrmetadata/hlg](https://developer.apple.com/documentation/quartzcore/caedrmetadata/hlg)

# hlg (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Extended dynamic range (EDR) metadata for the Hybrid Log-Gamma (HLG) transfer function.

## Declaration

```swift
class var hlg: CAEDRMetadata { get }
```

<a id="Discussion"></a>

## Discussion

Your content should be scene referred and encoded with the ITU-R BT.2100-2 Hybrid Log Gamma (HLG) opto-electrical transfer function (OETF). The system applies the opto-optical transfer function (OOTF) based on peak display brightness and ambient lighting. If you’re rendering to a [CAMetalLayer](../cametallayer.md) with a linear colorspace (for floating point EDR layers), you must apply the HLG inverse OETF without normalization, to provide a nominal range of `[0, 12]`.

For more information on HLG, see [https://www.itu.int/rec/R-REC-BT.2100](https://www.itu.int/rec/R-REC-BT.2100).

# HLGMetadata (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Extended dynamic range (EDR) metadata for the Hybrid Log-Gamma (HLG) transfer function.

## Declaration

```objectivec
@property (class, retain, readonly) CAEDRMetadata * HLGMetadata;
```

<a id="Discussion"></a>

## Discussion

Your content should be scene referred and encoded with the ITU-R BT.2100-2 Hybrid Log Gamma (HLG) opto-electrical transfer function (OETF). The system applies the opto-optical transfer function (OOTF) based on peak display brightness and ambient lighting. If you’re rendering to a [CAMetalLayer](../cametallayer.md) with a linear colorspace (for floating point EDR layers), you must apply the HLG inverse OETF without normalization, to provide a nominal range of `[0, 12]`.

For more information on HLG, see [https://www.itu.int/rec/R-REC-BT.2100](https://www.itu.int/rec/R-REC-BT.2100).
