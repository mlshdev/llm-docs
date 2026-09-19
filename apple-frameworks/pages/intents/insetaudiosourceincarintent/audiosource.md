> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insetaudiosourceincarintent/audiosource

# audioSource (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The audio source to select.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var audioSource: INCarAudioSource { get }
```

<a id="Discussion"></a>

## Discussion

When the user asks for a specific audio source, Siri fills this property with the requested source. If the user asked for the next or previous audio source, Siri sets this property to [INCarAudioSource.sourceUnknown](../incaraudiosource/sourceunknown.md).

## See Also

### Getting Details About the Audio Source to Set

- [relativeAudioSourceReference](relativeaudiosourcereference.md): Deprecated. The relative audio source to select.

# audioSource (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The audio source to select.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INCarAudioSource audioSource;
```

```objectivec
@property (atomic, assign, readonly) INCarAudioSource audioSource;
```

<a id="Discussion"></a>

## Discussion

When the user asks for a specific audio source, Siri fills this property with the requested source. If the user asked for the next or previous audio source, Siri sets this property to [INCarAudioSourceUnknown](../incaraudiosource/sourceunknown.md).

## See Also

### Getting Details About the Audio Source to Set

- [relativeAudioSourceReference](relativeaudiosourcereference.md): Deprecated. The relative audio source to select.
