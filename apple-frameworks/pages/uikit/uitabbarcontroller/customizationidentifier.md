> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/customizationidentifier](https://developer.apple.com/documentation/uikit/uitabbarcontroller/customizationidentifier)

# customizationIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The customization identifier for the tab bar and sidebar for persistence.

## Declaration

```swift
var customizationIdentifier: String? { get set }
```

<a id="discussion"></a>

## Discussion

The identifier is useful for when an app has multiple tab bar controllers, each with their own customizations. If the customization identifier is `nil`, a system default is used. Default is `nil`.

## See Also

### Customizing the tab bar appearance

- [isTabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden(\_:animated:)](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory(\_:animated:)](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier(\_:animated:)](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.

# customizationIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The customization identifier for the tab bar and sidebar for persistence.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * customizationIdentifier;
```

<a id="discussion"></a>

## Discussion

The identifier is useful for when an app has multiple tab bar controllers, each with their own customizations. If the customization identifier is `nil`, a system default is used. Default is `nil`.

## See Also

### Customizing the tab bar appearance

- [tabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden:animated:](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory:animated:](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier:animated:](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.
