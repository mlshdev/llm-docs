> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/animatechanges(_:)

# animateChanges(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Animates the UI changes to the sheet’s properties.

## Declaration

```swift
func animateChanges(_ changes: () -> Void)
```

## Parameters

- `changes`: A block where you change the sheet’s properties to animate them.

<a id="Discussion"></a>

## Discussion

To animate changes to any of the sheet’s properties, set them inside the block that you pass to this method. By the time this method returns, layout finishes for the sheet, all adjacent sheets in the sheet stack, and their subviews.

# animateChanges: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Animates the UI changes to the sheet’s properties.

## Declaration

```objectivec
- (void) animateChanges:(void (^)()) changes;
```

## Parameters

- `changes`: A block where you change the sheet’s properties to animate them.

<a id="Discussion"></a>

## Discussion

To animate changes to any of the sheet’s properties, set them inside the block that you pass to this method. By the time this method returns, layout finishes for the sheet, all adjacent sheets in the sheet stack, and their subviews.
