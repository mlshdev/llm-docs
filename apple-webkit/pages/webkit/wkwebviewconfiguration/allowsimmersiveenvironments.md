> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/allowsimmersiveenvironments](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/allowsimmersiveenvironments)

# allowsImmersiveEnvironments (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 27.0+

## Declaration

```swift
var allowsImmersiveEnvironments: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A Boolean value that determines whether the web view allows immersive environments.

Set this property to YES to enable support for website-provided immersive environments. If NO, requests to present immersive environments are ignored. If YES, requests are routed to your `WKImmersiveEnvironmentDelegate`. The default value is NO.

## See Also

### Immersive environments

- [WKImmersiveEnvironment](../wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](../wkimmersiveenvironmentdelegate.md)
- [immersiveEnvironmentDelegate](../wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironment(completionHandler:)](../wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)

# allowsImmersiveEnvironments (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic) BOOL allowsImmersiveEnvironments;
```

<a id="discussion"></a>

## Discussion

A Boolean value that determines whether the web view allows immersive environments.

Set this property to YES to enable support for website-provided immersive environments. If NO, requests to present immersive environments are ignored. If YES, requests are routed to your `WKImmersiveEnvironmentDelegate`. The default value is NO.

## See Also

### Immersive environments

- [WKImmersiveEnvironment](../wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](../wkimmersiveenvironmentdelegate.md)
- [immersiveEnvironmentDelegate](../wkwebview/immersiveenvironmentdelegate.md)
- [dismissImmersiveEnvironmentWithCompletionHandler:](../wkwebview/dismissimmersiveenvironment%28completionhandler_%29.md)
