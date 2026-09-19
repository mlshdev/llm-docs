> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsrulerview/removemarker(_:)

# removeMarker(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes `aMarker` from the receiver, without consulting the client view for approval.

## Declaration

```swift
func removeMarker(_ marker: NSRulerMarker)
```

## See Also

### Adding and removing markers

- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [addMarker(\_:)](addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [trackMarker(\_:withMouseEvent:)](trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.

# removeMarker: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes `aMarker` from the receiver, without consulting the client view for approval.

## Declaration

```objectivec
- (void) removeMarker:(NSRulerMarker *) marker;
```

## See Also

### Adding and removing markers

- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.
- [addMarker:](addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [trackMarker:withMouseEvent:](trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.
