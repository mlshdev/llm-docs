> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preferrediobufferduration](https://developer.apple.com/documentation/avfaudio/avaudiosession/preferrediobufferduration)

# preferredIOBufferDuration (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred I/O buffer duration, in seconds.

## Declaration

```swift
var preferredIOBufferDuration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the buffer duration selected using the [setPreferredIOBufferDuration(\_:)](setpreferrediobufferduration%28__%29.md) method.

To determine the actual buffer duration, query the [ioBufferDuration](iobufferduration.md) property.

## See Also

### Configuring I/O buffer duration

- [ioBufferDuration](iobufferduration.md): The current I/O buffer duration, in seconds.
- [setPreferredIOBufferDuration(\_:)](setpreferrediobufferduration%28__%29.md): Sets the preferred audio I/O buffer duration.

# preferredIOBufferDuration (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred I/O buffer duration, in seconds.

## Declaration

```objectivec
@property (readonly) NSTimeInterval preferredIOBufferDuration;
```

<a id="Discussion"></a>

## Discussion

The value of this property indicates the buffer duration selected using the [setPreferredIOBufferDuration:error:](setpreferrediobufferduration%28__%29.md) method.

To determine the actual buffer duration, query the [IOBufferDuration](iobufferduration.md) property.

## See Also

### Configuring I/O buffer duration

- [IOBufferDuration](iobufferduration.md): The current I/O buffer duration, in seconds.
- [setPreferredIOBufferDuration:error:](setpreferrediobufferduration%28__%29.md): Sets the preferred audio I/O buffer duration.
