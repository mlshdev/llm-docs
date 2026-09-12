> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults)

# filterDiscoveryResults (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An option to pass discovered accessories to the app for more custom filtering, before they’re displayed in the picker for selection.

## Declaration

```swift
static var filterDiscoveryResults: ASPickerDisplaySettings.Options { get }
```

## Mentioned In

- [Discovering and configuring accessories](../../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

When your picker uses this option, your [ASAccessorySession](../../asaccessorysession.md) receives events of type [ASAccessoryEventType.accessoryDiscovered](../../asaccessoryeventtype/accessorydiscovered.md). Handle this event by examining the discovered accessory. To include it in the picker, create a new [ASDiscoveredDisplayItem](../../asdiscovereddisplayitem.md) for it and call [updatePicker(showing:completionHandler:)](../../asaccessorysession/updatepicker%28showing_completionhandler_%29.md).

# ASPickerDisplaySettingsOptionFilterDiscoveryResults (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

An option to pass discovered accessories to the app for more custom filtering, before they’re displayed in the picker for selection.

## Declaration

```objectivec
ASPickerDisplaySettingsOptionFilterDiscoveryResults
```

## Mentioned In

- [Discovering and configuring accessories](../../discovering-and-configuring-accessories.md)

<a id="discussion"></a>

## Discussion

When your picker uses this option, your [ASAccessorySession](../../asaccessorysession.md) receives events of type [ASAccessoryEventTypeAccessoryDiscovered](../../asaccessoryeventtype/accessorydiscovered.md). Handle this event by examining the discovered accessory. To include it in the picker, create a new [ASDiscoveredDisplayItem](../../asdiscovereddisplayitem.md) for it and call [updatePickerShowingDiscoveredDisplayItems:completionHandler:](../../asaccessorysession/updatepicker%28showing_completionhandler_%29.md).
