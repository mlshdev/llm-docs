> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/setplaceholder(_:)

# setPlaceholder(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text field’s placeholder.

## Declaration

```swift
func setPlaceholder(_ placeholder: String?)
```

<a id="Discussion"></a>

## Discussion

Use placeholders to describe the text field’s expected content to the user. An empty text field displays the placeholder, and any entered text hides the placeholder. The system automatically formats the placeholder, making it obvious that it’s not a valid text entry.

## See Also

### Setting a Placeholder

- [setAttributedPlaceholder(\_:)](setattributedplaceholder%28__%29.md): Sets the text field’s placeholder using styled text.

# setPlaceholder: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text field’s placeholder.

## Declaration

```objectivec
- (void) setPlaceholder:(NSString *) placeholder;
```

<a id="Discussion"></a>

## Discussion

Use placeholders to describe the text field’s expected content to the user. An empty text field displays the placeholder, and any entered text hides the placeholder. The system automatically formats the placeholder, making it obvious that it’s not a valid text entry.

## See Also

### Setting a Placeholder

- [setAttributedPlaceholder:](setattributedplaceholder%28__%29.md): Sets the text field’s placeholder using styled text.
