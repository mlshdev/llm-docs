> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/acceptsfirstmouse(for:)](https://developer.apple.com/documentation/appkit/nsslider/acceptsfirstmouse(for:))

# acceptsFirstMouse(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether a mouse-down event both activates the window and starts dragging the slider’s knob.

## Declaration

```swift
func acceptsFirstMouse(for event: NSEvent?) -> Bool
```

## Parameters

- `event`: The mouse-down event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver accepts the first mouse-down event; otherwise, [false](https://developer.apple.com/documentation/swift/false). Returns [true](https://developer.apple.com/documentation/swift/true) by default.

<a id="Discussion"></a>

## Discussion

If you want the slider to wait for its own mouse-down event, you must override this method.

# acceptsFirstMouse: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether a mouse-down event both activates the window and starts dragging the slider’s knob.

## Declaration

```objectivec
- (BOOL) acceptsFirstMouse:(NSEvent *) event;
```

## Parameters

- `event`: The mouse-down event.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver accepts the first mouse-down event; otherwise, [false](https://developer.apple.com/documentation/swift/false). Returns [true](https://developer.apple.com/documentation/swift/true) by default.

<a id="Discussion"></a>

## Discussion

If you want the slider to wait for its own mouse-down event, you must override this method.
