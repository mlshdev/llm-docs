> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplate/tabsystemitem](https://developer.apple.com/documentation/carplay/cptemplate/tabsystemitem)

# tabSystemItem (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A system object that provides a title and image for common tab content, such as contacts or favorites.

## Declaration

```swift
var tabSystemItem: UITabBarItem.SystemItem { get set }
```

<a id="Discussion"></a>

## Discussion

You should specify either a system item, or a tab title and tab image. The tab image has precedence over the system item if both properties are set.

CarPlay only uses this value when the template is a root-template of a tab bar.

## See Also

### Accessing Tab Information

- [tabTitle](tabtitle.md): A short title that describes the content of the tab.
- [tabImage](tabimage.md): An image that represents the content of the tab.
- [showsTabBadge](showstabbadge.md): An indicator you use to call attention to the tab.

# tabSystemItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A system object that provides a title and image for common tab content, such as contacts or favorites.

## Declaration

```objectivec
@property (nonatomic) UITabBarSystemItem tabSystemItem;
```

<a id="Discussion"></a>

## Discussion

You should specify either a system item, or a tab title and tab image. The tab image has precedence over the system item if both properties are set.

CarPlay only uses this value when the template is a root-template of a tab bar.

## See Also

### Accessing Tab Information

- [tabTitle](tabtitle.md): A short title that describes the content of the tab.
- [tabImage](tabimage.md): An image that represents the content of the tab.
- [showsTabBadge](showstabbadge.md): An indicator you use to call attention to the tab.
