> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/immersiveenvironmentdelegate](https://developer.apple.com/documentation/webkit/wkwebview/immersiveenvironmentdelegate)

# immersiveEnvironmentDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 27.0+

## Declaration

```swift
weak var immersiveEnvironmentDelegate: (any WKImmersiveEnvironmentDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

The delegate that manages immersive environment presentation.

## See Also

### Immersive environments

- [WKImmersiveEnvironment](../wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](../wkimmersiveenvironmentdelegate.md)
- [allowsImmersiveEnvironments](../wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [dismissImmersiveEnvironment(completionHandler:)](dismissimmersiveenvironment%28completionhandler_%29.md)

# immersiveEnvironmentDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<WKImmersiveEnvironmentDelegate> immersiveEnvironmentDelegate;
```

<a id="discussion"></a>

## Discussion

The delegate that manages immersive environment presentation.

## See Also

### Immersive environments

- [WKImmersiveEnvironment](../wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](../wkimmersiveenvironmentdelegate.md)
- [allowsImmersiveEnvironments](../wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [dismissImmersiveEnvironmentWithCompletionHandler:](dismissimmersiveenvironment%28completionhandler_%29.md)
