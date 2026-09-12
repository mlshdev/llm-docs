> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/nanoseconds(_:)-1cg32](https://developer.apple.com/documentation/swift/duration/nanoseconds(_:)-1cg32)

# nanoseconds(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Construct a `Duration` given a number of nanoseconds as a `Double` by converting the value into the closest attosecond scale value.

## Declaration

```swift
static func nanoseconds(_ nanoseconds: Double) -> Duration
```

<a id="return-value"></a>

## Return Value

A `Duration` representing a given number of nanoseconds.

<a id="discussion"></a>

## Discussion

```swift
  let d: Duration = .nanoseconds(382.9)
```
