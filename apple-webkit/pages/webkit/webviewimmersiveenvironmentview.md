> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webviewimmersiveenvironmentview](https://developer.apple.com/documentation/webkit/webviewimmersiveenvironmentview)

# WebViewImmersiveEnvironmentView

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** visionOS 27.0+

A SwiftUI view that renders a specific website-provided immersive environment.

## Declaration

```swift
@MainActor struct WebViewImmersiveEnvironmentView
```

<a id="overview"></a>

## Overview

Place this view in your app’s Immersive Space hierarchy. Initialize it with the `WebPage.ImmersiveEnvironment` received from the presentation callback to render that specific environment.

## Topics

### Initializers

- [init(\_:)](webviewimmersiveenvironmentview/init%28__%29-1ydxs.md): Creates an immersive environment view from a [WebPage.ImmersiveEnvironment](webpage/immersiveenvironment.md).
- [init(\_:)](webviewimmersiveenvironmentview/init%28__%29-2y2u7.md): Creates an immersive environment view from a `WKImmersiveEnvironment`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Immersive environments

- [WebPage.ImmersiveEnvironment](webpage/immersiveenvironment.md): An object representing a website-provided immersive environment that is ready for presentation.
- [allowsImmersiveEnvironments](webpage/configuration/allowsimmersiveenvironments.md): Indicates whether website immersive environments are allowed.
