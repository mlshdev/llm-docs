> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amshellscriptaction](https://developer.apple.com/documentation/automator/amshellscriptaction)

# AMShellScriptAction (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.

## Declaration

```swift
class AMShellScriptAction
```

<a id="overview"></a>

## Overview

When you create a Shell Script Automator Action project in Xcode, the project template supplies an [AMShellScriptAction](amshellscriptaction.md) instance as the Principal Class of the action bundle. This ready-made instance provides a default implementation of the [AMAction](amaction.md) [run(withInput:)](amaction/run%28withinput_%29.md) method that uses the logic defined in the script. You can substitute your own subclass of [AMShellScriptAction](amshellscriptaction.md) for Principal Class if you need to.

## Topics

### Handling the I/O Separator Character

- [inputFieldSeparator](amshellscriptaction/inputfieldseparator.md): A string to use as the delimiter between items in the string passed to the action through standard input.
- [outputFieldSeparator](amshellscriptaction/outputfieldseparator.md): A string to use as a delimiter in the string output by the action.
- [remapLineEndings](amshellscriptaction/remaplineendings.md): A Boolean value that indicates whether you want automatic remapping of carriage return (`\r`) to newline (`\n`) characters in the input string.

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

## See Also

### Actions

- [AMBundleAction](ambundleaction.md): An object that represents an Automator action that’s a loadable bundle.
- [AMAction](amaction.md): An abstract class that defines the interface and general characteristics of Automator actions.

# AMShellScriptAction (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.

## Declaration

```objectivec
@interface AMShellScriptAction : AMBundleAction
```

<a id="overview"></a>

## Overview

When you create a Shell Script Automator Action project in Xcode, the project template supplies an [AMShellScriptAction](amshellscriptaction.md) instance as the Principal Class of the action bundle. This ready-made instance provides a default implementation of the [AMAction](amaction.md) [runWithInput:error:](amaction/run%28withinput_%29.md) method that uses the logic defined in the script. You can substitute your own subclass of [AMShellScriptAction](amshellscriptaction.md) for Principal Class if you need to.

## Topics

### Handling the I/O Separator Character

- [inputFieldSeparator](amshellscriptaction/inputfieldseparator.md): A string to use as the delimiter between items in the string passed to the action through standard input.
- [outputFieldSeparator](amshellscriptaction/outputfieldseparator.md): A string to use as a delimiter in the string output by the action.
- [remapLineEndings](amshellscriptaction/remaplineendings.md): A Boolean value that indicates whether you want automatic remapping of carriage return (`\r`) to newline (`\n`) characters in the input string.

## Relationships

### Inherits From

- [AMBundleAction](ambundleaction.md)

## See Also

### Actions

- [AMBundleAction](ambundleaction.md): An object that represents an Automator action that’s a loadable bundle.
- [AMAction](amaction.md): An abstract class that defines the interface and general characteristics of Automator actions.
