> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/phase-swift.property](https://developer.apple.com/documentation/uikit/uipress/phase-swift.property)

# phase (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The current press phase of the object.

## Declaration

```swift
var phase: UIPress.Phase { get }
```

<a id="Discussion"></a>

## Discussion

For a list of all possible press phases, see the [UIPress.Phase](phase-swift.enum.md) enumeration.

## See Also

### Getting press attributes

- [key](key.md): The key pressed or released on a physical keyboard.
- [type](type.md): The type of the specified press.
- [timestamp](timestamp.md): The time when the press occurred or when it was last mutated.

# phase (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The current press phase of the object.

## Declaration

```objectivec
@property (nonatomic, readonly) UIPressPhase phase;
```

<a id="Discussion"></a>

## Discussion

For a list of all possible press phases, see the [UIPressPhase](phase-swift.enum.md) enumeration.

## See Also

### Getting press attributes

- [key](key.md): The key pressed or released on a physical keyboard.
- [type](type.md): The type of the specified press.
- [timestamp](timestamp.md): The time when the press occurred or when it was last mutated.
