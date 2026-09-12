> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontrollerdetentresolutioncontext](https://developer.apple.com/documentation/uikit/uisheetpresentationcontrollerdetentresolutioncontext)

# UISheetPresentationControllerDetentResolutionContext (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A context for resolving custom detent values.

## Declaration

```swift
@MainActor protocol UISheetPresentationControllerDetentResolutionContext : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A context of this type is available in the `resolver` closure of [custom(identifier:resolver:)](uisheetpresentationcontroller/detent/custom%28identifier_resolver_%29.md) (Swift) or  [customDetentWithIdentifier:resolver:](uisheetpresentationcontrollerdetent/customdetentwithidentifier_resolver_.md) (Objective-C).

## Topics

### Accessing the properties of the context

- [containerTraitCollection](uisheetpresentationcontrollerdetentresolutioncontext/containertraitcollection.md): The trait collection of the sheet’s container view.
- [maximumDetentValue](uisheetpresentationcontrollerdetentresolutioncontext/maximumdetentvalue.md): The maximum value of a detent.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a custom detent

- [custom(identifier:resolver:)](uisheetpresentationcontroller/detent/custom%28identifier_resolver_%29.md): Creates a custom detent for a sheet by computing its value according to the properties of the provided context.
- [resolvedValue(in:)](uisheetpresentationcontroller/detent/resolvedvalue%28in_%29.md): Resolves a detent to its value.

# UISheetPresentationControllerDetentResolutionContext (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A context for resolving custom detent values.

## Declaration

```objectivec
@protocol UISheetPresentationControllerDetentResolutionContext <NSObject>
```

<a id="overview"></a>

## Overview

A context of this type is available in the `resolver` closure of [custom(identifier:resolver:)](uisheetpresentationcontroller/detent/custom%28identifier_resolver_%29.md) (Swift) or  [customDetentWithIdentifier:resolver:](uisheetpresentationcontrollerdetent/customdetentwithidentifier_resolver_.md) (Objective-C).

## Topics

### Accessing the properties of the context

- [containerTraitCollection](uisheetpresentationcontrollerdetentresolutioncontext/containertraitcollection.md): The trait collection of the sheet’s container view.
- [maximumDetentValue](uisheetpresentationcontrollerdetentresolutioncontext/maximumdetentvalue.md): The maximum value of a detent.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a custom detent

- [customDetentWithIdentifier:resolver:](uisheetpresentationcontrollerdetent/customdetentwithidentifier_resolver_.md): Creates a custom detent for a sheet by computing its value according to the properties of the provided context.
- [resolvedValueInContext:](uisheetpresentationcontrollerdetent/resolvedvalueincontext_.md): Resolves a detent to its value.
- [UISheetPresentationControllerDetentInactive](uisheetpresentationcontrollerdetentinactive.md): A value that represents an inactive detent.
