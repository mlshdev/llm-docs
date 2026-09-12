> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumer/init(url:)](https://developer.apple.com/documentation/coregraphics/cgdataconsumer/init(url:))

# init(url:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data consumer that writes data to a location specified by a URL.

## Declaration

```swift
init?(url: CFURL)
```

## Parameters

- `url`: A CFURL object that specifies the data destination.

<a id="return-value"></a>

## Return Value

A new data consumer object. In Objective-C, you’re responsible for releasing this object using [CGDataConsumerRelease](../cgdataconsumerrelease.md).

## See Also

### Creating Data Consumers

- [init(info:cbks:)](init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [init(data:)](init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.

# CGDataConsumerCreateWithURL (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data consumer that writes data to a location specified by a URL.

## Declaration

```objectivec
extern CGDataConsumerRefCGDataConsumerCreateWithURL(CFURLRef url);
```

## Parameters

- `url`: A CFURL object that specifies the data destination.

<a id="return-value"></a>

## Return Value

A new data consumer object. In Objective-C, you’re responsible for releasing this object using [CGDataConsumerRelease](../cgdataconsumerrelease.md).

## See Also

### Creating Data Consumers

- [CGDataConsumerCreate](init%28info_cbks_%29.md): Creates a data consumer that uses callback functions to write data.
- [CGDataConsumerCreateWithCFData](init%28data_%29.md): Creates a data consumer that writes to a CFData object.
- [CGDataConsumerCallbacks](../cgdataconsumercallbacks.md): A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
- [CGDataConsumerPutBytesCallback](../cgdataconsumerputbytescallback.md): Copies data from a Core Graphics-supplied buffer into a data consumer.
- [CGDataConsumerReleaseInfoCallback](../cgdataconsumerreleaseinfocallback.md): Releases any private data or resources associated with the data consumer.
