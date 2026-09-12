> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/replacetextualportion(of:with:at:)](https://developer.apple.com/documentation/uikit/uisearchtextfield/replacetextualportion(of:with:at:))

# replaceTextualPortion(of:with:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Converts text in a search field into a search token.

## Declaration

```swift
func replaceTextualPortion(of textRange: UITextRange, with token: UISearchToken, at tokenIndex: Int)
```

## Parameters

- `textRange`: The text to remove.
- `token`: The token to add.
- `tokenIndex`: The location for the added token.

<a id="Discussion"></a>

## Discussion

This method removes any text in the specified range, inserts the provided token at the specified index, and selects the newly inserted token. Prefer using this convenience method over performing each step with other methods. When your app calls [replaceTextualPortion(of:with:at:)](replacetextualportion%28of_with_at_%29.md), UIKit commits any marked text before modifying the text, and creates a single undo group.

This method doesn’t remove any tokens in the `textRange`, so you don’t have to manually trim the [selectedTextRange](../uitextinput/selectedtextrange.md) before you use it in this method.

## See Also

### Converting text into tokens

- [textualRange](textualrange.md): The range of the field’s text content.

# replaceTextualPortionOfRange:withToken:atIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Converts text in a search field into a search token.

## Declaration

```objectivec
- (void) replaceTextualPortionOfRange:(UITextRange *) textRange withToken:(UISearchToken *) token atIndex:(NSUInteger) tokenIndex;
```

## Parameters

- `textRange`: The text to remove.
- `token`: The token to add.
- `tokenIndex`: The location for the added token.

<a id="Discussion"></a>

## Discussion

This method removes any text in the specified range, inserts the provided token at the specified index, and selects the newly inserted token. Prefer using this convenience method over performing each step with other methods. When your app calls [replaceTextualPortionOfRange:withToken:atIndex:](replacetextualportion%28of_with_at_%29.md), UIKit commits any marked text before modifying the text, and creates a single undo group.

This method doesn’t remove any tokens in the `textRange`, so you don’t have to manually trim the [selectedTextRange](../uitextinput/selectedtextrange.md) before you use it in this method.

## See Also

### Converting text into tokens

- [textualRange](textualrange.md): The range of the field’s text content.
