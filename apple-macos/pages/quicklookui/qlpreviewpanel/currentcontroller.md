> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/currentcontroller](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/currentcontroller)

# currentController (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current first responder accepting to control the preview panel.

## Declaration

```swift
var currentController: Any! { get }
```

<a id="Discussion"></a>

## Discussion

You should never change the preview panel’s state (for example, its delegate, datasource, and so on) if you aren’t controlling it.

## See Also

### Accessing the Preview Panel Controller

- [updateController()](updatecontroller%28%29.md): Asks the preview panel to update its current controller.

# currentController (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current first responder accepting to control the preview panel.

## Declaration

```objectivec
@property (readonly) id currentController;
```

<a id="Discussion"></a>

## Discussion

You should never change the preview panel’s state (for example, its delegate, datasource, and so on) if you aren’t controlling it.

## See Also

### Accessing the Preview Panel Controller

- [updateController](updatecontroller%28%29.md): Asks the preview panel to update its current controller.
