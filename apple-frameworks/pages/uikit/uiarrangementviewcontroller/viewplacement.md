> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiarrangementviewcontroller/viewplacement

# UIArrangementViewController.ViewPlacement

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · tvOS 27.1+ · visionOS 27.1+

A placement of a view controller within an arrangement view controller.

## Declaration

```swift
struct ViewPlacement
```

## Topics

### Getting a placement

- [primary](viewplacement/primary.md): The primary placement in the arrangement.
- [secondary](viewplacement/secondary.md): The secondary placement in the arrangement.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing arrangement view controllers

- [viewController(for:)](viewcontroller%28for_%29.md): The view controller in the arrangement for the provided placement.
- [setViewController(\_:for:animated:)](setviewcontroller%28__for_animated_%29.md): Sets the view controller in the arrangement for a specific placement.
- [placement(for:)](placement%28for_%29.md): Returns the placement for the provided view controller in the arrangement.
