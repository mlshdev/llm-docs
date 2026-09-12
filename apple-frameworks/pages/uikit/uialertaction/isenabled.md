> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertaction/isenabled](https://developer.apple.com/documentation/uikit/uialertaction/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the action is currently enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Changing the value to [false](https://developer.apple.com/documentation/swift/false) causes the action to appear dimmed in the resulting alert. When an action is disabled, taps on the corresponding button have no effect.

## See Also

### Getting the action’s attributes

- [title](title.md): The title of the action’s button.
- [style](style-swift.property.md): The style that applies to the action’s button.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the action is currently enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Changing the value to [false](https://developer.apple.com/documentation/swift/false) causes the action to appear dimmed in the resulting alert. When an action is disabled, taps on the corresponding button have no effect.

## See Also

### Getting the action’s attributes

- [title](title.md): The title of the action’s button.
- [style](style-swift.property.md): The style that applies to the action’s button.
