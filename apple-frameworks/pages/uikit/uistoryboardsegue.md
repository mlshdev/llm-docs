> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardsegue](https://developer.apple.com/documentation/uikit/uistoryboardsegue)

# UIStoryboardSegue (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

An object that prepares for and performs the visual transition between two view controllers.

## Declaration

```swift
@MainActor class UIStoryboardSegue
```

## Mentioned In

- [Customizing the behavior of segue-based presentations](customizing-the-behavior-of-segue-based-presentations.md)
- [Dismissing a view controller with an unwind segue](dismissing-a-view-controller-with-an-unwind-segue.md)

<a id="overview"></a>

## Overview

The [UIStoryboardSegue](uistoryboardsegue.md) class supports the standard visual transitions available in UIKit. You can also subclass to define custom transitions between the view controllers in your storyboard file.

Segue objects contain information about the view controllers involved in a transition. When a segue is triggered, but before the visual transition occurs, the storyboard runtime calls the current view controller’s [prepare(for:sender:)](uiviewcontroller/prepare%28for_sender_%29.md) method so that it can pass any needed data to the view controller that’s about to be displayed.

You don’t create segue objects directly. Instead, the storyboard runtime creates them when it must perform a segue between two view controllers. You can still initiate a segue programmatically using the [performSegue(withIdentifier:sender:)](uiviewcontroller/performsegue%28withidentifier_sender_%29.md) method of [UIViewController](uiviewcontroller.md) if you want. You might do so to initiate a segue from a source that was added programmatically and therefore not available in Interface Builder.

<a id="Subclassing-notes"></a>

### Subclassing notes

You can subclass [UIStoryboardSegue](uistoryboardsegue.md) in situations where you want to provide a custom transition between view controllers in your application. To use your custom segue, create a segue line between the appropriate view controllers in Interface Builder and set its type to Custom in the inspector; you must also specify the class name of the segue to use in the inspector.

When the storyboard runtime detects a custom segue, it creates a new instance of your class, configures it with the view controller objects, asks the view controller source to prepare for the segue, and then performs the segue.

<a id="Methods-to-override"></a>

#### Methods to override

For custom segues, the main method you need to override is the [perform()](uistoryboardsegue/perform%28%29.md) method. The storyboard runtime calls this method when it’s time to perform the visual transition from the view controller in [source](uistoryboardsegue/source.md) to the view controller in [destination](uistoryboardsegue/destination.md). If you need to initialize any variables in your custom segue subclass, you can also override the [init(identifier:source:destination:)](uistoryboardsegue/init%28identifier_source_destination_%29.md) method and initialize them in your custom implementation.

<a id="Alternatives-to-subclassing"></a>

#### Alternatives to subclassing

If your segue doesn’t need to store additional information or provide anything other than a [perform()](uistoryboardsegue/perform%28%29.md) method, consider using the [init(identifier:source:destination:performHandler:)](uistoryboardsegue/init%28identifier_source_destination_performhandler_%29.md) method instead.

## Topics

### Initializing a storyboard segue

- [init(identifier:source:destination:)](uistoryboardsegue/init%28identifier_source_destination_%29.md): Deprecated. Initializes and returns a storyboard segue object for use in performing a segue.

### Accessing the segue attributes

- [source](uistoryboardsegue/source.md): Deprecated. The source view controller for the segue.
- [destination](uistoryboardsegue/destination.md): Deprecated. The destination view controller for the segue.
- [identifier](uistoryboardsegue/identifier.md): Deprecated. The identifier for the segue object.

### Performing the segue

- [perform()](uistoryboardsegue/perform%28%29.md): Deprecated. Performs the visual transition for the segue.

### Creating a custom segue

- [init(identifier:source:destination:performHandler:)](uistoryboardsegue/init%28identifier_source_destination_performhandler_%29.md): Deprecated. Creates a segue that calls a block to perform the segue transition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md)

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
- [UIStoryboardUnwindSegueSource](uistoryboardunwindseguesource.md): An encapsulation of information about an unwind segue.

# UIStoryboardSegue (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

An object that prepares for and performs the visual transition between two view controllers.

## Declaration

```objectivec
@interface UIStoryboardSegue : NSObject
```

## Mentioned In

- [Customizing the behavior of segue-based presentations](customizing-the-behavior-of-segue-based-presentations.md)
- [Dismissing a view controller with an unwind segue](dismissing-a-view-controller-with-an-unwind-segue.md)

