> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/pulldownbuttonwithimage:menu:](https://developer.apple.com/documentation/appkit/nspopupbutton/pulldownbuttonwithimage:menu:)

# pullDownButtonWithImage:menu:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 15.0+

Creates a standard pull-down button with an image and menu.

## Declaration

```objectivec
+ (instancetype) pullDownButtonWithImage:(NSImage *) image menu:(NSMenu *) menu;
```

## Parameters

- `image`: The icon that is displayed on the button.
- `menu`: The pull-down menu to present when interacting with the button.

<a id="return-value"></a>

## Return Value

An initialized pull-down button object.

<a id="discussion"></a>

## Discussion

Pull-down buttons created using this method have the `usesItemFromMenu` property set to `NO`.
