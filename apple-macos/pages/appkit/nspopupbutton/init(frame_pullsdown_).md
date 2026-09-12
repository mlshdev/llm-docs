> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/init(frame:pullsdown:)](https://developer.apple.com/documentation/appkit/nspopupbutton/init(frame:pullsdown:))

# init(frame:pullsDown:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an `NSPopUpButton` object initialized to the specified dimensions.

## Declaration

```swift
init(frame buttonFrame: NSRect, pullsDown flag: Bool)
```

## Parameters

- `buttonFrame`: The frame rectangle for the button, specified in the parent view’s coordinate system.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) if you want the receiver to display a pull-down menu; otherwise, [false](https://developer.apple.com/documentation/swift/false) if you want it to display a pop-up menu.

<a id="return-value"></a>

## Return Value

An initialized `NSPopUpButton` object, or `nil` if the object could not be initialized.

## See Also

### Related Documentation

- [init(textCell:pullsDown:)](../nspopupbuttoncell/init%28textcell_pullsdown_%29.md): Returns an `NSPopUpButtonCell` object initialized with the specified title.
- [pullsDown](pullsdown.md): A Boolean value indicating whether the button displays a pull-down or pop-up menu.

# initWithFrame:pullsDown: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an `NSPopUpButton` object initialized to the specified dimensions.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) buttonFrame pullsDown:(BOOL) flag;
```

## Parameters

- `buttonFrame`: The frame rectangle for the button, specified in the parent view’s coordinate system.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) if you want the receiver to display a pull-down menu; otherwise, [false](https://developer.apple.com/documentation/swift/false) if you want it to display a pop-up menu.

<a id="return-value"></a>

## Return Value

An initialized `NSPopUpButton` object, or `nil` if the object could not be initialized.

## See Also

### Related Documentation

- [initTextCell:pullsDown:](../nspopupbuttoncell/init%28textcell_pullsdown_%29.md): Returns an `NSPopUpButtonCell` object initialized with the specified title.
- [pullsDown](pullsdown.md): A Boolean value indicating whether the button displays a pull-down or pop-up menu.
