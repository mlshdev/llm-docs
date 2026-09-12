> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioaudiolib_h/1812066-ioaudioflush](https://developer.apple.com/documentation/iokit/ioaudiolib_h/1812066-ioaudioflush)

# IOAudioFlush

**Interface language:** Objective-C

**Framework:** IOKit

Indicate the position at which the audio stream can be stopped.

## Declaration

```objectivec
kern_return_t IOAudioFlush(
   io_connect_t connect,
   IOAudioStreamPosition *end);
```

## Parameters

- `connect`: the audio stream
- `end`: the position

<a id="return_value"></a>

## Return Value

kern_return_t

## See Also

### Miscellaneous

- [IOAudioIsOutput](1812070-ioaudioisoutput.md): Determines if the audio stream is an output stream
- [IOAudioSetErase](1812074-ioaudioseterase.md): Set autoerase flag, returns old value
