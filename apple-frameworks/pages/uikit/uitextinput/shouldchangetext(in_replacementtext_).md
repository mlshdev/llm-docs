> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/shouldchangetext(in:replacementtext:)](https://developer.apple.com/documentation/uikit/uitextinput/shouldchangetext(in:replacementtext:))

# shouldChangeText(in:replacementText:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks whether to replace the text in the specified range.

## Declaration

```swift
optional func shouldChangeText(in range: UITextRange, replacementText text: String) -> Bool
```

## Parameters

- `range`: A range of text in a document.
- `text`: The proposed text to replace the text in `range`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text should be changed or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

Prior to replacing text, this method is called to give your delegate a chance to accept or reject the edits. If you do not implement this method, the return value defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Replacing and returning text

- [text(in:)](text%28in_%29.md): Returns the text in the specified range.
- [replace(\_:withText:)](replace%28__withtext_%29.md): Replaces the text in a document that is in the specified range.

# shouldChangeTextInRange:replacementText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks whether to replace the text in the specified range.

## Declaration

```objectivec
- (BOOL) shouldChangeTextInRange:(UITextRange *) range replacementText:(NSString *) text;
```

## Parameters

- `range`: A range of text in a document.
- `text`: The proposed text to replace the text in `range`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text should be changed or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

Prior to replacing text, this method is called to give your delegate a chance to accept or reject the edits. If you do not implement this method, the return value defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Replacing and returning text

- [textInRange:](text%28in_%29.md): Returns the text in the specified range.
- [replaceRange:withText:](replace%28__withtext_%29.md): Replaces the text in a document that is in the specified range.
