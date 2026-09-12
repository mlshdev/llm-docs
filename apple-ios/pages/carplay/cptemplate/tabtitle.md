> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptemplate/tabtitle](https://developer.apple.com/documentation/carplay/cptemplate/tabtitle)

# tabTitle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A short title that describes the content of the tab.

## Declaration

```swift
var tabTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

CarPlay only uses the title when the template is a root-template of a tab bar, otherwise setting this property has no effect.

## See Also

### Accessing Tab Information

- [tabImage](tabimage.md): An image that represents the content of the tab.
- [tabSystemItem](tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.
- [showsTabBadge](showstabbadge.md): An indicator you use to call attention to the tab.

# tabTitle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A short title that describes the content of the tab.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * tabTitle;
```

<a id="Discussion"></a>

## Discussion

CarPlay only uses the title when the template is a root-template of a tab bar, otherwise setting this property has no effect.

## See Also

### Accessing Tab Information

- [tabImage](tabimage.md): An image that represents the content of the tab.
- [tabSystemItem](tabsystemitem.md): A system object that provides a title and image for common tab content, such as contacts or favorites.
- [showsTabBadge](showstabbadge.md): An indicator you use to call attention to the tab.
