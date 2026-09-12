> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/hasremappedelements](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/hasremappedelements)

# hasRemappedElements (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the user remaps elements in this profile.

## Declaration

```swift
var hasRemappedElements: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user remaps one or more elements; otherwise, this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Remapping input elements

- [mappedElementAlias(forPhysicalInputName:)](mappedelementalias%28forphysicalinputname_%29.md): Returns the name of the input element to which the user remaps the given physical element.
- [mappedPhysicalInputNames(forElementAlias:)](mappedphysicalinputnames%28forelementalias_%29.md): Returns the physical input elements to which the user remaps the given input element.
- [GCControllerUserCustomizationsDidChange](../../foundation/nsnotification/name-swift.struct/gccontrollerusercustomizationsdidchange.md): A notification that posts when the user customizes the button mappings or other settings of a controller.

# hasRemappedElements (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the user remaps elements in this profile.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasRemappedElements;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the user remaps one or more elements; otherwise, this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Remapping input elements

- [mappedElementAliasForPhysicalInputName:](mappedelementalias%28forphysicalinputname_%29.md): Returns the name of the input element to which the user remaps the given physical element.
- [mappedPhysicalInputNamesForElementAlias:](mappedphysicalinputnames%28forelementalias_%29.md): Returns the physical input elements to which the user remaps the given input element.
- [GCControllerUserCustomizationsDidChangeNotification](../gccontrollerusercustomizationsdidchangenotification.md): A notification that posts when the user customizes the button mappings or other settings of a controller.
