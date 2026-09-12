> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/performkeyequivalent(with:)](https://developer.apple.com/documentation/appkit/nsbutton/performkeyequivalent(with:))

# performKeyEquivalent(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.

## Declaration

```swift
func performKeyEquivalent(with key: NSEvent) -> Bool
```

## Parameters

- `key`: The event containing the key equivalent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the key equivalent in `anEvent` matches the button’s key equivalent; [false](https://developer.apple.com/documentation/swift/false) if it does not. This method also returns [false](https://developer.apple.com/documentation/swift/false) if the button is blocked by a modal panel or the button is disabled.

<a id="Discussion"></a>

## Discussion

If the character in `anEvent` matches the button’s key equivalent, and the modifier flags in `anEvent` match the key-equivalent modifier mask, [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md) simulates the user clicking the button and returning [true](https://developer.apple.com/documentation/swift/true). Otherwise, [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md) does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [keyEquivalent](keyequivalent.md): The key-equivalent character of the button.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask specifying the modifier keys for the button’s key equivalent.

# performKeyEquivalent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.

## Declaration

```objectivec
- (BOOL) performKeyEquivalent:(NSEvent *) key;
```

## Parameters

- `key`: The event containing the key equivalent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the key equivalent in `anEvent` matches the button’s key equivalent; [false](https://developer.apple.com/documentation/swift/false) if it does not. This method also returns [false](https://developer.apple.com/documentation/swift/false) if the button is blocked by a modal panel or the button is disabled.

<a id="Discussion"></a>

## Discussion

If the character in `anEvent` matches the button’s key equivalent, and the modifier flags in `anEvent` match the key-equivalent modifier mask, [performKeyEquivalent:](performkeyequivalent%28with_%29.md) simulates the user clicking the button and returning [true](https://developer.apple.com/documentation/swift/true). Otherwise, [performKeyEquivalent:](performkeyequivalent%28with_%29.md) does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [keyEquivalent](keyequivalent.md): The key-equivalent character of the button.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask specifying the modifier keys for the button’s key equivalent.
