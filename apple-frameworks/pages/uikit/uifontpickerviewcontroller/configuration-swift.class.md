> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller/configuration-swift.class](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/configuration-swift.class)

# UIFontPickerViewController.Configuration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The filters and display settings a font picker view controller uses to set up a font picker.

## Declaration

```swift
@MainActor class Configuration
```

## Topics

### Customizing the font picker’s appearance

- [displayUsingSystemFont](configuration-swift.class/displayusingsystemfont.md): A Boolean value that determines whether to use the system font for all font names in the font picker.

### Filtering available fonts

- [includeFaces](configuration-swift.class/includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredTraits](configuration-swift.class/filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filteredLanguagesPredicate](configuration-swift.class/filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.
- [filterPredicate(forFilteredLanguages:)](configuration-swift.class/filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.

### Instance Properties

- [languageFilter](configuration-swift.class/languagefilter.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Font picker

- [UIFontPickerViewController](../uifontpickerviewcontroller.md): A view controller that manages the interface for selecting a font that the system provides or the user installs.
- [UIFontPickerViewControllerDelegate](../uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.

# UIFontPickerViewControllerConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The filters and display settings a font picker view controller uses to set up a font picker.

## Declaration

```objectivec
@interface UIFontPickerViewControllerConfiguration : NSObject
```

## Topics

### Customizing the font picker’s appearance

- [displayUsingSystemFont](configuration-swift.class/displayusingsystemfont.md): A Boolean value that determines whether to use the system font for all font names in the font picker.

### Filtering available fonts

- [includeFaces](configuration-swift.class/includefaces.md): A Boolean value that determines whether the font picker should allow the user to select from font faces, or just font families.
- [filteredTraits](configuration-swift.class/filteredtraits.md): A predicate to filter fonts based on their traits, like bold, italic, or monospace.
- [filteredLanguagesPredicate](configuration-swift.class/filteredlanguagespredicate.md): Deprecated. A predicate to filter fonts based on the languages they support.
- [filterPredicateForFilteredLanguages:](configuration-swift.class/filterpredicate%28forfilteredlanguages_%29.md): Deprecated. Creates a font picker filter based on language support.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Font picker

- [UIFontPickerViewController](../uifontpickerviewcontroller.md): A view controller that manages the interface for selecting a font that the system provides or the user installs.
- [UIFontPickerViewControllerDelegate](../uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
