> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/milliseconds(_:)-1w328](https://developer.apple.com/documentation/swift/duration/milliseconds(_:)-1w328)

# milliseconds(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Construct a `Duration` given a number of milliseconds represented as a `BinaryInteger`.

## Declaration

```swift
static func milliseconds<T>(_ milliseconds: T) -> Duration where T : BinaryInteger
```

<a id="return-value"></a>

## Return Value

A `Duration` representing a given number of milliseconds.

<a id="discussion"></a>

## Discussion

```swift
  let d: Duration = .milliseconds(645)
```

## See Also

### Creating a duration

- [init(secondsComponent:attosecondsComponent:)](init%28secondscomponent_attosecondscomponent_%29.md): Construct a `Duration` by adding attoseconds to a seconds value.
- [seconds(\_:)](seconds%28__%29-311cx.md): Construct a `Duration` given a number of seconds represented as a `BinaryInteger`.
- [seconds(\_:)](seconds%28__%29-5ifzr.md): Construct a `Duration` given a number of seconds represented as a `Double` by converting the value into the closest attosecond scale value.
- [milliseconds(\_:)](milliseconds%28__%29-7ledy.md): Construct a `Duration` given a number of seconds milliseconds as a `Double` by converting the value into the closest attosecond scale value.
- [microseconds(\_:)](microseconds%28__%29-1zzcc.md): Construct a `Duration` given a number of seconds microseconds as a `Double` by converting the value into the closest attosecond scale value.
- [microseconds(\_:)](microseconds%28__%29-2majo.md): Construct a `Duration` given a number of microseconds represented as a `BinaryInteger`.
