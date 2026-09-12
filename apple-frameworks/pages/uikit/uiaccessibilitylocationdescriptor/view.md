> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitylocationdescriptor/view](https://developer.apple.com/documentation/uikit/uiaccessibilitylocationdescriptor/view)

# view (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the view associated with the accessibility location descriptor.

## Declaration

```swift
weak var view: UIView? { get }
```

## See Also

### Getting the descriptor information

- [name](name.md): Returns the plaintext string representation of the name for the accessibility location descriptor.
- [attributedName](attributedname.md): Returns the attributed string representation of the name for the accessibility location descriptor.
- [point](point.md): Returns the geometric point of interest for the accessibility location descriptor within its associated view and in the coordinate space of the view.

# view (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the view associated with the accessibility location descriptor.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) UIView * view;
```

## See Also

### Getting the descriptor information

- [name](name.md): Returns the plaintext string representation of the name for the accessibility location descriptor.
- [attributedName](attributedname.md): Returns the attributed string representation of the name for the accessibility location descriptor.
- [point](point.md): Returns the geometric point of interest for the accessibility location descriptor within its associated view and in the coordinate space of the view.
