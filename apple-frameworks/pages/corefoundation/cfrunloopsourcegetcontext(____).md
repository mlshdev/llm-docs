> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcegetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcegetcontext(_:_:))

# CFRunLoopSourceGetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFRunLoopSource object.

## Declaration

```swift
func CFRunLoopSourceGetContext(_ source: CFRunLoopSource!, _ context: UnsafeMutablePointer<CFRunLoopSourceContext>!)
```

## Parameters

- `source`: The run loop source to examine.
- `context`: A pointer to the structure into which the context information for `source` is to be copied. The information being returned is the same information passed to [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md) when creating `source`.

<a id="Discussion"></a>

## Discussion

Run loop sources come in two versions with different-sized context structures. `context` must point to the correct version of the structure for `source`. Before calling this function, you need to initialize the `version` member of `context` with the version number (either 0 or 1) of `source`.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder(\_:)](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID()](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate(\_:)](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid(\_:)](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal(\_:)](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.

# CFRunLoopSourceGetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFRunLoopSource object.

## Declaration

```objectivec
extern void CFRunLoopSourceGetContext(CFRunLoopSourceRef source, CFRunLoopSourceContext *context);
```

## Parameters

- `source`: The run loop source to examine.
- `context`: A pointer to the structure into which the context information for `source` is to be copied. The information being returned is the same information passed to [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md) when creating `source`.

<a id="Discussion"></a>

## Discussion

Run loop sources come in two versions with different-sized context structures. `context` must point to the correct version of the structure for `source`. Before calling this function, you need to initialize the `version` member of `context` with the version number (either 0 or 1) of `source`.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.
