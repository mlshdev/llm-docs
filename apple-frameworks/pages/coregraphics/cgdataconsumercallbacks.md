> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumercallbacks](https://developer.apple.com/documentation/coregraphics/cgdataconsumercallbacks)

# CGDataConsumerCallbacks (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains pointers to callback functions that manage the copying of data for a data consumer.

## Declaration

```swift
struct CGDataConsumerCallbacks
```

<a id="overview"></a>

## Overview

The functions specified by the `CGDataConsumerCallbacks` structure are responsible for copying data that Core Graphics sends to your consumer and for handling the consumer’s basic memory management. You supply this structure to the function [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md) to create a data consumer.

## Topics

### Initializers

- [init()](cgdataconsumercallbacks/init%28%29.md)
- [init(putBytes:releaseConsumer:)](cgdataconsumercallbacks/init%28putbytes_releaseconsumer_%29.md)

### Instance Properties

- [putBytes](cgdataconsumercallbacks/putbytes.md): A pointer to a function that copies data to the data consumer. For more information, see [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md).
- [releaseConsumer](cgdataconsumercallbacks/releaseconsumer.md): A pointer to a function that handles clean-up for the data consumer, or `NULL`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating Data Consumers

- [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [init(url:)](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [init(data:)](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.

# CGDataConsumerCallbacks (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains pointers to callback functions that manage the copying of data for a data consumer.

## Declaration

```objectivec
struct CGDataConsumerCallbacks;
```

<a id="overview"></a>

## Overview

The functions specified by the `CGDataConsumerCallbacks` structure are responsible for copying data that Core Graphics sends to your consumer and for handling the consumer’s basic memory management. You supply this structure to the function [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md) to create a data consumer.

## Topics

### Instance Properties

- [putBytes](cgdataconsumercallbacks/putbytes.md): A pointer to a function that copies data to the data consumer. For more information, see [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md).
- [releaseConsumer](cgdataconsumercallbacks/releaseconsumer.md): A pointer to a function that handles clean-up for the data consumer, or `NULL`.

## See Also

### Creating Data Consumers

- [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [CGDataConsumerCreateWithURL](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [CGDataConsumerCreateWithCFData](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.
