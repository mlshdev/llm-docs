> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontrollerdetent/resolvedvalueincontext:](https://developer.apple.com/documentation/uikit/uisheetpresentationcontrollerdetent/resolvedvalueincontext:)

# resolvedValueInContext:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Resolves a detent to its value.

## Declaration

```objectivec
- (CGFloat) resolvedValueInContext:(id<UISheetPresentationControllerDetentResolutionContext>) context;
```

## Parameters

- `context`: A context for resolving custom detent values. This context is available in the `resolver` block of [customDetentWithIdentifier:resolver:](customdetentwithidentifier_resolver_.md).

<a id="return-value"></a>

## Return Value

A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) that represents the value of the detent, or [UISheetPresentationControllerDetentInactive](../uisheetpresentationcontrollerdetentinactive.md) if the detent is inactive in the provided context.

<a id="Discussion"></a>

## Discussion

You can use this method to get the values of the system [UISheetPresentationControllerDetentIdentifierMedium](../uisheetpresentationcontroller/detent/identifier-swift.struct/medium.md) and [UISheetPresentationControllerDetentIdentifierLarge](../uisheetpresentationcontroller/detent/identifier-swift.struct/large.md) detents, or the value of a custom detent. Use this method inside [customDetentWithIdentifier:resolver:](customdetentwithidentifier_resolver_.md) to construct a custom detent according to the values of known detents.

## See Also

### Creating a custom detent

- [customDetentWithIdentifier:resolver:](customdetentwithidentifier_resolver_.md): Creates a custom detent for a sheet by computing its value according to the properties of the provided context.
- [UISheetPresentationControllerDetentResolutionContext](../uisheetpresentationcontrollerdetentresolutioncontext.md): A context for resolving custom detent values.
- [UISheetPresentationControllerDetentInactive](../uisheetpresentationcontrollerdetentinactive.md): A value that represents an inactive detent.
