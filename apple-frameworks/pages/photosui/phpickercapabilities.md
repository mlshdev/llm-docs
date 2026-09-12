> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickercapabilities](https://developer.apple.com/documentation/photosui/phpickercapabilities)

# PHPickerCapabilities (Swift)

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Options that customize the look and behavior of the photos picker.

## Declaration

```swift
struct PHPickerCapabilities
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values for the photo picker configuration ([PHPickerConfiguration](phpickerconfiguration-swift.struct.md)) property [disabledCapabilities](phpickerconfiguration-swift.struct/disabledcapabilities.md).

## Topics

### Specifying features

- [collectionNavigation](phpickercapabilities/collectionnavigation.md): A capability that corresponds to a sidebar or the Albums tab.
- [selectionActions](phpickercapabilities/selectionactions.md): A cabability that represents the Cancel and Add buttons.
- [search](phpickercapabilities/search.md): A capability that corresponds to the search bar.
- [sensitivityAnalysisIntervention](phpickercapabilities/sensitivityanalysisintervention.md): A capability that prompts for confirmation if a person selects a photo that contains nudity.
- [stagingArea](phpickercapabilities/stagingarea.md): A capability that corresponds to an area in which the selected photos display.

### Creating a capability

- [init(rawValue:)](phpickercapabilities/init%28rawvalue_%29.md): Creates a photo picker capability.

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

# PHPickerCapabilities (Objective-C)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Options that customize the look and behavior of the photos picker.

## Declaration

```objectivec
enum PHPickerCapabilities : NSUInteger;
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values for the photo picker configuration ([PHPickerConfiguration](phpickerconfiguration-swift.struct.md)) property [disabledCapabilities](phpickerconfiguration-swift.struct/disabledcapabilities.md).

## Topics

### Specifying features

- [PHPickerCapabilitiesNone](https://developer.apple.com/documentation/photosui/phpickercapabilities/phpickercapabilitiesnone): An option that represents no capabilities.
- [PHPickerCapabilitiesCollectionNavigation](phpickercapabilities/collectionnavigation.md): A capability that corresponds to a sidebar or the Albums tab.
- [PHPickerCapabilitiesSelectionActions](phpickercapabilities/selectionactions.md): A cabability that represents the Cancel and Add buttons.
- [PHPickerCapabilitiesSearch](phpickercapabilities/search.md): A capability that corresponds to the search bar.
- [PHPickerCapabilitiesSensitivityAnalysisIntervention](phpickercapabilities/sensitivityanalysisintervention.md): A capability that prompts for confirmation if a person selects a photo that contains nudity.
- [PHPickerCapabilitiesStagingArea](phpickercapabilities/stagingarea.md): A capability that corresponds to an area in which the selected photos display.

## See Also

### Customizing picker appearance and behavior

- [mode](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class/mode): A layout type for the photos in the picker’s view.
- [PHPickerMode](https://developer.apple.com/documentation/photosui/phpickermode-c.enum): Layout options that determine how the picker orders photos visually.
- [disabledCapabilities](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class/disabledcapabilities): The aspects of a photo picker’s default appearance that your app can disable.
- [edgesWithoutContentMargins](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class/edgeswithoutcontentmargins): The portions of a photo picker’s perimeter that are borderless.
- [PHPickerUpdateConfiguration](https://developer.apple.com/documentation/photosui/phpickerupdateconfiguration): An object that defines the aspects of a photo picker’s appearance that can change while it’s presented.
