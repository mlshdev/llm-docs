> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdictionarycontroller/includedkeys](https://developer.apple.com/documentation/appkit/nsdictionarycontroller/includedkeys)

# includedKeys (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The key names that are represented by a key-value pair, even if they are not present in the receiver’s content dictionary.

## Declaration

```swift
var includedKeys: [String] { get set }
```

## See Also

### Keys to Display

- [excludedKeys](excludedkeys.md): The key names that are never displayed in the user interface items bound to the receiver.

# includedKeys (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The key names that are represented by a key-value pair, even if they are not present in the receiver’s content dictionary.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * includedKeys;
```

## See Also

### Keys to Display

- [excludedKeys](excludedkeys.md): The key names that are never displayed in the user interface items bound to the receiver.
