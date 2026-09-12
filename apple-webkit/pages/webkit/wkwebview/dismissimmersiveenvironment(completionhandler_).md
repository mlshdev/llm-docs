> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/dismissimmersiveenvironment(completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebview/dismissimmersiveenvironment(completionhandler:))

# dismissImmersiveEnvironment(completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 27.0+

## Declaration

```swift
func dismissImmersiveEnvironment(completionHandler: @escaping @MainActor @Sendable () -> Void)
```

```swift
func dismissImmersiveEnvironment() async
```

<a id="discussion"></a>

## Discussion

Dismisses the currently presented immersive environment.

## See Also

### Immersive environments

- [WKImmersiveEnvironment](../wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](../wkimmersiveenvironmentdelegate.md)
- [allowsImmersiveEnvironments](../wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [immersiveEnvironmentDelegate](immersiveenvironmentdelegate.md)

# dismissImmersiveEnvironmentWithCompletionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** visionOS 27.0+

## Declaration

```objectivec
- (void) dismissImmersiveEnvironmentWithCompletionHandler:(void (^)(void)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Dismisses the currently presented immersive environment.

## See Also

### Immersive environments

- [WKImmersiveEnvironment](../wkimmersiveenvironment.md)
- [WKImmersiveEnvironmentDelegate](../wkimmersiveenvironmentdelegate.md)
- [allowsImmersiveEnvironments](../wkwebviewconfiguration/allowsimmersiveenvironments.md)
- [immersiveEnvironmentDelegate](immersiveenvironmentdelegate.md)
