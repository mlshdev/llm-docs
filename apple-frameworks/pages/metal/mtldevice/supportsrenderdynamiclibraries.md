> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsrenderdynamiclibraries](https://developer.apple.com/documentation/metal/mtldevice/supportsrenderdynamiclibraries)

# supportsRenderDynamicLibraries (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.

## Declaration

```swift
var supportsRenderDynamicLibraries: Bool { get }
```

## See Also

### Creating dynamic shader libraries

- [supportsDynamicLibraries](supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [makeDynamicLibrary(library:)](makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [makeDynamicLibrary(url:)](makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError.Code](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.

# supportsRenderDynamicLibraries (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.

## Declaration

```objectivec
@property (readonly) BOOL supportsRenderDynamicLibraries;
```

## See Also

### Creating dynamic shader libraries

- [supportsDynamicLibraries](supportsdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.
- [newDynamicLibrary:error:](makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [newDynamicLibraryWithURL:error:](makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.
