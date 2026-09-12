> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/cancel()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/cancel())

# cancel() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Starts the animated dismissal of the compose view.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

When the cancel animation finishes, this method calls [didSelectCancel()](didselectcancel%28%29.md). A subclass shouldn’t need to override `cancel`. In rare cases a subclass may call `cancel`, such as in response to a catastrophic failure during user interaction with the compose view.

# cancel (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Starts the animated dismissal of the compose view.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

When the cancel animation finishes, this method calls [didSelectCancel](didselectcancel%28%29.md). A subclass shouldn’t need to override `cancel`. In rare cases a subclass may call `cancel`, such as in response to a catastrophic failure during user interaction with the compose view.
