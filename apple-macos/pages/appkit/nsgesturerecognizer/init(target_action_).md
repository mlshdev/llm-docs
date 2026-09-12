> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/init(target:action:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/init(target:action:))

# init(target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Initializes the gesture recognizer with the specified target and action information.

## Declaration

```swift
init(target: Any?, action: Selector?)
```

## Parameters

- `target`: The object whose action method is called when the gesture is recognized. You must not specify `nil` for this parameter.
- `action`: A selector that identifies the method to call when the gesture is recognized. This method must be implemented by the object in `target`. You must not specify `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The initialized gesture recognizer object or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer. Subclasses must call this method from their own custom initialization methods. Call the method before performing other tasks.

This method records the specified `target` and `action` values and prepares the gesture recognizer for use.

The `action` method must have one of the following signatures:

**Swift**

```swift
func handleGesture() { }
func handleGesture(gestureRecognizer: NSGestureRecognizer) { }
```

**Objective-C**

```objc
- (void)handleGesture;
- (void)handleGesture:(NSGestureRecognizer *)gestureRecognizer;
```

## See Also

### Related Documentation

- [target](target.md): The object that implements the action method.
- [NSGestureRecognizer](../nsgesturerecognizer.md): An object that monitors events and calls its action method when a predefined sequence of events occur.
- [action](action.md): The action method to call when the gesture is recognized.

# initWithTarget:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Initializes the gesture recognizer with the specified target and action information.

## Declaration

```objectivec
- (instancetype) initWithTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: The object whose action method is called when the gesture is recognized. You must not specify `nil` for this parameter.
- `action`: A selector that identifies the method to call when the gesture is recognized. This method must be implemented by the object in `target`. You must not specify `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The initialized gesture recognizer object or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer. Subclasses must call this method from their own custom initialization methods. Call the method before performing other tasks.

This method records the specified `target` and `action` values and prepares the gesture recognizer for use.

The `action` method must have one of the following signatures:

**Swift**

```swift
func handleGesture() { }
func handleGesture(gestureRecognizer: NSGestureRecognizer) { }
```

**Objective-C**

```objc
- (void)handleGesture;
- (void)handleGesture:(NSGestureRecognizer *)gestureRecognizer;
```

## See Also

### Related Documentation

- [target](target.md): The object that implements the action method.
- [NSGestureRecognizer](../nsgesturerecognizer.md): An object that monitors events and calls its action method when a predefined sequence of events occur.
- [action](action.md): The action method to call when the gesture is recognized.
