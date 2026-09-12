> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourceinvalidate(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopsourceinvalidate(_:))

# CFRunLoopSourceInvalidate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFRunLoopSource object, stopping it from ever firing again.

## Declaration

```swift
func CFRunLoopSourceInvalidate(_ source: CFRunLoopSource!)
```

## Parameters

- `source`: The run loop source to invalidate.

<a id="Discussion"></a>

## Discussion

Once invalidated, `source` will never fire and call its perform callback function again. This function automatically removes `source` from all the run loop modes in which it was registered. If `source` is a version 0 source, this function calls its `cancel` callback function as it is removed from each run loop mode. The memory for `source` is not deallocated unless the run loop held the only reference to `source`.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext(\_:\_:)](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder(\_:)](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID()](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceIsValid(\_:)](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal(\_:)](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.

# CFRunLoopSourceInvalidate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFRunLoopSource object, stopping it from ever firing again.

## Declaration

```objectivec
extern void CFRunLoopSourceInvalidate(CFRunLoopSourceRef source);
```

## Parameters

- `source`: The run loop source to invalidate.

<a id="Discussion"></a>

## Discussion

Once invalidated, `source` will never fire and call its perform callback function again. This function automatically removes `source` from all the run loop modes in which it was registered. If `source` is a version 0 source, this function calls its `cancel` callback function as it is removed from each run loop mode. The memory for `source` is not deallocated unless the run loop held the only reference to `source`.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceIsValid](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.
