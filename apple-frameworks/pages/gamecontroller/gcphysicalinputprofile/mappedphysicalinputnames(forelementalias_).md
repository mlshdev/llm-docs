> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/mappedphysicalinputnames(forelementalias:)](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/mappedphysicalinputnames(forelementalias:))

# mappedPhysicalInputNames(forElementAlias:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the physical input elements to which the user remaps the given input element.

## Declaration

```swift
func mappedPhysicalInputNames(forElementAlias elementAlias: String) -> Set<String>
```

## Parameters

- `elementAlias`: The name of the input element too which physical input elements remap. For possible values, see [Extended gamepad input names](../extended-gamepad-input-names.md).

<a id="return-value"></a>

## Return Value

The names of the physical input element to which the user remaps the given element.

<a id="Discussion"></a>

## Discussion

For example, if the user maps a physical press of A button , B button, and X button to button B, then passing [GCInputButtonB](../gcinputbuttonb-6z361.md) returns a set that contains [GCInputButtonA](../gcinputbuttona-8z15w.md), [GCInputButtonB](../gcinputbuttonb-6z361.md), and [GCInputButtonX](../gcinputbuttonx-32i2z.md).

## See Also

### Remapping input elements

- [hasRemappedElements](hasremappedelements.md): A Boolean value that indicates whether the user remaps elements in this profile.
- [mappedElementAlias(forPhysicalInputName:)](mappedelementalias%28forphysicalinputname_%29.md): Returns the name of the input element to which the user remaps the given physical element.
- [GCControllerUserCustomizationsDidChange](../../foundation/nsnotification/name-swift.struct/gccontrollerusercustomizationsdidchange.md): A notification that posts when the user customizes the button mappings or other settings of a controller.

# mappedPhysicalInputNamesForElementAlias: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the physical input elements to which the user remaps the given input element.

## Declaration

```objectivec
- (NSSet<NSString *> *) mappedPhysicalInputNamesForElementAlias:(NSString *) elementAlias;
```

## Parameters

- `elementAlias`: The name of the input element too which physical input elements remap. For possible values, see [Extended gamepad input names](../extended-gamepad-input-names.md).

<a id="return-value"></a>

## Return Value

The names of the physical input element to which the user remaps the given element.

<a id="Discussion"></a>

## Discussion

For example, if the user maps a physical press of A button , B button, and X button to button B, then passing [GCInputButtonB](../gcinputbuttonb-6z361.md) returns a set that contains [GCInputButtonA](../gcinputbuttona-8z15w.md), [GCInputButtonB](../gcinputbuttonb-6z361.md), and [GCInputButtonX](../gcinputbuttonx-32i2z.md).

## See Also

### Remapping input elements

- [hasRemappedElements](hasremappedelements.md): A Boolean value that indicates whether the user remaps elements in this profile.
- [mappedElementAliasForPhysicalInputName:](mappedelementalias%28forphysicalinputname_%29.md): Returns the name of the input element to which the user remaps the given physical element.
- [GCControllerUserCustomizationsDidChangeNotification](../gccontrollerusercustomizationsdidchangenotification.md): A notification that posts when the user customizes the button mappings or other settings of a controller.
