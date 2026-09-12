> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/editedmask](https://developer.apple.com/documentation/uikit/nstextstorage/editedmask)

# editedMask (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A mask that describes the kinds of edits pending for the text storage object.

## Declaration

```swift
var editedMask: NSTextStorage.EditActions { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates pending changes for attributes, characters, or both. Use the C bitwise AND operator to test the value against the [editedAttributes](editactions/editedattributes.md) or [editedCharacters](editactions/editedcharacters.md) constants; testing for equality fails if you add additional mask flags later. The text storage object’s associated delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedRange](editedrange.md): The range of text that contains changes.
- [changeInLength](changeinlength.md): The difference between the current length of the edited range and its length before editing.

# editedMask (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A mask that describes the kinds of edits pending for the text storage object.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTextStorageEditActions editedMask;
```

<a id="Discussion"></a>

## Discussion

This property indicates pending changes for attributes, characters, or both. Use the C bitwise AND operator to test the value against the [NSTextStorageEditedAttributes](editactions/editedattributes.md) or [NSTextStorageEditedCharacters](editactions/editedcharacters.md) constants; testing for equality fails if you add additional mask flags later. The text storage object’s associated delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedRange](editedrange.md): The range of text that contains changes.
- [changeInLength](changeinlength.md): The difference between the current length of the edited range and its length before editing.
