> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikcameradeviceview/postprocessapplication](https://developer.apple.com/documentation/quartz/ikcameradeviceview/postprocessapplication)

# postProcessApplication (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The URL of the application used to post process the image.

## Declaration

```swift
var postProcessApplication: URL! { get set }
```

<a id="Discussion"></a>

## Discussion

The post process application is only relevant when the [transferMode](transfermode.md) is set to [IKCameraDeviceViewTransferMode.fileBased](../ikcameradeviceviewtransfermode/filebased.md).

## See Also

### Getting and Setting the Post Processing Application

- [displaysPostProcessApplicationControl](displayspostprocessapplicationcontrol.md): Displays whether the post process application control should be displayed.

# postProcessApplication (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The URL of the application used to post process the image.

## Declaration

```objectivec
@property (retain) NSURL * postProcessApplication;
```

<a id="Discussion"></a>

## Discussion

The post process application is only relevant when the [transferMode](transfermode.md) is set to [IKCameraDeviceViewTransferModeFileBased](../ikcameradeviceviewtransfermode/filebased.md).

## See Also

### Getting and Setting the Post Processing Application

- [displaysPostProcessApplicationControl](displayspostprocessapplicationcontrol.md): Displays whether the post process application control should be displayed.
