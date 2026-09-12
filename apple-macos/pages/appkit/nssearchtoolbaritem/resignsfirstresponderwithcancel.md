> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchtoolbaritem/resignsfirstresponderwithcancel](https://developer.apple.com/documentation/appkit/nssearchtoolbaritem/resignsfirstresponderwithcancel)

# resignsFirstResponderWithCancel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that enables the cancel button in the search field to resign the first responder in addition to clearing the contents.

## Declaration

```swift
var resignsFirstResponderWithCancel: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `true`. If set to `false`, the cancel button only clears the contents of the search field.

## See Also

### Configuring a search item

- [preferredWidthForSearchField](preferredwidthforsearchfield.md): The preferred width for the toolbar item when it has keyboard focus.
- [searchField](searchfield.md): The search field inside the toolbar item.

# resignsFirstResponderWithCancel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that enables the cancel button in the search field to resign the first responder in addition to clearing the contents.

## Declaration

```objectivec
@property BOOL resignsFirstResponderWithCancel;
```

<a id="Discussion"></a>

## Discussion

The default value is `true`. If set to `false`, the cancel button only clears the contents of the search field.

## See Also

### Configuring a search item

- [preferredWidthForSearchField](preferredwidthforsearchfield.md): The preferred width for the toolbar item when it has keyboard focus.
- [searchField](searchfield.md): The search field inside the toolbar item.
