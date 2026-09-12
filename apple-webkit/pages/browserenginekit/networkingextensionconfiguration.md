> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/networkingextensionconfiguration](https://developer.apple.com/documentation/browserenginekit/networkingextensionconfiguration)

# NetworkingExtensionConfiguration

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

An opaque configuration structure for a networking extension.

## Declaration

```swift
@MainActor @preconcurrency struct NetworkingExtensionConfiguration
```

<a id="overview"></a>

## Overview

See [NetworkingExtension](networkingextension.md).

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
- [RenderingExtension](renderingextension.md): A protocol for an app extension that manages graphics rendering for your browser app.
- [RenderingExtensionConfiguration](renderingextensionconfiguration.md): An opaque configuration structure for a rendering extension.
