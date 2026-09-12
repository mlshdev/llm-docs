> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumerputbytescallback](https://developer.apple.com/documentation/coregraphics/cgdataconsumerputbytescallback)

# CGDataConsumerPutBytesCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Copies data from a Core Graphics-supplied buffer into a data consumer.

## Declaration

```swift
typealias CGDataConsumerPutBytesCallback = (UnsafeMutableRawPointer?, UnsafeRawPointer, Int) -> Int
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the pointer supplied to [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md).
- `buffer`: The buffer from which you copy the specified number of bytes.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied. If no more data can be written to the consumer, you should return `0`.

<a id="Discussion"></a>

## Discussion

When Core Graphics is ready to send data to the consumer, your function is called. It should copy the specified number of bytes from `buffer` into some resource under your control—for example, a file.

For information on how to associate your callback function with a data consumer, see [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md) and [CGDataConsumerCallbacks](cgdataconsumercallbacks.md).

## See Also

### Creating Data Consumers

- [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [init(url:)](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [init(data:)](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerReleaseInfoCallback](cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.

# CGDataConsumerPutBytesCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Copies data from a Core Graphics-supplied buffer into a data consumer.

## Declaration

```objectivec
typedef unsigned long (*)(void *, const void *, unsigned long) CGDataConsumerPutBytesCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the pointer supplied to [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md).
- `buffer`: The buffer from which you copy the specified number of bytes.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied. If no more data can be written to the consumer, you should return `0`.

<a id="Discussion"></a>

## Discussion

When Core Graphics is ready to send data to the consumer, your function is called. It should copy the specified number of bytes from `buffer` into some resource under your control—for example, a file.

For information on how to associate your callback function with a data consumer, see [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md) and [CGDataConsumerCallbacks](cgdataconsumercallbacks.md).

## See Also

### Creating Data Consumers

- [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [CGDataConsumerCreateWithURL](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [CGDataConsumerCreateWithCFData](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerReleaseInfoCallback](cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.
