> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makelibrary(data:)-7khmh](https://developer.apple.com/documentation/metal/mtldevice/makelibrary(data:)-7khmh)

# makeLibrary(data:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Creates a Metal library instance that contains the functions in a precompiled Metal library.

## Declaration

```swift
func makeLibrary(data: DispatchData) throws -> any MTLLibrary
```

## Parameters

- `data`: The data from a precompiled Metal library. For more information, see [Building a shader library by precompiling source files](../building-a-shader-library-by-precompiling-source-files.md).

<a id="return-value"></a>

## Return Value

A new [MTLLibrary](../mtllibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

Use this method if your application manages its own archiving system for libraries — for example, if your app uses a single file that contains several libraries.

> **Note**

>  This is a Swift default implementation for the [makeLibrary(data:)](makelibrary%28data_%29.md) method.

## See Also

### Creating shader libraries

- [makeDefaultLibrary()](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [makeDefaultLibrary(bundle:)](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [makeLibrary(URL:)](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [makeLibrary(source:options:)](makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(source:options:completionHandler:)](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(stitchedDescriptor:)](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(stitchedDescriptor:completionHandler:)](makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(data:)](makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [makeLibrary(filepath:)](makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.
