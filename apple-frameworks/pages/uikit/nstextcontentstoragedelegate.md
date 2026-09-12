> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstoragedelegate](https://developer.apple.com/documentation/uikit/nstextcontentstoragedelegate)

# NSTextContentStorageDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The optional methods that delegates of content storage objects implement to handle content processing.

## Declaration

```swift
protocol NSTextContentStorageDelegate : NSTextContentManagerDelegate
```

## Topics

### Working with paragraphs

- [textContentStorage(\_:textParagraphWith:)](nstextcontentstoragedelegate/textcontentstorage%28__textparagraphwith_%29.md): Returns a custom paragraph for a range that you provide from the object’s attributed string.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTextContentManagerDelegate](nstextcontentmanagerdelegate.md)

## See Also

### Accessing paragraphs

- [delegate](nstextcontentstorage/delegate.md): The delegate for the content storage object.

# NSTextContentStorageDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The optional methods that delegates of content storage objects implement to handle content processing.

## Declaration

```objectivec
@protocol NSTextContentStorageDelegate <NSTextContentManagerDelegate>
```

## Topics

### Working with paragraphs

- [textContentStorage:textParagraphWithRange:](nstextcontentstoragedelegate/textcontentstorage%28__textparagraphwith_%29.md): Returns a custom paragraph for a range that you provide from the object’s attributed string.

## Relationships

### Inherits From

- [NSTextContentManagerDelegate](nstextcontentmanagerdelegate.md)

## See Also

### Accessing paragraphs

- [delegate](nstextcontentstorage/delegate.md): The delegate for the content storage object.
