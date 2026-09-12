> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/nanoseconds(_:)-8nsaz](https://developer.apple.com/documentation/swift/duration/nanoseconds(_:)-8nsaz)

# nanoseconds(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Construct a `Duration` given a number of nanoseconds represented as a `BinaryInteger`.

## Declaration

```swift
static func nanoseconds<T>(_ nanoseconds: T) -> Duration where T : BinaryInteger
```

<a id="return-value"></a>

## Return Value

A `Duration` representing a given number of nanoseconds.

<a id="discussion"></a>

## Discussion

```swift
  let d: Duration = .nanoseconds(1929)
```
