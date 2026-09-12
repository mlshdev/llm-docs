> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcproductcategorycoalescedremote](https://developer.apple.com/documentation/gamecontroller/gcproductcategorycoalescedremote)

# GCProductCategoryCoalescedRemote (Swift)

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The Apple TV Remote product category for physical and virtual remotes that Game Center combines into a single device.

## Declaration

```swift
let GCProductCategoryCoalescedRemote: String
```

<a id="Discussion"></a>

## Discussion

Game Controller merges the physical Apple TV Remote with the virtual Apple TV Remote app into one [GCDevice](gcdevice.md) object by default. To disable this behavior, or if you fully support the second-generation Siri Remote, set the [GCSupportsMultipleMicroGamepads](../bundleresources/information-property-list/gcsupportsmultiplemicrogamepads.md) key to `YES` in the information property list.

## See Also

### Apple TV remote categories

- [GCProductCategorySiriRemote1stGen](gcproductcategorysiriremote1stgen.md): The first-generation Siri Remote or first-generation Apple TV Remote product category.
- [GCProductCategorySiriRemote2ndGen](gcproductcategorysiriremote2ndgen.md): The second-generation Siri Remote or second-generation Apple TV Remote product category.
- [GCProductCategoryControlCenterRemote](gcproductcategorycontrolcenterremote.md): The virtual remote in the Control Center on iOS and tvOS devices for controlling the Apple TV.
- [GCProductCategoryUniversalElectronicsRemote](gcproductcategoryuniversalelectronicsremote.md): The product category for a Universal Electronics remote that works with Apple TV.

# GCProductCategoryCoalescedRemote (Objective-C)

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The Apple TV Remote product category for physical and virtual remotes that Game Center combines into a single device.

## Declaration

```objectivec
extern NSString * const GCProductCategoryCoalescedRemote;
```

<a id="Discussion"></a>

## Discussion

Game Controller merges the physical Apple TV Remote with the virtual Apple TV Remote app into one [GCDevice](gcdevice.md) object by default. To disable this behavior, or if you fully support the second-generation Siri Remote, set the [GCSupportsMultipleMicroGamepads](../bundleresources/information-property-list/gcsupportsmultiplemicrogamepads.md) key to `YES` in the information property list.

## See Also

### Apple TV remote categories

- [GCProductCategorySiriRemote1stGen](gcproductcategorysiriremote1stgen.md): The first-generation Siri Remote or first-generation Apple TV Remote product category.
- [GCProductCategorySiriRemote2ndGen](gcproductcategorysiriremote2ndgen.md): The second-generation Siri Remote or second-generation Apple TV Remote product category.
- [GCProductCategoryControlCenterRemote](gcproductcategorycontrolcenterremote.md): The virtual remote in the Control Center on iOS and tvOS devices for controlling the Apple TV.
- [GCProductCategoryUniversalElectronicsRemote](gcproductcategoryuniversalelectronicsremote.md): The product category for a Universal Electronics remote that works with Apple TV.
