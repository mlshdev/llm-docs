> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanel/delegate-swift.protocol

# CPMapPanel.Delegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The interface you use to respond to the appearance and disappearance of the panel.

## Declaration

```swift
protocol Delegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

If you need to know when the system shows or hides the map panel, implement this protocol in a custom object and assign it to the [delegate](delegate-swift.property.md) property of your [CPMapPanel](../cpmappanel.md) object. The system calls the methods of your object after it shows or hides the panel.

## Topics

### Responding to panel visibility changes

- [panelDidShow(\_:)](delegate-swift.protocol/paneldidshow%28__%29.md): Tells the delegate that the system displayed the specified map panel.
- [panelDidHide(\_:)](delegate-swift.protocol/paneldidhide%28__%29.md): Tells the delegate that the system hid the specified map panel.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to the panel’s appearance and disappearance

- [delegate](delegate-swift.property.md): The app-specific object that the system notifies when it hides and shows the panel.

# CPMapPanelDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The interface you use to respond to the appearance and disappearance of the panel.

## Declaration

```objectivec
@protocol CPMapPanelDelegate <NSObject>
```

<a id="overview"></a>

## Overview

If you need to know when the system shows or hides the map panel, implement this protocol in a custom object and assign it to the [delegate](delegate-swift.property.md) property of your [CPMapPanel](../cpmappanel.md) object. The system calls the methods of your object after it shows or hides the panel.

## Topics

### Responding to panel visibility changes

- [panelDidShow:](delegate-swift.protocol/paneldidshow%28__%29.md): Tells the delegate that the system displayed the specified map panel.
- [panelDidHide:](delegate-swift.protocol/paneldidhide%28__%29.md): Tells the delegate that the system hid the specified map panel.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to the panel’s appearance and disappearance

- [delegate](delegate-swift.property.md): The app-specific object that the system notifies when it hides and shows the panel.
