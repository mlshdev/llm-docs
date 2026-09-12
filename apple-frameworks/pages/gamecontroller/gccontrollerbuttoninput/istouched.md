> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerbuttoninput/istouched](https://developer.apple.com/documentation/gamecontroller/gccontrollerbuttoninput/istouched)

# isTouched (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the user is touching the button.

## Declaration

```swift
var isTouched: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the user is touching the button; otherwise, the user isn’t. For controllers that support capacitive touch, the user can start touching the button without pressure when the value property is `0`. For controllers that don’t support capacitive touch, the user starts touching the button when the value property is greater than `0`.

## See Also

### Accessing input values

- [isPressed](ispressed.md): A Boolean value that indicates whether the user is pressing the button.
- [value](value.md): The level of pressure the user is applying to the button.

# touched (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the user is touching the button.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTouched) BOOL touched;
```

<a id="Discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the user is touching the button; otherwise, the user isn’t. For controllers that support capacitive touch, the user can start touching the button without pressure when the value property is `0`. For controllers that don’t support capacitive touch, the user starts touching the button when the value property is greater than `0`.

## See Also

### Accessing input values

- [pressed](ispressed.md): A Boolean value that indicates whether the user is pressing the button.
- [value](value.md): The level of pressure the user is applying to the button.
