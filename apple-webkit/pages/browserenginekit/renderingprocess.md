> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/renderingprocess](https://developer.apple.com/documentation/browserenginekit/renderingprocess)

# RenderingProcess

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A process that manages rendering in an app extension.

## Declaration

```swift
struct RenderingProcess
```

## Mentioned In

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md)

<a id="overview"></a>

## Overview

A browser can have one or more rendering extensions, each of which need a separate bundle identifier. The app can launch only one instance of each rendering extension.

## Topics

### Creating and invalidating extension processes

- [init(bundleIdentifier:onInterruption:)](renderingprocess/init%28bundleidentifier_oninterruption_%29.md): Launches a rendering extension process asynchronously.
- [invalidate()](renderingprocess/invalidate%28%29.md): Stops the rendering process.

### Creating XPC connections

- [makeLibXPCConnection()](renderingprocess/makelibxpcconnection%28%29.md): Creates a new XPC connection to the extension process.

### Coordinating processes

- [grantCapability(\_:)](renderingprocess/grantcapability%28__%29.md): Grants the specified capability to the process.
- [grantCapability(\_:invalidationHandler:)](renderingprocess/grantcapability%28__invalidationhandler_%29.md): Grants the specified capability to the process and observes an invalidation closure.
- [createVisibilityPropagationInteraction()](renderingprocess/createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the rendering process.

## See Also

### Host app representations

- [WebContentProcess](webcontentprocess.md): A process that manages webpage content in an app extension.
- [NetworkingProcess](networkingprocess.md): A process that manages network connections in an app extension.
