> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/webdomains

# webDomains

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The web domains that the event includes.

## Declaration

```swift
var webDomains: Set<WebDomainToken> { get }
```

## See Also

### Including Objects in an Event

- [applications](applications.md): The applications that the event includes.
- [categories](categories.md): The categories that the event includes.
- [threshold](threshold.md): The amount of time to monitor the provided applications, categories, and web domains.
