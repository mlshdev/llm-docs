> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontroller/compasssetting

# compassSetting (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A value that indicates whether to show compass information as part of your content.

## Declaration

```swift
var compassSetting: CPInstrumentClusterSetting { get }
```

<a id="discussion"></a>

## Discussion

Use the value in this property to determine when to include compass heading information with the rest of your app’s content. For information about how to interpret the individual setting values, see the [CPInstrumentClusterSetting](../cpinstrumentclustersetting.md) type.

## See Also

### Configuring your instrument cluster interface

- [instrumentClusterWindow](instrumentclusterwindow.md): The window you use to display your instrument cluster interface.
- [inactiveDescriptionVariants](inactivedescriptionvariants.md): Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md): Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.

# compassSetting (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A value that indicates whether to show compass information as part of your content.

## Declaration

```objectivec
@property (nonatomic, readonly) CPInstrumentClusterSetting compassSetting;
```

<a id="discussion"></a>

## Discussion

Use the value in this property to determine when to include compass heading information with the rest of your app’s content. For information about how to interpret the individual setting values, see the [CPInstrumentClusterSetting](../cpinstrumentclustersetting.md) type.

## See Also

### Configuring your instrument cluster interface

- [instrumentClusterWindow](instrumentclusterwindow.md): The window you use to display your instrument cluster interface.
- [inactiveDescriptionVariants](inactivedescriptionvariants.md): Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md): Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.
