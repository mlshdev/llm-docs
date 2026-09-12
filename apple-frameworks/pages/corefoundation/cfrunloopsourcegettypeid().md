> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourcegettypeid()](https://developer.apple.com/documentation/corefoundation/cfrunloopsourcegettypeid())

# CFRunLoopSourceGetTypeID() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier of the CFRunLoopSource opaque type.

## Declaration

```swift
func CFRunLoopSourceGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFRunLoopSource opaque type.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext(\_:\_:)](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder(\_:)](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceInvalidate(\_:)](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid(\_:)](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal(\_:)](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.

# CFRunLoopSourceGetTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type identifier of the CFRunLoopSource opaque type.

## Declaration

```objectivec
extern CFTypeID CFRunLoopSourceGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for the CFRunLoopSource opaque type.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceInvalidate](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceIsValid](cfrunloopsourceisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.
- [CFRunLoopSourceSignal](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.
