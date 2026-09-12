> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerusercustomizationsdidchangenotification](https://developer.apple.com/documentation/gamecontroller/gccontrollerusercustomizationsdidchangenotification)

# GCControllerUserCustomizationsDidChangeNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A notification that posts when the user customizes the button mappings or other settings of a controller.

## Declaration

```objectivec
extern NSString * const GCControllerUserCustomizationsDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Use this notification to update your interface when the mappings change. The notification object is the [GCController](gccontroller.md) object that the user customizes.

The system posts this notification on the main thread.

## See Also

### Remapping input elements

- [hasRemappedElements](gcphysicalinputprofile/hasremappedelements.md): A Boolean value that indicates whether the user remaps elements in this profile.
- [mappedElementAliasForPhysicalInputName:](gcphysicalinputprofile/mappedelementalias%28forphysicalinputname_%29.md): Returns the name of the input element to which the user remaps the given physical element.
- [mappedPhysicalInputNamesForElementAlias:](gcphysicalinputprofile/mappedphysicalinputnames%28forelementalias_%29.md): Returns the physical input elements to which the user remaps the given input element.
