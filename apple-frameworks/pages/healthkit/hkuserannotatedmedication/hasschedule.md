> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkuserannotatedmedication/hasschedule](https://developer.apple.com/documentation/healthkit/hkuserannotatedmedication/hasschedule)

# hasSchedule (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether a medication has a schedule set up.

## Declaration

```swift
var hasSchedule: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value is `true` for medications for which a person has set up reminders and `false` for medications that are only taken as needed.

> **Note**

> Scheduled medications can still be taken as needed.

# hasSchedule (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether a medication has a schedule set up.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL hasSchedule;
```

<a id="discussion"></a>

## Discussion

The value is `true` for medications for which a person has set up reminders and `false` for medications that are only taken as needed.

> **Note**

> Scheduled medications can still be taken as needed.
