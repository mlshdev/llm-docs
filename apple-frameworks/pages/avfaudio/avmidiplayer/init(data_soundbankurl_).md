> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avmidiplayer/init(data:soundbankurl:)](https://developer.apple.com/documentation/avfaudio/avmidiplayer/init(data:soundbankurl:))

# init(data:soundBankURL:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a player to play MIDI data with the specified soundbank.

## Declaration

```swift
init(data: Data, soundBankURL bankURL: URL?) throws
```

## Parameters

- `data`: The data to play.
- `bankURL`: The URL of the sound bank. The sound bank must be a SoundFont2 or DLS bank. In macOS, you can pass [nil](../../objectivec/nil-227m0.md) for the bank URL argument to use the default sound bank. In iOS, you must always pass a valid bank file.

<a id="return-value"></a>

## Return Value

A new MIDI player, or [nil](../../objectivec/nil-227m0.md) if an error occurred.

## See Also

### Creating a MIDI player

- [init(contentsOf:soundBankURL:)](init%28contentsof_soundbankurl_%29.md): Creates a player to play a MIDI file with the specified soundbank.

# initWithData:soundBankURL:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a player to play MIDI data with the specified soundbank.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data soundBankURL:(NSURL *) bankURL error:(NSError **) outError;
```

## Parameters

- `data`: The data to play.
- `bankURL`: The URL of the sound bank. The sound bank must be a SoundFont2 or DLS bank. In macOS, you can pass [nil](../../objectivec/nil-227m0.md) for the bank URL argument to use the default sound bank. In iOS, you must always pass a valid bank file.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new MIDI player, or [nil](../../objectivec/nil-227m0.md) if an error occurred.

## See Also

### Creating a MIDI player

- [initWithContentsOfURL:soundBankURL:error:](init%28contentsof_soundbankurl_%29.md): Creates a player to play a MIDI file with the specified soundbank.
