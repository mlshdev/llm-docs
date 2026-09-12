> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcustomcontent/label](https://developer.apple.com/documentation/accessibility/axcustomcontent/label)

# label (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized string that identifies the label for this content.

## Declaration

```swift
var label: String { get }
```

<a id="discussion"></a>

## Discussion

Make the label succinct to work well with assistive technology. For example, `Orientation` is an appropriate name for photo information.

## See Also

### Defining custom content

- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](value.md): A localized string that provides a value for the label.
- [attributedValue](attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContent.Importance](importance-swift.enum.md): Objects that control the timing of content output.

# label (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized string that identifies the label for this content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * label;
```

<a id="discussion"></a>

## Discussion

Make the label succinct to work well with assistive technology. For example, `Orientation` is an appropriate name for photo information.

## See Also

### Defining custom content

- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](value.md): A localized string that provides a value for the label.
- [attributedValue](attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContentImportance](importance-swift.enum.md): Objects that control the timing of content output.
