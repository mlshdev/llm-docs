> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/key](https://developer.apple.com/documentation/uikit/uipress/key)

# key (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The key pressed or released on a physical keyboard.

## Declaration

```swift
var key: UIKey? { get }
```

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

This property is `nil` when the press event isn’t from a keyboard; for example, a button press on an Apple TV remote.

## See Also

### Getting press attributes

- [type](type.md): The type of the specified press.
- [phase](phase-swift.property.md): The current press phase of the object.
- [timestamp](timestamp.md): The time when the press occurred or when it was last mutated.

# key (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The key pressed or released on a physical keyboard.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIKey * key;
```

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

This property is `nil` when the press event isn’t from a keyboard; for example, a button press on an Apple TV remote.

## See Also

### Getting press attributes

- [type](type.md): The type of the specified press.
- [phase](phase-swift.property.md): The current press phase of the object.
- [timestamp](timestamp.md): The time when the press occurred or when it was last mutated.
