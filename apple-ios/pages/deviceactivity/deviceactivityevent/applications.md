> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent/applications](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/applications)

# applications

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The applications that the event includes.

## Declaration

```swift
var applications: Set<ApplicationToken> { get }
```

## See Also

### Including Objects in an Event

- [categories](categories.md): The categories that the event includes.
- [webDomains](webdomains.md): The web domains that the event includes.
- [threshold](threshold.md): The amount of time to monitor the provided applications, categories, and web domains.
