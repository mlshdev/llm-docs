> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumer/init(data:)](https://developer.apple.com/documentation/coregraphics/cgdataconsumer/init(data:))

# init(data:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data consumer that writes to a CFData object.

## Declaration

```swift
init?(data: CFMutableData)
```

## Parameters

- `data`: The CFData object to write to.

<a id="return-value"></a>

## Return Value

A new data consumer object. In Objective-C, you’re responsible for releasing this object using [CGDataConsumerRelease](../cgdataconsumerrelease.md).

<a id="Discussion"></a>

## Discussion

You can use this function when you need to represent Core Graphics data as a [CFData](../../corefoundation/cfdata.md) type. For example, you might create a [CFData](../../corefoundation/cfdata.md) object that you then copy to the pasteboard.

## See Also

### Creating Data Consumers

- [init(info:cbks:)](init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [init(url:)](init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.

# CGDataConsumerCreateWithCFData (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data consumer that writes to a CFData object.

## Declaration

```objectivec
extern CGDataConsumerRefCGDataConsumerCreateWithCFData(CFMutableDataRef data);
```

## Parameters

- `data`: The CFData object to write to.

<a id="return-value"></a>

## Return Value

A new data consumer object. In Objective-C, you’re responsible for releasing this object using [CGDataConsumerRelease](../cgdataconsumerrelease.md).

<a id="Discussion"></a>

## Discussion

You can use this function when you need to represent Core Graphics data as a [CFDataRef](../../corefoundation/cfdata.md) type. For example, you might create a [CFDataRef](../../corefoundation/cfdata.md) object that you then copy to the pasteboard.

## See Also

### Creating Data Consumers

- [CGDataConsumerCreate](init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [CGDataConsumerCreateWithURL](init%28url_%29.md): Creates a data consumer that writes data to a location specified by a URL.
- [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.
