> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcustomcontent/importance-swift.enum](https://developer.apple.com/documentation/accessibility/axcustomcontent/importance-swift.enum)

# AXCustomContent.Importance (Swift)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Objects that control the timing of content output.

## Declaration

```swift
enum Importance
```

## Topics

### Creating a content importance enumeration

- [init(rawValue:)](importance-swift.enum/init%28rawvalue_%29.md)

### Setting content importance

- [AXCustomContent.Importance.default](importance-swift.enum/default.md): Output the content to the user on demand.
- [AXCustomContent.Importance.high](importance-swift.enum/high.md): Output the content to the user immediately.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining custom content

- [label](label.md): A localized string that identifies the label for this content.
- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](value.md): A localized string that provides a value for the label.
- [attributedValue](attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.

# AXCustomContentImportance (Objective-C)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Objects that control the timing of content output.

## Declaration

```objectivec
enum AXCustomContentImportance : NSUInteger;
```

## Topics

### Setting content importance

- [AXCustomContentImportanceDefault](importance-swift.enum/default.md): Output the content to the user on demand.
- [AXCustomContentImportanceHigh](importance-swift.enum/high.md): Output the content to the user immediately.

## See Also

### Defining custom content

- [label](label.md): A localized string that identifies the label for this content.
- [attributedLabel](attributedlabel.md): A localized attributed string that identifies the label for this content.
- [value](value.md): A localized string that provides a value for the label.
- [attributedValue](attributedvalue.md): A localized attributed string that provides a value for the label.
- [importance](importance-swift.property.md): An object that determines when to output custom accessibility content.
