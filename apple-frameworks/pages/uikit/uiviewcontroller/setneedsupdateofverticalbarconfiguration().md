> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsupdateofverticalbarconfiguration()

# setNeedsUpdateOfVerticalBarConfiguration() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.

## Declaration

```swift
func setNeedsUpdateOfVerticalBarConfiguration()
```

<a id="discussion"></a>

## Discussion

Call this method following changes to any state that affects the return values of methods like [preferredVerticalBarBehavior](preferredverticalbarbehavior.md) or [childForPreferredVerticalBarBehavior](childforpreferredverticalbarbehavior.md).

## See Also

### Configuring bars on the vertical axis

- [preferredVerticalBarBehavior](preferredverticalbarbehavior.md): The vertical bar behavior that this view controller prefers.
- [UIVerticalBarBehavior](../uiverticalbarbehavior.md): A behavior that determines whether the vertical bar is used.
- [childForPreferredVerticalBarBehavior](childforpreferredverticalbarbehavior.md): Which child view controller, if any, should control the vertical bar behavior.

# setNeedsUpdateOfVerticalBarConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.

## Declaration

```objectivec
- (void) setNeedsUpdateOfVerticalBarConfiguration;
```

<a id="discussion"></a>

## Discussion

Call this method following changes to any state that affects the return values of methods like [preferredVerticalBarBehavior](preferredverticalbarbehavior.md) or [childViewControllerForPreferredVerticalBarBehavior](childforpreferredverticalbarbehavior.md).

## See Also

### Configuring bars on the vertical axis

- [preferredVerticalBarBehavior](preferredverticalbarbehavior.md): The vertical bar behavior that this view controller prefers.
- [UIVerticalBarBehavior](../uiverticalbarbehavior.md): A behavior that determines whether the vertical bar is used.
- [childViewControllerForPreferredVerticalBarBehavior](childforpreferredverticalbarbehavior.md): Which child view controller, if any, should control the vertical bar behavior.
