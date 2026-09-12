> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentstoragedelegate](https://developer.apple.com/documentation/appkit/nstextcontentstoragedelegate)

# NSTextContentStorageDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

The optional methods that delegates of content storage objects implement to handle content processing.

## Declaration

```swift
protocol NSTextContentStorageDelegate : NSTextContentManagerDelegate
```

<a id="overview"></a>

## Overview

The optional methods that delegates of content storage objects implement to handle content processing.

## Topics

### Working with paragraphs

- [textContentStorage(\_:textParagraphWith:)](nstextcontentstoragedelegate/textcontentstorage%28__textparagraphwith_%29.md): Returns a custom `NSTextParagraph` for the specified range in the content storage’s attributed string.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTextContentManagerDelegate](nstextcontentmanagerdelegate.md)

## See Also

### Accessing paragraphs

- [delegate](nstextcontentstorage/delegate.md): The delegate for the content storage object.

# NSTextContentStorageDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

The optional methods that delegates of content storage objects implement to handle content processing.

## Declaration

```objectivec
@protocol NSTextContentStorageDelegate <NSTextContentManagerDelegate>
```

<a id="overview"></a>

## Overview

The optional methods that delegates of content storage objects implement to handle content processing.

## Topics

### Working with paragraphs

- [textContentStorage:textParagraphWithRange:](nstextcontentstoragedelegate/textcontentstorage%28__textparagraphwith_%29.md): Returns a custom `NSTextParagraph` for the specified range in the content storage’s attributed string.

## Relationships

### Inherits From

- [NSTextContentManagerDelegate](nstextcontentmanagerdelegate.md)

## See Also

### Accessing paragraphs

- [delegate](nstextcontentstorage/delegate.md): The delegate for the content storage object.
