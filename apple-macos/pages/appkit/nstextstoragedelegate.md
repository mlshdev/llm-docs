> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstoragedelegate](https://developer.apple.com/documentation/appkit/nstextstoragedelegate)

# NSTextStorageDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.11+

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

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Processing the editing actions

- [delegate](nstextstorage/delegate.md): The delegate for the text storage object.

# NSTextStorageDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.11+

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

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Processing the editing actions

- [delegate](nstextstorage/delegate.md): The delegate for the text storage object.
