> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioaudiolib_h/1812074-ioaudioseterase](https://developer.apple.com/documentation/iokit/ioaudiolib_h/1812074-ioaudioseterase)

# IOAudioSetErase

**Interface language:** Objective-C

**Framework:** IOKit

Set autoerase flag, returns old value

## Declaration

```objectivec
kern_return_t IOAudioSetErase(
   io_connect_t connect,
   int erase,
   int *oldVal);
```

## Parameters

- `connect`: the audio stream
- `erase`: true to turn off, false otherwise
- `oldVal`: previous value

<a id="return_value"></a>

## Return Value

kern_return_t

## See Also

### Miscellaneous

- [IOAudioFlush](1812066-ioaudioflush.md): Indicate the position at which the audio stream can be stopped.
- [IOAudioIsOutput](1812070-ioaudioisoutput.md): Determines if the audio stream is an output stream
