> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/positionoftoken(at:)](https://developer.apple.com/documentation/uikit/uisearchtextfield/positionoftoken(at:))

# positionOfToken(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Converts a token index into a text position.

## Declaration

```swift
func positionOfToken(at tokenIndex: Int) -> UITextPosition
```

## Parameters

- `tokenIndex`: The array index of the token.

<a id="return-value"></a>

## Return Value

The text position of the token.

<a id="Discussion"></a>

## Discussion

Use this method to convert a token’s index in the [tokens](tokens.md) array into the token’s [UITextPosition](../uitextposition.md) in the overall contents of the text field. Many [UITextInput](../uitextinput.md) methods for interacting with text take a [UITextPosition](../uitextposition.md) or [UITextRange](../uitextrange.md) (constructed from two text positions) as a parameter.

To select a search token, assign a [UITextRange](../uitextrange.md) that contains the token’s position to the [selectedTextRange](../uitextinput/selectedtextrange.md) property.

## See Also

### Customizing token behavior

- [tokenBackgroundColor](tokenbackgroundcolor.md): The background color for all tokens in the search text field.
- [tokens(in:)](tokens%28in_%29.md): Returns the search field’s tokens that are within a given range.

# positionOfTokenAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Converts a token index into a text position.

## Declaration

```objectivec
- (UITextPosition *) positionOfTokenAtIndex:(NSInteger) tokenIndex;
```

## Parameters

- `tokenIndex`: The array index of the token.

<a id="return-value"></a>

## Return Value

The text position of the token.

<a id="Discussion"></a>

## Discussion

Use this method to convert a token’s index in the [tokens](tokens.md) array into the token’s [UITextPosition](../uitextposition.md) in the overall contents of the text field. Many [UITextInput](../uitextinput.md) methods for interacting with text take a [UITextPosition](../uitextposition.md) or [UITextRange](../uitextrange.md) (constructed from two text positions) as a parameter.

To select a search token, assign a [UITextRange](../uitextrange.md) that contains the token’s position to the [selectedTextRange](../uitextinput/selectedtextrange.md) property.

## See Also

### Customizing token behavior

- [tokenBackgroundColor](tokenbackgroundcolor.md): The background color for all tokens in the search text field.
- [tokensInRange:](tokens%28in_%29.md): Returns the search field’s tokens that are within a given range.
