> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcameraview](https://developer.apple.com/documentation/homekit/hmcameraview)

# HMCameraView (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+

The view into which a video stream or an image snapshot is rendered.

## Declaration

```swift
class HMCameraView
```

## Topics

### Getting the Camera Source

- [cameraSource](hmcameraview/camerasource.md)
- [HMCameraSource](hmcamerasource.md): An abstract class for a camera’s data source.

### Initializers

- [init()](hmcameraview/init%28%29.md)

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Managing camera profiles

- [CameraView](cameraview.md): A SwiftUI view into which a video stream or an image snapshot is rendered.
- [cameraProfiles](hmaccessory/cameraprofiles.md): An array of camera profiles implemented by the accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.

# HMCameraView (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+

The view into which a video stream or an image snapshot is rendered.

## Declaration

```objectivec
@interface HMCameraView : UIView
```

## Topics

### Getting the Camera Source

- [cameraSource](hmcameraview/camerasource.md)
- [HMCameraSource](hmcamerasource.md): An abstract class for a camera’s data source.

### Instance Methods

- [init](hmcameraview/init%28%29.md)

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

## See Also

### Managing camera profiles

- [cameraProfiles](hmaccessory/cameraprofiles.md): An array of camera profiles implemented by the accessory.
- [HMCameraProfile](hmcameraprofile.md): A camera profile that interacts with an accessory’s camera.
