> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/guidancebackgroundcolor](https://developer.apple.com/documentation/carplay/cpmaptemplate/guidancebackgroundcolor)

# guidanceBackgroundColor (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The background color the map template uses when displaying guidance.

## Declaration

```swift
var guidanceBackgroundColor: UIColor { get set }
```

<a id="Discussion"></a>

## Discussion

The system determines whether [guidanceBackgroundColor](guidancebackgroundcolor.md) meets contrast requirements, and uses the default color when the provided color doesn’t meet those requirements. The system adjusts font color to correspond with the guidance background color.

> **Note**

>  The system ignores alpha values.

## See Also

### Configuring Map Templates

- [automaticallyHidesNavigationBar](automaticallyhidesnavigationbar.md): A Boolean value that indicates whether the template should automatically hide the navigation bar.
- [hidesButtonsWithNavigationBar](hidesbuttonswithnavigationbar.md): A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.

# guidanceBackgroundColor (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The background color the map template uses when displaying guidance.

## Declaration

```objectivec
@property (nonatomic, strong) UIColor * guidanceBackgroundColor;
```

<a id="Discussion"></a>

## Discussion

The system determines whether [guidanceBackgroundColor](guidancebackgroundcolor.md) meets contrast requirements, and uses the default color when the provided color doesn’t meet those requirements. The system adjusts font color to correspond with the guidance background color.

> **Note**

>  The system ignores alpha values.

## See Also

### Configuring Map Templates

- [automaticallyHidesNavigationBar](automaticallyhidesnavigationbar.md): A Boolean value that indicates whether the template should automatically hide the navigation bar.
- [hidesButtonsWithNavigationBar](hidesbuttonswithnavigationbar.md): A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
