> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchtoolbaritem/endsearchinteraction()](https://developer.apple.com/documentation/appkit/nssearchtoolbaritem/endsearchinteraction())

# endSearchInteraction() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Ends a search interaction by giving up the first responder and adjusting the size of the search field to the available width for the toolbar item if necessary.

## Declaration

```swift
func endSearchInteraction()
```

<a id="Discussion"></a>

## Discussion

Use [beginSearchInteraction()](beginsearchinteraction%28%29.md) and [endSearchInteraction()](endsearchinteraction%28%29.md) to programmatically control a search.

## See Also

### Controlling search interactions

- [beginSearchInteraction()](beginsearchinteraction%28%29.md): Starts a search interaction and moves the keyboard focus to the search field.

# endSearchInteraction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Ends a search interaction by giving up the first responder and adjusting the size of the search field to the available width for the toolbar item if necessary.

## Declaration

```objectivec
- (void) endSearchInteraction;
```

<a id="Discussion"></a>

## Discussion

Use [beginSearchInteraction](beginsearchinteraction%28%29.md) and [endSearchInteraction](endsearchinteraction%28%29.md) to programmatically control a search.

## See Also

### Controlling search interactions

- [beginSearchInteraction](beginsearchinteraction%28%29.md): Starts a search interaction and moves the keyboard focus to the search field.
