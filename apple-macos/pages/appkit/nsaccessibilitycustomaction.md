> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomaction](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomaction)

# NSAccessibilityCustomAction (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A custom action to perform on an accessible object.

## Declaration

```swift
class NSAccessibilityCustomAction
```

<a id="overview"></a>

## Overview

Apps that support custom actions can create instances of this class, specifying the user-readable name of the action, and either a handler closure or the object and selector to use when performing the action. Assistive apps display custom actions in response to specific user cues. For example, VoiceOver lets users access actions quickly using the Actions rotor.

After creating an instance of this class, add it to the [accessibilityCustomActions](nsaccessibility-c.protocol/accessibilitycustomactions.md) property of an appropriate accessible object.

## Topics

### Creating a Custom Action

- [init(name:handler:)](nsaccessibilitycustomaction/init%28name_handler_%29.md): Creates a custom action object with the specified name and handler.
- [init(name:target:selector:)](nsaccessibilitycustomaction/init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.

### Getting the Action Name

- [name](nsaccessibilitycustomaction/name.md): A localized name that describes the action.

### Getting the Action

- [handler](nsaccessibilitycustomaction/handler.md): The closure that handles the execution of the action.
- [target](nsaccessibilitycustomaction/target.md): The object that performs the action through a selector.
- [selector](nsaccessibilitycustomaction/selector.md): The method to call on the target to perform the action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Assigning actions

- [accessibilityCustomActions()](nsaccessibilityprotocol/accessibilitycustomactions%28%29.md): Returns the custom actions of the current accessibility element.
- [setAccessibilityCustomActions(\_:)](nsaccessibilityprotocol/setaccessibilitycustomactions%28__%29.md): Sets the custom actions of the current accessibility element.

# NSAccessibilityCustomAction (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A custom action to perform on an accessible object.

## Declaration

```objectivec
@interface NSAccessibilityCustomAction : NSObject
```

<a id="overview"></a>

## Overview

Apps that support custom actions can create instances of this class, specifying the user-readable name of the action, and either a handler closure or the object and selector to use when performing the action. Assistive apps display custom actions in response to specific user cues. For example, VoiceOver lets users access actions quickly using the Actions rotor.

After creating an instance of this class, add it to the [accessibilityCustomActions](nsaccessibility-c.protocol/accessibilitycustomactions.md) property of an appropriate accessible object.

## Topics

### Creating a Custom Action

- [initWithName:handler:](nsaccessibilitycustomaction/init%28name_handler_%29.md): Creates a custom action object with the specified name and handler.
- [initWithName:target:selector:](nsaccessibilitycustomaction/init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.

### Getting the Action Name

- [name](nsaccessibilitycustomaction/name.md): A localized name that describes the action.

### Getting the Action

- [handler](nsaccessibilitycustomaction/handler.md): The closure that handles the execution of the action.
- [target](nsaccessibilitycustomaction/target.md): The object that performs the action through a selector.
- [selector](nsaccessibilitycustomaction/selector.md): The method to call on the target to perform the action.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Assigning actions

- [accessibilityCustomActions](nsaccessibility-c.protocol/accessibilitycustomactions.md): The custom actions of the current accessibility element.
