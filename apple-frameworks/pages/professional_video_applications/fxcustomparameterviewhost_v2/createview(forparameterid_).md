> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameterviewhost_v2/createview(forparameterid:)](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameterviewhost_v2/createview(forparameterid:))

# createView(forParameterID:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides an NSView to be associated with the given parameter.

## Declaration

```swift
func createView(forParameterID parameterID: UInt32) -> NSView!
```

## Parameters

- `parameterID`: The ID of the parameter to be associated with the custom UI.

<a id="return-value"></a>

## Return Value

An NSView or subclass of NSView.

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

The host application calls this plug-in method during the parameter-list setup sequence, once for each plug-in parameter that has the `kFxParameterFlag_CUSTOM_UI` parameter flag set. The view may be created dynamically, or, more commonly, retrieved from a NIB file in the plug-in’s resources directory.

The object returned by this method should not be autoreleased. It should be allocated by the method, and will be released by the caller. The implementation may look something like this:

```objc
if ( parmId == kMyViewParmID )
return [[MyView alloc] init];
```

# createViewForParameterID: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides an NSView to be associated with the given parameter.

## Declaration

```objectivec
- (NSView *) createViewForParameterID:(UInt32) parameterID;
```

## Parameters

- `parameterID`: The ID of the parameter to be associated with the custom UI.

<a id="return-value"></a>

## Return Value

An NSView or subclass of NSView.

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

The host application calls this plug-in method during the parameter-list setup sequence, once for each plug-in parameter that has the `kFxParameterFlag_CUSTOM_UI` parameter flag set. The view may be created dynamically, or, more commonly, retrieved from a NIB file in the plug-in’s resources directory.

The object returned by this method should not be autoreleased. It should be allocated by the method, and will be released by the caller. The implementation may look something like this:

```objc
if ( parmId == kMyViewParmID )
return [[MyView alloc] init];
```
