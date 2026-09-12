> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovidergetbytepointercallback](https://developer.apple.com/documentation/coregraphics/cgdataprovidergetbytepointercallback)

# CGDataProviderGetBytePointerCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that returns a generic pointer to the provider data.

## Declaration

```swift
typealias CGDataProviderGetBytePointerCallback = (UnsafeMutableRawPointer?) -> UnsafeRawPointer?
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to `CGDataProviderCreateDirectAccess`.

<a id="return-value"></a>

## Return Value

A generic pointer to your provider data. By suppling this pointer, you are giving Core Graphics read-only access to both the pointer and the underlying provider data. You must not move or modify the provider data until Core Graphics calls your [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md) function.

<a id="Discussion"></a>

## Discussion

When Core Graphics needs direct access to your provider data, this function is called.

For information on how to associate your function with a direct-access data provider, see `CGDataProviderCreateDirectAccess` and `CGDataProviderDirectAccessCallbacks`.

## See Also

### Creating Direct-Access Data Providers

- [init(directInfo:size:callbacks:)](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [init(data:)](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [init(url:)](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [init(filename:)](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytesAtPositionCallback](cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).

# CGDataProviderGetBytePointerCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that returns a generic pointer to the provider data.

## Declaration

```objectivec
typedef const void *(*)(void *) CGDataProviderGetBytePointerCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to `CGDataProviderCreateDirectAccess`.

<a id="return-value"></a>

## Return Value

A generic pointer to your provider data. By suppling this pointer, you are giving Core Graphics read-only access to both the pointer and the underlying provider data. You must not move or modify the provider data until Core Graphics calls your [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md) function.

<a id="Discussion"></a>

## Discussion

When Core Graphics needs direct access to your provider data, this function is called.

For information on how to associate your function with a direct-access data provider, see `CGDataProviderCreateDirectAccess` and `CGDataProviderDirectAccessCallbacks`.

## See Also

### Creating Direct-Access Data Providers

- [CGDataProviderCreateDirect](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [CGDataProviderCreateWithCFData](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [CGDataProviderCreateWithURL](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [CGDataProviderCreateWithFilename](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md): Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
- [CGDataProviderGetBytesAtPositionCallback](cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).
