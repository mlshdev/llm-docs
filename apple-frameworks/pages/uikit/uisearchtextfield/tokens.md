> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/tokens](https://developer.apple.com/documentation/uikit/uisearchtextfield/tokens)

# tokens (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The collection of tokens in the search text field.

## Declaration

```swift
var tokens: [UISearchToken] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to access existing tokens, or to replace all tokens at once. To convert text in the search field into a token, use [replaceTextualPortion(of:with:at:)](replacetextualportion%28of_with_at_%29.md).

## See Also

### Adding and removing tokens

- [insertToken(\_:at:)](inserttoken%28__at_%29.md): Adds a search token at a specific index.
- [removeToken(at:)](removetoken%28at_%29.md): Removes a particular search token from the search text field.

# tokens (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The collection of tokens in the search text field.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UISearchToken *> * tokens;
```

<a id="Discussion"></a>

## Discussion

Use this property to access existing tokens, or to replace all tokens at once. To convert text in the search field into a token, use [replaceTextualPortionOfRange:withToken:atIndex:](replacetextualportion%28of_with_at_%29.md).

## See Also

### Adding and removing tokens

- [insertToken:atIndex:](inserttoken%28__at_%29.md): Adds a search token at a specific index.
- [removeTokenAtIndex:](removetoken%28at_%29.md): Removes a particular search token from the search text field.
