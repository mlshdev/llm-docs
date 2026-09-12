> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/allowsimmersiveenvironments](https://developer.apple.com/documentation/webkit/webpage/configuration/allowsimmersiveenvironments)

# allowsImmersiveEnvironments

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Indicates whether website immersive environments are allowed.

## Declaration

```swift
@MainActor var allowsImmersiveEnvironments: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to `true` to enable support for website immersive environments. If `false`, requests to present immersive environments are ignored. If `true`, requests are routed through the `onWebViewImmersiveEnvironmentRequest` view modifier callbacks.

The default value is `false`.

## See Also

### Immersive environments

- [WebPage.ImmersiveEnvironment](../immersiveenvironment.md): An object representing a website-provided immersive environment that is ready for presentation.
- [WebViewImmersiveEnvironmentView](../../webviewimmersiveenvironmentview.md): A SwiftUI view that renders a specific website-provided immersive environment.
