> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/replace(_:withtext:)](https://developer.apple.com/documentation/uikit/uitextinput/replace(_:withtext:))

# replace(\_:withText:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Replaces the text in a document that is in the specified range.

## Declaration

```swift
func replace(_ range: UITextRange, withText text: String)
```

## Parameters

- `range`: A range of text in a document.
- `text`: A string to replace the text in `range`.

## See Also

### Replacing and returning text

- [text(in:)](text%28in_%29.md): Returns the text in the specified range.
- [shouldChangeText(in:replacementText:)](shouldchangetext%28in_replacementtext_%29.md): Asks whether to replace the text in the specified range.

# replaceRange:withText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Replaces the text in a document that is in the specified range.

## Declaration

```objectivec
- (void) replaceRange:(UITextRange *) range withText:(NSString *) text;
```

## Parameters

- `range`: A range of text in a document.
- `text`: A string to replace the text in `range`.

## See Also

### Replacing and returning text

- [textInRange:](text%28in_%29.md): Returns the text in the specified range.
- [shouldChangeTextInRange:replacementText:](shouldchangetext%28in_replacementtext_%29.md): Asks whether to replace the text in the specified range.
