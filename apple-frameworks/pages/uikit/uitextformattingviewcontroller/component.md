> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontroller/component](https://developer.apple.com/documentation/uikit/uitextformattingviewcontroller/component)

# UITextFormattingViewController.Component (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 26.0+

Defines text formatting view component.

## Declaration

```swift
class Component
```

## Topics

### Initializers

- [init(coder:)](component/init%28coder_%29.md)
- [init(componentKey:preferredSize:)](component/init%28componentkey_preferredsize_%29.md): Creates a text formatting view component configuration with component key and preferred size.

### Instance Properties

- [componentKey](component/componentkey.md): Unique key that identifies text formatting view component.
- [preferredSize](component/preferredsize.md): Specifies preferred size of the component in text formatting view.

### Type Methods

- [component(\_:\_:)](component/component%28____%29.md)

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

- [UITextFormattingViewController.ComponentGroup](componentgroup.md): Defines grouping of text formatting components in view.
- [UITextFormattingViewController.Configuration](configuration-swift.class.md): Text formatting view controller configuration object.

# UITextFormattingViewControllerComponent (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Defines text formatting view component.

## Declaration

```objectivec
@interface UITextFormattingViewControllerComponent : NSObject
```

## Topics

### Instance Properties

- [componentKey](component/componentkey.md): Unique key that identifies text formatting view component.
- [preferredSize](component/preferredsize.md): Specifies preferred size of the component in text formatting view.

### Instance Methods

- [initWithComponentKey:preferredSize:](component/init%28componentkey_preferredsize_%29.md): Creates a text formatting view component configuration with component key and preferred size.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Classes

- [UITextFormattingViewControllerComponentGroup](componentgroup.md): Defines grouping of text formatting components in view.
- [UITextFormattingViewControllerConfiguration](configuration-swift.class.md): Text formatting view controller configuration object.
- [UITextFormattingViewControllerChangeValue](../uitextformattingviewcontrollerchangevalue.md): Describes text formatting change that is a result of user action. Contains type of change, any associated value that may be applicable to that change.
- [UITextFormattingViewControllerFormattingDescriptor](../uitextformattingviewcontrollerformattingdescriptor.md): Object that represents current text formatting state. This can apply to formatting state of some selected range of text or currently applicable input formatting.
- [UITextFormattingViewControllerFormattingStyle](../uitextformattingviewcontrollerformattingstyle.md): Type that defines formatting style presented in text formatting view.
