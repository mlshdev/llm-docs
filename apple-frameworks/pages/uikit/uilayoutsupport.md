> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutsupport](https://developer.apple.com/documentation/uikit/uilayoutsupport)

# UILayoutSupport (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that provide layout support and access to layout anchors.

## Declaration

```swift
@MainActor protocol UILayoutSupport : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol is implemented by the [UIViewController](uiviewcontroller.md) properties [topLayoutGuide](uiviewcontroller/toplayoutguide.md) and [bottomLayoutGuide](uiviewcontroller/bottomlayoutguide.md) to support using Auto Layout with a view controller’s view. You can use layout guides as layout items in the [NSLayoutConstraint](nslayoutconstraint.md) factory methods.

## Topics

### Creating constraints using layout anchors

- [bottomAnchor](uilayoutsupport/bottomanchor.md): A layout anchor representing the guide’s bottom edge.
- [heightAnchor](uilayoutsupport/heightanchor.md): A layout anchor representing the guide’s height.
- [topAnchor](uilayoutsupport/topanchor.md): A layout anchor representing the guide’s top edge.

### Performing layout calculations

- [length](uilayoutsupport/length.md): Provides the length, in points, of the portion of a view controller’s view that is overlaid by translucent or transparent UIKit bars.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Constraints

- [Positioning content within layout margins](positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [Positioning content relative to the safe area](positioning-content-relative-to-the-safe-area.md): Position views so that they aren’t obstructed by other content.
- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

# UILayoutSupport (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that provide layout support and access to layout anchors.

## Declaration

```objectivec
@protocol UILayoutSupport <NSObject>
```

<a id="overview"></a>

## Overview

This protocol is implemented by the [UIViewController](uiviewcontroller.md) properties [topLayoutGuide](uiviewcontroller/toplayoutguide.md) and [bottomLayoutGuide](uiviewcontroller/bottomlayoutguide.md) to support using Auto Layout with a view controller’s view. You can use layout guides as layout items in the [NSLayoutConstraint](nslayoutconstraint.md) factory methods.

## Topics

### Creating constraints using layout anchors

- [bottomAnchor](uilayoutsupport/bottomanchor.md): A layout anchor representing the guide’s bottom edge.
- [heightAnchor](uilayoutsupport/heightanchor.md): A layout anchor representing the guide’s height.
- [topAnchor](uilayoutsupport/topanchor.md): A layout anchor representing the guide’s top edge.

### Performing layout calculations

- [length](uilayoutsupport/length.md): Provides the length, in points, of the portion of a view controller’s view that is overlaid by translucent or transparent UIKit bars.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Constraints

- [Positioning content within layout margins](positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [Positioning content relative to the safe area](positioning-content-relative-to-the-safe-area.md): Position views so that they aren’t obstructed by other content.
- [NSLayoutConstraint](nslayoutconstraint.md): The relationship between two user interface objects that must be satisfied by the constraint-based layout system.
- [NSDictionaryOfVariableBindings](nsdictionaryofvariablebindings.md): Creates a dictionary wherein the keys are string representations of the corresponding values’ variable names.
