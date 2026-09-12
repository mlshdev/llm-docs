> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/webcontentprocess](https://developer.apple.com/documentation/browserenginekit/webcontentprocess)

# WebContentProcess

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A process that manages webpage content in an app extension.

## Declaration

```swift
struct WebContentProcess
```

## Mentioned In

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md)

<a id="overview"></a>

## Overview

A browser app can launch multiple web content extension processes. Each instance of this structure represents a separate process.

## Topics

### Creating and invalidating extension processes

- [init(bundleIdentifier:onInterruption:)](webcontentprocess/init%28bundleidentifier_oninterruption_%29.md): Launches a web content process asynchronously.
- [invalidate()](webcontentprocess/invalidate%28%29.md): Stops the web content process.

### Creating XPC connections

- [makeLibXPCConnection()](webcontentprocess/makelibxpcconnection%28%29.md): Creates a new XPC connection to the extension process.

### Coordinating processes

- [grantCapability(\_:)](webcontentprocess/grantcapability%28__%29.md): Grants the specified capability to the process.
- [grantCapability(\_:invalidationHandler:)](webcontentprocess/grantcapability%28__invalidationhandler_%29.md): Grants the specified capability to the process and observes an invalidation closure.
- [createVisibilityPropagationInteraction()](webcontentprocess/createvisibilitypropagationinteraction%28%29.md): Returns an interaction that associates a view with the web content process.

## See Also

### Host app representations

- [NetworkingProcess](networkingprocess.md): A process that manages network connections in an app extension.
- [RenderingProcess](renderingprocess.md): A process that manages rendering in an app extension.
