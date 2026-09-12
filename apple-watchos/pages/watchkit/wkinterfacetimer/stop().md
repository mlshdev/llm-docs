> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetimer/stop()](https://developer.apple.com/documentation/watchkit/wkinterfacetimer/stop())

# stop() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Stops updates to the timer’s display.

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

Use this method to stop updates to the timer object’s label. This method does not stop the timer from counting. The timer continues counting to or from its target value even when updates to the label are not occurring.

## See Also

### Starting and Stopping the Timer

- [start()](start%28%29.md): Begins updates to the timer’s display.

# stop (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Stops updates to the timer’s display.

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

Use this method to stop updates to the timer object’s label. This method does not stop the timer from counting. The timer continues counting to or from its target value even when updates to the label are not occurring.

## See Also

### Starting and Stopping the Timer

- [start](start%28%29.md): Begins updates to the timer’s display.
