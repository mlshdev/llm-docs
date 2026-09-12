> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/trackmarker(_:withmouseevent:)](https://developer.apple.com/documentation/appkit/nsrulerview/trackmarker(_:withmouseevent:))

# trackMarker(\_:withMouseEvent:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.

## Declaration

```swift
func trackMarker(_ marker: NSRulerMarker, withMouseEvent event: NSEvent) -> Bool
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the receiver adds `aMarker`, [false](https://developer.apple.com/documentation/swift/false) if it doesn’t. This method works by sending [trackMouse(with:adding:)](../nsrulermarker/trackmouse%28with_adding_%29.md) to `aMarker` with `theEvent` and [true](https://developer.apple.com/documentation/swift/true) as arguments.

An application typically invokes this method in one of two cases. In the simpler case, the client view can implement [NSRulerView](../nsrulerview.md) to invoke this method when the user presses the mouse button while the cursor is in the NSRulerView’s ruler area. This technique is appropriate when it’s clear what kind of marker will be added by clicking the ruler area. The second, more general, case involves the application providing a palette of different kinds of markers that can be dragged onto the ruler, from the ruler’s accessory view or from some other place. With this technique the palette tracks the cursor until it enters the ruler view, at which time it hands over control to the ruler view by invoking [trackMarker(\_:withMouseEvent:)](trackmarker%28__withmouseevent_%29.md).

## See Also

### Adding and removing markers

- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [addMarker(\_:)](addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [removeMarker(\_:)](removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.

# trackMarker:withMouseEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.

## Declaration

```objectivec
- (BOOL) trackMarker:(NSRulerMarker *) marker withMouseEvent:(NSEvent *) event;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the receiver adds `aMarker`, [false](https://developer.apple.com/documentation/swift/false) if it doesn’t. This method works by sending [trackMouse:adding:](../nsrulermarker/trackmouse%28with_adding_%29.md) to `aMarker` with `theEvent` and [true](https://developer.apple.com/documentation/swift/true) as arguments.

An application typically invokes this method in one of two cases. In the simpler case, the client view can implement [NSRulerView](../nsrulerview.md) to invoke this method when the user presses the mouse button while the cursor is in the NSRulerView’s ruler area. This technique is appropriate when it’s clear what kind of marker will be added by clicking the ruler area. The second, more general, case involves the application providing a palette of different kinds of markers that can be dragged onto the ruler, from the ruler’s accessory view or from some other place. With this technique the palette tracks the cursor until it enters the ruler view, at which time it hands over control to the ruler view by invoking [trackMarker:withMouseEvent:](trackmarker%28__withmouseevent_%29.md).

## See Also

### Adding and removing markers

- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [addMarker:](addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [removeMarker:](removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.
