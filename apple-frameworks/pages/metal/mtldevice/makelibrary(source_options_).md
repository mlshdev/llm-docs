> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makelibrary(source:options:)](https://developer.apple.com/documentation/metal/mtldevice/makelibrary(source:options:))

# makeLibrary(source:options:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Synchronously creates a Metal library instance by compiling the functions in a source string.

## Declaration

```swift
func makeLibrary(source: String, options: MTLCompileOptions?) throws -> any MTLLibrary
```

## Parameters

- `source`: A string that contains source code for one or more Metal functions. For information about writing source in Metal Shading Language (MSL), see the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).
- `options`: An [MTLCompileOptions](../mtlcompileoptions.md) instance that affects the compilation of the source code in the string.

<a id="return-value"></a>

## Return Value

A new [MTLLibrary](../mtllibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Minimizing the binary size of a shader library](../minimizing-the-binary-size-of-a-shader-library.md)

<a id="discussion"></a>

## Discussion

Because there’s no search path to find other functions, the source may only import the Metal default library.

## See Also

### Creating shader libraries

- [makeDefaultLibrary()](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [makeDefaultLibrary(bundle:)](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [makeLibrary(URL:)](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [makeLibrary(source:options:completionHandler:)](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [makeLibrary(stitchedDescriptor:)](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(stitchedDescriptor:completionHandler:)](makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [makeLibrary(data:)](makelibrary%28data_%29-7khmh.md): Creates a Metal library instance that contains the functions in a precompiled Metal library.
- [makeLibrary(data:)](makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [makeLibrary(filepath:)](makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.

# newLibraryWithSource:options:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Synchronously creates a Metal library instance by compiling the functions in a source string.

## Declaration

```objectivec
- (id<MTLLibrary>) newLibraryWithSource:(NSString *) source options:(MTLCompileOptions *) options error:(NSError **) error;
```

## Parameters

- `source`: A string that contains source code for one or more Metal functions. For information about writing source in Metal Shading Language (MSL), see the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).
- `options`: An [MTLCompileOptions](../mtlcompileoptions.md) instance that affects the compilation of the source code in the string.
- `error`: On return, if the compiler generates any warnings or errors, a pointer to an error instance that contains the error and warning information; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLLibrary](../mtllibrary.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Minimizing the binary size of a shader library](../minimizing-the-binary-size-of-a-shader-library.md)

<a id="discussion"></a>

## Discussion

Because there’s no search path to find other functions, the source may only import the Metal default library.

## See Also

### Creating shader libraries

- [newDefaultLibrary](makedefaultlibrary%28%29.md): Creates a Metal library instance that contains the functions from your app’s default Metal library.
- [newDefaultLibraryWithBundle:error:](makedefaultlibrary%28bundle_%29.md): Creates a Metal library instance that contains the functions in a bundle’s default Metal library.
- [newLibraryWithURL:error:](makelibrary%28url_%29.md): Creates a Metal library instance that contains the functions in the Metal library file at a URL.
- [newLibraryWithSource:options:completionHandler:](makelibrary%28source_options_completionhandler_%29.md): Asynchronously creates a Metal library instance by compiling the functions in a source string.
- [newLibraryWithStitchedDescriptor:error:](makelibrary%28stitcheddescriptor_%29.md): Synchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithStitchedDescriptor:completionHandler:](makelibrary%28stitcheddescriptor_completionhandler_%29.md): Asynchronously creates a Metal library from the function stitching graphs in a descriptor.
- [newLibraryWithData:error:](makelibrary%28data_%29.md): Creates a Metal library instance from a dispatch-data instance that contains the functions in a precompiled Metal library.
- [MTLNewLibraryCompletionHandler](../mtlnewlibrarycompletionhandler.md): A completion handler signature a method calls when it finishes creating a Metal library.
- [newLibraryWithFile:error:](makelibrary%28filepath_%29.md): Deprecated. Creates a Metal library instance that contains the functions in the Metal library file at a file path.
