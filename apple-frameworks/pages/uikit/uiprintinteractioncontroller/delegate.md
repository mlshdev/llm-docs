> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/delegate

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate of the print-interaction controller.

## Declaration

```swift
weak var delegate: (any UIPrintInteractionControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md) protocol and implement one or more of its methods. It is not retained.

## See Also

### Assigning the delegate

- [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md): An optional set of methods that the delegate of the shared print-interaction controller implements.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate of the print-interaction controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPrintInteractionControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md) protocol and implement one or more of its methods. It is not retained.

## See Also

### Assigning the delegate

- [UIPrintInteractionControllerDelegate](../uiprintinteractioncontrollerdelegate.md): An optional set of methods that the delegate of the shared print-interaction controller implements.
