> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/editedmask](https://developer.apple.com/documentation/appkit/nstextstorage/editedmask)

# editedMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A mask that describes the kinds of edits pending for the text storage object.

## Declaration

```swift
var editedMask: NSTextStorageEditActions { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates pending changes for attributes, characters, or both. Use the C bitwise AND operator to test the value against the [editedAttributes](../nstextstorageeditactions/editedattributes.md) or [editedCharacters](../nstextstorageeditactions/editedcharacters.md) constants; testing for equality fails if you add additional mask flags later. The text storage object’s associated delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedRange](editedrange.md): The range of text that contains changes.
- [changeInLength](changeinlength.md): The difference between the current length of the edited range and its length before editing.

# editedMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A mask that describes the kinds of edits pending for the text storage object.

## Declaration

```objectivec
@property (readonly) NSTextStorageEditActions editedMask;
```

<a id="Discussion"></a>

## Discussion

This property indicates pending changes for attributes, characters, or both. Use the C bitwise AND operator to test the value against the [NSTextStorageEditedAttributes](../nstextstorageeditactions/editedattributes.md) or [NSTextStorageEditedCharacters](../nstextstorageeditactions/editedcharacters.md) constants; testing for equality fails if you add additional mask flags later. The text storage object’s associated delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedRange](editedrange.md): The range of text that contains changes.
- [changeInLength](changeinlength.md): The difference between the current length of the edited range and its length before editing.
