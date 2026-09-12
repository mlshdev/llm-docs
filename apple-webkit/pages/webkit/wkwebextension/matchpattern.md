> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern)

# WKWebExtension.MatchPattern (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that represents a way to specify groups of URLs.

## Declaration

```swift
@MainActor class MatchPattern
```

<a id="overview"></a>

## Overview

All match patterns are specified as strings. Apart from the special `<all_urls>` pattern, match patterns consist of three parts: scheme, host, and path.

## Topics

### Errors

- [WKWebExtension.MatchPattern.Error](matchpattern/error.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](matchpattern.md) domain.
- [WKWebExtension.MatchPattern.Error.Code](matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](matchpattern.md) domain.
- [errorDomain](matchpattern/errordomain.md): A string that identifies the error domain.

### Structures

- [WKWebExtension.MatchPattern.Options](matchpattern/options.md): Constants used by [WKWebExtension.MatchPattern](matchpattern.md) to indicate matching options.

### Initializers

- [init(coder:)](matchpattern/init%28coder_%29.md)
- [init(scheme:host:path:)](matchpattern/init%28scheme_host_path_%29.md): Returns a pattern object for the specified scheme, host, and path strings.
- [init(string:)](matchpattern/init%28string_%29.md): Returns a pattern object for the specified pattern string.

### Instance Properties

- [host](matchpattern/host.md): The host part of the pattern string, unless [matchesAllURLs](matchpattern/matchesallurls.md) is `YES`.
- [matchesAllHosts](matchpattern/matchesallhosts.md): A Boolean value that indicates if the pattern is `<all_urls>` or has `*` as the host.
- [matchesAllURLs](matchpattern/matchesallurls.md): A Boolean value that indicates if the pattern is `<all_urls>`.
- [path](matchpattern/path.md): The path part of the pattern string, unless [matchesAllURLs](matchpattern/matchesallurls.md) is `YES`.
- [scheme](matchpattern/scheme.md): The scheme part of the pattern string, unless [matchesAllURLs](matchpattern/matchesallurls.md) is `YES`.
- [string](matchpattern/string.md): The original pattern string.

### Instance Methods

- [matches(\_:)](matchpattern/matches%28__%29-471rf.md): Matches the receiver pattern against the specified URL.
- [matches(\_:)](matchpattern/matches%28__%29-4d84f.md): Matches the receiver pattern against the specified pattern.
- [matches(\_:options:)](matchpattern/matches%28__options_%29-5wo3g.md): Matches the receiver pattern against the specified URL with options.
- [matches(\_:options:)](matchpattern/matches%28__options_%29-fnde.md): Matches the receiver pattern against the specified pattern with options.

### Type Methods

