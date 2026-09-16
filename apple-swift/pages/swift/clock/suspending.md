> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/clock/suspending

# suspending

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A clock that measures time that always increments but stops incrementing while the system is asleep.

## Declaration

```swift
static var suspending: SuspendingClock { get }
```

<a id="discussion"></a>

## Discussion

```swift
  try await Task.sleep(until: .now + .seconds(3), clock: .suspending)
```
