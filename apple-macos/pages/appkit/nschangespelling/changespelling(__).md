> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nschangespelling/changespelling(_:)](https://developer.apple.com/documentation/appkit/nschangespelling/changespelling(_:))

# changeSpelling(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the selected word in the receiver with a corrected version from the Spelling panel.

## Declaration

```swift
func changeSpelling(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

This message is sent by the `NSSpellChecker` to the object whose text is being checked. To get the corrected spelling, ask `sender` for the string value of its selected cell (visible to the user as the text field in the Spelling panel). This method should replace the selected portion of the text with the string that it gets from the NSSpellChecker.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)

# changeSpelling: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the selected word in the receiver with a corrected version from the Spelling panel.

## Declaration

```objectivec
- (void) changeSpelling:(id) sender;
```

<a id="Discussion"></a>

## Discussion

This message is sent by the `NSSpellChecker` to the object whose text is being checked. To get the corrected spelling, ask `sender` for the string value of its selected cell (visible to the user as the text field in the Spelling panel). This method should replace the selected portion of the text with the string that it gets from the NSSpellChecker.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)
