> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/removetoken(at:)](https://developer.apple.com/documentation/uikit/uisearchtextfield/removetoken(at:))

# removeToken(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes a particular search token from the search text field.

## Declaration

```swift
func removeToken(at tokenIndex: Int)
```

## Parameters

- `tokenIndex`: Within the [tokens](tokens.md) array, the index of the token you want to remove.

## See Also

### Adding and removing tokens

- [tokens](tokens.md): The collection of tokens in the search text field.
- [insertToken(\_:at:)](inserttoken%28__at_%29.md): Adds a search token at a specific index.

# removeTokenAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes a particular search token from the search text field.

## Declaration

```objectivec
- (void) removeTokenAtIndex:(NSInteger) tokenIndex;
```

## Parameters

- `tokenIndex`: Within the [tokens](tokens.md) array, the index of the token you want to remove.

## See Also

### Adding and removing tokens

- [tokens](tokens.md): The collection of tokens in the search text field.
- [insertToken:atIndex:](inserttoken%28__at_%29.md): Adds a search token at a specific index.
