> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingarea/userinfo](https://developer.apple.com/documentation/appkit/nstrackingarea/userinfo)

# userInfo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The dictionary containing the data associated with the receiver when it was created.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

You can obtain this dictionary per event in each [mouseEntered(with:)](../nsresponder/mouseentered%28with_%29.md) and [mouseExited(with:)](../nsresponder/mouseexited%28with_%29.md) method by querying the passed-in `NSEvent` object with `[[event trackingArea] userData]`.

## See Also

### Getting Object Attributes

- [options](options-swift.property.md): The options specified for the receiver.
- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.

# userInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The dictionary containing the data associated with the receiver when it was created.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<id,id> * userInfo;
```

<a id="Discussion"></a>

## Discussion

You can obtain this dictionary per event in each [mouseEntered:](../nsresponder/mouseentered%28with_%29.md) and [mouseExited:](../nsresponder/mouseexited%28with_%29.md) method by querying the passed-in `NSEvent` object with `[[event trackingArea] userData]`.

## See Also

### Getting Object Attributes

- [options](options-swift.property.md): The options specified for the receiver.
- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.
