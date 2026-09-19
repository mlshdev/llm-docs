> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/delegate

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The synthesizer’s delegate.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
weak var delegate: (any NSSpeechSynthesizerDelegate)? { get set }
```

## See Also

### Customizing the Speech Synthesizer Behavior

- [NSSpeechSynthesizerDelegate](../nsspeechsynthesizerdelegate.md): Deprecated. A set of optional methods implemented by delegates of [NSSpeechSynthesizer](../nsspeechsynthesizer.md) objects.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The synthesizer’s delegate.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
@property (weak, nullable) id<NSSpeechSynthesizerDelegate> delegate;
```

## See Also

### Customizing the Speech Synthesizer Behavior

- [NSSpeechSynthesizerDelegate](../nsspeechsynthesizerdelegate.md): Deprecated. A set of optional methods implemented by delegates of [NSSpeechSynthesizer](../nsspeechsynthesizer.md) objects.
