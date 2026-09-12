> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportsdynamiclibraries](https://developer.apple.com/documentation/metal/mtldevice/supportsdynamiclibraries)

# supportsDynamicLibraries (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.

## Declaration

```swift
var supportsDynamicLibraries: Bool { get }
```

## See Also

### Creating dynamic shader libraries

- [supportsRenderDynamicLibraries](supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [makeDynamicLibrary(library:)](makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [makeDynamicLibrary(url:)](makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError.Code](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.

# supportsDynamicLibraries (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the GPU device can create and use dynamic libraries in compute pipelines.

## Declaration

```objectivec
@property (readonly) BOOL supportsDynamicLibraries;
```

## See Also

### Creating dynamic shader libraries

- [supportsRenderDynamicLibraries](supportsrenderdynamiclibraries.md): A Boolean value that indicates whether the GPU device can create and use dynamic libraries in render pipelines.
- [newDynamicLibrary:error:](makedynamiclibrary%28library_%29.md): Creates a Metal dynamic library instance from a Metal library instance.
- [newDynamicLibraryWithURL:error:](makedynamiclibrary%28url_%29.md): Creates a Metal dynamic library instance that contains the functions in the Metal library file at a URL.
- [MTLDynamicLibraryError](../mtldynamiclibraryerror-swift.struct/code.md): Error codes that Metal can generate when creating dynamic libraries.
- [MTLDynamicLibraryDomain](../mtldynamiclibrarydomain.md): The domain for Metal dynamic library errors.
