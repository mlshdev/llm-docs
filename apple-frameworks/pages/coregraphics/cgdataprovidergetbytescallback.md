> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovidergetbytescallback](https://developer.apple.com/documentation/coregraphics/cgdataprovidergetbytescallback)

# CGDataProviderGetBytesCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that copies from a provider data stream into a Core Graphics buffer.

## Declaration

```swift
typealias CGDataProviderGetBytesCallback = (UnsafeMutableRawPointer?, UnsafeMutableRawPointer, Int) -> Int
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(version:getBytes:skipForward:rewind:releaseInfo:)](cgdataprovidersequentialcallbacks/init%28version_getbytes_skipforward_rewind_releaseinfo_%29.md).
- `buffer`: The Core Graphics buffer into which you copy the specified number of bytes.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied. If no more data can be written to the buffer, you should return `0`.

<a id="Discussion"></a>

## Discussion

When Core Graphics is ready to receive data from the provider data stream, your function is called. It should copy the specified number of bytes into `buffer`.

For information on how to associate your callback function with a data provider, see [CGDataProvider](cgdataprovider.md) and [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md).

## See Also

### Creating Sequential-Access Data Providers

- [init(sequentialInfo:callbacks:)](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.

# CGDataProviderGetBytesCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that copies from a provider data stream into a Core Graphics buffer.

## Declaration

```objectivec
typedef unsigned long (*)(void *, void *, unsigned long) CGDataProviderGetBytesCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(version:getBytes:skipForward:rewind:releaseInfo:)](cgdataprovidersequentialcallbacks/init%28version_getbytes_skipforward_rewind_releaseinfo_%29.md).
- `buffer`: The Core Graphics buffer into which you copy the specified number of bytes.
- `count`: The number of bytes to copy.

<a id="return-value"></a>

## Return Value

The number of bytes copied. If no more data can be written to the buffer, you should return `0`.

<a id="Discussion"></a>

## Discussion

When Core Graphics is ready to receive data from the provider data stream, your function is called. It should copy the specified number of bytes into `buffer`.

For information on how to associate your callback function with a data provider, see [CGDataProviderRef](cgdataprovider.md) and [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md).

## See Also

### Creating Sequential-Access Data Providers

- [CGDataProviderCreateSequential](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
