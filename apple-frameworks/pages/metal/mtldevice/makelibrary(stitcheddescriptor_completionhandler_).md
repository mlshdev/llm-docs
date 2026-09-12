> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makelibrary(stitcheddescriptor:completionhandler:)](https://developer.apple.com/documentation/metal/mtldevice/makelibrary(stitcheddescriptor:completionhandler:))

# makeLibrary(stitchedDescriptor:completionHandler:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asynchronously creates a Metal library from the function stitching graphs in a descriptor.

## Declaration

```swift
func makeLibrary(stitchedDescriptor descriptor: MTLStitchedLibraryDescriptor, completionHandler: @escaping @Sendable ((any MTLLibrary)?, (any Error)?) -> Void)
```

```swift
func makeLibrary(stitchedDescriptor descriptor: MTLStitchedLibraryDescriptor) async throws -> any MTLLibrary
```

## Parameters

- `descriptor`: An [MTLStitchedLibraryDescriptor](../mtlstitchedlibrarydescriptor.md) instance.
- `completionHandler`: A Swift closure or Objective-C block  the method calls when the library finishes loading.

## See Also

### Creating shader libraries

- [makeDefaultLibrary()](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [makeDefaultLibrary(bundle:)](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [makeLibrary(URL:)](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [makeLibrary(source:options:)](makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(source:options:completionHandler:)](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(stitchedDescriptor:)](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(data:)](makelibrary%28data_%29-7khmh.md): Creates a Metal library instance that contains the functions in a precompiled Metal library.
- [makeLibrary(data:)](makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [makeLibrary(filepath:)](makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.

# newLibraryWithStitchedDescriptor:completionHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Asynchronously creates a Metal library from the function stitching graphs in a descriptor.

## Declaration

```objectivec
- (void) newLibraryWithStitchedDescriptor:(MTLStitchedLibraryDescriptor *) descriptor completionHandler:(MTLNewLibraryCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: An [MTLStitchedLibraryDescriptor](../mtlstitchedlibrarydescriptor.md) instance.
- `completionHandler`: A Swift closure or Objective-C block  the method calls when the library finishes loading.

## See Also

### Creating shader libraries

- [newDefaultLibrary](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [newDefaultLibraryWithBundle:error:](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [newLibraryWithURL:error:](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [newLibraryWithSource:options:error:](makelibrary%28source_options_%29.md): Synchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithSource:options:completionHandler:](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithStitchedDescriptor:error:](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithData:error:](makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [newLibraryWithFile:error:](makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.
