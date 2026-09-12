> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makedynamiclibrary(url:)](https://developer.apple.com/documentation/metal/mtldevice/makedynamiclibrary(url:))

# makeDynamicLibrary(url:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.

## Declaration

```swift
func makeDynamicLibrary(url: URL) throws -> any MTLDynamicLibrary
```

## Parameters

- `url`: A URL to a Metal library file (ending in `.metallib`).

<a id="return-value"></a>

## Return Value

A new [MTLDynamicLibrary](../mtldynamiclibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Compiling and linking Metal dynamic libraries](../compiling-and-linking-metal-dynamic-libraries.md)

## See Also

### Creating dynamic shader libraries

- [supportsDynamicLibraries](supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [supportsRenderDynamicLibraries](supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [makeDynamicLibrary(library:)](makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [MTLDynamicLibraryError.Code](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.

# newDynamicLibraryWithURL:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.

## Declaration

```objectivec
- (id<MTLDynamicLibrary>) newDynamicLibraryWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: A URL to a Metal library file (ending in `.metallib`).
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLDynamicLibrary](../mtldynamiclibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Compiling and linking Metal dynamic libraries](../compiling-and-linking-metal-dynamic-libraries.md)

## See Also

### Creating dynamic shader libraries

- [supportsDynamicLibraries](supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [supportsRenderDynamicLibraries](supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [newDynamicLibrary:error:](makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [MTLDynamicLibraryError](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.
