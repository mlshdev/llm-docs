> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/newlibrarywithdescriptor:completionhandler:](https://developer.apple.com/documentation/metal/mtl4compiler/newlibrarywithdescriptor:completionhandler:)

# newLibraryWithDescriptor:completionHandler:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new Metal library instance asynchronously.

## Declaration

```objectivec
- (id<MTL4CompilerTask>) newLibraryWithDescriptor:(MTL4LibraryDescriptor *) descriptor completionHandler:(MTLNewLibraryCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: A description of the library to create.
- `completionHandler`: A block Metal calls when it finishes the build task.

<a id="return-value"></a>

## Return Value

A compiler task representing the asynchronous compilation task.
