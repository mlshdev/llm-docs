> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofileopen](https://developer.apple.com/documentation/audiotoolbox/extaudiofileopen)

# ExtAudioFileOpen

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.6)

Deprecated. Use the [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md) function instead.

## Declaration

```objectivec
extern OSStatus ExtAudioFileOpen(const struct FSRef *inFSRef, ExtAudioFileRef*outExtAudioFile);
```

## Parameters

- `inFSRef`: The audio file to read.
- `outExtAudioFile`: On exit, a newly allocated ExtAudioAudioFileRef.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Allocates a new ExtAudioFileRef for reading an existing audio file.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated. Use the [ExtAudioFileOpenURL](extaudiofileopenurl%28____%29.md) function instead.

## See Also

### Deprecated Functions

- [ExtAudioFileCreateNew](extaudiofilecreatenew.md): Deprecated. Deprecated. Use the [ExtAudioFileCreateWithURL](extaudiofilecreatewithurl%28____________%29.md) function instead.
