> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameterviewhost_v2](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameterviewhost_v2)

# FxCustomParameterViewHost_v2 (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.0+

Defines the methods a plug-in needs to implement to associate a custom NSView with one of its parameters.

## Declaration

```swift
protocol FxCustomParameterViewHost_v2
```

## Mentioned In

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="overview"></a>

## Overview

An FxPlug that wants to present custom UI for one or more of its parameters must conform to the FxCustomParmeterViewHost protocol. This protocol allows the plug-in to provide a subclass of NSView. It is up to the plug-in to handle NSEvents in its custom view(s). When an event in a custom view necessitates a change to the value of the associated parameter, the plug-in then uses methods in the host API FxCustomParameterActionAPI to tell the host application to change the parameter value.

## Topics

### Instance Methods

- [createView(forParameterID:)](fxcustomparameterviewhost_v2/createview%28forparameterid_%29.md): Provides an NSView to be associated with the given parameter.

## See Also

### Custom Parameter APIs

- [FxCustomParameterActionAPI_v4](fxcustomparameteractionapi_v4.md): Defines the methods the host application provides to support a custom parameter view.
- [FxCustomParameterInterpolation_v2](fxcustomparameterinterpolation_v2.md): Defines the methods a plug-in needs to implement to support keyframing custom parameters.

# FxCustomParameterViewHost_v2 (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Defines the methods a plug-in needs to implement to associate a custom NSView with one of its parameters.

## Declaration

```objectivec
@protocol FxCustomParameterViewHost_v2
```

## Mentioned In

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="overview"></a>

## Overview

An FxPlug that wants to present custom UI for one or more of its parameters must conform to the FxCustomParmeterViewHost protocol. This protocol allows the plug-in to provide a subclass of NSView. It is up to the plug-in to handle NSEvents in its custom view(s). When an event in a custom view necessitates a change to the value of the associated parameter, the plug-in then uses methods in the host API FxCustomParameterActionAPI to tell the host application to change the parameter value.

## Topics

### Instance Methods

- [createViewForParameterID:](fxcustomparameterviewhost_v2/createview%28forparameterid_%29.md): Provides an NSView to be associated with the given parameter.

## See Also

### Custom Parameter APIs

- [FxCustomParameterActionAPI_v4](fxcustomparameteractionapi_v4.md): Defines the methods the host application provides to support a custom parameter view.
- [FxCustomParameterInterpolation_v2](fxcustomparameterinterpolation_v2.md): Defines the methods a plug-in needs to implement to support keyframing custom parameters.
