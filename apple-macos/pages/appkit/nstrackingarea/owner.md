> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingarea/owner](https://developer.apple.com/documentation/appkit/nstrackingarea/owner)

# owner (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.

## Declaration

```swift
weak var owner: AnyObject? { get }
```

## See Also

### Getting Object Attributes

- [options](options-swift.property.md): The options specified for the receiver.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.
- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.

# owner (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.

## Declaration

```objectivec
@property (weak, readonly, nullable) id owner;
```

## See Also

### Getting Object Attributes

- [options](options-swift.property.md): The options specified for the receiver.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.
- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.
