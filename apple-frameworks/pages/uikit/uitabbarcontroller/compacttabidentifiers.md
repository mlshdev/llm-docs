> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/compacttabidentifiers](https://developer.apple.com/documentation/uikit/uitabbarcontroller/compacttabidentifiers)

# compactTabIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An optional filter to display only select root-level tabs when in a compact appearance.

## Declaration

```swift
var compactTabIdentifiers: [String]? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is is `nil`, which would make all tabs available.

## See Also

### Customizing the tab bar appearance

- [isTabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden(\_:animated:)](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory(\_:animated:)](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier(\_:animated:)](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.

# compactTabIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An optional filter to display only select root-level tabs when in a compact appearance.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * compactTabIdentifiers;
```

<a id="discussion"></a>

## Discussion

The default value is is `nil`, which would make all tabs available.

## See Also

### Customizing the tab bar appearance

- [tabBarHidden](istabbarhidden.md): Determines if the active tab bar is currently hidden.
- [setTabBarHidden:animated:](settabbarhidden%28__animated_%29.md): Changes the active tab bar’s visibility with an option to animate the change.
- [bottomAccessory](bottomaccessory.md): An optional bottom accessory of the tab bar controller.
- [setBottomAccessory:animated:](setbottomaccessory%28__animated_%29.md): Sets a bottom accessory with an option to animate the change.
- [customizationIdentifier](customizationidentifier.md): The customization identifier for the tab bar and sidebar for persistence.
- [prominentTabIdentifier](prominenttabidentifier.md): The identifier of the tab that should be displayed as prominent. Where supported, the specified tab receives enhanced visual emphasis in the tab bar. If this property is nil, and there is a `UISearchTab` that could become prominent (when `automaticallyActivatesSearch = true`), then the search tab will receive the prominent treatment by default.
- [setProminentTabIdentifier:animated:](setprominenttabidentifier%28__animated_%29.md): Sets the prominent tab identifier with an option to animate the change.
