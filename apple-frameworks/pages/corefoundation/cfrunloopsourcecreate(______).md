> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcecreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecreate(_:_:_:))

# CFRunLoopSourceCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object.

## Declaration

```swift
func CFRunLoopSourceCreate(_ allocator: CFAllocator!, _ order: CFIndex, _ context: UnsafeMutablePointer<CFRunLoopSourceContext>!) -> CFRunLoopSource!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `order`: A priority index indicating the order in which run loop sources are processed. When multiple run loop sources are firing in a single pass through the run loop, the sources are processed in increasing order of this parameter. If the run loop is set to process only one source per loop, only the highest priority source, the one with the lowest `order` value, is processed. This value is ignored for version 1 sources. Pass 0 unless there is a reason to do otherwise.
- `context`: A structure holding contextual information for the run loop source. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceGetContext(\_:\_:)](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder(\_:)](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID()](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate(\_:)](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid(\_:)](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal(\_:)](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.

# CFRunLoopSourceCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFRunLoopSource object.

## Declaration

```objectivec
extern CFRunLoopSourceRefCFRunLoopSourceCreate(CFAllocatorRef allocator, CFIndex order, CFRunLoopSourceContext *context);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `order`: A priority index indicating the order in which run loop sources are processed. When multiple run loop sources are firing in a single pass through the run loop, the sources are processed in increasing order of this parameter. If the run loop is set to process only one source per loop, only the highest priority source, the one with the lowest `order` value, is processed. This value is ignored for version 1 sources. Pass 0 unless there is a reason to do otherwise.
- `context`: A structure holding contextual information for the run loop source. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call.

<a id="return-value"></a>

## Return Value

The new CFRunLoopSource object. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

The run loop source is not automatically added to a run loop. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceGetContext](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.
