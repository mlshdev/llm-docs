> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsampletiminginfo/decodetimestamp

# decodeTimeStamp (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The time at which the sample will be decoded.

## Declaration

```swift
var decodeTimeStamp: CMTime
```

<a id="Discussion"></a>

## Discussion

If the samples are in presentation order, this must be set to `kCMTimeInvalid`.

## See Also

### Properties

- [duration](duration.md): The duration of the sample.
- [presentationTimeStamp](presentationtimestamp.md): The time at which the sample will be presented.

# decodeTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time at which the sample will be decoded.

## Declaration

```objectivec
CMTime decodeTimeStamp;
```

<a id="Discussion"></a>

## Discussion

If the samples are in presentation order, this must be set to `kCMTimeInvalid`.

## See Also

### Properties

- [duration](duration.md): The duration of the sample.
- [presentationTimeStamp](presentationtimestamp.md): The time at which the sample will be presented.
