> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopobserverinvalidate(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopobserverinvalidate(_:))

# CFRunLoopObserverInvalidate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFRunLoopObserver object, stopping it from ever firing again.

## Declaration

```swift
func CFRunLoopObserverInvalidate(_ observer: CFRunLoopObserver!)
```

## Parameters

- `observer`: The run loop observer to invalidate.

<a id="Discussion"></a>

## Discussion

Once invalidated, `observer` will never fire and call its callback function again. This function automatically removes `observer` from all run loop modes in which it had been added. The memory is not deallocated unless the run loop held the only reference to `observer`.

## See Also

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler(\_:\_:\_:\_:\_:)](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate(\_:\_:\_:\_:\_:\_:)](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat(\_:)](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities(\_:)](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext(\_:\_:)](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetOrder(\_:)](cfrunloopobservergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID()](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverIsValid(\_:)](cfrunloopobserverisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.

# CFRunLoopObserverInvalidate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invalidates a CFRunLoopObserver object, stopping it from ever firing again.

## Declaration

```objectivec
extern void CFRunLoopObserverInvalidate(CFRunLoopObserverRef observer);
```

## Parameters

- `observer`: The run loop observer to invalidate.

<a id="Discussion"></a>

## Discussion

Once invalidated, `observer` will never fire and call its callback function again. This function automatically removes `observer` from all run loop modes in which it had been added. The memory is not deallocated unless the run loop held the only reference to `observer`.

## See Also

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetOrder](cfrunloopobservergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverIsValid](cfrunloopobserverisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.
