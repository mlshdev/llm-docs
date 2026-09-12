> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/updatefocusifneeded()](https://developer.apple.com/documentation/uikit/uifocusenvironment/updatefocusifneeded())

# updateFocusIfNeeded() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the focus engine to force a focus update immediately.

## Declaration

```swift
func updateFocusIfNeeded()
```

<a id="Discussion"></a>

## Discussion

If any focus environment is currently pending an update (after calling [setNeedsFocusUpdate()](setneedsfocusupdate%28%29.md)), then calling this method forces the focus engine to immediately update focus. Unlike [setNeedsFocusUpdate()](setneedsfocusupdate%28%29.md), it does not matter if this environment currently contains focus, or if this environment is the one pending an update.

## See Also

### Requesting focus update

- [setNeedsFocusUpdate()](setneedsfocusupdate%28%29.md): Submits a request to the focus engine for a focus update in this environment.

# updateFocusIfNeeded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the focus engine to force a focus update immediately.

## Declaration

```objectivec
- (void) updateFocusIfNeeded;
```

<a id="Discussion"></a>

## Discussion

If any focus environment is currently pending an update (after calling [setNeedsFocusUpdate](setneedsfocusupdate%28%29.md)), then calling this method forces the focus engine to immediately update focus. Unlike [setNeedsFocusUpdate](setneedsfocusupdate%28%29.md), it does not matter if this environment currently contains focus, or if this environment is the one pending an update.

## See Also

### Requesting focus update

- [setNeedsFocusUpdate](setneedsfocusupdate%28%29.md): Submits a request to the focus engine for a focus update in this environment.
