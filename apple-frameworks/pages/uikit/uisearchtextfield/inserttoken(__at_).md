> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchtextfield/inserttoken(_:at:)

# insertToken(\_:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds a search token at a specific index.

## Declaration

```swift
func insertToken(_ token: UISearchToken, at tokenIndex: Int)
```

## Parameters

- `token`: The search token to be inserted.
- `tokenIndex`: Within the [tokens](tokens.md) array, the index at which to insert the token.

<a id="Discussion"></a>

## Discussion

If you’re converting part of the search field’s text into a token, use [replaceTextualPortion(of:with:at:)](replacetextualportion%28of_with_at_%29.md).

## See Also

### Adding and removing tokens

- [tokens](tokens.md): The collection of tokens in the search text field.
- [removeToken(at:)](removetoken%28at_%29.md): Removes a particular search token from the search text field.

# insertToken:atIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds a search token at a specific index.

## Declaration

```objectivec
- (void) insertToken:(UISearchToken *) token atIndex:(NSInteger) tokenIndex;
```

## Parameters

- `token`: The search token to be inserted.
- `tokenIndex`: Within the [tokens](tokens.md) array, the index at which to insert the token.

<a id="Discussion"></a>

## Discussion

If you’re converting part of the search field’s text into a token, use [replaceTextualPortionOfRange:withToken:atIndex:](replacetextualportion%28of_with_at_%29.md).

## See Also

### Adding and removing tokens

- [tokens](tokens.md): The collection of tokens in the search text field.
- [removeTokenAtIndex:](removetoken%28at_%29.md): Removes a particular search token from the search text field.
