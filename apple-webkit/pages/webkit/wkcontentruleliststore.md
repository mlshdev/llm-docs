> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentruleliststore](https://developer.apple.com/documentation/webkit/wkcontentruleliststore)

# WKContentRuleListStore (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An object that contains the rules for how to load and filter content in the web view.

## Declaration

```swift
@MainActor class WKContentRuleListStore
```

<a id="overview"></a>

## Overview

Use a [WKContentRuleListStore](wkcontentruleliststore.md) to compile and manage rules for filtering content in a web view. Rule lists act as content blockers inside your app. You use them to prevent the web view from loading specific content, either based on the original location of that content or other criteria you specify. For example, a corporate app might use rules to prevent the web view from loading content that originates from outside the corporate network.

Fetch the default [WKContentRuleListStore](wkcontentruleliststore.md) object or create a custom store object and use it to compile or access the available rules. Each store object stores its existing rules persistently in the file system and loads those rules at creation time. A store object doesn’t automatically apply any of its rules to a particular web view. To apply a rule to a web view, add it to the [WKUserContentController](wkusercontentcontroller.md) object of the web view’s configuration object.

## Topics

### Creating a Content Rule List Store

- [default()](wkcontentruleliststore/default%28%29.md): Returns the default content rule list store.
- [init(url:)](wkcontentruleliststore/init%28url_%29-dile.md): Creates a new content rule list store in the specified directory.

### Creating and Deleting Content Rule Lists

- [compileContentRuleList(forIdentifier:encodedContentRuleList:completionHandler:)](wkcontentruleliststore/compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md): Compiles the specified JSON content into a new rule list and adds it to the current data store.
- [removeContentRuleList(forIdentifier:completionHandler:)](wkcontentruleliststore/removecontentrulelist%28foridentifier_completionhandler_%29.md): Removes a rule list from the current data store asynchronously.

### Accessing the Current Rule Lists

- [getAvailableContentRuleListIdentifiers(\_:)](wkcontentruleliststore/getavailablecontentrulelistidentifiers%28__%29.md): Fetches the identifiers for all rule lists in the store asynchronously.
- [lookUpContentRuleList(forIdentifier:completionHandler:)](wkcontentruleliststore/lookupcontentrulelist%28foridentifier_completionhandler_%29.md): Searches asynchronously for a specific rule list in the data store.

### Initializers

- [init(URL:)](wkcontentruleliststore/init%28url_%29-7emmv.md)

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
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorld.Configuration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.

# WKContentRuleListStore (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An object that contains the rules for how to load and filter content in the web view.

## Declaration

```objectivec
@interface WKContentRuleListStore : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKContentRuleListStore](wkcontentruleliststore.md) to compile and manage rules for filtering content in a web view. Rule lists act as content blockers inside your app. You use them to prevent the web view from loading specific content, either based on the original location of that content or other criteria you specify. For example, a corporate app might use rules to prevent the web view from loading content that originates from outside the corporate network.

Fetch the default [WKContentRuleListStore](wkcontentruleliststore.md) object or create a custom store object and use it to compile or access the available rules. Each store object stores its existing rules persistently in the file system and loads those rules at creation time. A store object doesn’t automatically apply any of its rules to a particular web view. To apply a rule to a web view, add it to the [WKUserContentController](wkusercontentcontroller.md) object of the web view’s configuration object.

## Topics

### Creating a Content Rule List Store

- [defaultStore](wkcontentruleliststore/default%28%29.md): Returns the default content rule list store.
- [storeWithURL:](wkcontentruleliststore/init%28url_%29-dile.md): Creates a new content rule list store in the specified directory.

### Creating and Deleting Content Rule Lists

- [compileContentRuleListForIdentifier:encodedContentRuleList:completionHandler:](wkcontentruleliststore/compilecontentrulelist%28foridentifier_encodedcontentrulelist_completionhandler_%29.md): Compiles the specified JSON content into a new rule list and adds it to the current data store.
- [removeContentRuleListForIdentifier:completionHandler:](wkcontentruleliststore/removecontentrulelist%28foridentifier_completionhandler_%29.md): Removes a rule list from the current data store asynchronously.

### Accessing the Current Rule Lists

- [getAvailableContentRuleListIdentifiers:](wkcontentruleliststore/getavailablecontentrulelistidentifiers%28__%29.md): Fetches the identifiers for all rule lists in the store asynchronously.
- [lookUpContentRuleListForIdentifier:completionHandler:](wkcontentruleliststore/lookupcontentrulelist%28foridentifier_completionhandler_%29.md): Searches asynchronously for a specific rule list in the data store.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Page content

- [WKUserContentController](wkusercontentcontroller.md): An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- [WKContentWorld](wkcontentworld.md): An object that defines a scope of execution for JavaScript code, and which you use to prevent conflicts between different scripts.
- [WKFrameInfo](wkframeinfo.md): An object that contains information about a frame on a webpage.
- [WKSecurityOrigin](wksecurityorigin.md): An object that identifies the origin of a particular resource.
- [WKUserScript](wkuserscript.md): A script that the web view injects into a webpage.
- [WKContentWorldConfiguration](wkcontentworld/configuration.md)
- [WKJSHandle](wkjshandle.md): A WKJSHandle object contains a reference to a JavaScript object.
