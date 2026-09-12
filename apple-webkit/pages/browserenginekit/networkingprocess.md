> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/networkingprocess](https://developer.apple.com/documentation/browserenginekit/networkingprocess)

# NetworkingProcess

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A process that manages network connections in an app extension.

## Declaration

```swift
struct NetworkingProcess
```

## Mentioned In

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md)

<a id="overview"></a>

## Overview

A browser app can have one or more networking extensions, each of which need a separate bundle identifier. The app can launch only one instance of each networking extension.

## Topics

### Creating and invalidating extension processes

- [init(bundleIdentifier:onInterruption:)](networkingprocess/init%28bundleidentifier_oninterruption_%29.md): Launches a networking extension process asynchronously.
- [invalidate()](networkingprocess/invalidate%28%29.md): Stops the networking process.

### Creating XPC connections

- [makeLibXPCConnection()](networkingprocess/makelibxpcconnection%28%29.md): Creates a new XPC connection to the extension process.

### Coordinating processes

- [grantCapability(\_:)](networkingprocess/grantcapability%28__%29.md): Grants the specified capability to the process.
- [grantCapability(\_:invalidationHandler:)](networkingprocess/grantcapability%28__invalidationhandler_%29.md): Grants the specified capability to the process, calling the handler when the capability becomes invalid.

## See Also

### Host app representations

- [WebContentProcess](webcontentprocess.md): A process that manages webpage content in an app extension.
- [RenderingProcess](renderingprocess.md): A process that manages rendering in an app extension.
