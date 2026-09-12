> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbar/delegate](https://developer.apple.com/documentation/uikit/uinavigationbar/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation bar’s delegate object.

## Declaration

```swift
weak var delegate: (any UINavigationBarDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [UINavigationBarDelegate](../uinavigationbardelegate.md) protocol. The default value is `nil`.

If the navigation bar was created by a navigation controller and is being managed by that object, you must not change the value of this property. A navigation controller acts as the delegate for the navigation bar it creates.

## See Also

### Responding to navigation bar changes

- [UINavigationBarDelegate](../uinavigationbardelegate.md): Methods that a navigation bar calls before and after it modifies its stack of navigation items.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The navigation bar’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UINavigationBarDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [UINavigationBarDelegate](../uinavigationbardelegate.md) protocol. The default value is `nil`.

If the navigation bar was created by a navigation controller and is being managed by that object, you must not change the value of this property. A navigation controller acts as the delegate for the navigation bar it creates.

## See Also

### Responding to navigation bar changes

- [UINavigationBarDelegate](../uinavigationbardelegate.md): Methods that a navigation bar calls before and after it modifies its stack of navigation items.
