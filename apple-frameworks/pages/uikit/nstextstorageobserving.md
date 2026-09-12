> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorageobserving](https://developer.apple.com/documentation/uikit/nstextstorageobserving)

# NSTextStorageObserving (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Optional methods that delegates implement to handle editing and transaction processing.

## Declaration

```swift
protocol NSTextStorageObserving : NSObjectProtocol
```

## Topics

### Accessing the text storage

- [textStorage](nstextstorageobserving/textstorage.md): The document text storage object.

### Managing the editing process

- [performEditingTransaction(for:using:)](nstextstorageobserving/performeditingtransaction%28for_using_%29.md): Performs an editing transaction on the text storage.
- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](nstextstorageobserving/processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the observer that the text storage has been edited.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextContentStorage](nstextcontentstorage.md)

## See Also

### Accessing the storage controller

- [textStorageObserver](nstextstorage/textstorageobserver.md): The observer for the text storage object.

# NSTextStorageObserving (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Optional methods that delegates implement to handle editing and transaction processing.

## Declaration

```objectivec
@protocol NSTextStorageObserving <NSObject>
```

## Topics

### Accessing the text storage

- [textStorage](nstextstorageobserving/textstorage.md): The document text storage object.

### Managing the editing process

- [performEditingTransactionForTextStorage:usingBlock:](nstextstorageobserving/performeditingtransaction%28for_using_%29.md): Performs an editing transaction on the text storage.
- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](nstextstorageobserving/processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the observer that the text storage has been edited.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextContentStorage](nstextcontentstorage.md)

## See Also

### Accessing the storage controller

- [textStorageObserver](nstextstorage/textstorageobserver.md): The observer for the text storage object.
