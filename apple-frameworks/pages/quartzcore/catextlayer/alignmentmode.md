> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catextlayer/alignmentmode](https://developer.apple.com/documentation/quartzcore/catextlayer/alignmentmode)

# alignmentMode (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines how individual lines of text are horizontally aligned within the receiver’s bounds.

## Declaration

```swift
var alignmentMode: CATextLayerAlignmentMode { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Horizontal alignment modes](../horizontal-alignment-modes.md). Defaults to [natural](../catextlayeralignmentmode/natural.md).

## See Also

### Text Alignment and Truncation

- [isWrapped](iswrapped.md): Determines whether the text is wrapped to fit within the receiver’s bounds.
- [truncationMode](truncationmode.md): Determines how the text is truncated to fit within the receiver’s bounds.

# alignmentMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines how individual lines of text are horizontally aligned within the receiver’s bounds.

## Declaration

```objectivec
@property (copy) CATextLayerAlignmentMode alignmentMode;
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Horizontal alignment modes](../horizontal-alignment-modes.md). Defaults to [kCAAlignmentNatural](../catextlayeralignmentmode/natural.md).

## See Also

### Text Alignment and Truncation

- [wrapped](iswrapped.md): Determines whether the text is wrapped to fit within the receiver’s bounds.
- [truncationMode](truncationmode.md): Determines how the text is truncated to fit within the receiver’s bounds.
