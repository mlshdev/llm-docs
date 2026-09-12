> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskrequest/earliestbegindate](https://developer.apple.com/documentation/backgroundtasks/bgtaskrequest/earliestbegindate)

# earliestBeginDate (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The earliest date and time at which to run the task.

## Declaration

```swift
var earliestBeginDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify `nil` for no start delay.

Setting the property indicates that the background task shouldn’t start any earlier than this date. However, the system doesn’t guarantee launching the task at the specified date, but only that it won’t begin sooner.

## See Also

### Configuring a Task Request

- [identifier](identifier.md): The identifier of the task associated with the request.

# earliestBeginDate (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The earliest date and time at which to run the task.

## Declaration

```objectivec
@property (copy, nullable) NSDate * earliestBeginDate;
```

<a id="Discussion"></a>

## Discussion

Specify `nil` for no start delay.

Setting the property indicates that the background task shouldn’t start any earlier than this date. However, the system doesn’t guarantee launching the task at the specified date, but only that it won’t begin sooner.

## See Also

### Configuring a Task Request

- [identifier](identifier.md): The identifier of the task associated with the request.
