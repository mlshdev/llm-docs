> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiotime/seconds(forhosttime:)

# seconds(forHostTime:) (Swift)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts host time to seconds.

## Declaration

```swift
class func seconds(forHostTime hostTime: UInt64) -> TimeInterval
```

## Parameters

- `hostTime`: The host time.

<a id="return-value"></a>

## Return Value

The number of seconds that represent the host time you specify.

## See Also

### Manipulating Host Time

- [hostTime](hosttime.md): The host time.
- [isHostTimeValid](ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [hostTime(forSeconds:)](hosttime%28forseconds_%29.md): Converts seconds to host time.

# secondsForHostTime: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts host time to seconds.

## Declaration

```objectivec
+ (NSTimeInterval) secondsForHostTime:(uint64_t) hostTime;
```

## Parameters

- `hostTime`: The host time.

<a id="return-value"></a>

## Return Value

The number of seconds that represent the host time you specify.

## See Also

### Manipulating Host Time

- [hostTime](hosttime.md): The host time.
- [hostTimeValid](ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [hostTimeForSeconds:](hosttime%28forseconds_%29.md): Converts seconds to host time.
