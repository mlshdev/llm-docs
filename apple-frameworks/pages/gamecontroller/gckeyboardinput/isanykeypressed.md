> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboardinput/isanykeypressed](https://developer.apple.com/documentation/gamecontroller/gckeyboardinput/isanykeypressed)

# isAnyKeyPressed (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the user is pressing any of the keys.

## Declaration

```swift
var isAnyKeyPressed: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user is pressing a key; otherwise, the user isn’t. You can use this property to check whether the user presses any key before getting the state of specific keys.

## See Also

### Accessing Buttons

- [button(forKeyCode:)](button%28forkeycode_%29.md): Returns the button element for the specified key code.
- [GCKeyCode](../gckeycode.md): The key codes for keys on a keyboard.
- [Keycode Constants](../keycode-constants.md): Constants for the codes of keyboard keys.

# anyKeyPressed (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the user is pressing any of the keys.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAnyKeyPressed) BOOL anyKeyPressed;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user is pressing a key; otherwise, the user isn’t. You can use this property to check whether the user presses any key before getting the state of specific keys.

## See Also

### Accessing Buttons

- [buttonForKeyCode:](button%28forkeycode_%29.md): Returns the button element for the specified key code.
- [GCKeyCode](../gckeycode.md): The key codes for keys on a keyboard.
- [Keycode Constants](../keycode-constants.md): Constants for the codes of keyboard keys.
