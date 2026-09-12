> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickermode](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickermode)

# SCContentSharingPickerMode (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Available modes for selecting streaming content from a picker presented by the operating system.

## Declaration

```swift
struct SCContentSharingPickerMode
```

## Topics

### Initializers

- [init(rawValue:)](sccontentsharingpickermode/init%28rawvalue_%29.md): Initializes a sharing-picker mode.

### Picker selection modes

- [multipleApplications](sccontentsharingpickermode/multipleapplications.md): The mode allowing the selection of multiple applications through the presented picker.
- [multipleWindows](sccontentsharingpickermode/multiplewindows.md): The mode allowing the selection of multiple windows through the presented picker.
- [singleApplication](sccontentsharingpickermode/singleapplication.md): The mode allowing the selection of a single application through the presented picker.
- [singleDisplay](sccontentsharingpickermode/singledisplay.md): The mode allowing the selection of a single display through the presented picker.
- [singleWindow](sccontentsharingpickermode/singlewindow.md): The mode allowing the selection of a single window through the presented picker.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### System content-sharing picker

- [SCContentSharingPicker](sccontentsharingpicker.md): An instance of a picker presented by the operating system for managing frame-capture streams.
- [SCContentSharingPickerConfiguration](sccontentsharingpickerconfiguration-swift.struct.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerObserver](sccontentsharingpickerobserver.md): An observer protocol your app implements to receive messages from the operating system’s content picker.

# SCContentSharingPickerMode (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Available modes for selecting streaming content from a picker presented by the operating system.

## Declaration

```objectivec
enum SCContentSharingPickerMode : NSUInteger;
```

## Topics

### Picker selection modes

- [SCContentSharingPickerModeMultipleApplications](sccontentsharingpickermode/multipleapplications.md): The mode allowing the selection of multiple applications through the presented picker.
- [SCContentSharingPickerModeMultipleWindows](sccontentsharingpickermode/multiplewindows.md): The mode allowing the selection of multiple windows through the presented picker.
- [SCContentSharingPickerModeSingleApplication](sccontentsharingpickermode/singleapplication.md): The mode allowing the selection of a single application through the presented picker.
- [SCContentSharingPickerModeSingleDisplay](sccontentsharingpickermode/singledisplay.md): The mode allowing the selection of a single display through the presented picker.
- [SCContentSharingPickerModeSingleWindow](sccontentsharingpickermode/singlewindow.md): The mode allowing the selection of a single window through the presented picker.

## See Also

### System content-sharing picker

- [SCContentSharingPicker](sccontentsharingpicker.md): An instance of a picker presented by the operating system for managing frame-capture streams.
- [SCContentSharingPickerConfiguration](sccontentsharingpickerconfiguration-c.class.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerObserver](sccontentsharingpickerobserver.md): An observer protocol your app implements to receive messages from the operating system’s content picker.
