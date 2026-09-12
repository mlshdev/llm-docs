> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/changeinlength](https://developer.apple.com/documentation/appkit/nstextstorage/changeinlength)

# changeInLength (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The difference between the current length of the edited range and its length before editing.

## Declaration

```swift
var changeInLength: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects difference between the current length of the edited range and its length before editing began—that is, before the first call to the [beginEditing()](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/beginediting%28%29) method or a single call to the[edited(\_:range:changeInLength:)](edited%28__range_changeinlength_%29.md) method. This difference is accumulated with each call to the [edited(\_:range:changeInLength:)](edited%28__range_changeinlength_%29.md) method, until the changes are finally processed.

The text storage object’s delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedMask](editedmask.md): A mask that describes the kinds of edits pending for the text storage object.
- [editedRange](editedrange.md): The range of text that contains changes.

# changeInLength (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The difference between the current length of the edited range and its length before editing.

## Declaration

```objectivec
@property (readonly) NSInteger changeInLength;
```

<a id="Discussion"></a>

## Discussion

This property reflects difference between the current length of the edited range and its length before editing began—that is, before the first call to the [beginEditing](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/beginediting%28%29) method or a single call to the[edited:range:changeInLength:](edited%28__range_changeinlength_%29.md) method. This difference is accumulated with each call to the [edited:range:changeInLength:](edited%28__range_changeinlength_%29.md) method, until the changes are finally processed.

The text storage object’s delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedMask](editedmask.md): A mask that describes the kinds of edits pending for the text storage object.
- [editedRange](editedrange.md): The range of text that contains changes.
