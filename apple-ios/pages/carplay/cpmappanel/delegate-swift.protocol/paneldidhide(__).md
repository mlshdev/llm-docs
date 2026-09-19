> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanel/delegate-swift.protocol/paneldidhide(_:)

# panelDidHide(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Tells the delegate that the system hid the specified map panel.

## Declaration

```swift
optional func panelDidHide(_ panel: CPMapPanel)
```

## Parameters

- `panel`: The panel that disappeared from your map interface.

<a id="discussion"></a>

## Discussion

Shortly after the system removes a map panel from your CarPlay interface, the system calls this method to give you a chance to respond. Use this method to perform any cleanup tasks associated with the panel’s disappearance. The system calls this method on your app’s main thread.

# panelDidHide: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Tells the delegate that the system hid the specified map panel.

## Declaration

```objectivec
- (void) panelDidHide:(CPMapPanel *) panel;
```

## Parameters

- `panel`: The panel that disappeared from your map interface.

<a id="discussion"></a>

## Discussion

Shortly after the system removes a map panel from your CarPlay interface, the system calls this method to give you a chance to respond. Use this method to perform any cleanup tasks associated with the panel’s disappearance. The system calls this method on your app’s main thread.
