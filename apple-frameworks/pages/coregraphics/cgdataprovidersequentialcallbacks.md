> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovidersequentialcallbacks](https://developer.apple.com/documentation/coregraphics/cgdataprovidersequentialcallbacks)

# CGDataProviderSequentialCallbacks (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.

## Declaration

```swift
struct CGDataProviderSequentialCallbacks
```

<a id="overview"></a>

## Overview

The functions specified by the `CGDataProviderSequentialCallbacks` structure are responsible for sequentially copying data to a memory buffer for Core Graphics to use. The functions are also responsible for handling the data provider’s basic memory management. You supply a `CGDataProviderSequentialCallbacks` structure to the function [init(sequentialInfo:callbacks:)](cgdataprovider/init%28sequentialinfo_callbacks_%29.md) to create a sequential-access data provider.

## Topics

### Initializers

- [init()](cgdataprovidersequentialcallbacks/init%28%29.md)
- [init(version:getBytes:skipForward:rewind:releaseInfo:)](cgdataprovidersequentialcallbacks/init%28version_getbytes_skipforward_rewind_releaseinfo_%29.md)

### Instance Properties

- [getBytes](cgdataprovidersequentialcallbacks/getbytes.md): A pointer to a function that copies data from the provider. For more information, see [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md).
- [releaseInfo](cgdataprovidersequentialcallbacks/releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md).
- [rewind](cgdataprovidersequentialcallbacks/rewind.md): A pointer to a function Core Graphics calls to return the provider to the beginning of the data stream. For more information, see [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md).
- [skipForward](cgdataprovidersequentialcallbacks/skipforward.md): A pointer to a function that Core Graphics calls to advance the stream of data supplied by the provider.
- [version](cgdataprovidersequentialcallbacks/version.md): The version of this structure. It should be set to 0.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating Sequential-Access Data Providers

- [init(sequentialInfo:callbacks:)](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.

# CGDataProviderSequentialCallbacks (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.

## Declaration

```objectivec
struct CGDataProviderSequentialCallbacks;
```

<a id="overview"></a>

## Overview

The functions specified by the `CGDataProviderSequentialCallbacks` structure are responsible for sequentially copying data to a memory buffer for Core Graphics to use. The functions are also responsible for handling the data provider’s basic memory management. You supply a `CGDataProviderSequentialCallbacks` structure to the function [CGDataProviderCreateSequential](cgdataprovider/init%28sequentialinfo_callbacks_%29.md) to create a sequential-access data provider.

## Topics

### Instance Properties

- [getBytes](cgdataprovidersequentialcallbacks/getbytes.md): A pointer to a function that copies data from the provider. For more information, see [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md).
- [releaseInfo](cgdataprovidersequentialcallbacks/releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md).
- [rewind](cgdataprovidersequentialcallbacks/rewind.md): A pointer to a function Core Graphics calls to return the provider to the beginning of the data stream. For more information, see [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md).
- [skipForward](cgdataprovidersequentialcallbacks/skipforward.md): A pointer to a function that Core Graphics calls to advance the stream of data supplied by the provider.
- [version](cgdataprovidersequentialcallbacks/version.md): The version of this structure. It should be set to 0.

## See Also

### Creating Sequential-Access Data Providers

- [CGDataProviderCreateSequential](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
