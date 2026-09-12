> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumerreleaseinfocallback](https://developer.apple.com/documentation/coregraphics/cgdataconsumerreleaseinfocallback)

# CGDataConsumerReleaseInfoCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Releases any private data or resources associated with the data consumer.

## Declaration

```swift
typealias CGDataConsumerReleaseInfoCallback = (UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md).

<a id="Discussion"></a>

## Discussion

When Core Graphics frees a data consumer that has an associated release function, the release function is called.

For information on how to associate your callback function with a data consumer, see [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md) and [CGDataConsumerCallbacks](cgdataconsumercallbacks.md).

## See Also

### Creating Data Consumers

- [init(info:cbks:)](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [init(url:)](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [init(data:)](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.

# CGDataConsumerReleaseInfoCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Releases any private data or resources associated with the data consumer.

## Declaration

```objectivec
typedef void (*)(void *) CGDataConsumerReleaseInfoCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md).

<a id="Discussion"></a>

## Discussion

When Core Graphics frees a data consumer that has an associated release function, the release function is called.

For information on how to associate your callback function with a data consumer, see [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md) and [CGDataConsumerCallbacks](cgdataconsumercallbacks.md).

## See Also

### Creating Data Consumers

- [CGDataConsumerCreate](cgdataconsumer/init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [CGDataConsumerCreateWithURL](cgdataconsumer/init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [CGDataConsumerCreateWithCFData](cgdataconsumer/init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
