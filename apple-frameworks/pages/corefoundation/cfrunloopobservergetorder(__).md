> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopobservergetorder(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopobservergetorder(_:))

# CFRunLoopObserverGetOrder(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the ordering parameter for a CFRunLoopObserver object.

## Declaration

```swift
func CFRunLoopObserverGetOrder(_ observer: CFRunLoopObserver!) -> CFIndex
```

## Parameters

- `observer`: The run loop observer to examine.

<a id="return-value"></a>

## Return Value

The ordering parameter for `observer`. When multiple observers are scheduled in the same run loop mode and stage, this value determines the order (from small to large) in which the observers are called.

## See Also

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler(\_:\_:\_:\_:\_:)](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate(\_:\_:\_:\_:\_:\_:)](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat(\_:)](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities(\_:)](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext(\_:\_:)](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID()](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverInvalidate(\_:)](cfrunloopobserverinvalidate%28__%29.md): Invalidates a CFRunLoopObserver object, stopping it from ever firing again.
- [CFRunLoopObserverIsValid(\_:)](cfrunloopobserverisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.

# CFRunLoopObserverGetOrder (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the ordering parameter for a CFRunLoopObserver object.

## Declaration

```objectivec
extern CFIndex CFRunLoopObserverGetOrder(CFRunLoopObserverRef observer);
```

## Parameters

- `observer`: The run loop observer to examine.

<a id="return-value"></a>

## Return Value

The ordering parameter for `observer`. When multiple observers are scheduled in the same run loop mode and stage, this value determines the order (from small to large) in which the observers are called.

## See Also

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverInvalidate](cfrunloopobserverinvalidate%28__%29.md): Invalidates a CFRunLoopObserver object, stopping it from ever firing again.
- [CFRunLoopObserverIsValid](cfrunloopobserverisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.
