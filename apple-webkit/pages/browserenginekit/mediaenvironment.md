> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/mediaenvironment](https://developer.apple.com/documentation/browserenginekit/mediaenvironment)

# MediaEnvironment

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An object that identifies a media playback or streaming environment.

## Declaration

```swift
struct MediaEnvironment
```

<a id="overview"></a>

## Overview

To stream media in your browser app, create an instance of `MediaEnvironment` and call [activate()](mediaenvironment/activate%28%29.md) before beginning media playback or capture, for example, by calling the [AVCaptureSession](https://developer.apple.com/documentation/avfoundation/avcapturesession) class’s [makeCaptureSession()](mediaenvironment/makecapturesession%28%29.md) method.

To finish media playback or capture, call [suspend()](mediaenvironment/suspend%28%29.md).

If your app captures media input or prepares streaming content in a rendering extension, call [activate()](mediaenvironment/activate%28%29.md) before [grantCapability(\_:)](renderingprocess/grantcapability%28__%29.md) to grant the media playback and capture capability, which you create with [ProcessCapability.mediaPlaybackAndCapture(environment:)](processcapability/mediaplaybackandcapture%28environment_%29.md).

Call [createXPCRepresentation()](mediaenvironment/createxpcrepresentation%28%29.md) and use [XPC](https://developer.apple.com/documentation/xpc) to send the media environment to a rendering extension. Additionally, grant the same capability to the web content extension for a page that plays or captures media by calling [grantCapability(\_:)](webcontentprocess/grantcapability%28__%29.md).

## Topics

### Creating a media environment

- [init(webPage:)](mediaenvironment/init%28webpage_%29.md): Creates a new media environment identified by the URL.
- [init(xpcRepresentation:)](mediaenvironment/init%28xpcrepresentation_%29.md): Creates a media environment from an XPC representation.

### Sending media environments over XPC connections

- [createXPCRepresentation()](mediaenvironment/createxpcrepresentation%28%29.md): Creates an encoded representation of the media environment for transmission through an XPC connection.

### Capturing media streams

- [activate()](mediaenvironment/activate%28%29.md): Deprecated. Activates the media environment.
- [makeCaptureSession()](mediaenvironment/makecapturesession%28%29.md): Creates a new capture session in this media environment or throws an error if it can not be created.
- [suspend()](mediaenvironment/suspend%28%29.md): Deprecated. Suspends the media environment.

## See Also

### Extension capabilities

- [ProcessCapability](processcapability.md): Capabilities of a helper extension process.
- [BEProcessCapability](beprocesscapability-76ijx.md): Capabilities of a helper extension process.
- [BEMediaEnvironment](bemediaenvironment-15xci.md): An object that identifies a media playback or streaming environment.
- [BEWebContentFilter](bewebcontentfilter.md): An object that represents a web content filter.
- [RenderingExtensionFeature](renderingextensionfeature.md): Features of a rendering extension.
