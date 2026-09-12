> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/bottomaccessory](https://developer.apple.com/documentation/uikit/uitabbarcontroller/bottomaccessory)

# bottomAccessory (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An optional bottom accessory of the tab bar controller.

## Declaration

```swift
var bottomAccessory: UITabAccessory? { get set }
```

<a id="discussion"></a>

## Discussion

The default value for this property is `nil`.

## See Also

### Customizing the tab bar appearance

- [isTabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden(\_:animated:)](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [setBottomAccessory(\_:animated:)](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier(\_:animated:)](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.

# bottomAccessory (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An optional bottom accessory of the tab bar controller.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UITabAccessory * bottomAccessory;
```

<a id="discussion"></a>

## Discussion

The default value for this property is `nil`.

## See Also

### Customizing the tab bar appearance

- [tabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden:animated:](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [setBottomAccessory:animated:](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [compactTabIdentifiers](compacttabidentifiers.md): An optional filter to display only select root-level tabs when in a compact appearance.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier:animated:](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.
