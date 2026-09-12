> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataproviderskipforwardcallback](https://developer.apple.com/documentation/coregraphics/cgdataproviderskipforwardcallback)

# CGDataProviderSkipForwardCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that advances the current position in the data stream supplied by the provider.

## Declaration

```swift
typealias CGDataProviderSkipForwardCallback = (UnsafeMutableRawPointer?, off_t) -> off_t
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(version:getBytes:skipForward:rewind:releaseInfo:)](cgdataprovidersequentialcallbacks/init%28version_getbytes_skipforward_rewind_releaseinfo_%29.md).
- `count`: The number of bytes to skip.

<a id="return-value"></a>

## Return Value

The number of bytes that were actually skipped.

<a id="Discussion"></a>

## Discussion

When Core Graphics needs to advance forward in the provider’s data stream, your function is called.

## See Also

### Creating Sequential-Access Data Providers

- [init(sequentialInfo:callbacks:)](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.

# CGDataProviderSkipForwardCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that advances the current position in the data stream supplied by the provider.

## Declaration

```objectivec
typedef long long (*)(void *, long long) CGDataProviderSkipForwardCallback;
```

## Parameters

- `info`: A generic pointer to private data shared among your callback functions. This is the same pointer you supplied to [init(version:getBytes:skipForward:rewind:releaseInfo:)](cgdataprovidersequentialcallbacks/init%28version_getbytes_skipforward_rewind_releaseinfo_%29.md).
- `count`: The number of bytes to skip.

<a id="return-value"></a>

## Return Value

The number of bytes that were actually skipped.

<a id="Discussion"></a>

## Discussion

When Core Graphics needs to advance forward in the provider’s data stream, your function is called.

## See Also

### Creating Sequential-Access Data Providers

- [CGDataProviderCreateSequential](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderReleaseInfoCallback](cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
