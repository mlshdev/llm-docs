> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionmanager](https://developer.apple.com/documentation/safariservices/sfsafariextensionmanager)

# SFSafariExtensionManager (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 10.12+ · visionOS 26.2+

A class that your app uses to find out the current state of a Safari extension.

## Declaration

```swift
class SFSafariExtensionManager
```

<a id="overview"></a>

## Overview

In macOS, use this class to find out the current state of either a Safari app extension or Safari web extension. In iOS and visionOS, use this class to find out the current state of a Safari web extension.

## Topics

### Checking on the state of an extension

- [getStateOfSafariExtension(withIdentifier:completionHandler:)](sfsafariextensionmanager/getstateofsafariextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari extension.
- [getStateOfExtension(withIdentifier:completionHandler:)](sfsafariextensionmanager/getstateofextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari web extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Injected style sheets and scripts

- [Using injected style sheets and scripts](using-injected-style-sheets-and-scripts.md): Learn how you can affect the appearance or behavior of a webpage by using injected style sheets and scripts.
- [Injecting a script into a webpage](injecting-a-script-into-a-webpage.md): Inject a script that you write for a Safari app extension into a webpage.
- [Injecting CSS style sheets into a webpage](injecting-css-style-sheets-into-a-webpage.md): Add to or override styles by injecting CSS style sheets into webpages.
- [Passing messages between Safari app extensions and injected scripts](passing-messages-between-safari-app-extensions-and-injected-scripts.md): Communicate between your Safari app extension and injected scripts.
- [SFSafariExtensionHandler](sfsafariextensionhandler.md): A base class that you subclass to handle events in your Safari app extension.
- [SFSafariExtensionState](sfsafariextensionstate.md): The state of a Safari extension.
- [SFSafariPageProperties](sfsafaripageproperties.md): An object that captures information about a webpage.
- [SFSafariExtensionHandling](sfsafariextensionhandling.md): A protocol for implementing event handling in a Safari app extension.
- [SFExtensionProfileKey](sfextensionprofilekey.md): A string the system uses as a key in a user info dictionary to identify a profile identifier.

# SFSafariExtensionManager (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 10.12+ · visionOS 26.2+

A class that your app uses to find out the current state of a Safari extension.

## Declaration

```objectivec
@interface SFSafariExtensionManager : NSObject
```

<a id="overview"></a>

## Overview

In macOS, use this class to find out the current state of either a Safari app extension or Safari web extension. In iOS and visionOS, use this class to find out the current state of a Safari web extension.

## Topics

### Checking on the state of an extension

- [getStateOfSafariExtensionWithIdentifier:completionHandler:](sfsafariextensionmanager/getstateofsafariextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari extension.
- [getStateOfExtensionWithIdentifier:completionHandler:](sfsafariextensionmanager/getstateofextension%28withidentifier_completionhandler_%29.md): Returns the current state of a Safari web extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Injected style sheets and scripts

- [Using injected style sheets and scripts](using-injected-style-sheets-and-scripts.md): Learn how you can affect the appearance or behavior of a webpage by using injected style sheets and scripts.
- [Injecting a script into a webpage](injecting-a-script-into-a-webpage.md): Inject a script that you write for a Safari app extension into a webpage.
- [Injecting CSS style sheets into a webpage](injecting-css-style-sheets-into-a-webpage.md): Add to or override styles by injecting CSS style sheets into webpages.
- [Passing messages between Safari app extensions and injected scripts](passing-messages-between-safari-app-extensions-and-injected-scripts.md): Communicate between your Safari app extension and injected scripts.
- [SFSafariExtensionHandler](sfsafariextensionhandler.md): A base class that you subclass to handle events in your Safari app extension.
- [SFSafariExtensionState](sfsafariextensionstate.md): The state of a Safari extension.
- [SFSafariPageProperties](sfsafaripageproperties.md): An object that captures information about a webpage.
- [SFSafariExtensionHandling](sfsafariextensionhandling.md): A protocol for implementing event handling in a Safari app extension.
- [SFExtensionProfileKey](sfextensionprofilekey.md): A string the system uses as a key in a user info dictionary to identify a profile identifier.
