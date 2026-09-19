> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/immediatescheduler/shared

# shared

**Framework:** Combine  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The shared instance of the immediate scheduler.

## Declaration

```swift
static let shared: ImmediateScheduler
```

<a id="discussion"></a>

## Discussion

You cannot create instances of the immediate scheduler yourself. Use only the shared instance.
