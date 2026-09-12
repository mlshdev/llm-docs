> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amapplescriptaction](https://developer.apple.com/documentation/automator/amapplescriptaction)

# AMAppleScriptAction (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that represents Automator actions whose runtime behavior is driven by an AppleScript script.

> Use the Cocoa-AppleScript template (an instance of [AMBundleAction](ambundleaction.md)) in Xcode to create AppleScript-based Automator actions.

## Declaration

```swift
class AMAppleScriptAction
```

<a id="overview"></a>

## Overview

An [AMAppleScriptAction](amapplescriptaction.md) object holds the compiled script as an instance of the `OSAScript` class. By default, the `OSAScript` object is instantiated from the script in the Xcode project file `main.applescript`.

When you create a Automator Applescript Action project in Xcode, the project template supplies an [AMAppleScriptAction](amapplescriptaction.md) instance as File’s Owner of the action bundle. This ready-made instance provides a default implementation of the [AMAction](amaction.md) [run(withInput:)](amaction/run%28withinput_%29.md) method that uses the logic defined in the script. You can substitute your own subclass of [AMAppleScriptAction](amapplescriptaction.md) for File’s Owner if you need to.

## Topics

### Accessing the script

- [script](amapplescriptaction/script.md): An `OSAScript` object representing the receiver’s script containing the `on run` command handler.

## Relationships

### Inherits From

- [AMBundleAction](ambundleaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# AMAppleScriptAction (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that represents Automator actions whose runtime behavior is driven by an AppleScript script.

> Use the Cocoa-AppleScript template (an instance of [AMBundleAction](ambundleaction.md)) in Xcode to create AppleScript-based Automator actions.

## Declaration

```objectivec
@interface AMAppleScriptAction : AMBundleAction
```

<a id="overview"></a>

## Overview

An [AMAppleScriptAction](amapplescriptaction.md) object holds the compiled script as an instance of the `OSAScript` class. By default, the `OSAScript` object is instantiated from the script in the Xcode project file `main.applescript`.

When you create a Automator Applescript Action project in Xcode, the project template supplies an [AMAppleScriptAction](amapplescriptaction.md) instance as File’s Owner of the action bundle. This ready-made instance provides a default implementation of the [AMAction](amaction.md) [runWithInput:error:](amaction/run%28withinput_%29.md) method that uses the logic defined in the script. You can substitute your own subclass of [AMAppleScriptAction](amapplescriptaction.md) for File’s Owner if you need to.

## Topics

### Accessing the script

- [script](amapplescriptaction/script.md): An `OSAScript` object representing the receiver’s script containing the `on run` command handler.

## Relationships

### Inherits From

- [AMBundleAction](ambundleaction.md)
