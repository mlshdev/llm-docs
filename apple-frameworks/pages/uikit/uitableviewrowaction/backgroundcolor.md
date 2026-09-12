> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewrowaction/backgroundcolor](https://developer.apple.com/documentation/uikit/uitableviewrowaction/backgroundcolor)

# backgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The background color of the action button.

> For more information, see [UITableViewRowAction](../uitableviewrowaction.md).

## Declaration

```swift
@NSCopying var backgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the background color for your button. If you don’t specify a value for this property, UIKit assigns a default color based on the value in the [style](style-swift.property.md) property.

## See Also

### Configuring the action’s appearance

- [style](style-swift.property.md): Deprecated. The style applied to the action button.
- [UITableViewRowAction.Style](style-swift.enum.md): Deprecated. Constants that specify the appearance of action buttons.
- [title](title.md): Deprecated. The title of the action button.
- [backgroundEffect](backgroundeffect.md): Deprecated. The visual effect to apply to the button.

# backgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The background color of the action button.

> For more information, see [UITableViewRowAction](../uitableviewrowaction.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the background color for your button. If you don’t specify a value for this property, UIKit assigns a default color based on the value in the [style](style-swift.property.md) property.

## See Also

### Configuring the action’s appearance

- [style](style-swift.property.md): Deprecated. The style applied to the action button.
- [UITableViewRowActionStyle](style-swift.enum.md): Deprecated. Constants that specify the appearance of action buttons.
- [title](title.md): Deprecated. The title of the action button.
- [backgroundEffect](backgroundeffect.md): Deprecated. The visual effect to apply to the button.
