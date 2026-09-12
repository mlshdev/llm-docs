> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikey/charactersignoringmodifiers](https://developer.apple.com/documentation/uikit/uikey/charactersignoringmodifiers)

# charactersIgnoringModifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

A string that represents the text value of the key without modifier keys.

## Declaration

```swift
var charactersIgnoringModifiers: String { get }
```

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

For Latin-based languages, always expect a lowercase property value. If the user is pressing only a modifier key, the property value is an empty string.

To check for special keys, compare [charactersIgnoringModifiers](charactersignoringmodifiers.md) to constants listed in [Input strings for special keys](../input-strings-for-special-keys.md).

## See Also

### Getting key characters

- [characters](characters.md): A string that represents the text value of the key combined with any active modifier keys.

# charactersIgnoringModifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · tvOS 13.4+ · visionOS 1.0+

A string that represents the text value of the key without modifier keys.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * charactersIgnoringModifiers;
```

## Mentioned In

- [Handling key presses made on a physical keyboard](../handling-key-presses-made-on-a-physical-keyboard.md)

<a id="Discussion"></a>

## Discussion

For Latin-based languages, always expect a lowercase property value. If the user is pressing only a modifier key, the property value is an empty string.

To check for special keys, compare [charactersIgnoringModifiers](charactersignoringmodifiers.md) to constants listed in [Input strings for special keys](../input-strings-for-special-keys.md).

## See Also

### Getting key characters

- [characters](characters.md): A string that represents the text value of the key combined with any active modifier keys.
