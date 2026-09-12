> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcustomcontent/init(label:value:)](https://developer.apple.com/documentation/accessibility/axcustomcontent/init(label:value:))

# init(label:value:) (Swift)

**Framework:** Accessibility  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates new custom content with a label and value.

## Declaration

```swift
convenience init(label: String, value: String)
```

## Parameters

- `label`: A localized string that identifies the label for this content.
- `value`: A localized string that provides a value for the label.

## See Also

### Creating custom content

- [init(attributedLabel:attributedValue:)](init%28attributedlabel_attributedvalue_%29.md): Creates new custom content with an attributed string and attributed value.
- [init(coder:)](init%28coder_%29.md)

# customContentWithLabel:value: (Objective-C)

**Framework:** Accessibility  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates new custom content with a label and value.

## Declaration

```objectivec
+ (instancetype) customContentWithLabel:(NSString *) label value:(NSString *) value;
```

## Parameters

- `label`: A localized string that identifies the label for this content.
- `value`: A localized string that provides a value for the label.

## See Also

### Creating custom content

- [customContentWithAttributedLabel:attributedValue:](init%28attributedlabel_attributedvalue_%29.md): Creates new custom content with an attributed string and attributed value.
