> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetimer/setdate(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetimer/setdate(_:))

# setDate(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the start time for the timer.

## Declaration

```swift
func setDate(_ date: Date)
```

## Parameters

- `date`: The new starting time for the timer. Specifying the current date or a date in the past causes the timer to count upward from that time. Specifying a date in the future causes the timer to count down to the specified time.

<a id="Discussion"></a>

## Discussion

This method updates the target value but does not automatically update the timer display. You must call the timer’s [start()](start%28%29.md) method to begin updating the text it displays. When you do, the timer text is updated based on the time you set using this method.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)
- [start()](start%28%29.md): Begins updates to the timer’s display.

### Configuring the Timer Attributes

- [setTextColor(\_:)](settextcolor%28__%29.md): Sets the color of the timer’s text.

# setDate: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the start time for the timer.

## Declaration

```objectivec
- (void) setDate:(NSDate *) date;
```

## Parameters

- `date`: The new starting time for the timer. Specifying the current date or a date in the past causes the timer to count upward from that time. Specifying a date in the future causes the timer to count down to the specified time.

<a id="Discussion"></a>

## Discussion

This method updates the target value but does not automatically update the timer display. You must call the timer’s [start](start%28%29.md) method to begin updating the text it displays. When you do, the timer text is updated based on the time you set using this method.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)
- [start](start%28%29.md): Begins updates to the timer’s display.

### Configuring the Timer Attributes

- [setTextColor:](settextcolor%28__%29.md): Sets the color of the timer’s text.
