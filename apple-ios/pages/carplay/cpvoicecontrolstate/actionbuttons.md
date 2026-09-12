> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpvoicecontrolstate/actionbuttons](https://developer.apple.com/documentation/carplay/cpvoicecontrolstate/actionbuttons)

# actionButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An array of action buttons displayed in the template.

## Declaration

```swift
var actionButtons: [CPButton] { get set }
```

<a id="discussion"></a>

## Discussion

These buttons provide user interaction capabilities such as play/pause, favorite/unfavorite, share, or other content-specific actions. The buttons are displayed horizontally and are limited by maximumActionButtonCount.

Buttons should have clear, concise titles or recognizable icons. The order of buttons in the array determines their display order from leading to trailing in the interface.

# actionButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An array of action buttons displayed in the template.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CPButton *> * actionButtons;
```

<a id="discussion"></a>

## Discussion

These buttons provide user interaction capabilities such as play/pause, favorite/unfavorite, share, or other content-specific actions. The buttons are displayed horizontally and are limited by maximumActionButtonCount.

Buttons should have clear, concise titles or recognizable icons. The order of buttons in the array determines their display order from leading to trailing in the interface.
