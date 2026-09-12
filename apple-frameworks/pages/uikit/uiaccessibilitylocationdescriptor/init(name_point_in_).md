> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitylocationdescriptor/init(name:point:in:)](https://developer.apple.com/documentation/uikit/uiaccessibilitylocationdescriptor/init(name:point:in:))

# init(name:point:in:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new accessibility location descriptor with a specified point in a view.

## Declaration

```swift
convenience init(name: String, point: CGPoint, in view: UIView)
```

## See Also

### Initializing the descriptor

- [init(attributedName:point:in:)](init%28attributedname_point_in_%29.md): Initializes a new accessibility location descriptor using an attributed string and a specified point in a view.
- [init(name:view:)](init%28name_view_%29.md): Initializes a new accessibility location descriptor with a specified view’s activation point.

# initWithName:point:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new accessibility location descriptor with a specified point in a view.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name point:(CGPoint) point inView:(UIView *) view;
```

## See Also

### Initializing the descriptor

- [initWithAttributedName:point:inView:](init%28attributedname_point_in_%29.md): Initializes a new accessibility location descriptor using an attributed string and a specified point in a view.
- [initWithName:view:](init%28name_view_%29.md): Initializes a new accessibility location descriptor with a specified view’s activation point.
