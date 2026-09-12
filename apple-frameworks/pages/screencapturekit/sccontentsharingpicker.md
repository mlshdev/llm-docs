> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpicker](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpicker)

# SCContentSharingPicker (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

An instance of a picker presented by the operating system for managing frame-capture streams.

## Declaration

```swift
class SCContentSharingPicker
```

<a id="overview"></a>

## Overview

> **Important**

>  Avoid creating your own sharing picker. Use the picker provided by the [shared](sccontentsharingpicker/shared.md) static property.

## Topics

### Shared system picker

- [shared](sccontentsharingpicker/shared.md): The system-provided picker UI instance for capturing display and audio content from someone’s Mac.

### Picker availability

- [isActive](sccontentsharingpicker/isactive.md): A Boolean value that indicates if the picker is active.

### Stream configuration

- [setConfiguration(\_:for:)](sccontentsharingpicker/setconfiguration%28__for_%29.md): Sets the configuration for the content capture picker for a capture stream, providing allowed selection modes and content excluded from selection.
- [configuration](sccontentsharingpicker/configuration.md): Sets the configuration for the content capture picker for all streams, providing allowed selection modes and content excluded from selection.
- [defaultConfiguration](sccontentsharingpicker/defaultconfiguration-94q2b.md): The default configuration to use for the content capture picker.
- [maximumStreamCount](sccontentsharingpicker/maximumstreamcount-2kuaa.md): The maximum number of streams the content capture picker allows.

### Manage observers

- [add(\_:)](sccontentsharingpicker/add%28__%29.md): Adds an observer instance to notify of changes in the content-sharing picker.
- [remove(\_:)](sccontentsharingpicker/remove%28__%29.md): Removes an observer instance from the content-sharing picker.

### Picker display

- [present()](sccontentsharingpicker/present%28%29.md): Displays the picker with no active selection for capture.
- [present(for:)](sccontentsharingpicker/present%28for_%29.md): Displays the picker with an already running capture stream.
- [present(using:)](sccontentsharingpicker/present%28using_%29.md): Displays the picker for a single type of capture selection.
- [present(for:using:)](sccontentsharingpicker/present%28for_using_%29.md): Displays the picker with an existing capture stream, allowing for a single type of capture selection.

### Instance Properties

- [isAvailable](sccontentsharingpicker/isavailable.md)

### Instance Methods

- [presentForCurrentApplication()](sccontentsharingpicker/presentforcurrentapplication%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### System content-sharing picker

- [SCContentSharingPickerConfiguration](sccontentsharingpickerconfiguration-swift.struct.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerMode](sccontentsharingpickermode.md): Available modes for selecting streaming content from a picker presented by the operating system.
- [SCContentSharingPickerObserver](sccontentsharingpickerobserver.md): An observer protocol your app implements to receive messages from the operating system’s content picker.

# SCContentSharingPicker (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

An instance of a picker presented by the operating system for managing frame-capture streams.

## Declaration

```objectivec
@interface SCContentSharingPicker : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  Avoid creating your own sharing picker. Use the picker provided by the [sharedPicker](sccontentsharingpicker/shared.md) static property.

## Topics

### Shared system picker

- [sharedPicker](sccontentsharingpicker/shared.md): The system-provided picker UI instance for capturing display and audio content from someone’s Mac.

### Picker availability

- [active](sccontentsharingpicker/isactive.md): A Boolean value that indicates if the picker is active.

### Stream configuration

- [setConfiguration:forStream:](sccontentsharingpicker/setconfiguration_forstream_.md): Sets the configuration for the content capture picker for a capture stream, providing allowed selection modes and content excluded from selection.
- [defaultConfiguration](sccontentsharingpicker/defaultconfiguration-9v5sa.md): The default configuration to use for the content capture picker.
- [maximumStreamCount](sccontentsharingpicker/maximumstreamcount-66khx.md): The maximum number of streams the content capture picker allows.

### Manage observers

- [addObserver:](sccontentsharingpicker/add%28__%29.md): Adds an observer instance to notify of changes in the content-sharing picker.
- [removeObserver:](sccontentsharingpicker/remove%28__%29.md): Removes an observer instance from the content-sharing picker.

### Picker display

- [present](sccontentsharingpicker/present%28%29.md): Displays the picker with no active selection for capture.
- [presentPickerForStream:](sccontentsharingpicker/present%28for_%29.md): Displays the picker with an already running capture stream.
- [presentPickerUsingContentStyle:](sccontentsharingpicker/present%28using_%29.md): Displays the picker for a single type of capture selection.
- [presentPickerForStream:usingContentStyle:](sccontentsharingpicker/present%28for_using_%29.md): Displays the picker with an existing capture stream, allowing for a single type of capture selection.

### Instance Properties

- [available](sccontentsharingpicker/isavailable.md)

### Instance Methods

- [presentPickerForCurrentApplication](sccontentsharingpicker/presentforcurrentapplication%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### System content-sharing picker

- [SCContentSharingPickerConfiguration](sccontentsharingpickerconfiguration-c.class.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerMode](sccontentsharingpickermode.md): Available modes for selecting streaming content from a picker presented by the operating system.
- [SCContentSharingPickerObserver](sccontentsharingpickerobserver.md): An observer protocol your app implements to receive messages from the operating system’s content picker.
