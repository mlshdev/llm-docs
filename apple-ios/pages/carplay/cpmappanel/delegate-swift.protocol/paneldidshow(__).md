> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
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
