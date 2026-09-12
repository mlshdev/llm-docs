> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent/includesallactivity](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/includesallactivity)

# includesAllActivity

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether the event includes all applications, categories, and web domains.

## Declaration

```swift
var includesAllActivity: Bool { get }
```

<a id="discussion"></a>

## Discussion

Use `includesAllActivity` to determine the content of the scheduled event. Evaluates to `true` if [applications](applications.md), [categories](categories.md), and [webDomains](webdomains.md) are empty; otherwise `false`.

## See Also

### Creating an Event

- [init(applications:categories:webDomains:threshold:)](init%28applications_categories_webdomains_threshold_%29.md): Creates a new event.
- [DeviceActivityEvent.Name](name.md): The unique name of an event.
