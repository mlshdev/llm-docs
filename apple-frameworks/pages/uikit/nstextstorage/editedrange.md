> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/editedrange](https://developer.apple.com/documentation/uikit/nstextstorage/editedrange)

# editedRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The range of text that contains changes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSRange editedRange;
```

<a id="Discussion"></a>

## Discussion

The specified range can reflect changes to characters or attributes. The text storage object’s delegate and layout managers can use this information to determine the nature of edits in their respective notification methods.

## See Also

### Determining the nature of changes

- [editedMask](editedmask.md): A mask that describes the kinds of edits pending for the text storage object.
- [changeInLength](changeinlength.md): The difference between the current length of the edited range and its length before editing.
