> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchtoolbaritem/beginsearchinteraction()](https://developer.apple.com/documentation/appkit/nssearchtoolbaritem/beginsearchinteraction())

# beginSearchInteraction() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Starts a search interaction and moves the keyboard focus to the search field.

## Declaration

```swift
func beginSearchInteraction()
```

<a id="Discussion"></a>

## Discussion

If the system displays a compressed search field, starting the search interaction expands the field to the width stored in the [preferredWidthForSearchField](preferredwidthforsearchfield.md) property and moves the keyboard focus into the search field. Use [beginSearchInteraction()](beginsearchinteraction%28%29.md) and [endSearchInteraction()](endsearchinteraction%28%29.md) to programmatically control a search.

## See Also

### Controlling search interactions

- [endSearchInteraction()](endsearchinteraction%28%29.md): Ends a search interaction by giving up the first responder and adjusting the size of the search field to the available width for the toolbar item if necessary.

# beginSearchInteraction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Starts a search interaction and moves the keyboard focus to the search field.

## Declaration

```objectivec
- (void) beginSearchInteraction;
```

<a id="Discussion"></a>

## Discussion

If the system displays a compressed search field, starting the search interaction expands the field to the width stored in the [preferredWidthForSearchField](preferredwidthforsearchfield.md) property and moves the keyboard focus into the search field. Use [beginSearchInteraction](beginsearchinteraction%28%29.md) and [endSearchInteraction](endsearchinteraction%28%29.md) to programmatically control a search.

## See Also

### Controlling search interactions

- [endSearchInteraction](endsearchinteraction%28%29.md): Ends a search interaction by giving up the first responder and adjusting the size of the search field to the available width for the toolbar item if necessary.
