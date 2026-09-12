> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makelibrary(data:)](https://developer.apple.com/documentation/metal/mtldevice/makelibrary(data:))

# makeLibrary(data:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.

## Declaration

```swift
func makeLibrary(data: dispatch_data_t) throws -> any MTLLibrary
```

## Parameters

- `data`: The data from a precompiled Metal library. For more information, see [Building a shader library by precompiling source files](../building-a-shader-library-by-precompiling-source-files.md).

<a id="return-value"></a>

## Return Value

A new [MTLLibrary](../mtllibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

In Swift, you can also use the [makeLibrary(data:)](makelibrary%28data_%29-7khmh.md) default implementation, which has a [DispatchData](../../dispatch/dispatchdata.md) parameter.

Use either method if your application manages its own archiving system for libraries — for example, if your app uses a single file that contains several libraries.

## Default Implementations

### MTLDevice Implementations

- [makeLibrary(data:)](makelibrary%28data_%29-7khmh.md): Creates a Metal library instance that contains the functions in a precompiled Metal library.

## See Also

### Creating shader libraries

- [makeDefaultLibrary()](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [makeDefaultLibrary(bundle:)](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [makeLibrary(URL:)](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [makeLibrary(source:options:)](makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(source:options:completionHandler:)](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(stitchedDescriptor:)](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(stitchedDescriptor:completionHandler:)](makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(data:)](makelibrary%28data_%29-7khmh.md): Creates a Metal library instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [makeLibrary(filepath:)](makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.

# newLibraryWithData:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.

## Declaration

```objectivec
- (id<MTLLibrary>) newLibraryWithData:(dispatch_data_t) data error:(NSError **) error;
```

## Parameters

- `data`: The data from a precompiled Metal library. For more information, see [Building a shader library by precompiling source files](../building-a-shader-library-by-precompiling-source-files.md).
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLLibrary](../mtllibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

In Swift, you can also use the [makeLibrary(data:)](makelibrary%28data_%29-7khmh.md) default implementation, which has a [DispatchData](../../dispatch/dispatchdata.md) parameter.

Use either method if your application manages its own archiving system for libraries — for example, if your app uses a single file that contains several libraries.

## Default Implementations

### MTLDevice Implementations

- [makeLibrary(data:)](makelibrary%28data_%29-7khmh.md): Creates a Metal library instance that contains the functions in a precompiled Metal library.

## See Also

### Creating shader libraries

- [newDefaultLibrary](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [newDefaultLibraryWithBundle:error:](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [newLibraryWithURL:error:](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [newLibraryWithSource:options:error:](makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithSource:options:completionHandler:](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithStitchedDescriptor:error:](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithStitchedDescriptor:completionHandler:](makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [newLibraryWithFile:error:](makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.
