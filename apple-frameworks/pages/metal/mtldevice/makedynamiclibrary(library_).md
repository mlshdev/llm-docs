> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makedynamiclibrary(library:)](https://developer.apple.com/documentation/metal/mtldevice/makedynamiclibrary(library:))

# makeDynamicLibrary(library:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Metal dynamic library instance from a Metal library instance.

## Declaration

```swift
func makeDynamicLibrary(library: any MTLLibrary) throws -> any MTLDynamicLibrary
```

## Parameters

- `library`: An [MTLLibrary](../mtllibrary.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLDynamicLibrary](../mtldynamiclibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating dynamic shader libraries

- [supportsDynamicLibraries](supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [supportsRenderDynamicLibraries](supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [makeDynamicLibrary(url:)](makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError.Code](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.

# newDynamicLibrary:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a Metal dynamic library instance from a Metal library instance.

## Declaration

```objectivec
- (id<MTLDynamicLibrary>) newDynamicLibrary:(id<MTLLibrary>) library error:(NSError **) error;
```

## Parameters

- `library`: An [MTLLibrary](../mtllibrary.md) instance.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLDynamicLibrary](../mtldynamiclibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating dynamic shader libraries

- [supportsDynamicLibraries](supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [supportsRenderDynamicLibraries](supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [newDynamicLibraryWithURL:error:](makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.
