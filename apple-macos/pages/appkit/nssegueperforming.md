> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegueperforming](https://developer.apple.com/documentation/appkit/nssegueperforming)

# NSSeguePerforming (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that support the mediation of a custom segue.

## Declaration

```swift
protocol NSSeguePerforming : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When you subclass [NSStoryboardSegue](nsstoryboardsegue.md) to express a custom transition or containment relationship between storyboard scenes, you might also want to provide code that prepares the destination/contained view or window controller object. Put this code in an override of the [prepare(for:sender:)](nssegueperforming/prepare%28for_sender_%29.md) method.

To conditionally disallow the performance of a segue, override the [shouldPerformSegue(withIdentifier:sender:)](nssegueperforming/shouldperformsegue%28withidentifier_sender_%29.md) method, returning [false](https://developer.apple.com/documentation/swift/false).If you need to programmatically trigger a segue that cannot be expressed in a storyboard file, such as a transition between scenes in different storyboards, use the [performSegue(withIdentifier:sender:)](nssegueperforming/performsegue%28withidentifier_sender_%29.md) method in this protocol.

## Topics

### Working with Storyboard Segues

- [performSegue(withIdentifier:sender:)](nssegueperforming/performsegue%28withidentifier_sender_%29.md): Performs the specified segue.
- [prepare(for:sender:)](nssegueperforming/prepare%28for_sender_%29.md): Called when a segue is about to be performed.
- [shouldPerformSegue(withIdentifier:sender:)](nssegueperforming/shouldperformsegue%28withidentifier_sender_%29.md): Called immediately prior to the performance of a storyboard segue.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSCollectionViewItem](nscollectionviewitem.md)
- [NSPageController](nspagecontroller.md)
- [NSSplitViewController](nssplitviewcontroller.md)
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)
- [NSTabViewController](nstabviewcontroller.md)
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)
- [NSViewController](nsviewcontroller.md)
- [NSWindowController](nswindowcontroller.md)

## See Also

### Storyboard

- [NSStoryboard](nsstoryboard.md): An encapsulation of the design-time view controller and window controller graph represented in an Interface Builder storyboard resource file.
- [NSStoryboardSegue](nsstoryboardsegue.md): A transition or containment relationship between two scenes in a storyboard.

# NSSeguePerforming (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that support the mediation of a custom segue.

## Declaration

```objectivec
@protocol NSSeguePerforming <NSObject>
```

<a id="overview"></a>

## Overview

When you subclass [NSStoryboardSegue](nsstoryboardsegue.md) to express a custom transition or containment relationship between storyboard scenes, you might also want to provide code that prepares the destination/contained view or window controller object. Put this code in an override of the [prepareForSegue:sender:](nssegueperforming/prepare%28for_sender_%29.md) method.

To conditionally disallow the performance of a segue, override the [shouldPerformSegueWithIdentifier:sender:](nssegueperforming/shouldperformsegue%28withidentifier_sender_%29.md) method, returning [false](https://developer.apple.com/documentation/swift/false).If you need to programmatically trigger a segue that cannot be expressed in a storyboard file, such as a transition between scenes in different storyboards, use the [performSegueWithIdentifier:sender:](nssegueperforming/performsegue%28withidentifier_sender_%29.md) method in this protocol.

## Topics

### Working with Storyboard Segues

- [performSegueWithIdentifier:sender:](nssegueperforming/performsegue%28withidentifier_sender_%29.md): Performs the specified segue.
- [prepareForSegue:sender:](nssegueperforming/prepare%28for_sender_%29.md): Called when a segue is about to be performed.
- [shouldPerformSegueWithIdentifier:sender:](nssegueperforming/shouldperformsegue%28withidentifier_sender_%29.md): Called immediately prior to the performance of a storyboard segue.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSViewController](nsviewcontroller.md)
- [NSWindowController](nswindowcontroller.md)

## See Also

### Storyboard

- [NSStoryboard](nsstoryboard.md): An encapsulation of the design-time view controller and window controller graph represented in an Interface Builder storyboard resource file.
- [NSStoryboardSegue](nsstoryboardsegue.md): A transition or containment relationship between two scenes in a storyboard.
