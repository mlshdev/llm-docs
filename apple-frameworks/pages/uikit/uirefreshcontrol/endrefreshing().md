> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirefreshcontrol/endrefreshing()](https://developer.apple.com/documentation/uikit/uirefreshcontrol/endrefreshing())

# endRefreshing() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the control that a refresh operation has ended.

## Declaration

```swift
func endRefreshing()
```

<a id="Discussion"></a>

## Discussion

Call this method at the end of any refresh operation (whether it was initiated programmatically or by the user) to return the refresh control to its default state. If the refresh control is at least partially visible, calling this method also hides it. If animations are also enabled, the control is hidden using an animation.

## See Also

### Managing the refresh status

- [beginRefreshing()](beginrefreshing%28%29.md): Tells the control that a refresh operation was started programmatically.
- [isRefreshing](isrefreshing.md): A Boolean value indicating whether a refresh operation has been triggered and is in progress.

# endRefreshing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the control that a refresh operation has ended.

## Declaration

```objectivec
- (void) endRefreshing;
```

<a id="Discussion"></a>

## Discussion

Call this method at the end of any refresh operation (whether it was initiated programmatically or by the user) to return the refresh control to its default state. If the refresh control is at least partially visible, calling this method also hides it. If animations are also enabled, the control is hidden using an animation.

## See Also

### Managing the refresh status

- [beginRefreshing](beginrefreshing%28%29.md): Tells the control that a refresh operation was started programmatically.
- [refreshing](isrefreshing.md): A Boolean value indicating whether a refresh operation has been triggered and is in progress.