<a id="overview"></a>

## Overview

The [UIStoryboardSegue](uistoryboardsegue.md) class supports the standard visual transitions available in UIKit. You can also subclass to define custom transitions between the view controllers in your storyboard file.

Segue objects contain information about the view controllers involved in a transition. When a segue is triggered, but before the visual transition occurs, the storyboard runtime calls the current view controller’s [prepareForSegue:sender:](uiviewcontroller/prepare%28for_sender_%29.md) method so that it can pass any needed data to the view controller that’s about to be displayed.

You don’t create segue objects directly. Instead, the storyboard runtime creates them when it must perform a segue between two view controllers. You can still initiate a segue programmatically using the [performSegueWithIdentifier:sender:](uiviewcontroller/performsegue%28withidentifier_sender_%29.md) method of [UIViewController](uiviewcontroller.md) if you want. You might do so to initiate a segue from a source that was added programmatically and therefore not available in Interface Builder.

<a id="Subclassing-notes"></a>

### Subclassing notes

You can subclass [UIStoryboardSegue](uistoryboardsegue.md) in situations where you want to provide a custom transition between view controllers in your application. To use your custom segue, create a segue line between the appropriate view controllers in Interface Builder and set its type to Custom in the inspector; you must also specify the class name of the segue to use in the inspector.

When the storyboard runtime detects a custom segue, it creates a new instance of your class, configures it with the view controller objects, asks the view controller source to prepare for the segue, and then performs the segue.

<a id="Methods-to-override"></a>

#### Methods to override

For custom segues, the main method you need to override is the [perform](uistoryboardsegue/perform%28%29.md) method. The storyboard runtime calls this method when it’s time to perform the visual transition from the view controller in [sourceViewController](uistoryboardsegue/source.md) to the view controller in [destinationViewController](uistoryboardsegue/destination.md). If you need to initialize any variables in your custom segue subclass, you can also override the [initWithIdentifier:source:destination:](uistoryboardsegue/init%28identifier_source_destination_%29.md) method and initialize them in your custom implementation.

<a id="Alternatives-to-subclassing"></a>

#### Alternatives to subclassing

If your segue doesn’t need to store additional information or provide anything other than a [perform](uistoryboardsegue/perform%28%29.md) method, consider using the [segueWithIdentifier:source:destination:performHandler:](uistoryboardsegue/init%28identifier_source_destination_performhandler_%29.md) method instead.

## Topics

### Initializing a storyboard segue

- [initWithIdentifier:source:destination:](uistoryboardsegue/init%28identifier_source_destination_%29.md): Deprecated. Initializes and returns a storyboard segue object for use in performing a segue.

### Accessing the segue attributes

- [sourceViewController](uistoryboardsegue/source.md): Deprecated. The source view controller for the segue.
- [destinationViewController](uistoryboardsegue/destination.md): Deprecated. The destination view controller for the segue.
- [identifier](uistoryboardsegue/identifier.md): Deprecated. The identifier for the segue object.

### Performing the segue

- [perform](uistoryboardsegue/perform%28%29.md): Deprecated. Performs the visual transition for the segue.

### Creating a custom segue

- [segueWithIdentifier:source:destination:performHandler:](uistoryboardsegue/init%28identifier_source_destination_performhandler_%29.md): Deprecated. Creates a segue that calls a block to perform the segue transition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIStoryboardPopoverSegue](uistoryboardpopoversegue.md)

## See Also

### Storyboards

- [Customizing the behavior of segue-based presentations](customizing-the-behavior-of-segue-based-presentations.md): Pass data between view controllers during a segue, and programmatically control when segues occur.
- [Dismissing a view controller with an unwind segue](dismissing-a-view-controller-with-an-unwind-segue.md): Configure an unwind segue in your storyboard file that dynamically chooses the most appropriate view controller to display next.
- [UIStoryboard](uistoryboard.md): Deprecated. An encapsulation of the design-time view controller graph represented in an Interface Builder storyboard resource file.
- [UIStoryboardUnwindSegueSource](uistoryboardunwindseguesource.md): An encapsulation of information about an unwind segue.
- [UIStoryboardViewControllerCreator](uistoryboardviewcontrollercreator.md): A handler block that contains the custom initialization code for a view controller you instantiate from a storyboard.
