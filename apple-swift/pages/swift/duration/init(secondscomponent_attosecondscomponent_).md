> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/init(secondscomponent:attosecondscomponent:)](https://developer.apple.com/documentation/swift/duration/init(secondscomponent:attosecondscomponent:))

# init(secondsComponent:attosecondsComponent:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Construct a `Duration` by adding attoseconds to a seconds value.

## Declaration

```swift
init(secondsComponent: Int64, attosecondsComponent: Int64)
```

## Parameters

- `secondsComponent`: The seconds component portion of the `Duration` value.
- `attosecondsComponent`: The attosecond component portion of the `Duration` value.

<a id="discussion"></a>

## Discussion

This is useful for when an external decomposed components of a `Duration` has been stored and needs to be reconstituted. Since the values are added no precondition is expressed for the attoseconds being limited to 1e18.

```swift
  let d1 = Duration(
    secondsComponent: 3, 
    attosecondsComponent: 123000000000000000)
  print(d1) // 3.123 seconds

  let d2 = Duration(
    secondsComponent: 3, 
    attosecondsComponent: -123000000000000000)
  print(d2) // 2.877 seconds

  let d3 = Duration(
    secondsComponent: -3, 
    attosecondsComponent: -123000000000000000)
  print(d3) // -3.123 seconds
```

## See Also

### Creating a duration

- [seconds(\_:)](seconds%28__%29-311cx.md): Construct a `Duration` given a number of seconds represented as a `BinaryInteger`.
- [seconds(\_:)](seconds%28__%29-5ifzr.md): Construct a `Duration` given a number of seconds represented as a `Double` by converting the value into the closest attosecond scale value.
- [milliseconds(\_:)](milliseconds%28__%29-1w328.md): Construct a `Duration` given a number of milliseconds represented as a `BinaryInteger`.
- [milliseconds(\_:)](milliseconds%28__%29-7ledy.md): Construct a `Duration` given a number of seconds milliseconds as a `Double` by converting the value into the closest attosecond scale value.
- [microseconds(\_:)](microseconds%28__%29-1zzcc.md): Construct a `Duration` given a number of seconds microseconds as a `Double` by converting the value into the closest attosecond scale value.
- [microseconds(\_:)](microseconds%28__%29-2majo.md): Construct a `Duration` given a number of microseconds represented as a `BinaryInteger`.
