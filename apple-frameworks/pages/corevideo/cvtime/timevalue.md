> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtime/timevalue](https://developer.apple.com/documentation/corevideo/cvtime/timevalue)

# timeValue (Swift)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The time value.

## Declaration

```swift
var timeValue: Int64
```

## See Also

### Properties

- [flags](flags.md): The flags associated with the `CVTime` value. See [CVTime Values](../cvtime-values.md) for possible values. If `kCVTimeIsIndefinite` is set, you should not use any of the other fields in this structure.
- [timeScale](timescale.md): The time scale for this value.

# timeValue (Objective-C)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The time value.

## Declaration

```objectivec
int64_t timeValue;
```

## See Also

### Properties

- [flags](flags.md): The flags associated with the `CVTime` value. See [CVTime Values](../cvtime-values.md) for possible values. If `kCVTimeIsIndefinite` is set, you should not use any of the other fields in this structure.
- [timeScale](timescale.md): The time scale for this value.
