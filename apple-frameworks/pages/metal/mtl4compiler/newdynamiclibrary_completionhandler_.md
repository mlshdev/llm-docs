> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newdynamiclibrary:completionhandler:](https://developer.apple.com/documentation/metal/mtl4compiler/newdynamiclibrary:completionhandler:)

# newDynamicLibrary:completionHandler:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new dynamic Metal library instance asynchronously.

## Declaration

```objectivec
- (id<MTL4CompilerTask>) newDynamicLibrary:(id<MTLLibrary>) library completionHandler:(MTLNewDynamicLibraryCompletionHandler) completionHandler;
```

## Parameters

- `library`: A library from which this compiler creates the new a dynamic library
- `completionHandler`: A block Metal calls when it finishes the build task.

<a id="return-value"></a>

## Return Value

A compiler task representing the asynchronous compilation task.
