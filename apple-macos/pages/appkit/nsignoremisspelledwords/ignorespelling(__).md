> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsignoremisspelledwords/ignorespelling(_:)](https://developer.apple.com/documentation/appkit/nsignoremisspelledwords/ignorespelling(_:))

# ignoreSpelling(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
func ignoreSpelling(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

Implement this action method to allow an application to ignore misspelled words on a document-by-document basis. This message is sent by the NSSpellChecker instance to the object whose text is being checked.

Implement this method by using the code shown in the protocol description.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)

# ignoreSpelling: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) ignoreSpelling:(id) sender;
```

<a id="Discussion"></a>

## Discussion

Implement this action method to allow an application to ignore misspelled words on a document-by-document basis. This message is sent by the NSSpellChecker instance to the object whose text is being checked.

Implement this method by using the code shown in the protocol description.

## See Also

### Related Documentation

- [Spell Checking Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/SpellCheck/SpellCheck.html#//apple_ref/doc/uid/10000092i)
