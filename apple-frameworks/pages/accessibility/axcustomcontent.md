> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcustomcontent](https://developer.apple.com/documentation/accessibility/axcustomcontent)

# AXCustomContent (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Objects that define custom content and the timing of its output.

## Declaration

```swift
class AXCustomContent
```

<a id="overview"></a>

## Overview

An `AXCustomContent` object contains the accessibility strings for the labels you apply to your accessibility content. Combine them with the [AXCustomContentProvider](axcustomcontentprovider.md) protocol to allow your users to experience the content in a more appropriate manner for each assistive technology.

## Topics

### Creating custom content

- [init(attributedLabel:attributedValue:)](axcustomcontent/init%28attributedlabel_attributedvalue_%29.md): Creates new custom content with an attributed string and attributed value.
- [init(label:value:)](axcustomcontent/init%28label_value_%29.md): Creates new custom content with a label and value.
- [init(coder:)](axcustomcontent/init%28coder_%29.md)

### Defining custom content

- [label](axcustomcontent/label.md): A localized string that identifies the label for this content.
- [attributedLabel](axcustomcontent/attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](axcustomcontent/value.md): A localized string that provides a value for the label.
- [attributedValue](axcustomcontent/attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](axcustomcontent/importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContent.Importance](axcustomcontent/importance-swift.enum.md): Objects that control the timing of content output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom accessibility content

- [AXCustomContentProvider](axcustomcontentprovider.md): The interface for customizing the accessibility content.
- [AXCustomContentReturnBlock](axcustomcontentreturnblock.md)

# AXCustomContent (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Objects that define custom content and the timing of its output.

## Declaration

```objectivec
@interface AXCustomContent : NSObject
```

<a id="overview"></a>

## Overview

An `AXCustomContent` object contains the accessibility strings for the labels you apply to your accessibility content. Combine them with the [AXCustomContentProvider](axcustomcontentprovider.md) protocol to allow your users to experience the content in a more appropriate manner for each assistive technology.

## Topics

### Creating custom content

- [customContentWithAttributedLabel:attributedValue:](axcustomcontent/init%28attributedlabel_attributedvalue_%29.md): Creates new custom content with an attributed string and attributed value.
- [customContentWithLabel:value:](axcustomcontent/init%28label_value_%29.md): Creates new custom content with a label and value.

### Defining custom content

- [label](axcustomcontent/label.md): A localized string that identifies the label for this content.
- [attributedLabel](axcustomcontent/attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](axcustomcontent/value.md): A localized string that provides a value for the label.
- [attributedValue](axcustomcontent/attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](axcustomcontent/importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContentImportance](axcustomcontent/importance-swift.enum.md): Objects that control the timing of content output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Custom accessibility content

- [AXCustomContentProvider](axcustomcontentprovider.md): The interface for customizing the accessibility content.
- [AXCustomContentReturnBlock](axcustomcontentreturnblock.md)
