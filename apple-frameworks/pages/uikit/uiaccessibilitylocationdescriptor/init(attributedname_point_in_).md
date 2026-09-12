> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitylocationdescriptor/init(attributedname:point:in:)](https://developer.apple.com/documentation/uikit/uiaccessibilitylocationdescriptor/init(attributedname:point:in:))

# init(attributedName:point:in:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new accessibility location descriptor using an attributed string and a specified point in a view.

## Declaration

```swift
init(attributedName: NSAttributedString, point: CGPoint, in view: UIView)
```

## See Also

### Initializing the descriptor

- [init(name:point:in:)](init%28name_point_in_%29.md): Initializes a new accessibility location descriptor with a specified point in a view.
- [init(name:view:)](init%28name_view_%29.md): Initializes a new accessibility location descriptor with a specified view’s activation point.

# initWithAttributedName:point:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new accessibility location descriptor using an attributed string and a specified point in a view.

## Declaration

```objectivec
- (instancetype) initWithAttributedName:(NSAttributedString *) attributedName point:(CGPoint) point inView:(UIView *) view;
```

## See Also

### Initializing the descriptor

- [initWithName:point:inView:](init%28name_point_in_%29.md): Initializes a new accessibility location descriptor with a specified point in a view.
- [initWithName:view:](init%28name_view_%29.md): Initializes a new accessibility location descriptor with a specified view’s activation point.
