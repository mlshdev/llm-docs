> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumercallbacks/putbytes](https://developer.apple.com/documentation/coregraphics/cgdataconsumercallbacks/putbytes)

# putBytes (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that copies data to the data consumer. For more information, see [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md).

## Declaration

```swift
var putBytes: CGDataConsumerPutBytesCallback?
```

## See Also

### Instance Properties

- [releaseConsumer](releaseconsumer.md): A pointer to a function that handles clean-up for the data consumer, or `NULL`.

# putBytes (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that copies data to the data consumer. For more information, see [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md).

## Declaration

```objectivec
CGDataConsumerPutBytesCallback putBytes;
```

## See Also

### Instance Properties

- [releaseConsumer](releaseconsumer.md): A pointer to a function that handles clean-up for the data consumer, or `NULL`.
