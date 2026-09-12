> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovider/init(url:)](https://developer.apple.com/documentation/coregraphics/cgdataprovider/init(url:))

# init(url:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a direct-access data provider that uses a URL to supply data.

## Declaration

```swift
init?(url: CFURL)
```

## Parameters

- `url`: A CFURL object for the URL that you want to read the data from.

<a id="return-value"></a>

## Return Value

A new data provider or `NULL` if the data from the URL could not be accessed. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You use this function to create a direct-access data provider that supplies data from a URL. When you supply Core Graphics with a direct-access data provider, Core Graphics obtains data from your program in a single entire block.

## See Also

### Creating Direct-Access Data Providers

- [init(directInfo:size:callbacks:)](init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [init(data:)](init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [init(dataInfo:data:size:releaseData:)](init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [init(filename:)](init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](../cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](../cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [init(dataInfo:data:size:releaseData:)](init%28datainfo_data_size_releasedata_%29.md).

# CGDataProviderCreateWithURL (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a direct-access data provider that uses a URL to supply data.

## Declaration

```objectivec
extern CGDataProviderRefCGDataProviderCreateWithURL(CFURLRef url);
```

## Parameters

- `url`: A CFURL object for the URL that you want to read the data from.

<a id="return-value"></a>

## Return Value

A new data provider or `NULL` if the data from the URL could not be accessed. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You use this function to create a direct-access data provider that supplies data from a URL. When you supply Core Graphics with a direct-access data provider, Core Graphics obtains data from your program in a single entire block.

## See Also

### Creating Direct-Access Data Providers

- [CGDataProviderCreateDirect](init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [CGDataProviderCreateWithCFData](init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [CGDataProviderCreateWithData](init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [CGDataProviderCreateWithFilename](init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](../cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](../cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](../cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [CGDataProviderCreateWithData](init%28datainfo_data_size_releasedata_%29.md).
