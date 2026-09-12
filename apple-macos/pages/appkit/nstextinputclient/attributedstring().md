> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/attributedstring()](https://developer.apple.com/documentation/appkit/nstextinputclient/attributedstring())

# attributedString() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns an attributed string representing the receiver’s text storage.

## Declaration

```swift
optional func attributedString() -> NSAttributedString
```

<a id="return-value"></a>

## Return Value

The attributed string of the receiver’s text storage.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A class adopting the `NSTextInputClient` protocol can implement this interface if it can be done efficiently to enable callers of this interface to access arbitrary portions of the receiver’s content more efficiently.

## See Also

### Storing text

- [attributedSubstring(forProposedRange:actualRange:)](attributedsubstring%28forproposedrange_actualrange_%29.md): Returns an attributed string derived from the given range in the receiver’s text storage.
- [insertText(\_:replacementRange:)](inserttext%28__replacementrange_%29.md): Inserts the given string into the receiver, replacing the specified content.

# attributedString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an attributed string representing the receiver’s text storage.

## Declaration

```objectivec
- (NSAttributedString *) attributedString;
```

<a id="return-value"></a>

## Return Value

The attributed string of the receiver’s text storage.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. A class adopting the `NSTextInputClient` protocol can implement this interface if it can be done efficiently to enable callers of this interface to access arbitrary portions of the receiver’s content more efficiently.

## See Also

### Storing text

- [attributedSubstringForProposedRange:actualRange:](attributedsubstring%28forproposedrange_actualrange_%29.md): Returns an attributed string derived from the given range in the receiver’s text storage.
- [insertText:replacementRange:](inserttext%28__replacementrange_%29.md): Inserts the given string into the receiver, replacing the specified content.
