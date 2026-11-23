> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontroller/attributedinactivedescriptionvariants

# attributedInactiveDescriptionVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.

## Declaration

```swift
var attributedInactiveDescriptionVariants: [NSAttributedString] { get set }
```

<a id="discussion"></a>

## Discussion

When your app’s navigation isn’t active, configure this property with attributed strings that offer relevant information. For example, you might specify the road on which the person is driving. Provide attributed strings of different lengths and place the more preferred strings at the beginning of the array, followed by the remaining strings. When the vehicle has a place to put your text, it chooses the most preferred attributed string in the array that also fits the available space.

When creating your attributed strings, the only supported attribute is the [attachment](https://developer.apple.com/documentation/foundation/nsattributedstring/key/attachment) attribute. Use this attribute to annotate the string with images. The maximum allowed size for images is 64x25 points. CarPlay removes all other attributes from your attributed string.

When setting a value, this property makes a copy of the string you provide. If the vehicle supports styled text, the system prefers the values in this property over the values in the [inactiveDescriptionVariants](inactivedescriptionvariants.md) property.

## See Also

### Configuring your instrument cluster interface

- [instrumentClusterWindow](instrumentclusterwindow.md): The window you use to display your instrument cluster interface.
- [inactiveDescriptionVariants](inactivedescriptionvariants.md): Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.
- [compassSetting](compasssetting.md): A value that indicates whether to show compass information as part of your content.

# attributedInactiveDescriptionVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSAttributedString *> * attributedInactiveDescriptionVariants;
```

<a id="discussion"></a>

## Discussion

When your app’s navigation isn’t active, configure this property with attributed strings that offer relevant information. For example, you might specify the road on which the person is driving. Provide attributed strings of different lengths and place the more preferred strings at the beginning of the array, followed by the remaining strings. When the vehicle has a place to put your text, it chooses the most preferred attributed string in the array that also fits the available space.

When creating your attributed strings, the only supported attribute is the [attachment](https://developer.apple.com/documentation/foundation/nsattributedstring/key/attachment) attribute. Use this attribute to annotate the string with images. The maximum allowed size for images is 64x25 points. CarPlay removes all other attributes from your attributed string.

When setting a value, this property makes a copy of the string you provide. If the vehicle supports styled text, the system prefers the values in this property over the values in the [inactiveDescriptionVariants](inactivedescriptionvariants.md) property.

## See Also

### Configuring your instrument cluster interface

- [instrumentClusterWindow](instrumentclusterwindow.md): The window you use to display your instrument cluster interface.
- [inactiveDescriptionVariants](inactivedescriptionvariants.md): Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.
- [compassSetting](compasssetting.md): A value that indicates whether to show compass information as part of your content.
