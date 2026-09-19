> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/timer/init(firedate:interval:repeats:block:)

# init(fireDate:interval:repeats:block:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
convenience init(fireDate date: Date, interval: TimeInterval, repeats: Bool, block: @escaping @Sendable (Timer) -> Void)
```
