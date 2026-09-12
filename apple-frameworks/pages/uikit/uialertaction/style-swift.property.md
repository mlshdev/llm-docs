> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertaction/style-swift.property](https://developer.apple.com/documentation/uikit/uialertaction/style-swift.property)

# style (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style that applies to the action’s button.

## Declaration

```swift
var style: UIAlertAction.Style { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to the value you specified in the [init(title:style:handler:)](init%28title_style_handler_%29.md) method.

## See Also

### Getting the action’s attributes

- [title](title.md): The title of the action’s button.
- [isEnabled](isenabled.md): A Boolean value indicating whether the action is currently enabled.

# style (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style that applies to the action’s button.

## Declaration

```objectivec
@property (nonatomic, readonly) UIAlertActionStyle style;
```

<a id="Discussion"></a>

## Discussion

This property is set to the value you specified in the [actionWithTitle:style:handler:](init%28title_style_handler_%29.md) method.

## See Also

### Getting the action’s attributes

- [title](title.md): The title of the action’s button.
- [enabled](isenabled.md): A Boolean value indicating whether the action is currently enabled.
