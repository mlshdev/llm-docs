> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/markers](https://developer.apple.com/documentation/appkit/nsrulerview/markers)

# markers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.

## Declaration

```swift
var markers: [NSRulerMarker]? { get set }
```

<a id="Discussion"></a>

## Discussion

`markers` can be `nil` or empty to remove all ruler markers. Raises an `NSInternalInconsistencyException` if `markers` is not `nil` and the receiver has no client view.

## See Also

### Related Documentation

- [markerLocation](../nsrulermarker/markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Adding and removing markers

- [addMarker(\_:)](addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [removeMarker(\_:)](removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.
- [trackMarker(\_:withMouseEvent:)](trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.

# markers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSRulerMarker *> * markers;
```

<a id="Discussion"></a>

## Discussion

`markers` can be `nil` or empty to remove all ruler markers. Raises an `NSInternalInconsistencyException` if `markers` is not `nil` and the receiver has no client view.

## See Also

### Related Documentation

- [markerLocation](../nsrulermarker/markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.

### Adding and removing markers

- [addMarker:](addmarker%28__%29.md): Adds `aMarker` to the receiver, without consulting the client view for approval.
- [removeMarker:](removemarker%28__%29.md): Removes `aMarker` from the receiver, without consulting the client view for approval.
- [trackMarker:withMouseEvent:](trackmarker%28__withmouseevent_%29.md): Tracks the mouse to add `aMarker` based on the initial mouse-down or mouse-dragged event `theEvent`.
