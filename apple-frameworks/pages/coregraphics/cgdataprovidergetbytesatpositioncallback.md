> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovidergetbytesatpositioncallback](https://developer.apple.com/documentation/coregraphics/cgdataprovidergetbytesatpositioncallback)

# CGDataProviderGetBytesAtPositionCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that copies data from the provider into a Core Graphics buffer.

## Declaration

```swift
typealias CGDataProviderGetBytesAtPositionCallback = (UnsafeMutableRawPointer?, UnsafeMutableRawPointer, off_t, Int) -> Int
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(directInfo:size:callbacks:)](cgdataprovider/init%28directinfo_size_callbacks_%29.md).
- `buffer`: The Core Graphics buffer into which you copy the specified number of bytes.
- `position`: Specifies the relative location in the data provider at which to begin copying data.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied. If no more data can be written to the buffer, you should return 0.

<a id="Discussion"></a>

## Discussion

When Core Graphics is ready to receive data from the provider, your function is called.

## See Also

### Creating Direct-Access Data Providers

- [init(directInfo:size:callbacks:)](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [init(data:)](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [init(url:)](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [init(filename:)](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).

# CGDataProviderGetBytesAtPositionCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that copies data from the provider into a Core Graphics buffer.

## Declaration

```objectivec
typedef unsigned long (*)(void *, void *, long long, unsigned long) CGDataProviderGetBytesAtPositionCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [CGDataProviderCreateDirect](cgdataprovider/init%28directinfo_size_callbacks_%29.md).
- `buffer`: The Core Graphics buffer into which you copy the specified number of bytes.
- `position`: Specifies the relative location in the data provider at which to begin copying data.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied. If no more data can be written to the buffer, you should return 0.

<a id="Discussion"></a>

## Discussion

When Core Graphics is ready to receive data from the provider, your function is called.

## See Also

### Creating Direct-Access Data Providers

- [CGDataProviderCreateDirect](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [CGDataProviderCreateWithCFData](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [CGDataProviderCreateWithURL](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [CGDataProviderCreateWithFilename](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).
