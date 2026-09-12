> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/iobufferduration](https://developer.apple.com/documentation/avfaudio/avaudiosession/iobufferduration)

# ioBufferDuration (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current I/O buffer duration, in seconds.

## Declaration

```swift
var ioBufferDuration: TimeInterval { get }
```

## See Also

### Configuring I/O buffer duration

- [preferredIOBufferDuration](preferrediobufferduration.md): The preferred I/O buffer duration, in seconds.
- [setPreferredIOBufferDuration(\_:)](setpreferrediobufferduration%28__%29.md): Sets the preferred audio I/O buffer duration.

# IOBufferDuration (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current I/O buffer duration, in seconds.

## Declaration

```objectivec
@property (readonly) NSTimeInterval IOBufferDuration;
```

## See Also

### Configuring I/O buffer duration

- [preferredIOBufferDuration](preferrediobufferduration.md): The preferred I/O buffer duration, in seconds.
- [setPreferredIOBufferDuration:error:](setpreferrediobufferduration%28__%29.md): Sets the preferred audio I/O buffer duration.
