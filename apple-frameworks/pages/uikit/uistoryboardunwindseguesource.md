> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardunwindseguesource](https://developer.apple.com/documentation/uikit/uistoryboardunwindseguesource)

# UIStoryboardUnwindSegueSource (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An encapsulation of information about an unwind segue.

## Declaration

```swift
@MainActor class UIStoryboardUnwindSegueSource
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. UIKit creates an unwind segue source object in response to the triggering of an unwind segue. It passes the source object to other view controller methods that determine the destination of the unwind segue. The information in an unwind segue source object includes the view controller being dismissed by the segue and the action method responsible for the dismissal.

## Topics

### Getting the unwind segue attributes

- [source](uistoryboardunwindseguesource/source.md): The view controller being dismissed by the unwind segue.
- [unwindAction](uistoryboardunwindseguesource/unwindaction.md): The action method associated with the unwind segue.
- [sender](uistoryboardunwindseguesource/sender.md): The object that performed the unwind action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Storyboards

- [Customizing the behavior of segue-based presentations](customizing-the-behavior-of-segue-based-presentations.md): Pass data between view controllers during a segue, and programmatically control when segues occur.
- [Dismissing a view controller with an unwind segue](dismissing-a-view-controller-with-an-unwind-segue.md): Configure an unwind segue in your storyboard file that dynamically chooses the most appropriate view controller to display next.
- [UIStoryboard](uistoryboard.md): Deprecated. An encapsulation of the design-time view controller graph represented in an Interface Builder storyboard resource file.
- [UIStoryboardSegue](uistoryboardsegue.md): Deprecated. An object that prepares for and performs the visual transition between two view controllers.

# UIStoryboardUnwindSegueSource (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An encapsulation of information about an unwind segue.

## Declaration

```objectivec
@interface UIStoryboardUnwindSegueSource : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. UIKit creates an unwind segue source object in response to the triggering of an unwind segue. It passes the source object to other view controller methods that determine the destination of the unwind segue. The information in an unwind segue source object includes the view controller being dismissed by the segue and the action method responsible for the dismissal.

## Topics

### Getting the unwind segue attributes

- [sourceViewController](uistoryboardunwindseguesource/source.md): The view controller being dismissed by the unwind segue.
- [unwindAction](uistoryboardunwindseguesource/unwindaction.md): The action method associated with the unwind segue.
- [sender](uistoryboardunwindseguesource/sender.md): The object that performed the unwind action.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Storyboards

- [Customizing the behavior of segue-based presentations](customizing-the-behavior-of-segue-based-presentations.md): Pass data between view controllers during a segue, and programmatically control when segues occur.
- [Dismissing a view controller with an unwind segue](dismissing-a-view-controller-with-an-unwind-segue.md): Configure an unwind segue in your storyboard file that dynamically chooses the most appropriate view controller to display next.
- [UIStoryboard](uistoryboard.md): Deprecated. An encapsulation of the design-time view controller graph represented in an Interface Builder storyboard resource file.
- [UIStoryboardSegue](uistoryboardsegue.md): Deprecated. An object that prepares for and performs the visual transition between two view controllers.
- [UIStoryboardViewControllerCreator](uistoryboardviewcontrollercreator.md): A handler block that contains the custom initialization code for a view controller you instantiate from a storyboard.
