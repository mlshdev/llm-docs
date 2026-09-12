> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/clock/continuous](https://developer.apple.com/documentation/swift/clock/continuous)

# continuous

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A clock that measures time that always increments but does not stop incrementing while the system is asleep.

## Declaration

```swift
static var continuous: ContinuousClock { get }
```

<a id="discussion"></a>

## Discussion

```swift
  try await Task.sleep(until: .now + .seconds(3), clock: .continuous)
```
