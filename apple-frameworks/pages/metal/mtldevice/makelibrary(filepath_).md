> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makelibrary(filepath:)](https://developer.apple.com/documentation/metal/mtldevice/makelibrary(filepath:))

# makeLibrary(filepath:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a Metal library instance that contains the functions in the Metal library file at a file path.

> Use [makeLibrary(URL:)](makelibrary%28url_%29.md) instead.

## Declaration

```swift
func makeLibrary(filepath: String) throws -> any MTLLibrary
```

## Parameters

- `filepath`: A string of the absolute file path to a Metal library file (ending in `.metallib`).

<a id="return-value"></a>

## Return Value

A new [MTLLibrary](../mtllibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

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
- [makeLibrary(data:)](makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.

# newLibraryWithFile:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a Metal library instance that contains the functions in the Metal library file at a file path.

> Use [newLibraryWithURL:error:](makelibrary%28url_%29.md) instead.

## Declaration

```objectivec
- (id<MTLLibrary>) newLibraryWithFile:(NSString *) filepath error:(NSError **) error;
```

## Parameters

- `filepath`: A string of the absolute file path to a Metal library file (ending in `.metallib`).
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLLibrary](../mtllibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## See Also

### Creating shader libraries

- [newDefaultLibrary](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [newDefaultLibraryWithBundle:error:](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [newLibraryWithURL:error:](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [newLibraryWithSource:options:error:](makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithSource:options:completionHandler:](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithStitchedDescriptor:error:](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithStitchedDescriptor:completionHandler:](makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithData:error:](makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
