> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingarea/rect](https://developer.apple.com/documentation/appkit/nstrackingarea/rect)

# rect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The rectangle defining the area encompassed by the receiver.

## Declaration

```swift
var rect: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle is specified in the local coordinate system of the associated view. If the [inVisibleRect](options-swift.struct/invisiblerect.md) option is specified, the receiver is automatically synchronized with changes in the view’s visible area ([visibleRect](../nsview/visiblerect.md)) and the value of this property is ignored.

## See Also

### Getting Object Attributes

- [options](options-swift.property.md): The options specified for the receiver.
- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.

# rect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The rectangle defining the area encompassed by the receiver.

## Declaration

```objectivec
@property (readonly) NSRect rect;
```

<a id="Discussion"></a>

## Discussion

The rectangle is specified in the local coordinate system of the associated view. If the [NSTrackingInVisibleRect](options-swift.struct/invisiblerect.md) option is specified, the receiver is automatically synchronized with changes in the view’s visible area ([visibleRect](../nsview/visiblerect.md)) and the value of this property is ignored.

## See Also

### Getting Object Attributes

- [options](options-swift.property.md): The options specified for the receiver.
- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.
