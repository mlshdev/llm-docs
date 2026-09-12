> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/edited(_:range:changeinlength:)](https://developer.apple.com/documentation/uikit/nstextstorage/edited(_:range:changeinlength:))

# edited(\_:range:changeInLength:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tracks changes made to the text storage object, allowing the text storage to record the full extent of changes.

## Declaration

```swift
func edited(_ editedMask: NSTextStorage.EditActions, range editedRange: NSRange, changeInLength delta: Int)
```

## Parameters

- `editedMask`: A mask specifying the nature of the changes. You make the value by combining with the C bitwise OR operator the options described in [NSTextStorage.EditActions](editactions.md).
- `editedRange`: The extent of characters affected before the change took place.
- `delta`: The number of characters added to or removed from `oldRange`. If no characters where edited as noted by `mask`, its value is irrelevant and undefined. For example, when replacing “The” with “Several” in the string “The files couldn’t be saved”, `oldRange` is {0, 3} and `lengthChange` is 4.

<a id="Discussion"></a>

## Discussion

This method invokes [processEditing()](processediting%28%29.md) if there are no outstanding [beginEditing()](../../foundation/nsmutableattributedstring/beginediting%28%29.md) calls. `NSTextStorage` invokes this method automatically each time it makes a change to its attributed string. Subclasses that override or add methods that alter their attributed strings directly should invoke this method after making those changes; otherwise you shouldn’t invoke this method. The information accumulated with this method is then used in an invocation of [processEditing()](processediting%28%29.md) to report the affected portion of the receiver.

The methods for querying changes, [editedRange](editedrange.md) and [changeInLength](changeinlength.md), indicate the extent of characters affected after the change. This method expects the characters before the change because that information is readily available as the argument to whatever method performs the change (such as [replaceCharacters(in:with:)](../../foundation/nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md)).

## See Also

### Managing edits

- [processEditing()](processediting%28%29.md): Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.

# edited:range:changeInLength: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tracks changes made to the text storage object, allowing the text storage to record the full extent of changes.

## Declaration

```objectivec
- (void) edited:(NSTextStorageEditActions) editedMask range:(NSRange) editedRange changeInLength:(NSInteger) delta;
```

## Parameters

- `editedMask`: A mask specifying the nature of the changes. You make the value by combining with the C bitwise OR operator the options described in [NSTextStorageEditActions](editactions.md).
- `editedRange`: The extent of characters affected before the change took place.
- `delta`: The number of characters added to or removed from `oldRange`. If no characters where edited as noted by `mask`, its value is irrelevant and undefined. For example, when replacing “The” with “Several” in the string “The files couldn’t be saved”, `oldRange` is {0, 3} and `lengthChange` is 4.

<a id="Discussion"></a>

## Discussion

This method invokes [processEditing](processediting%28%29.md) if there are no outstanding [beginEditing](../../foundation/nsmutableattributedstring/beginediting%28%29.md) calls. `NSTextStorage` invokes this method automatically each time it makes a change to its attributed string. Subclasses that override or add methods that alter their attributed strings directly should invoke this method after making those changes; otherwise you shouldn’t invoke this method. The information accumulated with this method is then used in an invocation of [processEditing](processediting%28%29.md) to report the affected portion of the receiver.

The methods for querying changes, [editedRange](editedrange.md) and [changeInLength](changeinlength.md), indicate the extent of characters affected after the change. This method expects the characters before the change because that information is readily available as the argument to whatever method performs the change (such as [replaceCharactersInRange:withString:](../../foundation/nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md)).

## See Also

### Managing edits

- [processEditing](processediting%28%29.md): Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.
