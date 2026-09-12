> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetimer/start()](https://developer.apple.com/documentation/watchkit/wkinterfacetimer/start())

# start() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Begins updates to the timer’s display.

## Declaration

```swift
func start()
```

<a id="Discussion"></a>

## Discussion

After setting the target date for the timer, call this method to begin updating the timer object’s displayed text. Further updates to the timer occur automatically on the user’s Apple Watch, without the need for you to do anything else.

This method does not actually affect the actual timer value. The timer begins counting when you set the target date using the [setDate(\_:)](setdate%28__%29.md) method. This method tells WatchKit to start updating the label containing the timer’s value.

## See Also

### Starting and Stopping the Timer

- [stop()](stop%28%29.md): Stops updates to the timer’s display.

# start (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Begins updates to the timer’s display.

## Declaration

```objectivec
- (void) start;
```

<a id="Discussion"></a>

## Discussion

After setting the target date for the timer, call this method to begin updating the timer object’s displayed text. Further updates to the timer occur automatically on the user’s Apple Watch, without the need for you to do anything else.

This method does not actually affect the actual timer value. The timer begins counting when you set the target date using the [setDate:](setdate%28__%29.md) method. This method tells WatchKit to start updating the label containing the timer’s value.

## See Also

### Starting and Stopping the Timer

- [stop](stop%28%29.md): Stops updates to the timer’s display.
