> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikscannerdeviceview/displayspostprocessapplicationcontrol](https://developer.apple.com/documentation/quartz/ikscannerdeviceview/displayspostprocessapplicationcontrol)

# displaysPostProcessApplicationControl (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Specifies whether the post processing application control is displayed.

## Declaration

```swift
var displaysPostProcessApplicationControl: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The post processing application is only relevant when the transfer mode is [IKScannerDeviceViewTransferMode.fileBased](../ikscannerdeviceviewtransfermode/filebased.md).

## See Also

### Specifying a Post Processing Application

- [postProcessApplication](postprocessapplication.md): The URL of the application to use for post processing of the scan.

# displaysPostProcessApplicationControl (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Specifies whether the post processing application control is displayed.

## Declaration

```objectivec
@property BOOL displaysPostProcessApplicationControl;
```

<a id="Discussion"></a>

## Discussion

The post processing application is only relevant when the transfer mode is [IKScannerDeviceViewTransferModeFileBased](../ikscannerdeviceviewtransfermode/filebased.md).

## See Also

### Specifying a Post Processing Application

- [postProcessApplication](postprocessapplication.md): The URL of the application to use for post processing of the scan.
