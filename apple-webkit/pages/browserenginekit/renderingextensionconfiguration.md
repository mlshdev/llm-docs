> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/renderingextensionconfiguration](https://developer.apple.com/documentation/browserenginekit/renderingextensionconfiguration)

# RenderingExtensionConfiguration

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

An opaque configuration structure for a rendering extension.

## Declaration

```swift
@MainActor @preconcurrency struct RenderingExtensionConfiguration
```

<a id="overview"></a>

## Overview

For more information, see [RenderingExtension](renderingextension.md).

## Relationships

### Conforms To

- [AppExtensionConfiguration](https://developer.apple.com/documentation/extensionfoundation/appextensionconfiguration)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Browser extensions

- [WebContentExtension](webcontentextension.md): A protocol for an app extension that manages web content for your browser app.
- [WebContentExtensionConfiguration](webcontentextensionconfiguration.md): An opaque configuration structure for a web content extension.
- [NetworkingExtension](networkingextension.md): A protocol for an app extension that manages network connections for your browser app.
- [NetworkingExtensionConfiguration](networkingextensionconfiguration.md): An opaque configuration structure for a networking extension.
- [RenderingExtension](renderingextension.md): A protocol for an app extension that manages graphics rendering for your browser app.
