> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/ambundleaction](https://developer.apple.com/documentation/automator/ambundleaction)

# AMBundleAction (Swift)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that represents an Automator action that’s a loadable bundle.

## Declaration

```swift
class AMBundleAction
```

<a id="overview"></a>

## Overview

Automator loads action bundles from standard locations in the file system: `/System/Library/Automator`, `/Library/Automator`, and `~/Library/Automator`.

[AMBundleAction](ambundleaction.md) objects have several important properties:

- The [Bundle](https://developer.apple.com/documentation/foundation/bundle) object associated with the action’s physical bundle
- The action’s view, which holds its user interface
- A parameters dictionary that reflects the settings in the user interface

When you create a Cocoa Automator Action project in Xcode, the project template includes a custom subclass of [AMBundleAction](ambundleaction.md). This custom class uses the name of the project.

You must provide an implementation of [run(withInput:)](amaction/run%28withinput_%29.md), which is declared by the superclass [AMAction](amaction.md). If you add any instance variables, you must override the [init(definition:fromArchive:)](amaction/init%28definition_fromarchive_%29.md) method and the [write(to:)](amaction/write%28to_%29.md) method of [AMAction](amaction.md) to work with them.

## Topics

### Initializing the Action

- [awakeFromBundle()](ambundleaction/awakefrombundle%28%29.md): Allows the action object to perform setup tasks requiring the presence of all bundle objects.

### Managing Action Properties

- [bundle](ambundleaction/bundle.md): The action’s bundle object.
- [hasView](ambundleaction/hasview.md): A Boolean value that indicates whether the action has a view associated with it.
- [view](ambundleaction/view.md): The action’s view object.
- [parameters](ambundleaction/parameters.md): The action’s parameters.

### Initializers

- [init(coder:)](ambundleaction/init%28coder_%29.md)

## Relationships

### Inherits From

- [AMAction](amaction.md)

### Inherited By

- [AMAppleScriptAction](amapplescriptaction.md)
- [AMShellScriptAction](amshellscriptaction.md)

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

- [AMShellScriptAction](amshellscriptaction.md): An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.
- [AMAction](amaction.md): An abstract class that defines the interface and general characteristics of Automator actions.

# AMBundleAction (Objective-C)

**Framework:** Automator  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An object that represents an Automator action that’s a loadable bundle.

## Declaration

```objectivec
@interface AMBundleAction : AMAction
```

<a id="overview"></a>

## Overview

Automator loads action bundles from standard locations in the file system: `/System/Library/Automator`, `/Library/Automator`, and `~/Library/Automator`.

[AMBundleAction](ambundleaction.md) objects have several important properties:

- The [NSBundle](https://developer.apple.com/documentation/foundation/bundle) object associated with the action’s physical bundle
- The action’s view, which holds its user interface
- A parameters dictionary that reflects the settings in the user interface

When you create a Cocoa Automator Action project in Xcode, the project template includes a custom subclass of [AMBundleAction](ambundleaction.md). This custom class uses the name of the project.

You must provide an implementation of [runWithInput:error:](amaction/run%28withinput_%29.md), which is declared by the superclass [AMAction](amaction.md). If you add any instance variables, you must override the [initWithDefinition:fromArchive:](amaction/init%28definition_fromarchive_%29.md) method and the [writeToDictionary:](amaction/write%28to_%29.md) method of [AMAction](amaction.md) to work with them.

## Topics

### Initializing the Action

- [awakeFromBundle](ambundleaction/awakefrombundle%28%29.md): Allows the action object to perform setup tasks requiring the presence of all bundle objects.

### Managing Action Properties

- [bundle](ambundleaction/bundle.md): The action’s bundle object.
- [hasView](ambundleaction/hasview.md): A Boolean value that indicates whether the action has a view associated with it.
- [view](ambundleaction/view.md): The action’s view object.
- [parameters](ambundleaction/parameters.md): The action’s parameters.

## Relationships

### Inherits From

- [AMAction](amaction.md)

### Inherited By

- [AMAppleScriptAction](amapplescriptaction.md)
- [AMShellScriptAction](amshellscriptaction.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Actions

- [AMShellScriptAction](amshellscriptaction.md): An object that represents Automator actions whose runtime behavior is driven by a shell script or by a Perl or Python script.
- [AMAction](amaction.md): An abstract class that defines the interface and general characteristics of Automator actions.
