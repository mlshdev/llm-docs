> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirefreshcontrol/isrefreshing](https://developer.apple.com/documentation/uikit/uirefreshcontrol/isrefreshing)

# isRefreshing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether a refresh operation has been triggered and is in progress.

## Declaration

```swift
var isRefreshing: Bool { get }
```

## See Also

### Managing the refresh status

- [beginRefreshing()](beginrefreshing%28%29.md): Tells the control that a refresh operation was started programmatically.
- [endRefreshing()](endrefreshing%28%29.md): Tells the control that a refresh operation has ended.

# refreshing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether a refresh operation has been triggered and is in progress.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isRefreshing) BOOL refreshing;
```

## See Also

### Managing the refresh status

- [beginRefreshing](beginrefreshing%28%29.md): Tells the control that a refresh operation was started programmatically.
- [endRefreshing](endrefreshing%28%29.md): Tells the control that a refresh operation has ended.
