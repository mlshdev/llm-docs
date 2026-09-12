> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreamnode/ratemetaparameter](https://developer.apple.com/documentation/phase/phasepushstreamnode/ratemetaparameter)

# rateMetaParameter (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A meta parameter for dynamic rate control.

## Declaration

```swift
var rateMetaParameter: PHASENumberMetaParameter? { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets this property when the app specifies a meta parameter definition at initialization.

## See Also

### Controlling Playback

- [gainMetaParameter](gainmetaparameter.md): A meta parameter for dynamic loudness control.

# rateMetaParameter (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A meta parameter for dynamic rate control.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHASENumberMetaParameter * rateMetaParameter;
```

<a id="Discussion"></a>

## Discussion

The framework sets this property when the app specifies a meta parameter definition at initialization.

## See Also

### Controlling Playback

- [gainMetaParameter](gainmetaparameter.md): A meta parameter for dynamic loudness control.
