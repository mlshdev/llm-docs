> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/invalidate()](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/invalidate())

# invalidate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Prevents the background activity from being scheduled again.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

When `invalidate` is used to stop an activity that is currently executing, the activity will still finish executing.

See [Stop Activity](../nsbackgroundactivityscheduler.md#Stop-Activity).

# invalidate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Prevents the background activity from being scheduled again.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

When `invalidate` is used to stop an activity that is currently executing, the activity will still finish executing.

See [Stop Activity](../nsbackgroundactivityscheduler.md#Stop-Activity).
