> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstrackingarea/options-swift.property

# options (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The options specified for the receiver.

## Declaration

```swift
var options: NSTrackingArea.Options { get }
```

<a id="Discussion"></a>

## Discussion

The options for an `NSTrackingArea` object are specified when the object is created.

## See Also

### Getting Object Attributes

- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.
- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.

# options (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The options specified for the receiver.

## Declaration

```objectivec
@property (readonly) NSTrackingAreaOptions options;
```

<a id="Discussion"></a>

## Discussion

The options for an `NSTrackingArea` object are specified when the object is created.

## See Also

### Getting Object Attributes

- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.
- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.
