> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/select(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/select(_:))

# select(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Selects the content in your responder.

## Declaration

```swift
optional func select(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Select command from an editing menu. The command is used for the targeted selection of content in a view. For example, a text view uses this to select one or more words in the view and to display the selection interface.

## See Also

### Handling selection commands

- [selectAll(\_:)](selectall%28__%29.md): Selects all of the content in the current responder.

# select: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Selects the content in your responder.

## Declaration

```objectivec
- (void) select:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Select command from an editing menu. The command is used for the targeted selection of content in a view. For example, a text view uses this to select one or more words in the view and to display the selection interface.

## See Also

### Handling selection commands

- [selectAll:](selectall%28__%29.md): Selects all of the content in the current responder.
