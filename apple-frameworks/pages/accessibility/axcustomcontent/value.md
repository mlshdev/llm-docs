> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcustomcontent/value](https://developer.apple.com/documentation/accessibility/axcustomcontent/value)

# value (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized string that provides a value for the label.

## Declaration

```swift
var value: String { get }
```

<a id="discussion"></a>

## Discussion

Make the value succinct to work well with assistive technology. For example, either `Portrait` or `Landscape` is an appropriate content value for an `Orientation` label on a photo.

## See Also

### Defining custom content

- [label](label.md): A localized string that identifies the label for this content.
- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [attributedValue](attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContent.Importance](importance-swift.enum.md): Objects that control the timing of content output.

# value (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized string that provides a value for the label.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * value;
```

<a id="discussion"></a>

## Discussion

Make the value succinct to work well with assistive technology. For example, either `Portrait` or `Landscape` is an appropriate content value for an `Orientation` label on a photo.

## See Also

### Defining custom content

- [label](label.md): A localized string that identifies the label for this content.
- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [attributedValue](attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.
- [AXCustomContentImportance](importance-swift.enum.md): Objects that control the timing of content output.
