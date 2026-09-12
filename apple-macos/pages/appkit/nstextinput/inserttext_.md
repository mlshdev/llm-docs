> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinput/inserttext:](https://developer.apple.com/documentation/appkit/nstextinput/inserttext:)

# insertText:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Inserts the given string into the receiver’s text storage.

## Declaration

```objectivec
- (void) insertText:(id) string;
```

## Parameters

- `string`: Either an `NSString` or an `NSAttributedString` object.

<a id="Discussion"></a>

## Discussion

This method is the entry point for inserting text typed by the user and is generally not suitable for other purposes. Programmatic modification of the text is best done by operating on the text storage directly. Because this method pertains to the actions of the user, the text view must be editable for the insertion to work.

## See Also

### Text storage

- [attributedSubstringFromRange:](attributedsubstringfromrange_.md): Deprecated. Returns an attributed string derived from the given range in the receiver’s text storage.
