> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstoragedelegate](https://developer.apple.com/documentation/uikit/nstextstoragedelegate)

# NSTextStorageDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The optional methods that delegates of text storage objects implement to handle text-edit processing.

## Declaration

```swift
protocol NSTextStorageDelegate : NSObjectProtocol
```

## Topics

### Processing edit actions

- [textStorage(\_:willProcessEditing:range:changeInLength:)](nstextstoragedelegate/textstorage%28__willprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object is about to process edits.
- [textStorage(\_:didProcessEditing:range:changeInLength:)](nstextstoragedelegate/textstorage%28__didprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object has finished processing edits.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Processing the editing actions

- [delegate](nstextstorage/delegate.md): The delegate for the text storage object.

# NSTextStorageDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The optional methods that delegates of text storage objects implement to handle text-edit processing.

## Declaration

```objectivec
@protocol NSTextStorageDelegate <NSObject>
```

## Topics

### Processing edit actions

- [textStorage:willProcessEditing:range:changeInLength:](nstextstoragedelegate/textstorage%28__willprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object is about to process edits.
- [textStorage:didProcessEditing:range:changeInLength:](nstextstoragedelegate/textstorage%28__didprocessediting_range_changeinlength_%29.md): The method the framework calls when a text storage object has finished processing edits.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Processing the editing actions

- [delegate](nstextstorage/delegate.md): The delegate for the text storage object.
