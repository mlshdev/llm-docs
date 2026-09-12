> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/buttontype-swift.enum](https://developer.apple.com/documentation/uikit/uibutton/buttontype-swift.enum)

# UIButton.ButtonType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Specifies the style of a button.

## Declaration

```swift
enum ButtonType
```

## Topics

### Constants

- [UIButton.ButtonType.custom](buttontype-swift.enum/custom.md): No button style.
- [UIButton.ButtonType.system](buttontype-swift.enum/system.md): A system style button, such as those shown in navigation bars and toolbars.
- [UIButton.ButtonType.detailDisclosure](buttontype-swift.enum/detaildisclosure.md): A detail disclosure button.
- [UIButton.ButtonType.infoLight](buttontype-swift.enum/infolight.md): An information button that has a light background.
- [UIButton.ButtonType.infoDark](buttontype-swift.enum/infodark.md): An information button that has a dark background.
- [UIButton.ButtonType.contactAdd](buttontype-swift.enum/contactadd.md): A contact add button.
- [UIButton.ButtonType.plain](buttontype-swift.enum/plain.md): A standard system button without a blurred background view.
- [UIButton.ButtonType.close](buttontype-swift.enum/close.md): A close button to dismiss panels and views.
- [roundedRect](buttontype-swift.enum/roundedrect.md): Deprecated. A rounded-rectangle style button.

### Initializers

- [init(rawValue:)](buttontype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating buttons of a specific type

- [init(type:)](init%28type_%29.md): Creates and returns a new button of the specified type.
- [init(type:primaryAction:)](init%28type_primaryaction_%29.md): Creates a new button with the specified type, registers the primary action event, and sets the title and image to the action’s title and image.

# UIButtonType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Specifies the style of a button.

## Declaration

```objectivec
enum UIButtonType : NSInteger;
```

## Topics

### Constants

- [UIButtonTypeCustom](buttontype-swift.enum/custom.md): No button style.
- [UIButtonTypeSystem](buttontype-swift.enum/system.md): A system style button, such as those shown in navigation bars and toolbars.
- [UIButtonTypeDetailDisclosure](buttontype-swift.enum/detaildisclosure.md): A detail disclosure button.
- [UIButtonTypeInfoLight](buttontype-swift.enum/infolight.md): An information button that has a light background.
- [UIButtonTypeInfoDark](buttontype-swift.enum/infodark.md): An information button that has a dark background.
- [UIButtonTypeContactAdd](buttontype-swift.enum/contactadd.md): A contact add button.
- [UIButtonTypePlain](buttontype-swift.enum/plain.md): A standard system button without a blurred background view.
- [UIButtonTypeClose](buttontype-swift.enum/close.md): A close button to dismiss panels and views.
- [UIButtonTypeRoundedRect](buttontype-swift.enum/roundedrect.md): Deprecated. A rounded-rectangle style button.

## See Also

### Creating buttons of a specific type

- [buttonWithType:](init%28type_%29.md): Creates and returns a new button of the specified type.
- [buttonWithType:primaryAction:](buttonwithtype_primaryaction_.md): Creates a new button with the specified type, registers the primary action event, and sets the title and image to the action’s title and image.
