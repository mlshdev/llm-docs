> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpdashboardcontroller/shortcutbuttons](https://developer.apple.com/documentation/carplay/cpdashboardcontroller/shortcutbuttons)

# shortcutButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

An array of shortcut buttons to display on the CarPlay Dashboard.

## Declaration

```swift
var shortcutButtons: [CPDashboardButton] { get set }
```

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

Provide an array of up to two shortcut buttons to display on the CarPlay Dashboard. The system manages hiding and showing these buttons when navigation is active or inactive.

## See Also

### Providing Dashboard Buttons

- [CPDashboardButton](../cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.

# shortcutButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

An array of shortcut buttons to display on the CarPlay Dashboard.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CPDashboardButton *> * shortcutButtons;
```

## Mentioned In

- [Displaying Content in CarPlay](../displaying-content-in-carplay.md)

<a id="Discussion"></a>

## Discussion

Provide an array of up to two shortcut buttons to display on the CarPlay Dashboard. The system manages hiding and showing these buttons when navigation is active or inactive.

## See Also

### Providing Dashboard Buttons

- [CPDashboardButton](../cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
