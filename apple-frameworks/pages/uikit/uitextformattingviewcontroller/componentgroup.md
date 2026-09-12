> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontroller/componentgroup](https://developer.apple.com/documentation/uikit/uitextformattingviewcontroller/componentgroup)

# UITextFormattingViewController.ComponentGroup (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 26.0+

Defines grouping of text formatting components in view.

## Declaration

```swift
class ComponentGroup
```

## Topics

### Initializers

- [init(coder:)](componentgroup/init%28coder_%29.md)
- [init(components:)](componentgroup/init%28components_%29.md): Creates a group of components.

### Instance Properties

- [components](componentgroup/components.md): Components in group.

### Type Methods

- [group(\_:)](componentgroup/group%28__%29.md)

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
- [UITextFormattingViewController.Configuration](configuration-swift.class.md): Text formatting view controller configuration object.

# UITextFormattingViewControllerComponentGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Defines grouping of text formatting components in view.

## Declaration

```objectivec
@interface UITextFormattingViewControllerComponentGroup : NSObject
```

## Topics

### Instance Properties

- [components](componentgroup/components.md): Components in group.

### Instance Methods

- [initWithComponents:](componentgroup/init%28components_%29.md): Creates a group of components.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Classes

- [UITextFormattingViewControllerComponent](component.md): Defines text formatting view component.
- [UITextFormattingViewControllerConfiguration](configuration-swift.class.md): Text formatting view controller configuration object.
- [UITextFormattingViewControllerChangeValue](../uitextformattingviewcontrollerchangevalue.md): Describes text formatting change that is a result of user action. Contains type of change, any associated value that may be applicable to that change.
- [UITextFormattingViewControllerFormattingDescriptor](../uitextformattingviewcontrollerformattingdescriptor.md): Object that represents current text formatting state. This can apply to formatting state of some selected range of text or currently applicable input formatting.
- [UITextFormattingViewControllerFormattingStyle](../uitextformattingviewcontrollerformattingstyle.md): Type that defines formatting style presented in text formatting view.
