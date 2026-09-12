> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode/gainmetaparameter](https://developer.apple.com/documentation/phase/phasepushstreamnode/gainmetaparameter)

# gainMetaParameter (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A meta parameter for dynamic loudness control.

## Declaration

```swift
var gainMetaParameter: PHASENumberMetaParameter? { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets this property when the app specifies a meta parameter definition at initialization.

## See Also

### Controlling Playback

- [rateMetaParameter](ratemetaparameter.md): A meta parameter for dynamic rate control.

# gainMetaParameter (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A meta parameter for dynamic loudness control.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHASENumberMetaParameter * gainMetaParameter;
```

<a id="Discussion"></a>

## Discussion

The framework sets this property when the app specifies a meta parameter definition at initialization.

## See Also

### Controlling Playback

- [rateMetaParameter](ratemetaparameter.md): A meta parameter for dynamic rate control.
