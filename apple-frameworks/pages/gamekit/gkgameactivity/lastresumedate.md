> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/lastresumedate](https://developer.apple.com/documentation/gamekit/gkgameactivity/lastresumedate)

# lastResumeDate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The date when the activity was last resumed.

## Declaration

```swift
var lastResumeDate: Date? { get }
```

<a id="discussion"></a>

## Discussion

- If the activity was first started, this will be the same as the start date.
- If the activity was paused and resumed, this will be the date when the activity was resumed.

## See Also

### Getting the activity properties

- [duration](duration.md): The total time elapsed while in active state.
- [startDate](startdate.md): The date when the activity was initially started.
- [endDate](enddate.md): The date when the activity was officially ended.
- [creationDate](creationdate.md): The date when the activity was created.

# lastResumeDate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The date when the activity was last resumed.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * lastResumeDate;
```

<a id="discussion"></a>

## Discussion

- If the activity was first started, this will be the same as the start date.
- If the activity was paused and resumed, this will be the date when the activity was resumed.

## See Also

### Getting the activity properties

- [duration](duration.md): The total time elapsed while in active state.
- [startDate](startdate.md): The date when the activity was initially started.
- [endDate](enddate.md): The date when the activity was officially ended.
- [creationDate](creationdate.md): The date when the activity was created.
