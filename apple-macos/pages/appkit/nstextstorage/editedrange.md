> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/editedrange](https://developer.apple.com/documentation/appkit/nstextstorage/editedrange)

# editedRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The range of text that contains changes.

## Declaration

```swift
var editedRange: NSRange { get }
```

<a id="Discussion"></a>

## Discussion

The specified range can reflect changes to characters or attributes. The text storage object’s delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedMask](editedmask.md): A mask that describes the kinds of edits pending for the text storage object.
- [changeInLength](changeinlength.md): The difference between the current length of the edited range and its length before editing.

# editedRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The range of text that contains changes.

## Declaration

```objectivec
@property (readonly) NSRange editedRange;
```

<a id="Discussion"></a>

## Discussion

The specified range can reflect changes to characters or attributes. The text storage object’s delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedMask](editedmask.md): A mask that describes the kinds of edits pending for the text storage object.
- [changeInLength](changeinlength.md): The difference between the current length of the edited range and its length before editing.
