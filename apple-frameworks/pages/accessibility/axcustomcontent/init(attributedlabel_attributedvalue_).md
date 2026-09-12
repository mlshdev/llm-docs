> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcustomcontent/init(attributedlabel:attributedvalue:)](https://developer.apple.com/documentation/accessibility/axcustomcontent/init(attributedlabel:attributedvalue:))

# init(attributedLabel:attributedValue:) (Swift)

**Framework:** Accessibility  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates new custom content with an attributed string and attributed value.

## Declaration

```swift
convenience init(attributedLabel label: NSAttributedString, attributedValue value: NSAttributedString)
```

## Parameters

- `label`: A localized attributed string that identifies the label for this content.
- `value`: A localized attributed string that provides a value for the label.

## See Also

### Creating custom content

- [init(label:value:)](init%28label_value_%29.md): Creates new custom content with a label and value.
- [init(coder:)](init%28coder_%29.md)

# customContentWithAttributedLabel:attributedValue: (Objective-C)

**Framework:** Accessibility  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates new custom content with an attributed string and attributed value.

## Declaration

```objectivec
+ (instancetype) customContentWithAttributedLabel:(NSAttributedString *) label attributedValue:(NSAttributedString *) value;
```

## Parameters

- `label`: A localized attributed string that identifies the label for this content.
- `value`: A localized attributed string that provides a value for the label.

## See Also

### Creating custom content

- [customContentWithLabel:value:](init%28label_value_%29.md): Creates new custom content with a label and value.
