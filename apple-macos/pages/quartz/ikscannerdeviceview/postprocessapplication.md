> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceview/postprocessapplication](https://developer.apple.com/documentation/quartz/ikscannerdeviceview/postprocessapplication)

# postProcessApplication (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The URL of the application to use for post processing of the scan.

## Declaration

```swift
var postProcessApplication: URL! { get set }
```

<a id="Discussion"></a>

## Discussion

The post processing application is only relevant when the transfer mode is [IKScannerDeviceViewTransferMode.fileBased](../ikscannerdeviceviewtransfermode/filebased.md).

## See Also

### Specifying a Post Processing Application

- [displaysPostProcessApplicationControl](displayspostprocessapplicationcontrol.md): Specifies whether the post processing application control is displayed.

# postProcessApplication (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The URL of the application to use for post processing of the scan.

## Declaration

```objectivec
@property (retain) NSURL * postProcessApplication;
```

<a id="Discussion"></a>

## Discussion

The post processing application is only relevant when the transfer mode is [IKScannerDeviceViewTransferModeFileBased](../ikscannerdeviceviewtransfermode/filebased.md).

## See Also

### Specifying a Post Processing Application

- [displaysPostProcessApplicationControl](displayspostprocessapplicationcontrol.md): Specifies whether the post processing application control is displayed.
