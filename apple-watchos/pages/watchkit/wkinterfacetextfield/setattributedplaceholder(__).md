> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetextfield/setattributedplaceholder(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/setattributedplaceholder(_:))

# setAttributedPlaceholder(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text field’s placeholder using styled text.

## Declaration

```swift
func setAttributedPlaceholder(_ attributedPlaceholder: NSAttributedString?)
```

<a id="Discussion"></a>

## Discussion

Use placeholders to describe the text field’s expected content to the user. An empty text field displays the placeholder, and any entered text hides the placeholder. The system automatically formats the placeholder, making it obvious that it’s not a valid text entry.

## See Also

### Setting a Placeholder

- [setPlaceholder(\_:)](setplaceholder%28__%29.md): Sets the text field’s placeholder.

# setAttributedPlaceholder: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text field’s placeholder using styled text.

## Declaration

```objectivec
- (void) setAttributedPlaceholder:(NSAttributedString *) attributedPlaceholder;
```

<a id="Discussion"></a>

## Discussion

Use placeholders to describe the text field’s expected content to the user. An empty text field displays the placeholder, and any entered text hides the placeholder. The system automatically formats the placeholder, making it obvious that it’s not a valid text entry.

## See Also

### Setting a Placeholder

- [setPlaceholder:](setplaceholder%28__%29.md): Sets the text field’s placeholder.
