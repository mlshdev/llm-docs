> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiouniteq/init(numberofbands:)

# init(numberOfBands:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates an audio unit equalizer object with the specified number of bands.

## Declaration

```swift
init(numberOfBands: Int)
```

## Parameters

- `numberOfBands`: The number of bands that the equalizer creates.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitEQ` instance.

## See Also

### Related Documentation

- [bands](bands.md): An array of equalizer filter parameters.

# initWithNumberOfBands: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates an audio unit equalizer object with the specified number of bands.

## Declaration

```objectivec
- (instancetype) initWithNumberOfBands:(NSUInteger) numberOfBands;
```

## Parameters

- `numberOfBands`: The number of bands that the equalizer creates.

<a id="return-value"></a>

## Return Value

A new `AVAudioUnitEQ` instance.

## See Also

### Related Documentation

- [bands](bands.md): An array of equalizer filter parameters.
