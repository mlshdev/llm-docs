> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration)

# NSWorkspace.OpenConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

The configuration options for opening URLs or launching apps.

## Declaration

```swift
class OpenConfiguration
```

<a id="overview"></a>

## Overview

Create an [NSWorkspace.OpenConfiguration](openconfiguration.md) object before launching an app or opening a URL using the shared [NSWorkspace](../nsworkspace.md) object. Use the properties of this object to customize the behavior of the launched app or the handling of the URLs. For example, you might tell the app to hide itself immediately after launch.

## Topics

### Handling URLs

- [requiresUniversalLinks](openconfiguration/requiresuniversallinks.md): A Boolean value indicating whether you require the URL to have an associated universal link.
- [isForPrinting](openconfiguration/isforprinting.md): A Boolean value indicating whether you want to print the contents of documents and URLs instead of opening them.

### Specifying app-related behaviors

- [activates](openconfiguration/activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](openconfiguration/addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](openconfiguration/allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](openconfiguration/createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](openconfiguration/hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](openconfiguration/hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.

### Prompting the user

- [promptsUserIfNeeded](openconfiguration/promptsuserifneeded.md): A Boolean value indicating whether to display errors, authentication requests, or other UI elements to the user.

### Specifying launch attributes

- [appleEvent](openconfiguration/appleevent.md): The first Apple event to send to the new app.
- [arguments](openconfiguration/arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [environment](openconfiguration/environment.md): The set of environment variables to set in a new app instance.
- [architecture](openconfiguration/architecture.md): The architecture version of the app to launch.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Environment

- [NSWorkspace](../nsworkspace.md): A workspace that can launch other apps and perform a variety of file-handling services.
- [NSAppKitVersion](../nsappkitversion.md): Constants for determining which version of AppKit is available.
- [LSMinimumSystemVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/lsminimumsystemversion): The minimum version of the operating system required for the app to run in macOS.

# NSWorkspaceOpenConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

The configuration options for opening URLs or launching apps.

## Declaration

```objectivec
@interface NSWorkspaceOpenConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Create an [NSWorkspaceOpenConfiguration](openconfiguration.md) object before launching an app or opening a URL using the shared [NSWorkspace](../nsworkspace.md) object. Use the properties of this object to customize the behavior of the launched app or the handling of the URLs. For example, you might tell the app to hide itself immediately after launch.

## Topics

### Creating a workspace configuration object

- [configuration](../nsworkspaceopenconfiguration/configuration.md): Creates and returns a new workspace configuration object containing default values.

### Handling URLs

- [requiresUniversalLinks](openconfiguration/requiresuniversallinks.md): A Boolean value indicating whether you require the URL to have an associated universal link.
- [forPrinting](openconfiguration/isforprinting.md): A Boolean value indicating whether you want to print the contents of documents and URLs instead of opening them.

### Specifying app-related behaviors

- [activates](openconfiguration/activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](openconfiguration/addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](openconfiguration/allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](openconfiguration/createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](openconfiguration/hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](openconfiguration/hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.

### Prompting the user

- [promptsUserIfNeeded](openconfiguration/promptsuserifneeded.md): A Boolean value indicating whether to display errors, authentication requests, or other UI elements to the user.

### Specifying launch attributes

- [appleEvent](openconfiguration/appleevent.md): The first Apple event to send to the new app.
- [arguments](openconfiguration/arguments.md): The set of command-line arguments to pass to a new app instance at launch time.
- [environment](openconfiguration/environment.md): The set of environment variables to set in a new app instance.
- [architecture](openconfiguration/architecture.md): The architecture version of the app to launch.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Environment

- [NSWorkspace](../nsworkspace.md): A workspace that can launch other apps and perform a variety of file-handling services.
- [NSAppKitVersion](../nsappkitversion.md): Constants for determining which version of AppKit is available.
- [LSMinimumSystemVersion](https://developer.apple.com/documentation/bundleresources/information-property-list/lsminimumsystemversion): The minimum version of the operating system required for the app to run in macOS.
