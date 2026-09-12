> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setneedsupdateproperties()](https://developer.apple.com/documentation/uikit/uiviewcontroller/setneedsupdateproperties())

# setNeedsUpdateProperties() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Call to manually request a properties update for the view controller. Multiple requests may be coalesced into a single update alongside the next layout pass.

## Declaration

```swift
func setNeedsUpdateProperties()
```

## Mentioned In

- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

## See Also

### Managing the view’s properties

- [UIViewController.ViewLoading](viewloading.md): A property wrapper that loads the view controller’s view before accessing the property.
- [updateProperties()](updateproperties%28%29.md): Configures the view controller’s content and styling properties.
- [updatePropertiesIfNeeded()](updatepropertiesifneeded%28%29.md): Forces an immediate properties update for this view controller and its view, including any view controllers and views in this subtree.

# setNeedsUpdateProperties (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Call to manually request a properties update for the view controller. Multiple requests may be coalesced into a single update alongside the next layout pass.

## Declaration

```objectivec
- (void) setNeedsUpdateProperties;
```

## Mentioned In

- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

## See Also

### Managing the view’s properties

- [updateProperties](updateproperties%28%29.md): Configures the view controller’s content and styling properties.
- [updatePropertiesIfNeeded](updatepropertiesifneeded%28%29.md): Forces an immediate properties update for this view controller and its view, including any view controllers and views in this subtree.
