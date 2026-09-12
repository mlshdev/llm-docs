> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickercapabilities/sensitivityanalysisintervention](https://developer.apple.com/documentation/photosui/phpickercapabilities/sensitivityanalysisintervention)

# sensitivityAnalysisIntervention (Swift)

**Framework:** PhotosUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A capability that prompts for confirmation if a person selects a photo that contains nudity.

## Declaration

```swift
static var sensitivityAnalysisIntervention: PHPickerCapabilities { get }
```

<a id="Discussion"></a>

## Discussion

When either the Sensitive Content Warning setting or Communication Safety parental control in Screen Time are active in iOS 17 or later, the photos picker checks whether a selected asset contains nudity. If so, the photo picker presents a model view that warns the person before giving the app access to the photo. The intervention UI requires a person to confirm that they really intend to interact with the sensitive asset in the photo library before proceeding. For more information on nudity detection in iOS 17 and later, see [Sensitive Content Analysis](../../sensitivecontentanalysis.md).

## See Also

### Specifying features

- [collectionNavigation](collectionnavigation.md): A capability that corresponds to a sidebar or the Albums tab.
- [selectionActions](selectionactions.md): A cabability that represents the Cancel and Add buttons.
- [search](search.md): A capability that corresponds to the search bar.
- [stagingArea](stagingarea.md): A capability that corresponds to an area in which the selected photos display.

# PHPickerCapabilitiesSensitivityAnalysisIntervention (Objective-C)

**Framework:** PhotosUI  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A capability that prompts for confirmation if a person selects a photo that contains nudity.

## Declaration

```objectivec
PHPickerCapabilitiesSensitivityAnalysisIntervention
```

<a id="Discussion"></a>

## Discussion

When either the Sensitive Content Warning setting or Communication Safety parental control in Screen Time are active in iOS 17 or later, the photos picker checks whether a selected asset contains nudity. If so, the photo picker presents a model view that warns the person before giving the app access to the photo. The intervention UI requires a person to confirm that they really intend to interact with the sensitive asset in the photo library before proceeding. For more information on nudity detection in iOS 17 and later, see [Sensitive Content Analysis](../../sensitivecontentanalysis.md).

## See Also

### Specifying features

- [PHPickerCapabilitiesNone](https://developer.apple.com/documentation/photosui/phpickercapabilities/phpickercapabilitiesnone): An option that represents no capabilities.
- [PHPickerCapabilitiesCollectionNavigation](collectionnavigation.md): A capability that corresponds to a sidebar or the Albums tab.
- [PHPickerCapabilitiesSelectionActions](selectionactions.md): A cabability that represents the Cancel and Add buttons.
- [PHPickerCapabilitiesSearch](search.md): A capability that corresponds to the search bar.
- [PHPickerCapabilitiesStagingArea](stagingarea.md): A capability that corresponds to an area in which the selected photos display.
