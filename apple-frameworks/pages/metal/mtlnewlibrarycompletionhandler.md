> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlnewlibrarycompletionhandler](https://developer.apple.com/documentation/metal/mtlnewlibrarycompletionhandler)

# MTLNewLibraryCompletionHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a Metal library.

## Declaration

```swift
typealias MTLNewLibraryCompletionHandler = ((any MTLLibrary)?, (any Error)?) -> Void
```

## Parameters

- `library`: An [MTLLibrary](mtllibrary.md) instance if the method successfully compiles the library without any errors; otherwise `nil`.
- `error`: An error instance if the compiler generates any errors; otherwise `nil`.

<a id="discussion"></a>

## Discussion

The framework reports compiler warnings to the console. The `error` parameter doesn’t report warnings because it’s `nil` when there aren’t any compiler errors.

## See Also

### Creating shader libraries

- [makeDefaultLibrary()](mtldevice/makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [makeDefaultLibrary(bundle:)](mtldevice/makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [makeLibrary(URL:)](mtldevice/makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [makeLibrary(source:options:)](mtldevice/makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(source:options:completionHandler:)](mtldevice/makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(stitchedDescriptor:)](mtldevice/makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(stitchedDescriptor:completionHandler:)](mtldevice/makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(data:)](mtldevice/makelibrary%28data_%29-7khmh.md): Creates a Metal library instance that contains the functions in a precompiled Metal library.
- [makeLibrary(data:)](mtldevice/makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [makeLibrary(filepath:)](mtldevice/makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.

# MTLNewLibraryCompletionHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a Metal library.

## Declaration

```objectivec
typedef void (^)(id<MTLLibrary>, NSError *) MTLNewLibraryCompletionHandler;
```

## Parameters

- `library`: An [MTLLibrary](mtllibrary.md) instance if the method successfully compiles the library without any errors; otherwise `nil`.
- `error`: An error instance if the compiler generates any errors; otherwise `nil`.

<a id="discussion"></a>

## Discussion

The framework reports compiler warnings to the console. The `error` parameter doesn’t report warnings because it’s `nil` when there aren’t any compiler errors.

## See Also

### Creating shader libraries

- [newDefaultLibrary](mtldevice/makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [newDefaultLibraryWithBundle:error:](mtldevice/makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [newLibraryWithURL:error:](mtldevice/makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [newLibraryWithSource:options:error:](mtldevice/makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithSource:options:completionHandler:](mtldevice/makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithStitchedDescriptor:error:](mtldevice/makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithStitchedDescriptor:completionHandler:](mtldevice/makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithData:error:](mtldevice/makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [newLibraryWithFile:error:](mtldevice/makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.
