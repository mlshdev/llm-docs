> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptabbartemplatedelegate/tabbartemplate(_:didselect:)](https://developer.apple.com/documentation/carplay/cptabbartemplatedelegate/tabbartemplate(_:didselect:))

# tabBarTemplate(\_:didSelect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate when the tab bar selects the specified template.

## Declaration

```swift
func tabBarTemplate(_ tabBarTemplate: CPTabBarTemplate, didSelect selectedTemplate: CPTemplate)
```

## Parameters

- `tabBarTemplate`: The tab bar template that alerts you to the change in selection.
- `selectedTemplate`: The template that the user selects.

<a id="Discussion"></a>

## Discussion

The tab bar template calls this method each time the user selects a tab. `tabBarTemplate` is the same template that the tab bar’s [selectedTemplate](../cptabbartemplate/selectedtemplate.md) property returns.

# tabBarTemplate:didSelectTemplate: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate when the tab bar selects the specified template.

## Declaration

```objectivec
- (void) tabBarTemplate:(CPTabBarTemplate *) tabBarTemplate didSelectTemplate:(CPTemplate *) selectedTemplate;
```

## Parameters

- `tabBarTemplate`: The tab bar template that alerts you to the change in selection.
- `selectedTemplate`: The template that the user selects.

<a id="Discussion"></a>

## Discussion

The tab bar template calls this method each time the user selects a tab. `tabBarTemplate` is the same template that the tab bar’s [selectedTemplate](../cptabbartemplate/selectedtemplate.md) property returns.
