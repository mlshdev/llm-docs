> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdictionarycontroller/excludedkeys](https://developer.apple.com/documentation/appkit/nsdictionarycontroller/excludedkeys)

# excludedKeys (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The key names that are never displayed in the user interface items bound to the receiver.

## Declaration

```swift
var excludedKeys: [String] { get set }
```

## See Also

### Keys to Display

- [includedKeys](includedkeys.md): The key names that are represented by a key-value pair, even if they are not present in the receiver’s content dictionary.

# excludedKeys (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The key names that are never displayed in the user interface items bound to the receiver.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * excludedKeys;
```

## See Also

### Keys to Display

- [includedKeys](includedkeys.md): The key names that are represented by a key-value pair, even if they are not present in the receiver’s content dictionary.
