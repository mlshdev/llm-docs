> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/detachdrawingthread(_:totarget:with:)](https://developer.apple.com/documentation/appkit/nsapplication/detachdrawingthread(_:totarget:with:))

# detachDrawingThread(\_:toTarget:with:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and executes a new thread based on the specified target and selector.

## Declaration

```swift
class func detachDrawingThread(_ selector: Selector, toTarget target: Any, with argument: Any?)
```

## Parameters

- `selector`: The selector whose code you want to execute in the new thread.
- `target`: The object that defines the specified selector.
- `argument`: An optional argument you want to pass to the selector.

<a id="Discussion"></a>

## Discussion

This method is a convenience wrapper for the [detachNewThreadSelector(\_:toTarget:with:)](https://developer.apple.com/documentation/foundation/thread/detachnewthreadselector%28_:totarget:with:%29) method of [Thread](https://developer.apple.com/documentation/foundation/thread). This method automatically creates an `@autoreleasepool` block for the new thread before invoking `selector`.

# detachDrawingThread:toTarget:withObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and executes a new thread based on the specified target and selector.

## Declaration

```objectivec
+ (void) detachDrawingThread:(SEL) selector toTarget:(id) target withObject:(id) argument;
```

## Parameters

- `selector`: The selector whose code you want to execute in the new thread.
- `target`: The object that defines the specified selector.
- `argument`: An optional argument you want to pass to the selector.

<a id="Discussion"></a>

## Discussion

This method is a convenience wrapper for the [detachNewThreadSelector:toTarget:withObject:](https://developer.apple.com/documentation/foundation/thread/detachnewthreadselector%28_:totarget:with:%29) method of [NSThread](https://developer.apple.com/documentation/foundation/thread). This method automatically creates an `@autoreleasepool` block for the new thread before invoking `selector`.
