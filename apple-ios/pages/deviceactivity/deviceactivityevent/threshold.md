> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent/threshold](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/threshold)

# threshold

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The amount of time to monitor the provided applications, categories, and web domains.

## Declaration

```swift
var threshold: DateComponents { get }
```

<a id="discussion"></a>

## Discussion

Once the activity exceeds the threshold, the system invokes the [eventDidReachThreshold(\_:activity:)](../deviceactivitymonitor/eventdidreachthreshold%28__activity_%29.md) method of the application extension’s principal class.

## See Also

### Including Objects in an Event

- [applications](applications.md): The applications that the event includes.
- [categories](categories.md): The categories that the event includes.
- [webDomains](webdomains.md): The web domains that the event includes.
