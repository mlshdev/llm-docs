> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetaudiosourceincarintent/relativeaudiosourcereference](https://developer.apple.com/documentation/intents/insetaudiosourceincarintent/relativeaudiosourcereference)

# relativeAudioSourceReference (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The relative audio source to select.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var relativeAudioSourceReference: INRelativeReference { get }
```

<a id="Discussion"></a>

## Discussion

When the user asks for the next or previous audio source, Siri fills this property with an appropriate value. However, if the user asked for a specific audio source, instead of the next or previous one, Siri sets this property to [INRelativeReference.unknown](../inrelativereference/unknown.md).

## See Also

### Getting Details About the Audio Source to Set

- [audioSource](audiosource.md): Deprecated. The audio source to select.

# relativeAudioSourceReference (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The relative audio source to select.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INRelativeReference relativeAudioSourceReference;
```

```objectivec
@property (atomic, assign, readonly) INRelativeReference relativeAudioSourceReference;
```

<a id="Discussion"></a>

## Discussion

When the user asks for the next or previous audio source, Siri fills this property with an appropriate value. However, if the user asked for a specific audio source, instead of the next or previous one, Siri sets this property to [INRelativeReferenceUnknown](../inrelativereference/unknown.md).

## See Also

### Getting Details About the Audio Source to Set

- [audioSource](audiosource.md): Deprecated. The audio source to select.
