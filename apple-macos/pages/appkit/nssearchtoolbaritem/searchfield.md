> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchtoolbaritem/searchfield](https://developer.apple.com/documentation/appkit/nssearchtoolbaritem/searchfield)

# searchField (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The search field inside the toolbar item.

## Declaration

```swift
var searchField: NSSearchField { get set }
```

<a id="Discussion"></a>

## Discussion

When you set `searchField` to `nil`, it uses the default configuration for the toolbar item, and inherits the item’s properties and layout constraints. However, if you want to customize the search field, you’ll need to add those settings before assigning it to the toolbar item. For more information about customizing a search field, see [NSSearchField](../nssearchfield.md).

## See Also

### Configuring a search item

- [preferredWidthForSearchField](preferredwidthforsearchfield.md): The preferred width for the toolbar item when it has keyboard focus.
- [resignsFirstResponderWithCancel](resignsfirstresponderwithcancel.md): A Boolean value that enables the cancel button in the search field to resign the first responder in addition to clearing the contents.

# searchField (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The search field inside the toolbar item.

## Declaration

```objectivec
@property (strong) NSSearchField * searchField;
```

<a id="Discussion"></a>

## Discussion

When you set `searchField` to `nil`, it uses the default configuration for the toolbar item, and inherits the item’s properties and layout constraints. However, if you want to customize the search field, you’ll need to add those settings before assigning it to the toolbar item. For more information about customizing a search field, see [NSSearchField](../nssearchfield.md).

## See Also

### Configuring a search item

- [preferredWidthForSearchField](preferredwidthforsearchfield.md): The preferred width for the toolbar item when it has keyboard focus.
- [resignsFirstResponderWithCancel](resignsfirstresponderwithcancel.md): A Boolean value that enables the cancel button in the search field to resign the first responder in addition to clearing the contents.
