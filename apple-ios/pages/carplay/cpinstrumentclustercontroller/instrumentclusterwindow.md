> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinstrumentclustercontroller/instrumentclusterwindow

# instrumentClusterWindow (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The window you use to display your instrument cluster interface.

## Declaration

```swift
var instrumentClusterWindow: UIWindow? { get }
```

<a id="discussion"></a>

## Discussion

Use the window in this property to configure your instrument cluster interface. Specifically, instantiate a custom view controller your app uses to display content in the instrument cluster and assign it to the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property. Maintain a reference to your view controller so you can update its content when the vehicle settings change.

## See Also

### Configuring your instrument cluster interface

- [inactiveDescriptionVariants](inactivedescriptionvariants.md): Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md): Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.
- [compassSetting](compasssetting.md): A value that indicates whether to show compass information as part of your content.

# instrumentClusterWindow (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The window you use to display your instrument cluster interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIWindow * instrumentClusterWindow;
```

<a id="discussion"></a>

## Discussion

Use the window in this property to configure your instrument cluster interface. Specifically, instantiate a custom view controller your app uses to display content in the instrument cluster and assign it to the window’s [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property. Maintain a reference to your view controller so you can update its content when the vehicle settings change.

## See Also

### Configuring your instrument cluster interface

- [inactiveDescriptionVariants](inactivedescriptionvariants.md): Strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [attributedInactiveDescriptionVariants](attributedinactivedescriptionvariants.md): Attributed strings for the vehicle to display in the instrument cluster when navigation isn’t active for your app.
- [speedLimitSetting](speedlimitsetting.md): A value that indicates whether to show speed limit information as part of your content.
- [compassSetting](compasssetting.md): A value that indicates whether to show compass information as part of your content.
