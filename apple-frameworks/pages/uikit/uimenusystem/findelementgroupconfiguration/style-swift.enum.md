> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenusystem/findelementgroupconfiguration/style-swift.enum](https://developer.apple.com/documentation/uikit/uimenusystem/findelementgroupconfiguration/style-swift.enum)

# UIMenuSystem.FindElementGroupConfiguration.Style (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents a preference for the structure of Find elements in the main menu.

## Declaration

```swift
enum Style
```

## Topics

### Enumeration Cases

- [UIMenuSystem.FindElementGroupConfiguration.Style.automatic](style-swift.enum/automatic.md): The default preference. Find elements are automatically included based on the platform and other system behaviors.
- [UIMenuSystem.FindElementGroupConfiguration.Style.editableText](style-swift.enum/editabletext.md): Prefer a full set of elements for finding and replacing text, such as Find, Find and Replace, Find Navigation, and so on.
- [UIMenuSystem.FindElementGroupConfiguration.Style.nonEditableText](style-swift.enum/noneditabletext.md): Prefer a set of elements for finding within a non-editable text area
- [UIMenuSystem.FindElementGroupConfiguration.Style.search](style-swift.enum/search.md): Prefer a minimal set of find elements, only consisting of elements to search content in the app.

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a configuration of find elements

- [UIMenuSystem.FindElementGroupConfiguration](../findelementgroupconfiguration.md): Represents a configuration for find elements, should they be present. You don’t create one of these directly. A configuration is provided as part of a `UIMainMenuSystemConfiguration`.

# UIMenuSystemFindElementGroupConfigurationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Represents a preference for the structure of Find elements in the main menu.

## Declaration

```objectivec
enum UIMenuSystemFindElementGroupConfigurationStyle : NSInteger;
```

## Topics

### Enumeration Cases

- [UIMenuSystemFindElementGroupConfigurationStyleAutomatic](style-swift.enum/automatic.md): The default preference. Find elements are automatically included based on the platform and other system behaviors.
- [UIMenuSystemFindElementGroupConfigurationStyleEditableText](style-swift.enum/editabletext.md): Prefer a full set of elements for finding and replacing text, such as Find, Find and Replace, Find Navigation, and so on.
- [UIMenuSystemFindElementGroupConfigurationStyleNonEditableText](style-swift.enum/noneditabletext.md): Prefer a set of elements for finding within a non-editable text area
- [UIMenuSystemFindElementGroupConfigurationStyleSearch](style-swift.enum/search.md): Prefer a minimal set of find elements, only consisting of elements to search content in the app.

## See Also

### Inspecting a configuration of find elements

- [UIMenuSystemFindElementGroupConfiguration](../findelementgroupconfiguration.md): Represents a configuration for find elements, should they be present. You don’t create one of these directly. A configuration is provided as part of a `UIMainMenuSystemConfiguration`.
