> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanagerdelegate](https://developer.apple.com/documentation/appkit/nstextcontentmanagerdelegate)

# NSTextContentManagerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

The optional methods that delegates of content manager objects implement for customizing or validating text elements.

## Declaration

```swift
protocol NSTextContentManagerDelegate : NSObjectProtocol
```

## Topics

### Finding a text element at a specific location

- [textContentManager(\_:textElementAt:)](nstextcontentmanagerdelegate/textcontentmanager%28__textelementat_%29.md): The method the framework calls to return the text element at a specific location.

### Validating a text element

- [textContentManager(\_:shouldEnumerate:options:)](nstextcontentmanagerdelegate/textcontentmanager%28__shouldenumerate_options_%29.md): Returns a Boolean value that indicates whether the framework should skip this text element in the enumeration.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSTextContentStorageDelegate](nstextcontentstoragedelegate.md)

## See Also

### Customizing and validating text elements

- [delegate](nstextcontentmanager/delegate.md): The delegate for the content manager object.
- [NSTextContentManager.EnumerationOptions](nstextcontentmanager/enumerationoptions.md): Values that control the order in which the framework enumerates text elements.

# NSTextContentManagerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

The optional methods that delegates of content manager objects implement for customizing or validating text elements.

## Declaration

```objectivec
@protocol NSTextContentManagerDelegate <NSObject>
```

## Topics

### Finding a text element at a specific location

- [textContentManager:textElementAtLocation:](nstextcontentmanagerdelegate/textcontentmanager%28__textelementat_%29.md): The method the framework calls to return the text element at a specific location.

### Validating a text element

- [textContentManager:shouldEnumerateTextElement:options:](nstextcontentmanagerdelegate/textcontentmanager%28__shouldenumerate_options_%29.md): Returns a Boolean value that indicates whether the framework should skip this text element in the enumeration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSTextContentStorageDelegate](nstextcontentstoragedelegate.md)

## See Also

### Customizing and validating text elements

- [delegate](nstextcontentmanager/delegate.md): The delegate for the content manager object.
- [NSTextContentManagerEnumerationOptions](nstextcontentmanager/enumerationoptions.md): Values that control the order in which the framework enumerates text elements.
