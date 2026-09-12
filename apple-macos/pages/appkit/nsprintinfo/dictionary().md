> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/dictionary()](https://developer.apple.com/documentation/appkit/nsprintinfo/dictionary())

# dictionary() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the print info’s dictionary that contains the printing attributes.

## Declaration

```swift
func dictionary() -> NSMutableDictionary
```

<a id="Discussion"></a>

## Discussion

The key-value pairs contained in the dictionary are described in Constants. Modifying the returned dictionary changes the receiver’s attributes.

This dictionary is key-value observing compliant.

# dictionary (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the print info’s dictionary that contains the printing attributes.

## Declaration

```objectivec
- (NSMutableDictionary<NSString *,id> *) dictionary;
```

<a id="Discussion"></a>

## Discussion

The key-value pairs contained in the dictionary are described in Constants. Modifying the returned dictionary changes the receiver’s attributes.

This dictionary is key-value observing compliant.
