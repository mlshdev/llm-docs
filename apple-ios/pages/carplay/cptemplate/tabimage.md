> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplate/tabimage](https://developer.apple.com/documentation/carplay/cptemplate/tabimage)

# tabImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An image that represents the content of the tab.

## Declaration

```swift
var tabImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

This image has precedence over any system item that [tabSystemItem](tabsystemitem.md) specifies, and CarPlay only uses it when the template is a root-template of a tab bar.

## See Also

### Accessing Tab Information

- [tabTitle](tabtitle.md): A short title that describes the content of the tab.
- [tabSystemItem](tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.
- [showsTabBadge](showstabbadge.md): An indicator you use to call attention to the tab.

# tabImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An image that represents the content of the tab.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * tabImage;
```

<a id="Discussion"></a>

## Discussion

This image has precedence over any system item that [tabSystemItem](tabsystemitem.md) specifies, and CarPlay only uses it when the template is a root-template of a tab bar.

## See Also

### Accessing Tab Information

- [tabTitle](tabtitle.md): A short title that describes the content of the tab.
- [tabSystemItem](tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.
- [showsTabBadge](showstabbadge.md): An indicator you use to call attention to the tab.
