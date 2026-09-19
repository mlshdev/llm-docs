> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentsystemcontext/precisetimestamp

# preciseTimestamp

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A precise timestamp for the performed action.

## Declaration

```swift
var preciseTimestamp: Date? { get }
```

<a id="discussion"></a>

## Discussion

The system records this timestamp when a person starts the app intent’s action using the Action button on Apple Watch Ultra.
