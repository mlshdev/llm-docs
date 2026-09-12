> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtime/flags](https://developer.apple.com/documentation/corevideo/cvtime/flags)

# flags (Swift)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The flags associated with the `CVTime` value. See [CVTime Values](../cvtime-values.md) for possible values. If `kCVTimeIsIndefinite` is set, you should not use any of the other fields in this structure.

## Declaration

```swift
var flags: Int32
```

## See Also

### Properties

- [timeScale](timescale.md): The time scale for this value.
- [timeValue](timevalue.md): The time value.

# flags (Objective-C)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The flags associated with the `CVTime` value. See [CVTime Values](../cvtime-values.md) for possible values. If `kCVTimeIsIndefinite` is set, you should not use any of the other fields in this structure.

## Declaration

```objectivec
int32_t flags;
```

## See Also

### Properties

- [timeScale](timescale.md): The time scale for this value.
- [timeValue](timevalue.md): The time value.
