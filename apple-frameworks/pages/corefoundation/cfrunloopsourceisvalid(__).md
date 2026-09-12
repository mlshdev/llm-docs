> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopsourceisvalid(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopsourceisvalid(_:))

# CFRunLoopSourceIsValid(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.

## Declaration

```swift
func CFRunLoopSourceIsValid(_ source: CFRunLoopSource!) -> Bool
```

## Parameters

- `source`: The run loop source to examine.

<a id="return-value"></a>

## Return Value

`true` if `source` is valid, otherwise `false`.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate(\_:\_:\_:)](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext(\_:\_:)](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder(\_:)](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID()](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate(\_:)](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceSignal(\_:)](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.

# CFRunLoopSourceIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFRunLoopSource object is valid and able to fire.

## Declaration

```objectivec
extern Boolean CFRunLoopSourceIsValid(CFRunLoopSourceRef source);
```

## Parameters

- `source`: The run loop source to examine.

<a id="return-value"></a>

## Return Value

`true` if `source` is valid, otherwise `false`.

## See Also

### CFRunLoopSource Miscellaneous Functions

- [CFRunLoopSourceCreate](cfrunloopsourcecreate%28______%29.md): Creates a CFRunLoopSource object.
- [CFRunLoopSourceGetContext](cfrunloopsourcegetcontext%28____%29.md): Returns the context information for a CFRunLoopSource object.
- [CFRunLoopSourceGetOrder](cfrunloopsourcegetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopSource object.
- [CFRunLoopSourceGetTypeID](cfrunloopsourcegettypeid%28%29.md): Returns the type identifier of the CFRunLoopSource opaque type.
- [CFRunLoopSourceInvalidate](cfrunloopsourceinvalidate%28__%29.md): Invalidates a CFRunLoopSource object, stopping it from ever firing again.
- [CFRunLoopSourceSignal](cfrunloopsourcesignal%28__%29.md): Signals a CFRunLoopSource object, marking it as ready to fire.
