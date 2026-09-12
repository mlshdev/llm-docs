> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/addmarker(_:)](https://developer.apple.com/documentation/appkit/nsrulerview/addmarker(_:))

# addMarker(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds `aMarker` to the receiver, without consulting the client view for approval.

## Declaration

```swift
func addMarker(_ marker: NSRulerMarker)
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if the receiver has no client view.

## See Also

### Adding and removing markers

- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [removeMarker(\_:)](removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.
- [trackMarker(\_:withMouseEvent:)](trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.

# addMarker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds `aMarker` to the receiver, without consulting the client view for approval.

## Declaration

```objectivec
- (void) addMarker:(NSRulerMarker *) marker;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if the receiver has no client view.

## See Also

### Adding and removing markers

- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [removeMarker:](removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.
- [trackMarker:withMouseEvent:](trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.
