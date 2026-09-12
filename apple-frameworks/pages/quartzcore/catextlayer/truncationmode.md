> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catextlayer/truncationmode](https://developer.apple.com/documentation/quartzcore/catextlayer/truncationmode)

# truncationMode (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines how the text is truncated to fit within the receiver’s bounds.

## Declaration

```swift
var truncationMode: CATextLayerTruncationMode { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Truncation modes](../truncation-modes.md). Defaults to [none](../catextlayertruncationmode/none.md).

## See Also

### Text Alignment and Truncation

- [isWrapped](iswrapped.md): Determines whether the text is wrapped to fit within the receiver’s bounds.
- [alignmentMode](alignmentmode.md): Determines how individual lines of text are horizontally aligned within the receiver’s bounds.

# truncationMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines how the text is truncated to fit within the receiver’s bounds.

## Declaration

```objectivec
@property (copy) CATextLayerTruncationMode truncationMode;
```

<a id="Discussion"></a>

## Discussion

The possible values are described in [Truncation modes](../truncation-modes.md). Defaults to [kCATruncationNone](../catextlayertruncationmode/none.md).

## See Also

### Text Alignment and Truncation

- [wrapped](iswrapped.md): Determines whether the text is wrapped to fit within the receiver’s bounds.
- [alignmentMode](alignmentmode.md): Determines how individual lines of text are horizontally aligned within the receiver’s bounds.