- [allHostsAndSchemes()](matchpattern/allhostsandschemes%28%29.md): Returns a pattern object that has `*` for scheme, host, and path.
- [allURLs()](matchpattern/allurls%28%29.md): Returns a pattern object for `<all_urls>`.
- [registerCustomURLScheme(\_:)](matchpattern/registercustomurlscheme%28__%29.md): Registers a custom URL scheme that can be used in match patterns.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtension.Action](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtension.Command](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtension.MessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtension.DataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtension.TabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtension.WindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionController.Configuration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.

# WKWebExtensionMatchPattern (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An object that represents a way to specify groups of URLs.

## Declaration

```objectivec
@interface WKWebExtensionMatchPattern : NSObject
```

<a id="overview"></a>

## Overview

All match patterns are specified as strings. Apart from the special `<all_urls>` pattern, match patterns consist of three parts: scheme, host, and path.

## Topics

### Errors

- [WKWebExtensionMatchPatternError](matchpattern/error/code.md): Constants that indicate errors in the [WKWebExtensionMatchPattern](matchpattern.md) domain.
- [WKWebExtensionMatchPatternErrorDomain](matchpattern/errordomain.md): A string that identifies the error domain.

### Enumerations

- [WKWebExtensionMatchPatternOptions](matchpattern/options.md): Constants used by [WKWebExtensionMatchPattern](matchpattern.md) to indicate matching options.

### Instance Properties

- [host](matchpattern/host.md): The host part of the pattern string, unless [matchesAllURLs](matchpattern/matchesallurls.md) is `YES`.
- [matchesAllHosts](matchpattern/matchesallhosts.md): A Boolean value that indicates if the pattern is `<all_urls>` or has `*` as the host.
- [matchesAllURLs](matchpattern/matchesallurls.md): A Boolean value that indicates if the pattern is `<all_urls>`.
- [path](matchpattern/path.md): The path part of the pattern string, unless [matchesAllURLs](matchpattern/matchesallurls.md) is `YES`.
- [scheme](matchpattern/scheme.md): The scheme part of the pattern string, unless [matchesAllURLs](matchpattern/matchesallurls.md) is `YES`.
- [string](matchpattern/string.md): The original pattern string.

### Instance Methods

- [initWithScheme:host:path:error:](matchpattern/init%28scheme_host_path_%29.md): Returns a pattern object for the specified scheme, host, and path strings.
- [initWithString:error:](matchpattern/init%28string_%29.md): Returns a pattern object for the specified pattern string.
- [matchesURL:](matchpattern/matches%28__%29-471rf.md): Matches the receiver pattern against the specified URL.
- [matchesPattern:](matchpattern/matches%28__%29-4d84f.md): Matches the receiver pattern against the specified pattern.
- [matchesURL:options:](matchpattern/matches%28__options_%29-5wo3g.md): Matches the receiver pattern against the specified URL with options.
- [matchesPattern:options:](matchpattern/matches%28__options_%29-fnde.md): Matches the receiver pattern against the specified pattern with options.

### Type Methods

- [allHostsAndSchemesMatchPattern](matchpattern/allhostsandschemes%28%29.md): Returns a pattern object that has `*` for scheme, host, and path.
- [allURLsMatchPattern](matchpattern/allurls%28%29.md): Returns a pattern object for `<all_urls>`.
- [registerCustomURLScheme:](matchpattern/registercustomurlscheme%28__%29.md): Registers a custom URL scheme that can be used in match patterns.
- [matchPatternWithScheme:host:path:](../wkwebextensionmatchpattern/matchpatternwithscheme_host_path_.md): Returns a pattern object for the specified scheme, host, and path strings.
- [matchPatternWithString:](../wkwebextensionmatchpattern/matchpatternwithstring_.md): Returns a pattern object for the specified pattern string.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Web extensions

- [WKWebExtension](../wkwebextension.md): An object that encapsulates a web extension’s resources that the manifest file defines.
- [WKWebExtensionTab](../wkwebextensiontab.md): A protocol with methods that represent a tab to web extensions.
- [WKWebExtensionWindow](../wkwebextensionwindow.md): A protocol with methods that represent a window to web extensions.
- [WKWebExtensionContext](../wkwebextensioncontext.md): An object that represents the runtime environment for a web extension.
- [WKWebExtensionController](../wkwebextensioncontroller.md): An object that manages a set of loaded extension contexts.
- [WKWebExtensionControllerDelegate](../wkwebextensioncontrollerdelegate.md): A group of methods you use to customize web extension interactions.
- [WKWebExtensionAction](action.md): An object that encapsulates the properties for an individual web extension action.
- [WKWebExtensionCommand](command.md): An object that encapsulates the properties for an individual web extension command.
- [WKWebExtensionMessagePort](messageport.md): An object that manages message-based communication with a web extension.
- [WKWebExtensionDataRecord](datarecord.md): An object that represents a record of stored data for a specific web extension context.
- [WKWebExtensionTabConfiguration](tabconfiguration.md): An object that encapsulates configuration options for a tab in an extension.
- [WKWebExtensionWindowConfiguration](windowconfiguration.md): An object that encapsulates configuration options for a window in an extension.
- [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md): A [WKWebExtensionControllerConfiguration](../wkwebextensioncontroller/configuration-swift.class.md) object with which to initialize a web extension controller.
