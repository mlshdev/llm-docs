> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataproviderreleaseinfocallback](https://developer.apple.com/documentation/coregraphics/cgdataproviderreleaseinfocallback)

# CGDataProviderReleaseInfoCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that releases any private data or resources associated with the data provider.

## Declaration

```swift
typealias CGDataProviderReleaseInfoCallback = (UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `info`: A generic pointer to private information shared among your callback functions. This is the same pointer you supplied to [init(version:getBytes:skipForward:rewind:releaseInfo:)](cgdataprovidersequentialcallbacks/init%28version_getbytes_skipforward_rewind_releaseinfo_%29.md).

<a id="Discussion"></a>

## Discussion

When Core Graphics frees a data provider that has an associated release function, the release function is called.

For information on how to associate your callback function with a data provider, see [CGDataProvider](cgdataprovider.md) and [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md).

## See Also

### Creating Sequential-Access Data Providers

- [init(sequentialInfo:callbacks:)](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.

# CGDataProviderReleaseInfoCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A callback function that releases any private data or resources associated with the data provider.

## Declaration

```objectivec
typedef void (*)(void *) CGDataProviderReleaseInfoCallback;
```

## Parameters

- `info`: A generic pointer to private information shared among your callback functions. This is the same pointer you supplied to [init(version:getBytes:skipForward:rewind:releaseInfo:)](cgdataprovidersequentialcallbacks/init%28version_getbytes_skipforward_rewind_releaseinfo_%29.md).

<a id="Discussion"></a>

## Discussion

When Core Graphics frees a data provider that has an associated release function, the release function is called.

For information on how to associate your callback function with a data provider, see [CGDataProviderRef](cgdataprovider.md) and [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md).

## See Also

### Creating Sequential-Access Data Providers

- [CGDataProviderCreateSequential](cgdataprovider/init%28sequentialinfo_callbacks_%29.md): Creates a sequential-access data provider.
- [CGDataProviderSequentialCallbacks](cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
