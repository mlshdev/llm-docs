> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/activitykit/activity/contentupdates-swift.property

# contentUpdates

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.2+ · iPadOS 16.2+

An asynchronous sequence you use to observe changes to the dynamic content of a Live Activity.

## Declaration

```swift
var contentUpdates: Activity<Attributes>.ContentUpdates { get }
```

## Mentioned In

- [Displaying live data with Live Activities](../displaying-live-data-with-live-activities.md)

## See Also

### Observing Live Activity content changes

- [Activity.ContentUpdates](contentupdates-swift.struct.md): Conforms when `Attributes` conforms to `ActivityAttributes`. A structure that offers functionality to observe changes to the dynamic content of a Live Activity.
