> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikcameradeviceview/displayspostprocessapplicationcontrol

# displaysPostProcessApplicationControl (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Displays whether the post process application control should be displayed.

## Declaration

```swift
var displaysPostProcessApplicationControl: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The post process application is only relevant when the [transferMode](transfermode.md) is set to [IKCameraDeviceViewTransferMode.fileBased](../ikcameradeviceviewtransfermode/filebased.md).

## See Also

### Getting and Setting the Post Processing Application

- [postProcessApplication](postprocessapplication.md): The URL of the application used to post process the image.

# displaysPostProcessApplicationControl (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Displays whether the post process application control should be displayed.

## Declaration

```objectivec
@property BOOL displaysPostProcessApplicationControl;
```

<a id="Discussion"></a>

## Discussion

The post process application is only relevant when the [transferMode](transfermode.md) is set to [IKCameraDeviceViewTransferModeFileBased](../ikcameradeviceviewtransfermode/filebased.md).

## See Also

### Getting and Setting the Post Processing Application

- [postProcessApplication](postprocessapplication.md): The URL of the application used to post process the image.
