> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/immersiveenvironment](https://developer.apple.com/documentation/webkit/webpage/immersiveenvironment)

# WebPage.ImmersiveEnvironment

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** visionOS 27.0+

An object representing a website-provided immersive environment that is ready for presentation.

## Declaration

```swift
@MainActor struct ImmersiveEnvironment
```

## Topics

### Instance Properties

- [sourceFrame](immersiveenvironment/sourceframe.md): The frame information of the website that provided this immersive environment.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Immersive environments

- [WebViewImmersiveEnvironmentView](../webviewimmersiveenvironmentview.md): A SwiftUI view that renders a specific website-provided immersive environment.
- [allowsImmersiveEnvironments](configuration/allowsimmersiveenvironments.md): Indicates whether website immersive environments are allowed.
