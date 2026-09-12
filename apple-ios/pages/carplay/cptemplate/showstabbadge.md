> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplate/showstabbadge](https://developer.apple.com/documentation/carplay/cptemplate/showstabbadge)

# showsTabBadge (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An indicator you use to call attention to the tab.

## Declaration

```swift
var showsTabBadge: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to display a small red indicator on the tab to show that it requires action from the user, or is displaying ephemeral information.

CarPlay only displays the indicator when the template is a root-template of a tab bar, otherwise setting this property has no effect.

## See Also

### Accessing Tab Information

- [tabTitle](tabtitle.md): A short title that describes the content of the tab.
- [tabImage](tabimage.md): An image that represents the content of the tab.
- [tabSystemItem](tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.

# showsTabBadge (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An indicator you use to call attention to the tab.

## Declaration

```objectivec
@property (nonatomic) BOOL showsTabBadge;
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to display a small red indicator on the tab to show that it requires action from the user, or is displaying ephemeral information.

CarPlay only displays the indicator when the template is a root-template of a tab bar, otherwise setting this property has no effect.

## See Also

### Accessing Tab Information

- [tabTitle](tabtitle.md): A short title that describes the content of the tab.
- [tabImage](tabimage.md): An image that represents the content of the tab.
- [tabSystemItem](tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.
