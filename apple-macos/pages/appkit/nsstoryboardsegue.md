> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstoryboardsegue](https://developer.apple.com/documentation/appkit/nsstoryboardsegue)

# NSStoryboardSegue (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A transition or containment relationship between two scenes in a storyboard.

## Declaration

```swift
class NSStoryboardSegue
```

<a id="overview"></a>

## Overview

In this context, a *scene* is a view controller or a window controller and a *storyboard* is an instance of the [NSStoryboard](nsstoryboard.md) class.

A storyboard segue has a procedural notion of being invoked, known in the API as being *performed*. You can take advantage of hooks into the segue performance process by way of the [NSSeguePerforming](nssegueperforming.md) protocol.

You do not create storyboard segue objects directly. Instead, the system creates them as needed as segues are invoked. To run code during initialization and performance of a segue, override the [init(identifier:source:destination:)](nsstoryboardsegue/init%28identifier_source_destination_%29.md) and [perform()](nsstoryboardsegue/perform%28%29.md) methods.

You can initiate a segue programmatically with the [performSegue(withIdentifier:sender:)](nssegueperforming/performsegue%28withidentifier_sender_%29.md) method of the [NSSeguePerforming](nssegueperforming.md) protocol. For example, you might do this to transition from a scene in one storyboard file to a scene in another.

## Topics

### Inspecting a Storyboard Segue

- [sourceController](nsstoryboardsegue/sourcecontroller.md): The starting/containing view controller or window controller for the storyboard segue.
- [destinationController](nsstoryboardsegue/destinationcontroller.md): The ending/contained view controller or window controller for the storyboard segue.
- [identifier](nsstoryboardsegue/identifier-swift.property.md): An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.
- [NSStoryboardSegue.Identifier](nsstoryboardsegue/identifier-swift.typealias.md)

### Customizing Storyboard Segue Initialization and Invocation

- [init(identifier:source:destination:performHandler:)](nsstoryboardsegue/init%28identifier_source_destination_performhandler_%29.md): Creates a storyboard segue and a block used when the segue is performed.
- [init(identifier:source:destination:)](nsstoryboardsegue/init%28identifier_source_destination_%29.md): The designated initializer for a storyboard segue.
- [perform()](nsstoryboardsegue/perform%28%29.md): Performs a visual transition from one controller to another.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Storyboard

- [NSStoryboard](nsstoryboard.md): An encapsulation of the design-time view controller and window controller graph represented in an Interface Builder storyboard resource file.
- [NSSeguePerforming](nssegueperforming.md): A set of methods that support the mediation of a custom segue.

# NSStoryboardSegue (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A transition or containment relationship between two scenes in a storyboard.

## Declaration

```objectivec
@interface NSStoryboardSegue : NSObject
```

<a id="overview"></a>

## Overview

In this context, a *scene* is a view controller or a window controller and a *storyboard* is an instance of the [NSStoryboard](nsstoryboard.md) class.

A storyboard segue has a procedural notion of being invoked, known in the API as being *performed*. You can take advantage of hooks into the segue performance process by way of the [NSSeguePerforming](nssegueperforming.md) protocol.

You do not create storyboard segue objects directly. Instead, the system creates them as needed as segues are invoked. To run code during initialization and performance of a segue, override the [initWithIdentifier:source:destination:](nsstoryboardsegue/init%28identifier_source_destination_%29.md) and [perform](nsstoryboardsegue/perform%28%29.md) methods.

You can initiate a segue programmatically with the [performSegueWithIdentifier:sender:](nssegueperforming/performsegue%28withidentifier_sender_%29.md) method of the [NSSeguePerforming](nssegueperforming.md) protocol. For example, you might do this to transition from a scene in one storyboard file to a scene in another.

## Topics

### Inspecting a Storyboard Segue

- [sourceController](nsstoryboardsegue/sourcecontroller.md): The starting/containing view controller or window controller for the storyboard segue.
- [destinationController](nsstoryboardsegue/destinationcontroller.md): The ending/contained view controller or window controller for the storyboard segue.
- [identifier](nsstoryboardsegue/identifier-swift.property.md): An optional, unique identifier for the storyboard segue that you can specify using the Identity inspector in Interface Builder.
- [NSStoryboardSegueIdentifier](nsstoryboardsegue/identifier-swift.typealias.md)

### Customizing Storyboard Segue Initialization and Invocation

- [segueWithIdentifier:source:destination:performHandler:](nsstoryboardsegue/init%28identifier_source_destination_performhandler_%29.md): Creates a storyboard segue and a block used when the segue is performed.
- [initWithIdentifier:source:destination:](nsstoryboardsegue/init%28identifier_source_destination_%29.md): The designated initializer for a storyboard segue.
- [perform](nsstoryboardsegue/perform%28%29.md): Performs a visual transition from one controller to another.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Storyboard

- [NSStoryboard](nsstoryboard.md): An encapsulation of the design-time view controller and window controller graph represented in an Interface Builder storyboard resource file.
- [NSSeguePerforming](nssegueperforming.md): A set of methods that support the mediation of a custom segue.
