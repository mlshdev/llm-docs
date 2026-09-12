> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovider/init(data:)](https://developer.apple.com/documentation/coregraphics/cgdataprovider/init(data:))

# init(data:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data provider that reads from a CFData object.

## Declaration

```swift
init?(data: CFData)
```

## Parameters

- `data`: The CFData object to read from.

<a id="return-value"></a>

## Return Value

A new data provider. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You can use this function when you need to represent Core Graphics data as a CFData type. For example, you might create a CFData object when reading data from the pasteboard.

## See Also

### Creating Direct-Access Data Providers

- [init(directInfo:size:callbacks:)](init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [init(url:)](init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [init(dataInfo:data:size:releaseData:)](init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [init(filename:)](init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](../cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](../cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [init(dataInfo:data:size:releaseData:)](init%28datainfo_data_size_releasedata_%29.md).

# CGDataProviderCreateWithCFData (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a data provider that reads from a CFData object.

## Declaration

```objectivec
extern CGDataProviderRefCGDataProviderCreateWithCFData(CFDataRef data);
```

## Parameters

- `data`: The CFData object to read from.

<a id="return-value"></a>

## Return Value

A new data provider. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You can use this function when you need to represent Core Graphics data as a CFData type. For example, you might create a CFData object when reading data from the pasteboard.

## See Also

### Creating Direct-Access Data Providers

- [CGDataProviderCreateDirect](init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [CGDataProviderCreateWithURL](init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [CGDataProviderCreateWithData](init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [CGDataProviderCreateWithFilename](init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](../cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](../cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [CGDataProviderCreateWithData](init%28datainfo_data_size_releasedata_%29.md).
