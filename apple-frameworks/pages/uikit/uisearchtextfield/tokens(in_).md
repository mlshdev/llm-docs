> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/tokens(in:)](https://developer.apple.com/documentation/uikit/uisearchtextfield/tokens(in:))

# tokens(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the search field’s tokens that are within a given range.

## Declaration

```swift
func tokens(in textRange: UITextRange) -> [UISearchToken]
```

## Parameters

- `textRange`: The range specifying a subset of the tokens.

<a id="return-value"></a>

## Return Value

The tokens contained within the provided range.

<a id="Discussion"></a>

## Discussion

Use this method to find out which tokens are included in the user’s current selection. You can provide a range that spans a mixture of tokens and text.

## See Also

### Customizing token behavior

- [tokenBackgroundColor](tokenbackgroundcolor.md): The background color for all tokens in the search text field.
- [positionOfToken(at:)](positionoftoken%28at_%29.md): Converts a token index into a text position.

# tokensInRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the search field’s tokens that are within a given range.

## Declaration

```objectivec
- (NSArray<UISearchToken *> *) tokensInRange:(UITextRange *) textRange;
```

## Parameters

- `textRange`: The range specifying a subset of the tokens.

<a id="return-value"></a>

## Return Value

The tokens contained within the provided range.

<a id="Discussion"></a>

## Discussion

Use this method to find out which tokens are included in the user’s current selection. You can provide a range that spans a mixture of tokens and text.

## See Also

### Customizing token behavior

- [tokenBackgroundColor](tokenbackgroundcolor.md): The background color for all tokens in the search text field.
- [positionOfTokenAtIndex:](positionoftoken%28at_%29.md): Converts a token index into a text position.
