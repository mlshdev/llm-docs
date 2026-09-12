> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/processcapability](https://developer.apple.com/documentation/browserenginekit/processcapability)

# ProcessCapability

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Capabilities of a helper extension process.

## Declaration

```swift
enum ProcessCapability
```

## Mentioned In

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md)

<a id="overview"></a>

## Overview

To grant a capability to an extension, call the `grantCapability(_:)` method for the relevant process:

- **Web content extension**: [grantCapability(\_:)](webcontentprocess/grantcapability%28__%29.md)
- **Networking extension**: [grantCapability(\_:)](networkingprocess/grantcapability%28__%29.md)
- **Rendering extension**: [grantCapability(\_:)](renderingprocess/grantcapability%28__%29.md)

These methods return a [ProcessCapability.Grant](processcapability/grant.md) object.

When your extension no longer needs the capability, call [invalidate()](processcapability/grant/invalidate%28%29.md).

## Topics

### Granting capabilities

- [ProcessCapability.background](processcapability/background.md): A process capability for work in the background.
- [ProcessCapability.foreground](processcapability/foreground.md): A process capability for work in the foreground.
- [ProcessCapability.suspended](processcapability/suspended.md): A process capability that grants residency in a suspended state.
- [ProcessCapability.mediaPlaybackAndCapture(environment:)](processcapability/mediaplaybackandcapture%28environment_%29.md): The helper extension process may access media hardware required for media capture and playback.
- [ProcessCapability.Grant](processcapability/grant.md): An object that represents the provision of a capability.

### Enumeration Cases

- [ProcessCapability.screenCapture(environment:)](processcapability/screencapture%28environment_%29.md): The helper extension process may access AV hardware required for media capture and playback.

### Instance Methods

- [activate()](processcapability/activate%28%29.md): Activates the capability.
- [request()](processcapability/request%28%29.md): Requests the capability to be granted to the current process.
- [suspend()](processcapability/suspend%28%29.md): Suspends the capability.

## See Also

### Extension capabilities

- [BEProcessCapability](beprocesscapability-76ijx.md): Capabilities of a helper extension process.
- [MediaEnvironment](mediaenvironment.md): An object that identifies a media playback or streaming environment.
- [BEMediaEnvironment](bemediaenvironment-15xci.md): An object that identifies a media playback or streaming environment.
- [BEWebContentFilter](bewebcontentfilter.md): An object that represents a web content filter.
- [RenderingExtensionFeature](renderingextensionfeature.md): Features of a rendering extension.
