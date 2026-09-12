> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462081-disposespeechchannel](https://developer.apple.com/documentation/applicationservices/1462081-disposespeechchannel)

# DisposeSpeechChannel(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Disposes of an existing speech channel.

## Declaration

```swift
func DisposeSpeechChannel(_ chan: SpeechChannel) -> OSErr
```

## Parameters

- `chan`: The speech channel to dispose of.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `DisposeSpeechChannel` functiondisposes of the speech channel specified in the `chan` parameterand releases all memory the channel occupies. If the speech channelspecified is producing speech, then the `DisposeSpeechChannel` functionimmediately stops speech before disposing of the channel. If youhave defined a text-done callback function or a speech-done callbackfunction, the function will not be called before the channel is disposedof.

The Speech Synthesis Manager releases any speech channelsthat have not been explicitly disposed of by an application whenthe application quits. In general, however, your application shoulddispose of any speech channels it has created whenever it receivesa suspend event. This ensures that other applications can take fulladvantage of Speech Synthesis Manager and Sound Manager capabilities.

## See Also

### Managing Speech Channels

- [NewSpeechChannel(\_:\_:)](1461367-newspeechchannel.md): Deprecated. Creates a new speech channel.

# DisposeSpeechChannel (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Disposes of an existing speech channel.

## Declaration

```objectivec
OSErr DisposeSpeechChannel(SpeechChannel chan);
```

## Parameters

- `chan`: The speech channel to dispose of.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `DisposeSpeechChannel` functiondisposes of the speech channel specified in the `chan` parameterand releases all memory the channel occupies. If the speech channelspecified is producing speech, then the `DisposeSpeechChannel` functionimmediately stops speech before disposing of the channel. If youhave defined a text-done callback function or a speech-done callbackfunction, the function will not be called before the channel is disposedof.

The Speech Synthesis Manager releases any speech channelsthat have not been explicitly disposed of by an application whenthe application quits. In general, however, your application shoulddispose of any speech channels it has created whenever it receivesa suspend event. This ensures that other applications can take fulladvantage of Speech Synthesis Manager and Sound Manager capabilities.

## See Also

### Managing Speech Channels

- [NewSpeechChannel](1461367-newspeechchannel.md): Deprecated. Creates a new speech channel.
