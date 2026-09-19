> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioaudiolib_h/1812070-ioaudioisoutput

# IOAudioIsOutput

**Interface language:** Objective-C

**Framework:** IOKit

Determines if the audio stream is an output stream

## Declaration

```objectivec
kern_return_t IOAudioIsOutput(
   io_service_t service,
   int *out);
```

## Parameters

- `service`:
- `out`:

<a id="return_value"></a>

## Return Value

kern_return_t

## See Also

### Miscellaneous

- [IOAudioFlush](1812066-ioaudioflush.md): Indicate the position at which the audio stream can be stopped.
- [IOAudioSetErase](1812074-ioaudioseterase.md): Set autoerase flag, returns old value
