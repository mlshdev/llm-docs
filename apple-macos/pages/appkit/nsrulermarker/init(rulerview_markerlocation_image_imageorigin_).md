> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulermarker/init(rulerview:markerlocation:image:imageorigin:)](https://developer.apple.com/documentation/appkit/nsrulermarker/init(rulerview:markerlocation:image:imageorigin:))

# init(rulerView:markerLocation:image:imageOrigin:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a newly allocated ruler marker, associating it with (but not adding it to) a specified ruler view and assigning the attributes provided.

## Declaration

```swift
init(rulerView ruler: NSRulerView, markerLocation location: CGFloat, image: NSImage, imageOrigin: NSPoint)
```

## Parameters

- `ruler`: The ruler view with which to associate the ruler marker. This method raises an `NSInvalidArgumentException` if `aRulerView`  is `nil`.
- `location`: The x or y position of the marker in the client view’s coordinate system, depending on whether the ruler view is horizontal or vertical.
- `image`: The image displayed at the marker location. This method raises an `NSInvalidArgumentException` if `anImage` is `nil`.
- `imageOrigin`: The point within the image positioned at the marker location, expressed in pixels relative to the lower-left corner of the image.

<a id="return-value"></a>

## Return Value

An initialized ruler marker object.

<a id="Discussion"></a>

## Discussion

The image used to draw the marker must be appropriate for the orientation of the ruler. Markers may need to look different on a horizontal ruler than on a vertical ruler, and the ruler view neither scales nor rotates the images.

To add the new ruler marker to `aRulerView`, use either of NSRulerView’s [addMarker(\_:)](../nsrulerview/addmarker%28__%29.md) or [trackMarker(\_:withMouseEvent:)](../nsrulerview/trackmarker%28__withmouseevent_%29.md) methods. [addMarker(\_:)](../nsrulerview/addmarker%28__%29.md) immediately puts the marker on the ruler, while [trackMarker(\_:withMouseEvent:)](../nsrulerview/trackmarker%28__withmouseevent_%29.md) allows the client view to intercede in the addition and placement of the marker.

A new ruler marker can be moved on its ruler view, but not removed. Use [isMovable](ismovable.md) and [isRemovable](isremovable.md) to change these attributes. The new ruler marker also has no represented object; use [representedObject](representedobject.md) to set one.

This method is the designated initializer for the NSRulerMarker class.

## See Also

### Related Documentation

- [image](image.md): The receiver’s image.
- [Ruler and Paragraph Style Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Rulers/Rulers.html#//apple_ref/doc/uid/10000089i)
- [markerLocation](markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.
- [imageOrigin](imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.

# initWithRulerView:markerLocation:image:imageOrigin: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a newly allocated ruler marker, associating it with (but not adding it to) a specified ruler view and assigning the attributes provided.

## Declaration

```objectivec
- (instancetype) initWithRulerView:(NSRulerView *) ruler markerLocation:(CGFloat) location image:(NSImage *) image imageOrigin:(NSPoint) imageOrigin;
```

## Parameters

- `ruler`: The ruler view with which to associate the ruler marker. This method raises an `NSInvalidArgumentException` if `aRulerView`  is `nil`.
- `location`: The x or y position of the marker in the client view’s coordinate system, depending on whether the ruler view is horizontal or vertical.
- `image`: The image displayed at the marker location. This method raises an `NSInvalidArgumentException` if `anImage` is `nil`.
- `imageOrigin`: The point within the image positioned at the marker location, expressed in pixels relative to the lower-left corner of the image.

<a id="return-value"></a>

## Return Value

An initialized ruler marker object.

<a id="Discussion"></a>

## Discussion

The image used to draw the marker must be appropriate for the orientation of the ruler. Markers may need to look different on a horizontal ruler than on a vertical ruler, and the ruler view neither scales nor rotates the images.

To add the new ruler marker to `aRulerView`, use either of NSRulerView’s [addMarker:](../nsrulerview/addmarker%28__%29.md) or [trackMarker:withMouseEvent:](../nsrulerview/trackmarker%28__withmouseevent_%29.md) methods. [addMarker:](../nsrulerview/addmarker%28__%29.md) immediately puts the marker on the ruler, while [trackMarker:withMouseEvent:](../nsrulerview/trackmarker%28__withmouseevent_%29.md) allows the client view to intercede in the addition and placement of the marker.

A new ruler marker can be moved on its ruler view, but not removed. Use [movable](ismovable.md) and [removable](isremovable.md) to change these attributes. The new ruler marker also has no represented object; use [representedObject](representedobject.md) to set one.

This method is the designated initializer for the NSRulerMarker class.

## See Also

### Related Documentation

- [image](image.md): The receiver’s image.
- [Ruler and Paragraph Style Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Rulers/Rulers.html#//apple_ref/doc/uid/10000089i)
- [markerLocation](markerlocation.md): The location of the receiver in the coordinate system of the ruler view’s client view.
- [imageOrigin](imageorigin.md): The point in the receiver’s image that is positioned at the receiver’s location on the ruler view.
