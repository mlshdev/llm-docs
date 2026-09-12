> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaripageproperties](https://developer.apple.com/documentation/safariservices/sfsafaripageproperties)

# SFSafariPageProperties (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that captures information about a webpage.

## Declaration

```swift
class SFSafariPageProperties
```

## Mentioned In

- [Adjusting website access permissions](adjusting-website-access-permissions.md)

<a id="overview"></a>

## Overview

Use the properties object to retrieve page information, such as the current URL, page title, active status, and private browsing status.

## Topics

### Getting the Safari Page Properties

- [isActive](sfsafaripageproperties/isactive.md): A Boolean value that indicates whether the page is currently active.
- [title](sfsafaripageproperties/title.md): The title of the page.
- [url](sfsafaripageproperties/url.md): Indicates the URL of the page.
- [usesPrivateBrowsing](sfsafaripageproperties/usesprivatebrowsing.md): A Boolean value that indicates whether the page is using Safari Private Browsing.

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

## See Also

### Injected style sheets and scripts

- [Using injected style sheets and scripts](using-injected-style-sheets-and-scripts.md): Learn how you can affect the appearance or behavior of a webpage by using injected style sheets and scripts.
- [Injecting a script into a webpage](injecting-a-script-into-a-webpage.md): Inject a script that you write for a Safari app extension into a webpage.
- [Injecting CSS style sheets into a webpage](injecting-css-style-sheets-into-a-webpage.md): Add to or override styles by injecting CSS style sheets into webpages.
- [Passing messages between Safari app extensions and injected scripts](passing-messages-between-safari-app-extensions-and-injected-scripts.md): Communicate between your Safari app extension and injected scripts.
- [SFSafariExtensionHandler](sfsafariextensionhandler.md): A base class that you subclass to handle events in your Safari app extension.
- [SFSafariExtensionManager](sfsafariextensionmanager.md): A class that your app uses to find out the current state of a Safari extension.
- [SFSafariExtensionState](sfsafariextensionstate.md): The state of a Safari extension.
- [SFSafariExtensionHandling](sfsafariextensionhandling.md): A protocol for implementing event handling in a Safari app extension.
- [SFExtensionProfileKey](sfextensionprofilekey.md): A string the system uses as a key in a user info dictionary to identify a profile identifier.

# SFSafariPageProperties (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that captures information about a webpage.

## Declaration

```objectivec
@interface SFSafariPageProperties : NSObject
```

## Mentioned In

- [Adjusting website access permissions](adjusting-website-access-permissions.md)

<a id="overview"></a>

## Overview

Use the properties object to retrieve page information, such as the current URL, page title, active status, and private browsing status.

## Topics

### Getting the Safari Page Properties

- [active](sfsafaripageproperties/isactive.md): A Boolean value that indicates whether the page is currently active.
- [title](sfsafaripageproperties/title.md): The title of the page.
- [url](sfsafaripageproperties/url.md): Indicates the URL of the page.
- [usesPrivateBrowsing](sfsafaripageproperties/usesprivatebrowsing.md): A Boolean value that indicates whether the page is using Safari Private Browsing.

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
- [SFSafariExtensionManager](sfsafariextensionmanager.md): A class that your app uses to find out the current state of a Safari extension.
- [SFSafariExtensionState](sfsafariextensionstate.md): The state of a Safari extension.
- [SFSafariExtensionHandling](sfsafariextensionhandling.md): A protocol for implementing event handling in a Safari app extension.
- [SFExtensionProfileKey](sfextensionprofilekey.md): A string the system uses as a key in a user info dictionary to identify a profile identifier.
