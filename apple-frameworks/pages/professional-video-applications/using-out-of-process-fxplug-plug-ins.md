> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional-video-applications/using-out-of-process-fxplug-plug-ins](https://developer.apple.com/documentation/professional-video-applications/using-out-of-process-fxplug-plug-ins)

# Using out-of-process FxPlug plug-ins

**Interface languages:** Swift, Objective-C

**Framework:** Professional Video Applications  
**Kind:** Article

Register and render FxPlug plug-ins with Motion and Final Cut Pro.

<a id="overview"></a>

## Overview

FxPlug 4 plug-ins run out-of-process, which means they run in a dedicated process outside the host app, and communication with the plug-in is done over an interprocess communication ([XPC](../foundation/xpc.md)) using [IOSurface](../iosurface.md), which is suitable for sharing textures across process boundaries.

<a id="Register-plug-ins"></a>

### Register plug-ins

macOS includes a technology called `PlugInKit` to discover and register plug-ins on a system. After a host application launches, `PlugInKit` reports a list of plug-ins available to that type of host. When a plug-in is instantiated, the out-of-process XPC service is activated, establishes a connection with the host application, and mediates the transfer of information.

> **Note**

>  XPCs allow interprocess communication between your plug-in and host apps like Final Cut Pro and Motion. They run as their own process and can become invalid at any point without affecting the application. For this reason, XPCs ideally should remain stateless at any given time.

<a id="Render-plug-ins"></a>

### Render plug-ins

At render time, the host application passes the plug-in state to the XPC service and asks for a render. During this step, your plug-in receives parameter values; for more detailed information, see [Communicating with the plug-in state](communicating-with-the-plug-in-state.md). After completing its render, your plug-in then hands the image back to the host application.

[FxImageTile](../professional_video_applications/fximagetile.md), an [IOSurface](../iosurface.md)-backed image type, provides all image data to your plug-in. For more information on FxImageTile, see [Rendering in FxPlug](rendering-in-fxplug.md). If you’re familiar with FxPlug 3.x, it’s important to note that the host application no longer passes `FxTexture` or `FxBitmap` to a plug-in.

![A diagram of the communication between an FxPlug plug-in and a host application via PluginKit and IOSurface.](https://developer.apple.com/images/com.apple.professionalvideoapplications/media-3397536@2x.png)

<a id="Best-practices-using-XPCs-with-FxPlug"></a>

### Best practices using XPCs with FxPlug

- Avoid long-running tasks upon plug-in startup and anything that blocks your plug-in’s response to your host app during a restart.
- Consider pushing some tasks to the background threads. For example, enumerating all the fonts instead of doing so every time your plug-in starts.
- If you need your plug-in to connect to a server on the internet, do it in the background, and do some other tasks (rendering, state gathering, etc.) until it connects.
- If your plug-in uses dynamic registration, load all the plug-in classes you need on restart because the host won’t do it for you.
- Try not to display any dialog upon plug-in startup because it causes host playback to stop.
- Don’t initialize all of your resources unless the user requires them.

## Topics

### Services

- [FxPrincipal](../professional_video_applications/fxprincipal.md): Singleton object that starts your XPC service running and can return the embedded (in-process) component of your plug-in.
- [FxPrincipalAPI](../professional_video_applications/fxprincipalapi.md): A protocol that provides an interface that the host application implements to retrieve an XPC proxy object for communicating with its XPC.
- [FxPrincipalDelegate](../professional_video_applications/fxprincipaldelegate.md): A protocol that provides information about the host application that launched your XPC service.

## See Also

### Essentials

- [Setting up for FxPlug development](setting-up-for-fxplug-development.md): Download and install the required software to develop FxPlug plug-ins.
