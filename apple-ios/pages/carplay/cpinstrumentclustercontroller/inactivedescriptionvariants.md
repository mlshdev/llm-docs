> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontroller/inactivedescriptionvariants

# inactiveDescriptionVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.

## Declaration

```swift
var inactiveDescriptionVariants: [String] { get set }
```

<a id="discussion"></a>

## Discussion

When your app’s navigation isn’t active, configure this property with strings that offer relevant information. For example, you might specify the road on which the person is driving. Provide strings of different lengths and place the more preferred strings at the beginning of the array, followed by the remaining strings. When the vehicle has a place to put your text, it chooses the most preferred string in the array that also fits the available space.

When setting a value, this property makes a copy of the string you provide. If the vehicle supports styled text, the system prefers the values in the [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md) property over the values in this array.

## See Also

### Configuring your instrument cluster interface

- [instrumentClusterWindow](instrumentclusterwindow.md): The window you use to display your instrument cluster interface.
- [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md): Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.
- [compassSetting](compasssetting.md): A value that indicates whether to show compass information as part of your content.

# inactiveDescriptionVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * inactiveDescriptionVariants;
```

<a id="discussion"></a>

## Discussion

When your app’s navigation isn’t active, configure this property with strings that offer relevant information. For example, you might specify the road on which the person is driving. Provide strings of different lengths and place the more preferred strings at the beginning of the array, followed by the remaining strings. When the vehicle has a place to put your text, it chooses the most preferred string in the array that also fits the available space.

When setting a value, this property makes a copy of the string you provide. If the vehicle supports styled text, the system prefers the values in the [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md) property over the values in this array.

## See Also

### Configuring your instrument cluster interface

- [instrumentClusterWindow](instrumentclusterwindow.md): The window you use to display your instrument cluster interface.
- [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md): Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.
- [compassSetting](compasssetting.md): A value that indicates whether to show compass information as part of your content.
