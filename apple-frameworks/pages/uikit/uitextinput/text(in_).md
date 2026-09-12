> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/text(in:)](https://developer.apple.com/documentation/uikit/uitextinput/text(in:))

# text(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text in the specified range.

## Declaration

```swift
func text(in range: UITextRange) -> String?
```

## Parameters

- `range`: A range of text in a document.

<a id="return-value"></a>

## Return Value

A substring of a document that falls within the specified range.

## See Also

### Replacing and returning text

- [replace(\_:withText:)](replace%28__withtext_%29.md): Replaces the text in a document that is in the specified range.
- [shouldChangeText(in:replacementText:)](shouldchangetext%28in_replacementtext_%29.md): Asks whether to replace the text in the specified range.

# textInRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the text in the specified range.

## Declaration

```objectivec
- (NSString *) textInRange:(UITextRange *) range;
```

## Parameters

- `range`: A range of text in a document.

<a id="return-value"></a>

## Return Value

A substring of a document that falls within the specified range.

## See Also

### Replacing and returning text

- [replaceRange:withText:](replace%28__withtext_%29.md): Replaces the text in a document that is in the specified range.
- [shouldChangeTextInRange:replacementText:](shouldchangetext%28in_replacementtext_%29.md): Asks whether to replace the text in the specified range.
