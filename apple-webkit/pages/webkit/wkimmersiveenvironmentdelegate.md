> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkimmersiveenvironmentdelegate](https://developer.apple.com/documentation/webkit/wkimmersiveenvironmentdelegate)

# WKImmersiveEnvironmentDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** visionOS 27.0+

## Declaration

```swift
@MainActor protocol WKImmersiveEnvironmentDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A protocol for managing immersive environment presentation in a web view.

Implement the methods of this protocol to control authorization, presentation, and dismissal of immersive environments requested by websites.

## Topics

### Instance Methods

- [webView(\_:dismiss:completionHandler:)](wkimmersiveenvironmentdelegate/webview%28__dismiss_completionhandler_%29.md)
- [webView(\_:present:completionHandler:)](wkimmersiveenvironmentdelegate/webview%28__present_completionhandler_%29.md)
- [webView(\_:shouldAllowImmersiveEnvironmentFromFrame:completionHandler:)](wkimmersiveenvironmentdelegate/webview%28__shouldallowimmersiveenvironmentfromframe_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Immersive environments

- [WKImmersiveEnvironment](wkimmersiveenvironment.md)
- [allowsImmersiveEnvironments](wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [immersiveEnvironmentDelegate](wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironment(completionHandler:)](wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)

# WKImmersiveEnvironmentDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
@protocol WKImmersiveEnvironmentDelegate <NSObject>
```

<a id="overview"></a>

## Overview

A protocol for managing immersive environment presentation in a web view.

Implement the methods of this protocol to control authorization, presentation, and dismissal of immersive environments requested by websites.

## Topics

### Instance Methods

- [webView:dismissImmersiveEnvironment:completionHandler:](wkimmersiveenvironmentdelegate/webview%28__dismiss_completionhandler_%29.md)
- [webView:presentImmersiveEnvironment:completionHandler:](wkimmersiveenvironmentdelegate/webview%28__present_completionhandler_%29.md)
- [webView:shouldAllowImmersiveEnvironmentFromFrame:completionHandler:](wkimmersiveenvironmentdelegate/webview%28__shouldallowimmersiveenvironmentfromframe_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Immersive environments

- [WKImmersiveEnvironment](wkimmersiveenvironment.md)
- [allowsImmersiveEnvironments](wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [immersiveEnvironmentDelegate](wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironmentWithCompletionHandler:](wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)
