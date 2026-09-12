> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/detent/resolvedvalue(in:)](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/detent/resolvedvalue(in:))

# resolvedValue(in:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Resolves a detent to its value.

## Declaration

```swift
@MainActor @preconcurrency func resolvedValue(in context: any UISheetPresentationControllerDetentResolutionContext) -> CGFloat?
```

## Parameters

- `context`: A context for resolving custom detent values. This context is available in the `resolver` closure of [custom(identifier:resolver:)](custom%28identifier_resolver_%29.md).

<a id="return-value"></a>

## Return Value

A [CGFloat](../../../corefoundation/cgfloat-swift.struct.md) that represents the value of the detent, or `nil` if the detent is inactive in the provided context.

<a id="Discussion"></a>

## Discussion

You can use this method to get the values of the system [medium](identifier-swift.struct/medium.md) and [large](identifier-swift.struct/large.md) detents, or the value of a custom detent. Use this method inside [custom(identifier:resolver:)](custom%28identifier_resolver_%29.md) to construct a custom detent according to the values of known detents.

## See Also

### Creating a custom detent

- [custom(identifier:resolver:)](custom%28identifier_resolver_%29.md): Creates a custom detent for a sheet by computing its value according to the properties of the provided context.
- [UISheetPresentationControllerDetentResolutionContext](../../uisheetpresentationcontrollerdetentresolutioncontext.md): A context for resolving custom detent values.
