> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcesignal(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcesignal(_:))

# CFRunLoopSourceSignal(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Signals a CFRunLoopSource object, marking it as ready to fire.

## Declaration

```swift
func CFRunLoopSourceSignal(_ source: CFRunLoopSource!)
```

## Parameters

- `source`: The run loop source to signal.

<a id="Discussion"></a>

## Discussion

This function has no effect on version 1 sources, which are automatically handled when Mach messages arrive for them. After signaling a version 0 source, you need to call [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md) on one of the run loops in which the source is registered to get the source handled immediately.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext(\_:\_:)](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder(\_:)](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID()](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate(\_:)](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid(\_:)](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.

# CFRunLoopSourceSignal (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Signals a CFRunLoopSource object, marking it as ready to fire.

## Declaration

```objectivec
extern void CFRunLoopSourceSignal(CFRunLoopSourceRef source);
```

## Parameters

- `source`: The run loop source to signal.

<a id="Discussion"></a>

## Discussion

This function has no effect on version 1 sources, which are automatically handled when Mach messages arrive for them. After signaling a version 0 source, you need to call [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md) on one of the run loops in which the source is registered to get the source handled immediately.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
