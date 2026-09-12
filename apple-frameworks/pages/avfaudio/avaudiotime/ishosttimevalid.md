> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/ishosttimevalid](https://developer.apple.com/documentation/avfaudio/avaudiotime/ishosttimevalid)

# isHostTimeValid (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the host time value is valid.

## Declaration

```swift
var isHostTimeValid: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property returns [true](https://developer.apple.com/documentation/swift/true) if the [hostTime](hosttime.md) property is valid; otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Manipulating Host Time

- [hostTime](hosttime.md): The host time.
- [hostTime(forSeconds:)](hosttime%28forseconds_%29.md): Converts seconds to host time.
- [seconds(forHostTime:)](seconds%28forhosttime_%29.md): Converts host time to seconds.

# hostTimeValid (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the host time value is valid.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isHostTimeValid) BOOL hostTimeValid;
```

<a id="Discussion"></a>

## Discussion

This property returns [true](https://developer.apple.com/documentation/swift/true) if the [hostTime](hosttime.md) property is valid; otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Manipulating Host Time

- [hostTime](hosttime.md): The host time.
- [hostTimeForSeconds:](hosttime%28forseconds_%29.md): Converts seconds to host time.
- [secondsForHostTime:](seconds%28forhosttime_%29.md): Converts host time to seconds.
