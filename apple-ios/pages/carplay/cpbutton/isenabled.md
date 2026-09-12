> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpbutton/isenabled](https://developer.apple.com/documentation/carplay/cpbutton/isenabled)

# isEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the button is in an enabled state.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [false](https://developer.apple.com/documentation/swift/false), CarPlay doesn’t call the button’s handler, and it changes the button’s appearance to reflect its disabled state.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Button’s Attributes

- [title](title.md): The button’s title.

# enabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that determines whether the button is in an enabled state.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

When [false](https://developer.apple.com/documentation/swift/false), CarPlay doesn’t call the button’s handler, and it changes the button’s appearance to reflect its disabled state.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Button’s Attributes

- [title](title.md): The button’s title.
