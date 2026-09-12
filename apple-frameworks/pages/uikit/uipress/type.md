> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/type](https://developer.apple.com/documentation/uikit/uipress/type)

# type (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The type of the specified press.

## Declaration

```swift
var type: UIPress.PressType { get }
```

<a id="Discussion"></a>

## Discussion

For a list of all possible types, see the [UIPress.PressType](presstype.md) enumeration.

## See Also

### Getting press attributes

- [key](key.md): The key pressed or released on a physical keyboard.
- [phase](phase-swift.property.md): The current press phase of the object.
- [timestamp](timestamp.md): The time when the press occurred or when it was last mutated.

# type (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The type of the specified press.

## Declaration

```objectivec
@property (nonatomic, readonly) UIPressType type;
```

<a id="Discussion"></a>

## Discussion

For a list of all possible types, see the [UIPressType](presstype.md) enumeration.

## See Also

### Getting press attributes

- [key](key.md): The key pressed or released on a physical keyboard.
- [phase](phase-swift.property.md): The current press phase of the object.
- [timestamp](timestamp.md): The time when the press occurred or when it was last mutated.
