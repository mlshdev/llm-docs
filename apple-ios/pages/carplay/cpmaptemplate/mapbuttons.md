> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/mapbuttons

# mapButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of map buttons on the trailing bottom corner of the map template.

## Declaration

```swift
var mapButtons: [CPMapButton] { get set }
```

<a id="Discussion"></a>

## Discussion

When the array contains more than three buttons, the map template displays only the first three, ignoring the remaining buttons.

## See Also

### Configuring the map template

- [automaticallyHidesNavigationBar](automaticallyhidesnavigationbar.md): A Boolean value that indicates whether the template should automatically hide the navigation bar.
- [hidesButtonsWithNavigationBar](hidesbuttonswithnavigationbar.md): A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
- [guidanceBackgroundColor](guidancebackgroundcolor.md): The background color the map template uses when displaying guidance.

# mapButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of map buttons on the trailing bottom corner of the map template.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<CPMapButton *> * mapButtons;
```

<a id="Discussion"></a>

## Discussion

When the array contains more than three buttons, the map template displays only the first three, ignoring the remaining buttons.

## See Also

### Configuring the map template

- [automaticallyHidesNavigationBar](automaticallyhidesnavigationbar.md): A Boolean value that indicates whether the template should automatically hide the navigation bar.
- [hidesButtonsWithNavigationBar](hidesbuttonswithnavigationbar.md): A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
- [guidanceBackgroundColor](guidancebackgroundcolor.md): The background color the map template uses when displaying guidance.
