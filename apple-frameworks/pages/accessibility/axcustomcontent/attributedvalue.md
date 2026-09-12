> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcustomcontent/attributedvalue](https://developer.apple.com/documentation/accessibility/axcustomcontent/attributedvalue)

# attributedValue (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized attributed string that provides a value for the label.

## Declaration

```swift
@NSCopying var attributedValue: NSAttributedString { get }
```

## See Also

### Defining custom content

- [label](label.md): A localized string that identifies the label for this content.
- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](value.md): A localized string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContent.Importance](importance-swift.enum.md): Objects that control the timing of content output.

# attributedValue (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized attributed string that provides a value for the label.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSAttributedString * attributedValue;
```

## See Also

### Defining custom content

- [label](label.md): A localized string that identifies the label for this content.
- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](value.md): A localized string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContentImportance](importance-swift.enum.md): Objects that control the timing of content output.
