> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovider/init(sequentialinfo:callbacks:)](https://developer.apple.com/documentation/coregraphics/cgdataprovider/init(sequentialinfo:callbacks:))

# init(sequentialInfo:callbacks:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a sequential-access data provider.

## Declaration

```swift
init?(sequentialInfo info: UnsafeMutableRawPointer?, callbacks: UnsafePointer<CGDataProviderSequentialCallbacks>)
```

## Parameters

- `info`: A pointer to data of any type or `NULL`. When Core Graphics calls the functions specified in the `callbacks` parameter, it sends each of the functions this pointer.
- `callbacks`: A pointer to a [CGDataProviderSequentialCallbacks](../cgdataprovidersequentialcallbacks.md) structure that specifies the callback functions you implement to handle the data provider’s basic memory management.

<a id="return-value"></a>

## Return Value

A new data provider. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You use this function to create a sequential-access data provider that uses callback functions to read data from your program in a single block.

## See Also

### Creating Sequential-Access Data Providers

- [CGDataProviderSequentialCallbacks](../cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](../cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](../cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](../cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.

# CGDataProviderCreateSequential (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a sequential-access data provider.

## Declaration

```objectivec
extern CGDataProviderRefCGDataProviderCreateSequential(void *info, const CGDataProviderSequentialCallbacks *callbacks);
```

## Parameters

- `info`: A pointer to data of any type or `NULL`. When Core Graphics calls the functions specified in the `callbacks` parameter, it sends each of the functions this pointer.
- `callbacks`: A pointer to a [CGDataProviderSequentialCallbacks](../cgdataprovidersequentialcallbacks.md) structure that specifies the callback functions you implement to handle the data provider’s basic memory management.

<a id="return-value"></a>

## Return Value

A new data provider. In Objective-C, you’re responsible for releasing this object using [CGDataProviderRelease](../cgdataproviderrelease.md).

<a id="Discussion"></a>

## Discussion

You use this function to create a sequential-access data provider that uses callback functions to read data from your program in a single block.

## See Also

### Creating Sequential-Access Data Providers

- [CGDataProviderSequentialCallbacks](../cgdataprovidersequentialcallbacks.md): Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
- [CGDataProviderRewindCallback](../cgdataproviderrewindcallback.md): A callback function that moves the current position in the data stream back to the beginning.
- [CGDataProviderGetBytesCallback](../cgdataprovidergetbytescallback.md): A callback function that copies from a provider data stream into a Core Graphics buffer.
- [CGDataProviderSkipForwardCallback](../cgdataproviderskipforwardcallback.md): A callback function that advances the current position in the data stream supplied by the provider.
- [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md): A callback function that releases any private data or resources associated with the data provider.
