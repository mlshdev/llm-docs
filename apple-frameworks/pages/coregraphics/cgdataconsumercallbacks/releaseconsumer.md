> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumercallbacks/releaseconsumer](https://developer.apple.com/documentation/coregraphics/cgdataconsumercallbacks/releaseconsumer)

# releaseConsumer (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that handles clean-up for the data consumer, or `NULL`.

## Declaration

```swift
var releaseConsumer: CGDataConsumerReleaseInfoCallback?
```

<a id="Discussion"></a>

## Discussion

For more information, see [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md).

## See Also

### Instance Properties

- [putBytes](putbytes.md): A pointer to a function that copies data to the data consumer. For more information, see [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md).

# releaseConsumer (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that handles clean-up for the data consumer, or `NULL`.

## Declaration

```objectivec
CGDataConsumerReleaseInfoCallback releaseConsumer;
```

<a id="Discussion"></a>

## Discussion

For more information, see [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md).

## See Also

### Instance Properties

- [putBytes](putbytes.md): A pointer to a function that copies data to the data consumer. For more information, see [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md).
