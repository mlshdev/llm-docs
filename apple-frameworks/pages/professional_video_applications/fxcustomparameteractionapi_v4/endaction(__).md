> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcustomparameteractionapi_v4/endaction(_:)](https://developer.apple.com/documentation/professional_video_applications/fxcustomparameteractionapi_v4/endaction(_:))

# endAction(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Tells the host application that the plug-in is done accessing parameters.

## Declaration

```swift
func endAction(_ sender: Any!)
```

## Parameters

- `sender`: The view class that implements this protocol. Typically passed as self.

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

It is important to note that OSC plug-ins (implementing [FxOnScreenControl_v4](../fxonscreencontrol_v4.md)) should not use [startAction(\_:)](startaction%28__%29.md) and [endAction(\_:)](endaction%28__%29.md), as the host is already aware that parameters are likely to change.

## See Also

### Instance Methods

- [currentTime()](currenttime%28%29.md): Returns the current time, expressed as a rational time.
- [startAction(\_:)](startaction%28__%29.md): Prepares the host to access parameters.

# endAction: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Tells the host application that the plug-in is done accessing parameters.

## Declaration

```objectivec
- (void) endAction:(id) sender;
```

## Parameters

- `sender`: The view class that implements this protocol. Typically passed as self.

## Mentioned In

- [Adding parameters to plug-ins](../../professional-video-applications/adding-parameters-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

It is important to note that OSC plug-ins (implementing [FxOnScreenControl_v4](../fxonscreencontrol_v4.md)) should not use [startAction:](startaction%28__%29.md) and [endAction:](endaction%28__%29.md), as the host is already aware that parameters are likely to change.

## See Also

### Instance Methods

- [currentTime](currenttime%28%29.md): Returns the current time, expressed as a rational time.
- [startAction:](startaction%28__%29.md): Prepares the host to access parameters.
