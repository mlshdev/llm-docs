> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/frameobscured(in:)](https://developer.apple.com/documentation/pencilkit/pktoolpicker/frameobscured(in:))

# frameObscured(in:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the portion of the specified view that the tool picker obscures.

## Declaration

```swift
func frameObscured(in view: UIView) -> CGRect
```

## Parameters

- `view`: The view that’s potentially obscured by the tool picker’s palette.

<a id="return-value"></a>

## Return Value

The portion of `view` (in its own coordinate space) obscured by the palette.

<a id="Discussion"></a>

## Discussion

Because the palette is transparent in places, part of your view’s content may continue to show through in the specified rectangle.

## See Also

### Coordinating the visibility of the picker

- [setVisible(\_:forFirstResponder:)](setvisible%28__forfirstresponder_%29.md): Sets the visibility for the tool picker, based on when the specified responder object becomes active.
- [isVisible](isvisible.md): A Boolean value that indicates whether the tool picker is currently visible.

# frameObscuredInView: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the portion of the specified view that the tool picker obscures.

## Declaration

```objectivec
- (CGRect) frameObscuredInView:(UIView *) view;
```

## Parameters

- `view`: The view that’s potentially obscured by the tool picker’s palette.

<a id="return-value"></a>

## Return Value

The portion of `view` (in its own coordinate space) obscured by the palette.

<a id="Discussion"></a>

## Discussion

Because the palette is transparent in places, part of your view’s content may continue to show through in the specified rectangle.

## See Also

### Coordinating the visibility of the picker

- [setVisible:forFirstResponder:](setvisible%28__forfirstresponder_%29.md): Sets the visibility for the tool picker, based on when the specified responder object becomes active.
- [isVisible](isvisible.md): A Boolean value that indicates whether the tool picker is currently visible.
