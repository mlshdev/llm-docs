> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanel/delegate-swift.protocol/paneldidshow(_:)

# panelDidShow(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Tells the delegate that the system displayed the specified map panel.

## Declaration

```swift
optional func panelDidShow(_ panel: CPMapPanel)
```

## Parameters

- `panel`: The panel that appeared in your map interface.

<a id="discussion"></a>

## Discussion

Shortly after a panel appears in your CarPlay interface, the system calls this method to give you a chance to respond. Use this method to perform any additional tasks that require the panel to be visible. The system calls this method on your app’s main thread after any animations to display the panel.

## See Also

### Responding to panel visibility changes

- [panelDidHide(\_:)](paneldidhide%28__%29.md): Tells the delegate that the system hid the specified map panel.

# panelDidShow: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Tells the delegate that the system displayed the specified map panel.

## Declaration

```objectivec
- (void) panelDidShow:(CPMapPanel *) panel;
```

## Parameters

- `panel`: The panel that appeared in your map interface.

<a id="discussion"></a>

## Discussion

Shortly after a panel appears in your CarPlay interface, the system calls this method to give you a chance to respond. Use this method to perform any additional tasks that require the panel to be visible. The system calls this method on your app’s main thread after any animations to display the panel.

## See Also

### Responding to panel visibility changes

- [panelDidHide:](paneldidhide%28__%29.md): Tells the delegate that the system hid the specified map panel.
