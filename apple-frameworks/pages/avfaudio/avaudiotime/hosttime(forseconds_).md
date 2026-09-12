> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiotime/hosttime(forseconds:)](https://developer.apple.com/documentation/avfaudio/avaudiotime/hosttime(forseconds:))

# hostTime(forSeconds:) (Swift)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts seconds to host time.

## Declaration

```swift
class func hostTime(forSeconds seconds: TimeInterval) -> UInt64
```

## Parameters

- `seconds`: The number of seconds.

<a id="return-value"></a>

## Return Value

The host time that represents the seconds you specify.

## See Also

### Manipulating Host Time

- [hostTime](hosttime.md): The host time.
- [isHostTimeValid](ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [seconds(forHostTime:)](seconds%28forhosttime_%29.md): Converts host time to seconds.

# hostTimeForSeconds: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts seconds to host time.

## Declaration

```objectivec
+ (uint64_t) hostTimeForSeconds:(NSTimeInterval) seconds;
```

## Parameters

- `seconds`: The number of seconds.

<a id="return-value"></a>

## Return Value

The host time that represents the seconds you specify.

## See Also

### Manipulating Host Time

- [hostTime](hosttime.md): The host time.
- [hostTimeValid](ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [secondsForHostTime:](seconds%28forhosttime_%29.md): Converts host time to seconds.
