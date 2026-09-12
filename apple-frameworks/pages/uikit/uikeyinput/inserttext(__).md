> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyinput/inserttext(_:)](https://developer.apple.com/documentation/uikit/uikeyinput/inserttext(_:))

# insertText(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Inserts a character into the displayed text.

## Declaration

```swift
func insertText(_ text: String)
```

## Parameters

- `text`: A string object representing the character typed on the system keyboard.

## Mentioned In

- [Handling text interactions in custom keyboards](../handling-text-interactions-in-custom-keyboards.md)

<a id="Discussion"></a>

## Discussion

Add the character `text` to your class’s backing store at the index corresponding to the cursor and redisplay the text.

## See Also

### Inserting and deleting text

- [deleteBackward()](deletebackward%28%29.md): Deletes a character from the displayed text.
- [hasText](hastext.md): A Boolean value that indicates whether the text-entry object has any text.

# insertText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Inserts a character into the displayed text.

## Declaration

```objectivec
- (void) insertText:(NSString *) text;
```

## Parameters

- `text`: A string object representing the character typed on the system keyboard.

## Mentioned In

- [Handling text interactions in custom keyboards](../handling-text-interactions-in-custom-keyboards.md)

<a id="Discussion"></a>

## Discussion

Add the character `text` to your class’s backing store at the index corresponding to the cursor and redisplay the text.

## See Also

### Inserting and deleting text

- [deleteBackward](deletebackward%28%29.md): Deletes a character from the displayed text.
- [hasText](hastext.md): A Boolean value that indicates whether the text-entry object has any text.
