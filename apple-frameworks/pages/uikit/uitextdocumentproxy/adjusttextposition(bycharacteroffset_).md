> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdocumentproxy/adjusttextposition(bycharacteroffset:)](https://developer.apple.com/documentation/uikit/uitextdocumentproxy/adjusttextposition(bycharacteroffset:))

# adjustTextPosition(byCharacterOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Moves the insertion point forward or backward in the current text input object.

## Declaration

```swift
func adjustTextPosition(byCharacterOffset offset: Int)
```

## Parameters

- `offset`: The number of characters to adjust the insertion point by. A positive value moves the insertion point forward (according to the text storage direction for the current language). A negative value moves the insertion point backward.

## Mentioned In

- [Handling text interactions in custom keyboards](../handling-text-interactions-in-custom-keyboards.md)

# adjustTextPositionByCharacterOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Moves the insertion point forward or backward in the current text input object.

## Declaration

```objectivec
- (void) adjustTextPositionByCharacterOffset:(NSInteger) offset;
```

## Parameters

- `offset`: The number of characters to adjust the insertion point by. A positive value moves the insertion point forward (according to the text storage direction for the current language). A negative value moves the insertion point backward.

## Mentioned In

- [Handling text interactions in custom keyboards](../handling-text-interactions-in-custom-keyboards.md)
