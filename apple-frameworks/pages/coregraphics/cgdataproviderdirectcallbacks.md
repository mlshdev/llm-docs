> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataproviderdirectcallbacks](https://developer.apple.com/documentation/coregraphics/cgdataproviderdirectcallbacks)

# CGDataProviderDirectCallbacks (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.

## Declaration

```swift
struct CGDataProviderDirectCallbacks
```

<a id="overview"></a>

## Overview

You supply a [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md) structure to the function [init(directInfo:size:callbacks:)](cgdataprovider/init%28directinfo_size_callbacks_%29.md) to create a data provider for direct access. The functions specified by the [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md) structure are responsible for copying data a block at a time to a memory buffer for Core Graphics to use. The functions are also responsible for handling the data provider’s basic memory management. For the callback to work, one of the `getBytePointer` and `getBytesAtPosition` parameters must be non-`NULL`. If both are non-`NULL`, then `getBytePointer` is used to access the data.

## Topics

### Initializers

- [init()](cgdataproviderdirectcallbacks/init%28%29.md)
- [init(version:getBytePointer:releaseBytePointer:getBytesAtPosition:releaseInfo:)](cgdataproviderdirectcallbacks/init%28version_getbytepointer_releasebytepointer_getbytesatposition_releaseinfo_%29.md)

### Instance Properties

- [getBytePointer](cgdataproviderdirectcallbacks/getbytepointer.md): A pointer to a function that returns a pointer to the provider’s data. For more information, see [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [getBytesAtPosition](cgdataproviderdirectcallbacks/getbytesatposition.md): A pointer to a function that copies data from the provider.
- [releaseBytePointer](cgdataproviderdirectcallbacks/releasebytepointer.md): A pointer to a function that Core Graphics calls to release a pointer to the provider’s data. For more information, see [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md).
- [releaseInfo](cgdataproviderdirectcallbacks/releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md).
- [version](cgdataproviderdirectcallbacks/version.md): The version of this structure. It should be set to 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating Direct-Access Data Providers

- [init(directInfo:size:callbacks:)](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [init(data:)](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [init(url:)](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [init(filename:)](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [init(dataInfo:data:size:releaseData:)](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).

# CGDataProviderDirectCallbacks (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.

## Declaration

```objectivec
struct CGDataProviderDirectCallbacks;
```

<a id="overview"></a>

## Overview

You supply a [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md) structure to the function [CGDataProviderCreateDirect](cgdataprovider/init%28directinfo_size_callbacks_%29.md) to create a data provider for direct access. The functions specified by the [CGDataProviderDirectCallbacks](cgdataproviderdirectcallbacks.md) structure are responsible for copying data a block at a time to a memory buffer for Core Graphics to use. The functions are also responsible for handling the data provider’s basic memory management. For the callback to work, one of the `getBytePointer` and `getBytesAtPosition` parameters must be non-`NULL`. If both are non-`NULL`, then `getBytePointer` is used to access the data.

## Topics

### Instance Properties

- [getBytePointer](cgdataproviderdirectcallbacks/getbytepointer.md): A pointer to a function that returns a pointer to the provider’s data. For more information, see [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [getBytesAtPosition](cgdataproviderdirectcallbacks/getbytesatposition.md): A pointer to a function that copies data from the provider.
- [releaseBytePointer](cgdataproviderdirectcallbacks/releasebytepointer.md): A pointer to a function that Core Graphics calls to release a pointer to the provider’s data. For more information, see [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md).
- [releaseInfo](cgdataproviderdirectcallbacks/releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md).
- [version](cgdataproviderdirectcallbacks/version.md): The version of this structure. It should be set to 0.

## See Also

### Creating Direct-Access Data Providers

- [CGDataProviderCreateDirect](cgdataprovider/init%28directinfo_size_callbacks_%29.md): Creates a direct-access data provider.
- [CGDataProviderCreateWithCFData](cgdataprovider/init%28data_%29.md): Creates a data provider that reads from a CFData object.
- [CGDataProviderCreateWithURL](cgdataprovider/init%28url_%29.md): Creates a direct-access data provider that uses a URL to supply data.
- [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md): Creates a direct-access data provider that uses data your program supplies.
- [CGDataProviderCreateWithFilename](cgdataprovider/init%28filename_%29.md): Creates a direct-access data provider that uses a file to supply data.
- [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md): A callback function that returns a generic pointer to the provider data.
- [CGDataProviderGetBytesAtPositionCallback](cgdataprovidergetbytesatpositioncallback.md): A callback function that copies data from the provider into a Core Graphics buffer.
- [CGDataProviderReleaseBytePointerCallback](cgdataproviderreleasebytepointercallback.md): A callback function that releases the pointer Core Graphics obtained by calling [CGDataProviderGetBytePointerCallback](cgdataprovidergetbytepointercallback.md).
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
- [CGDataProviderReleaseDataCallback](cgdataproviderreleasedatacallback.md): A callback function that releases data you supply to the function [CGDataProviderCreateWithData](cgdataprovider/init%28datainfo_data_size_releasedata_%29.md).
