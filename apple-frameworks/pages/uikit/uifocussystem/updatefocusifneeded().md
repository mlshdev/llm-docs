> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/updatefocusifneeded()](https://developer.apple.com/documentation/uikit/uifocussystem/updatefocusifneeded())

# updateFocusIfNeeded() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Forces the system to act on a pending focus update for the current environment.

## Declaration

```swift
func updateFocusIfNeeded()
```

<a id="Discussion"></a>

## Discussion

If the current environment has a pending focus update, calling this method forces the system to update the focus information immediately instead of waiting for the next run loop cycle. If no focus update is pending, this method does nothing.

You create a pending focus update using the [requestFocusUpdate(to:)](requestfocusupdate%28to_%29.md) method. The system may also schedule focus updates in response to interface-related events.

## See Also

### Managing focus updates

- [requestFocusUpdate(to:)](requestfocusupdate%28to_%29.md): Submits a request to update the focus state of the specified object.

# updateFocusIfNeeded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Forces the system to act on a pending focus update for the current environment.

## Declaration

```objectivec
- (void) updateFocusIfNeeded;
```

<a id="Discussion"></a>

## Discussion

If the current environment has a pending focus update, calling this method forces the system to update the focus information immediately instead of waiting for the next run loop cycle. If no focus update is pending, this method does nothing.

You create a pending focus update using the [requestFocusUpdateToEnvironment:](requestfocusupdate%28to_%29.md) method. The system may also schedule focus updates in response to interface-related events.

## See Also

### Managing focus updates

- [requestFocusUpdateToEnvironment:](requestfocusupdate%28to_%29.md): Submits a request to update the focus state of the specified object.
