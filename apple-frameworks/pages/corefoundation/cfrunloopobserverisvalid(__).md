> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopobserverisvalid(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopobserverisvalid(_:))

# CFRunLoopObserverIsValid(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.

## Declaration

```swift
func CFRunLoopObserverIsValid(_ observer: CFRunLoopObserver!) -> Bool
```

## Parameters

- `observer`: The run loop observer to examine.

<a id="return-value"></a>

## Return Value

`true` if `observer` is valid, otherwise `false`.

<a id="Discussion"></a>

## Discussion

A nonrepeating observer is automatically invalidated after it is called once.

## See Also

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler(\_:\_:\_:\_:\_:)](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate(\_:\_:\_:\_:\_:\_:)](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat(\_:)](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities(\_:)](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext(\_:\_:)](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetOrder(\_:)](cfrunloopobservergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID()](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverInvalidate(\_:)](cfrunloopobserverinvalidate%28__%29.md): Invalidates a CFRunLoopObserver object, stopping it from ever firing again.

# CFRunLoopObserverIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFRunLoopObserver object is valid and able to fire.

## Declaration

```objectivec
extern Boolean CFRunLoopObserverIsValid(CFRunLoopObserverRef observer);
```

## Parameters

- `observer`: The run loop observer to examine.

<a id="return-value"></a>

## Return Value

`true` if `observer` is valid, otherwise `false`.

<a id="Discussion"></a>

## Discussion

A nonrepeating observer is automatically invalidated after it is called once.

## See Also

### CFRunLoopObserver Miscellaneous Functions

- [CFRunLoopObserverCreateWithHandler](cfrunloopobservercreatewithhandler%28__________%29.md): Creates a CFRunLoopObserver object with a block-based handler.
- [CFRunLoopObserverCreate](cfrunloopobservercreate%28____________%29.md): Creates a CFRunLoopObserver object with a function callback.
- [CFRunLoopObserverDoesRepeat](cfrunloopobserverdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopObserver repeats.
- [CFRunLoopObserverGetActivities](cfrunloopobservergetactivities%28__%29.md): Returns the run loop stages during which an observer runs.
- [CFRunLoopObserverGetContext](cfrunloopobservergetcontext%28____%29.md): Returns the context information for a CFRunLoopObserver object.
- [CFRunLoopObserverGetOrder](cfrunloopobservergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopObserver object.
- [CFRunLoopObserverGetTypeID](cfrunloopobservergettypeid%28%29.md): Returns the type identifier for the CFRunLoopObserver opaque type.
- [CFRunLoopObserverInvalidate](cfrunloopobserverinvalidate%28__%29.md): Invalidates a CFRunLoopObserver object, stopping it from ever firing again.
