> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/setvisible(_:forfirstresponder:)](https://developer.apple.com/documentation/pencilkit/pktoolpicker/setvisible(_:forfirstresponder:))

# setVisible(\_:forFirstResponder:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the visibility for the tool picker, based on when the specified responder object becomes active.

## Declaration

```swift
func setVisible(_ visible: Bool, forFirstResponder responder: UIResponder)
```

## Parameters

- `visible`: A Boolean value that indicates whether to make the palette visible when `responder` becomes active. Specify [true](https://developer.apple.com/documentation/swift/true) to show the palette when the object becomes the first responder.
- `responder`: A responder object associated with the tool picker’s window. Typically, you specify a view capable of becoming the first responder.

<a id="Discussion"></a>

## Discussion

Each time you call this method with the `visible` parameter set to [true](https://developer.apple.com/documentation/swift/true), the tool picker adds `responder` to a list of objects to monitor. When any object in the list becomes the first responder, the tool picker displays the palette. Calling this method with the `visible` parameter set to [false](https://developer.apple.com/documentation/swift/false) removes `responder` from the list of monitored objects.

## See Also

### Coordinating the visibility of the picker

- [isVisible](isvisible.md): A Boolean value that indicates whether the tool picker is currently visible.
- [frameObscured(in:)](frameobscured%28in_%29.md): Returns the portion of the specified view that the tool picker obscures.

# setVisible:forFirstResponder: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the visibility for the tool picker, based on when the specified responder object becomes active.

## Declaration

```objectivec
- (void) setVisible:(BOOL) visible forFirstResponder:(UIResponder *) responder;
```

## Parameters

- `visible`: A Boolean value that indicates whether to make the palette visible when `responder` becomes active. Specify [true](https://developer.apple.com/documentation/swift/true) to show the palette when the object becomes the first responder.
- `responder`: A responder object associated with the tool picker’s window. Typically, you specify a view capable of becoming the first responder.

<a id="Discussion"></a>

## Discussion

Each time you call this method with the `visible` parameter set to [true](https://developer.apple.com/documentation/swift/true), the tool picker adds `responder` to a list of objects to monitor. When any object in the list becomes the first responder, the tool picker displays the palette. Calling this method with the `visible` parameter set to [false](https://developer.apple.com/documentation/swift/false) removes `responder` from the list of monitored objects.

## See Also

### Coordinating the visibility of the picker

- [isVisible](isvisible.md): A Boolean value that indicates whether the tool picker is currently visible.
- [frameObscuredInView:](frameobscured%28in_%29.md): Returns the portion of the specified view that the tool picker obscures.
