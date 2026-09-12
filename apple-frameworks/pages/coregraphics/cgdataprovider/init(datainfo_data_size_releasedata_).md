> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovider/init(datainfo:data:size:releasedata:)](https://developer.apple.com/documentation/coregraphics/cgdataprovider/init(datainfo:data:size:releasedata:))

# init(dataInfo:data:size:releaseData:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a direct-access data provider that uses data your program supplies.

## Declaration

```swift
init?(dataInfo info: UnsafeMutableRawPointer?, data: UnsafeRawPointer, size: Int, releaseData: CGDataProviderReleaseDataCallback)
```

## Parameters

- `info`: A pointer to data of any type, or `NULL`. When Core Graphics calls the function specified in the `releaseData` parameter, it sends this pointer as its first argument.
- `data`: A pointer to the array of data that the provider contains.
- `size`: A value that specifies the number of bytes that the data provider contains.
- `releaseData`: A pointer to a release callback for the data provider, or `NULL`. Your release function is called when Core Graphics frees the data provider. For more information, see [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md).

<a id="return-value"></a>

## Return Value

A new data provider. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You use this function to create a direct-access data provider that uses callback functions to read data from your program an entire block at one time.

## See Also

### Creating Direct-Access Data Providers

- [init(directInfo:size:callbacks:)](init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [init(data:)](init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [init(url:)](init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [init(filename:)](init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](../cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](../cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [init(dataInfo:data:size:releaseData:)](init%28datainfo_data_size_releasedata_%29.md).

# CGDataProviderCreateWithData (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a direct-access data provider that uses data your program supplies.

## Declaration

```objectivec
extern CGDataProviderRefCGDataProviderCreateWithData(void *info, const void *data, size_t size, CGDataProviderReleaseDataCallback releaseData);
```

## Parameters

- `info`: A pointer to data of any type, or `NULL`. When Core Graphics calls the function specified in the `releaseData` parameter, it sends this pointer as its first argument.
- `data`: A pointer to the array of data that the provider contains.
- `size`: A value that specifies the number of bytes that the data provider contains.
- `releaseData`: A pointer to a release callback for the data provider, or `NULL`. Your release function is called when Core Graphics frees the data provider. For more information, see [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md).

<a id="return-value"></a>

## Return Value

A new data provider. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You use this function to create a direct-access data provider that uses callback functions to read data from your program an entire block at one time.

## See Also

### Creating Direct-Access Data Providers

- [CGDataProviderCreateDirect](init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [CGDataProviderCreateWithCFData](init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [CGDataProviderCreateWithURL](init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [CGDataProviderCreateWithFilename](init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](../cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](../cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [CGDataProviderCreateWithData](init%28datainfo_data_size_releasedata_%29.md).
