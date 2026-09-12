> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpasteitem/setresult(attachment:)](https://developer.apple.com/documentation/uikit/uitextpasteitem/setresult(attachment:))

# setResult(attachment:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets a text paste item’s attachment value to a specified value.

## Declaration

```swift
func setResult(attachment textAttachment: NSTextAttachment)
```

## See Also

### Setting a text paste item’s result value

- [setResult(string:)](setresult%28string_%29.md): Sets a text paste item’s textual value to a specified plaintext string from the item provider.
- [setResult(attributedString:)](setresult%28attributedstring_%29.md): Sets a text paste item’s textual value to a specified attributed string from the item provider.
- [setDefaultResult()](setdefaultresult%28%29.md): Sets the text paste item’s value to the default value based on the item provider’s data.
- [setNoResult()](setnoresult%28%29.md): Sets the text paste item’s textual value to not include data from the item provider.

# setAttachmentResult: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets a text paste item’s attachment value to a specified value.

## Declaration

```objectivec
- (void) setAttachmentResult:(NSTextAttachment *) textAttachment;
```

## See Also

### Setting a text paste item’s result value

- [setStringResult:](setresult%28string_%29.md): Sets a text paste item’s textual value to a specified plaintext string from the item provider.
- [setAttributedStringResult:](setresult%28attributedstring_%29.md): Sets a text paste item’s textual value to a specified attributed string from the item provider.
- [setDefaultResult](setdefaultresult%28%29.md): Sets the text paste item’s value to the default value based on the item provider’s data.
- [setNoResult](setnoresult%28%29.md): Sets the text paste item’s textual value to not include data from the item provider.
