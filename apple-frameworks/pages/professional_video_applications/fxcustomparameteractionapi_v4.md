> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameteractionapi_v4](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameteractionapi_v4)

# FxCustomParameterActionAPI_v4 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

Defines the methods the host application provides to support a custom parameter view.

## Declaration

```swift
protocol FxCustomParameterActionAPI_v4
```

## Mentioned In

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md)

<a id="overview"></a>

## Overview

Because custom parameter views can get user events at any time, this protocol provides methods to prepare the host application for parameter changes or other actions at arbitrary times.

Use the [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md) and [endAction(\_:)](fxcustomparameteractionapi_v4/endaction%28__%29.md) commands only when the host application didn’t call your code. For example, in a custom view, the OS directly asks your view to redraw when it needs updating. At this point, the application has no point of reference for interacting with your plug-in, so you must tell it to start the communication by calling [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md). In the past, if you called [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md) when the host called your plug-in, there were no harmful side effects. Starting with FxPlug 4, calling [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md) when the host calls your plug-in can cause hangs in the host application. Call [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md) if you’re executing any code in a block that you created, such as calling [dispatch_async](../dispatch/dispatch_async.md).

You mainly need to use [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md) and [endAction(\_:)](fxcustomparameteractionapi_v4/endaction%28__%29.md) when handling custom [NSView](https://developer.apple.com/documentation/appkit/nsview) events for custom parameters or when running code in a dispatch block that your plug-in created.

It is NOT safe to set or get parameter values at arbitrary times outside of a [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md) and [endAction(\_:)](fxcustomparameteractionapi_v4/endaction%28__%29.md) pair. For example, when a custom parameter view receives a `keyDown:positionY:keyPressed:modifiers:forceUpdate:didHandle:time:` event, it may want to change its parameter value. It then calls the following sequence:

**Swift**

```swift
let actionAPI = _apiManager!.api(for: FxCustomParameterActionAPI_v4.self) as! FxCustomParameterActionAPI_v4
let time = actionAPI.currentTime

actionAPI.startAction(_:self)
let settingAPI = _apiManager!.api(for: FxParameterSettingAPI_v5.self) as! FxParameterSettingAPI_v5
settingAPI.setCustomParameterValue(myObject, toParameter: myParameterID, at: time)
actionAPI.endAction(_:self)
```

**Objective-C**

```objc
id <FxCustomParameterActionAPI_v4> actionAPI = [apiManager apiForProtocol:FxCustomParameterActionAPI_v4];
CMTime time = [actionAPI currentTime];
 
[actionAPI startAction:self];
id <FxParameterSettingAPI_v5> settingAPI = [apiManager apiForProtocol:FxParameterSettingAPI_v5];
[settingAPI setCustomParameterValue:myObject toParameter:myParameterID atTime:time];
[actionAPI endAction:self];
```

## Topics

### Instance Methods

- [currentTime()](fxcustomparameteractionapi_v4/currenttime%28%29.md): Returns the current time, expressed as a rational time.
- [startAction(\_:)](fxcustomparameteractionapi_v4/startaction%28__%29.md): Prepares the host to access parameters.
- [endAction(\_:)](fxcustomparameteractionapi_v4/endaction%28__%29.md): Tells the host application that the plug-in is done accessing parameters.

## See Also

### Custom Parameter APIs

- [FxCustomParameterViewHost_v2](fxcustomparameterviewhost_v2.md): Defines the methods a plug-in needs to implement to associate a custom NSView with one of its parameters.
- [FxCustomParameterInterpolation_v2](fxcustomparameterinterpolation_v2.md): Defines the methods a plug-in needs to implement to support keyframing custom parameters.

# FxCustomParameterActionAPI_v4 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Defines the methods the host application provides to support a custom parameter view.

## Declaration

```objectivec
@protocol FxCustomParameterActionAPI_v4
```

## Mentioned In

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)
- [Understanding time in FxPlug](../professional-video-applications/understanding-time-in-fxplug.md)

<a id="overview"></a>

## Overview

Because custom parameter views can get user events at any time, this protocol provides methods to prepare the host application for parameter changes or other actions at arbitrary times.

Use the [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md) and [endAction:](fxcustomparameteractionapi_v4/endaction%28__%29.md) commands only when the host application didn’t call your code. For example, in a custom view, the OS directly asks your view to redraw when it needs updating. At this point, the application has no point of reference for interacting with your plug-in, so you must tell it to start the communication by calling [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md). In the past, if you called [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md) when the host called your plug-in, there were no harmful side effects. Starting with FxPlug 4, calling [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md) when the host calls your plug-in can cause hangs in the host application. Call [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md) if you’re executing any code in a block that you created, such as calling [dispatch_async](../dispatch/dispatch_async.md).

You mainly need to use [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md) and [endAction:](fxcustomparameteractionapi_v4/endaction%28__%29.md) when handling custom [NSView](https://developer.apple.com/documentation/appkit/nsview) events for custom parameters or when running code in a dispatch block that your plug-in created.

It is NOT safe to set or get parameter values at arbitrary times outside of a [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md) and [endAction:](fxcustomparameteractionapi_v4/endaction%28__%29.md) pair. For example, when a custom parameter view receives a `keyDown:positionY:keyPressed:modifiers:forceUpdate:didHandle:time:` event, it may want to change its parameter value. It then calls the following sequence:

**Swift**

```swift
let actionAPI = _apiManager!.api(for: FxCustomParameterActionAPI_v4.self) as! FxCustomParameterActionAPI_v4
let time = actionAPI.currentTime

actionAPI.startAction(_:self)
let settingAPI = _apiManager!.api(for: FxParameterSettingAPI_v5.self) as! FxParameterSettingAPI_v5
settingAPI.setCustomParameterValue(myObject, toParameter: myParameterID, at: time)
actionAPI.endAction(_:self)
```

**Objective-C**

```objc
id <FxCustomParameterActionAPI_v4> actionAPI = [apiManager apiForProtocol:FxCustomParameterActionAPI_v4];
CMTime time = [actionAPI currentTime];
 
[actionAPI startAction:self];
id <FxParameterSettingAPI_v5> settingAPI = [apiManager apiForProtocol:FxParameterSettingAPI_v5];
[settingAPI setCustomParameterValue:myObject toParameter:myParameterID atTime:time];
[actionAPI endAction:self];
```

## Topics

### Instance Methods

- [currentTime](fxcustomparameteractionapi_v4/currenttime%28%29.md): Returns the current time, expressed as a rational time.
- [startAction:](fxcustomparameteractionapi_v4/startaction%28__%29.md): Prepares the host to access parameters.
- [endAction:](fxcustomparameteractionapi_v4/endaction%28__%29.md): Tells the host application that the plug-in is done accessing parameters.

## See Also

### Custom Parameter APIs

- [FxCustomParameterViewHost_v2](fxcustomparameterviewhost_v2.md): Defines the methods a plug-in needs to implement to associate a custom NSView with one of its parameters.
- [FxCustomParameterInterpolation_v2](fxcustomparameterinterpolation_v2.md): Defines the methods a plug-in needs to implement to support keyframing custom parameters.
