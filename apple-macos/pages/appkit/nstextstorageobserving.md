> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorageobserving](https://developer.apple.com/documentation/appkit/nstextstorageobserving)

# NSTextStorageObserving (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Optional methods that delegates implement to handle editing and transaction processing.

## Declaration

```swift
protocol NSTextStorageObserving : NSObjectProtocol
```

## Topics

### Accessing the text storage

- [textStorage](nstextstorageobserving/textstorage.md)

### Managing the editing process

- [performEditingTransaction(for:using:)](nstextstorageobserving/performeditingtransaction%28for_using_%29.md)
- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](nstextstorageobserving/processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextContentStorage](nstextcontentstorage.md)

## See Also

### Accessing the storage controller

- [textStorageObserver](nstextstorage/textstorageobserver.md): The observer for the text storage object.

# NSTextStorageObserving (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Optional methods that delegates implement to handle editing and transaction processing.

## Declaration

```objectivec
@protocol NSTextStorageObserving <NSObject>
```

## Topics

### Accessing the text storage

- [textStorage](nstextstorageobserving/textstorage.md)

### Managing the editing process

- [performEditingTransactionForTextStorage:usingBlock:](nstextstorageobserving/performeditingtransaction%28for_using_%29.md)
- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](nstextstorageobserving/processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextContentStorage](nstextcontentstorage.md)

## See Also

### Accessing the storage controller

- [textStorageObserver](nstextstorage/textstorageobserver.md): The observer for the text storage object.
