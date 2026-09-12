> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/extension-lifecycle](https://developer.apple.com/documentation/browserenginekit/extension-lifecycle)

# Extension life cycle (Swift)

**Framework:** BrowserEngineKit  
**Kind:** API Collection

Launch, communicate with, and invalidate browser extensions.

## Topics

### Essentials

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md): Coordinate helper processes to efficiently support your browser app.
- [Using XPC to communicate with browser extensions](using-xpc-to-communicate-with-browser-extensions.md): Build interprocess communication between your host app and extensions.
- [BEExtensionProcess](beextensionprocess.md): A common protocol that creates XPC connections for an extension process.

### Browser extensions

- [WebContentExtension](webcontentextension.md): A protocol for an app extension that manages web content for your browser app.
- [WebContentExtensionConfiguration](webcontentextensionconfiguration.md): An opaque configuration structure for a web content extension.
- [NetworkingExtension](networkingextension.md): A protocol for an app extension that manages network connections for your browser app.
- [NetworkingExtensionConfiguration](networkingextensionconfiguration.md): An opaque configuration structure for a networking extension.
- [RenderingExtension](renderingextension.md): A protocol for an app extension that manages graphics rendering for your browser app.
- [RenderingExtensionConfiguration](renderingextensionconfiguration.md): An opaque configuration structure for a rendering extension.

### Host app representations

- [WebContentProcess](webcontentprocess.md): A process that manages webpage content in an app extension.
- [NetworkingProcess](networkingprocess.md): A process that manages network connections in an app extension.
- [RenderingProcess](renderingprocess.md): A process that manages rendering in an app extension.

### Extension capabilities

- [ProcessCapability](processcapability.md): Capabilities of a helper extension process.
- [BEProcessCapability](beprocesscapability-76ijx.md): Capabilities of a helper extension process.
- [MediaEnvironment](mediaenvironment.md): An object that identifies a media playback or streaming environment.
- [BEMediaEnvironment](bemediaenvironment-15xci.md): An object that identifies a media playback or streaming environment.
- [BEWebContentFilter](bewebcontentfilter.md): An object that represents a web content filter.
- [RenderingExtensionFeature](renderingextensionfeature.md): Features of a rendering extension.

## See Also

### Browser extensions

- [Creating browser extensions in Xcode](creating-browser-extensions-in-xcode.md): Configure your Xcode project to support your alternative browser engine.
- [Extension resources](extension-resources.md): Control access to files and memory in browser extensions.

# Extension life cycle (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** API Collection

Launch, communicate with, and invalidate browser extensions.

## Topics

### Essentials

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md): Coordinate helper processes to efficiently support your browser app.
- [Using XPC to communicate with browser extensions](using-xpc-to-communicate-with-browser-extensions.md): Build interprocess communication between your host app and extensions.
- [BEExtensionProcess](beextensionprocess.md): A common protocol that creates XPC connections for an extension process.

### Host app representations

- [BEWebContentProcess](bewebcontentprocess.md): A class that processes webpage content in an app extension.
- [BENetworkingProcess](benetworkingprocess.md): An object that represents a networking extension process.
- [BERenderingProcess](berenderingprocess.md): An object that represents a running browser rendering extension process.

### Extension capabilities

- [BEProcessCapability](beprocesscapability-7av05.md): Capabilities of a helper extension process.
- [BEMediaEnvironment](bemediaenvironment-n91a.md): An object that identifies a media playback or streaming environment.
- [BEProcessCapabilityGrant](beprocesscapabilitygrant.md): An object that represents a granted capability.
- [BEWebContentFilter](bewebcontentfilter.md): An object that represents a web content filter.

## See Also

### Browser extensions

- [Creating browser extensions in Xcode](creating-browser-extensions-in-xcode.md): Configure your Xcode project to support your alternative browser engine.
- [Extension resources](extension-resources.md): Control access to files and memory in browser extensions.
