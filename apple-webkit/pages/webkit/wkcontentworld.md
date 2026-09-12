> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentworld](https://developer.apple.com/documentation/webkit/wkcontentworld)

# WKContentWorld (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.

## Declaration

```swift
@MainActor class WKContentWorld
```

<a id="overview"></a>

## Overview

Use a [WKContentWorld](wkcontentworld.md) object as a namespace to separate your app’s web environment from the environment of individual webpages or scripts you execute. Content worlds help prevent issues that occur when two scripts modify environment variables in conflicting ways. Executing a script in its own content world effectively gives it a separate copy of the environment variables to modify. You might use this support in the following scenarios:

- You have complex script logic to bridge your web content to your app, but your web content has complex script libraries of its own. In that scenario, use one content world for your app-specific scripts and a separate content world for your content-specific scripts.
- You implement a web browser that supports JavaScript extensions. In that scenario, create a unique content world for each extension to prevent conflicts between the extensions.

A [WKContentWorld](wkcontentworld.md) object is a namespace and doesn’t persist data outside of the current web view or webpage. If you use the same content world in two [WKWebView](wkwebview.md) objects, variables in one web view’s content world don’t appear in the other web view. Similarly, when the user or your app navigates to a new webpage, variables from the previous page are gone, even if both pages share the same content world.

Use the methods and properties of this class to fetch the content world you need. [WKContentWorld](wkcontentworld.md) provides a default content world for your app and a content world for the current web page. You can also create new content worlds. For example, you might create a custom content world for each JavaScript extension you manage. Specify the content world object when configuring or executing scripts associated with your content.

> **Note**

>  The content world doesn’t apply to the current document or DOM of a webpage. Changes you make to the DOM are visible to all script code, regardless of content world. The content world affects only references to other JavaScript variables.

## Topics

### Getting the Default Content World

- [defaultClient](wkcontentworld/defaultclient.md): The default world for clients.

### Getting the Namespace for the Current Page

- [page](wkcontentworld/page.md): The content world for the current webpage’s content.

### Retrieving a Custom Content World

- [world(name:)](wkcontentworld/world%28name_%29.md): Returns the custom content world with the specified name.
- [name](wkcontentworld/name.md): The name of a custom content world.

### Initializers

- [init(configuration:)](wkcontentworld/init%28configuration_%29.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

# WKContentWorld (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.

## Declaration

```objectivec
@interface WKContentWorld : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKContentWorld](wkcontentworld.md) object as a namespace to separate your app’s web environment from the environment of individual webpages or scripts you execute. Content worlds help prevent issues that occur when two scripts modify environment variables in conflicting ways. Executing a script in its own content world effectively gives it a separate copy of the environment variables to modify. You might use this support in the following scenarios:

- You have complex script logic to bridge your web content to your app, but your web content has complex script libraries of its own. In that scenario, use one content world for your app-specific scripts and a separate content world for your content-specific scripts.
- You implement a web browser that supports JavaScript extensions. In that scenario, create a unique content world for each extension to prevent conflicts between the extensions.

A [WKContentWorld](wkcontentworld.md) object is a namespace and doesn’t persist data outside of the current web view or webpage. If you use the same content world in two [WKWebView](wkwebview.md) objects, variables in one web view’s content world don’t appear in the other web view. Similarly, when the user or your app navigates to a new webpage, variables from the previous page are gone, even if both pages share the same content world.

Use the methods and properties of this class to fetch the content world you need. [WKContentWorld](wkcontentworld.md) provides a default content world for your app and a content world for the current web page. You can also create new content worlds. For example, you might create a custom content world for each JavaScript extension you manage. Specify the content world object when configuring or executing scripts associated with your content.

> **Note**

>  The content world doesn’t apply to the current document or DOM of a webpage. Changes you make to the DOM are visible to all script code, regardless of content world. The content world affects only references to other JavaScript variables.

## Topics

### Getting the Default Content World

- [defaultClientWorld](wkcontentworld/defaultclient.md): The default world for clients.

### Getting the Namespace for the Current Page

- [pageWorld](wkcontentworld/page.md): The content world for the current webpage’s content.

### Retrieving a Custom Content World

- [worldWithName:](wkcontentworld/world%28name_%29.md): Returns the custom content world with the specified name.
- [name](wkcontentworld/name.md): The name of a custom content world.

### Type Methods

- [worldWithConfiguration:](wkcontentworld/init%28configuration_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentRuleListStore](wkcontentruleliststore.md): An object that contains the rules for how to load and filter content in the web view.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.
