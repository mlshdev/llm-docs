> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/mappedelementalias(forphysicalinputname:)](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/mappedelementalias(forphysicalinputname:))

# mappedElementAlias(forPhysicalInputName:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the name of the input element to which the user remaps the given physical element.

## Declaration

```swift
func mappedElementAlias(forPhysicalInputName inputName: String) -> String
```

## Parameters

- `inputName`: The name of the physical element. For possible values, see [Extended gamepad input names](../extended-gamepad-input-names.md).

<a id="return-value"></a>

## Return Value

The name of the input element to which the user remaps the physical element, or `nil` if the user doesn’t remap the physical element.

<a id="Discussion"></a>

## Discussion

Use this method to get the alias for an input element. For example, if the user remaps a physical press of the controller’s A button to button B, then passing [GCInputButtonA](../gcinputbuttona-8z15w.md) to this method returns [GCInputButtonB](../gcinputbuttonb-6z361.md).

## See Also

### Remapping input elements

- [hasRemappedElements](hasremappedelements.md): A Boolean value that indicates whether the user remaps elements in this profile.
- [mappedPhysicalInputNames(forElementAlias:)](mappedphysicalinputnames%28forelementalias_%29.md): Returns the physical input elements to which the user remaps the given input element.
- [GCControllerUserCustomizationsDidChange](../../foundation/nsnotification/name-swift.struct/gccontrollerusercustomizationsdidchange.md): A notification that posts when the user customizes the button mappings or other settings of a controller.

# mappedElementAliasForPhysicalInputName: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the name of the input element to which the user remaps the given physical element.

## Declaration

```objectivec
- (NSString *) mappedElementAliasForPhysicalInputName:(NSString *) inputName;
```

## Parameters

- `inputName`: The name of the physical element. For possible values, see [Extended gamepad input names](../extended-gamepad-input-names.md).

<a id="return-value"></a>

## Return Value

The name of the input element to which the user remaps the physical element, or `nil` if the user doesn’t remap the physical element.

<a id="Discussion"></a>

## Discussion

Use this method to get the alias for an input element. For example, if the user remaps a physical press of the controller’s A button to button B, then passing [GCInputButtonA](../gcinputbuttona-8z15w.md) to this method returns [GCInputButtonB](../gcinputbuttonb-6z361.md).

## See Also

### Remapping input elements

- [hasRemappedElements](hasremappedelements.md): A Boolean value that indicates whether the user remaps elements in this profile.
- [mappedPhysicalInputNamesForElementAlias:](mappedphysicalinputnames%28forelementalias_%29.md): Returns the physical input elements to which the user remaps the given input element.
- [GCControllerUserCustomizationsDidChangeNotification](../gccontrollerusercustomizationsdidchangenotification.md): A notification that posts when the user customizes the button mappings or other settings of a controller.
