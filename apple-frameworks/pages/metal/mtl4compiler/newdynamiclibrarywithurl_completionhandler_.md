> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newdynamiclibrarywithurl:completionhandler:](https://developer.apple.com/documentation/metal/mtl4compiler/newdynamiclibrarywithurl:completionhandler:)

# newDynamicLibraryWithURL:completionHandler:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new dynamic library from the contents of a file at an URL location synchronously.

## Declaration

```objectivec
- (id<MTL4CompilerTask>) newDynamicLibraryWithURL:(NSURL *) url completionHandler:(MTLNewDynamicLibraryCompletionHandler) completionHandler;
```

## Parameters

- `url`: An URL referencing a file whose contents this compiler uses to build a dynamic library.
- `completionHandler`: A block Metal calls when it finishes the build task.

<a id="return-value"></a>

## Return Value

A compiler task representing the asynchronous compilation task.
