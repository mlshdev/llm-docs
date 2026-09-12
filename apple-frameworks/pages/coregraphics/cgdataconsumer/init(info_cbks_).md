> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumer/init(info:cbks:)](https://developer.apple.com/documentation/coregraphics/cgdataconsumer/init(info:cbks:))

# init(info:cbks:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data consumer that uses callback functions to write data.

## Declaration

```swift
init?(info: UnsafeMutableRawPointer?, cbks: UnsafePointer<CGDataConsumerCallbacks>)
```

## Parameters

- `info`: A pointer to data of any type or `NULL`. When the callback is called, Core Graphics passes this pointer as the `info` parameter.
- `cbks`: A pointer to a structure that specifies the callback functions you implement to copy data sent to the consumer and to handle the consumer’s basic memory management. For a complete description, see [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md).

<a id="return-value"></a>

## Return Value

A new data consumer object. In Objective-C, you’re responsible for releasing this object using [CGDataConsumerRelease](../cgdataconsumerrelease.md).

## See Also

### Creating Data Consumers

- [init(url:)](init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [init(data:)](init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.

# CGDataConsumerCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data consumer that uses callback functions to write data.

## Declaration

```objectivec
extern CGDataConsumerRefCGDataConsumerCreate(void *info, const CGDataConsumerCallbacks *cbks);
```

## Parameters

- `info`: A pointer to data of any type or `NULL`. When the callback is called, Core Graphics passes this pointer as the `info` parameter.
- `cbks`: A pointer to a structure that specifies the callback functions you implement to copy data sent to the consumer and to handle the consumer’s basic memory management. For a complete description, see [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md).

<a id="return-value"></a>

## Return Value

A new data consumer object. In Objective-C, you’re responsible for releasing this object using [CGDataConsumerRelease](../cgdataconsumerrelease.md).

## See Also

### Creating Data Consumers

- [CGDataConsumerCreateWithURL](init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [CGDataConsumerCreateWithCFData](init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.
