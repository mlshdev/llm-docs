> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontroller/configuration-swift.class](https://developer.apple.com/documentation/uikit/uitextformattingviewcontroller/configuration-swift.class)

# UITextFormattingViewController.Configuration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 26.0+

Text formatting view controller configuration object.

## Declaration

```swift
class Configuration
```

## Topics

### Initializers

- [init()](configuration-swift.class/init%28%29.md): Creates a default configuration with most common text formatting options.
- [init(coder:)](configuration-swift.class/init%28coder_%29.md)
- [init(groups:)](configuration-swift.class/init%28groups_%29.md): Creates a configuration object with provided component groups.

### Instance Properties

- [fontPickerConfiguration](configuration-swift.class/fontpickerconfiguration.md): Configuration object that will be used to customize `UIFontPickerViewController` if presented by `UITextFormattingViewController`.
- [formattingStyles](configuration-swift.class/formattingstyles.md)
- [groups](configuration-swift.class/groups.md): Component groups displayed by text formatting view.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Classes

- [UITextFormattingViewController.Component](component.md): Defines text formatting view component.
- [UITextFormattingViewController.ComponentGroup](componentgroup.md): Defines grouping of text formatting components in view.

# UITextFormattingViewControllerConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Text formatting view controller configuration object.

## Declaration

```objectivec
@interface UITextFormattingViewControllerConfiguration : NSObject
```

## Topics

### Instance Properties

- [fontPickerConfiguration](configuration-swift.class/fontpickerconfiguration.md): Configuration object that will be used to customize `UIFontPickerViewController` if presented by `UITextFormattingViewController`.
- [groups](configuration-swift.class/groups.md): Component groups displayed by text formatting view.
- [formattingStyles](../uitextformattingviewcontrollerconfiguration/formattingstyles.md): Configurations of formatting styles available in text formatting view.

### Instance Methods

- [init](configuration-swift.class/init%28%29.md): Creates a default configuration with most common text formatting options.
- [initWithGroups:](configuration-swift.class/init%28groups_%29.md): Creates a configuration object with provided component groups.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Classes

- [UITextFormattingViewControllerComponent](component.md): Defines text formatting view component.
- [UITextFormattingViewControllerComponentGroup](componentgroup.md): Defines grouping of text formatting components in view.
- [UITextFormattingViewControllerChangeValue](../uitextformattingviewcontrollerchangevalue.md): Describes text formatting change that is a result of user action. Contains type of change, any associated value that may be applicable to that change.
- [UITextFormattingViewControllerFormattingDescriptor](../uitextformattingviewcontrollerformattingdescriptor.md): Object that represents current text formatting state. This can apply to formatting state of some selected range of text or currently applicable input formatting.
- [UITextFormattingViewControllerFormattingStyle](../uitextformattingviewcontrollerformattingstyle.md): Type that defines formatting style presented in text formatting view.
