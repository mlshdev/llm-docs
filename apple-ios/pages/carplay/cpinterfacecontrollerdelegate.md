> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate

# CPInterfaceControllerDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The methods you implement to observe the addition and removal of templates in your app’s interface.

## Declaration

```swift
@MainActor protocol CPInterfaceControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the `CPInterfaceControllerDelegate` protocol in an custom type when you want to respond to changes in your app’s visible content. When a transition causes a new template to appear, the [CPInterfaceController](cpinterfacecontroller.md) object calls the methods of this protocol on its delegate before and after the transition. Use the methods to perform additional tasks related to the appearance of the content.

## Topics

### Handling display-related events

- [templateWillAppear(\_:animated:)](cpinterfacecontrollerdelegate/templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateDidAppear(\_:animated:)](cpinterfacecontrollerdelegate/templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateWillDisappear(\_:animated:)](cpinterfacecontrollerdelegate/templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.
- [templateDidDisappear(\_:animated:)](cpinterfacecontrollerdelegate/templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to interface changes

- [delegate](cpinterfacecontroller/delegate.md): A custom object you use to respond when templates appear and disappear.

# CPInterfaceControllerDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The methods you implement to observe the addition and removal of templates in your app’s interface.

## Declaration

```objectivec
@protocol CPInterfaceControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the `CPInterfaceControllerDelegate` protocol in an custom type when you want to respond to changes in your app’s visible content. When a transition causes a new template to appear, the [CPInterfaceController](cpinterfacecontroller.md) object calls the methods of this protocol on its delegate before and after the transition. Use the methods to perform additional tasks related to the appearance of the content.

## Topics

### Handling display-related events

- [templateWillAppear:animated:](cpinterfacecontrollerdelegate/templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateDidAppear:animated:](cpinterfacecontrollerdelegate/templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateWillDisappear:animated:](cpinterfacecontrollerdelegate/templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.
- [templateDidDisappear:animated:](cpinterfacecontrollerdelegate/templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to interface changes

- [delegate](cpinterfacecontroller/delegate.md): A custom object you use to respond when templates appear and disappear.
