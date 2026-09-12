> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsampletiminginfo/presentationtimestamp](https://developer.apple.com/documentation/coremedia/cmsampletiminginfo/presentationtimestamp)

# presentationTimeStamp (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The time at which the sample will be presented.

## Declaration

```swift
var presentationTimeStamp: CMTime
```

<a id="Discussion"></a>

## Discussion

If a single struct applies to each of the samples, they all have this duration.

## See Also

### Properties

- [decodeTimeStamp](decodetimestamp.md): The time at which the sample will be decoded.
- [duration](duration.md): The duration of the sample.

# presentationTimeStamp (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time at which the sample will be presented.

## Declaration

```objectivec
CMTime presentationTimeStamp;
```

<a id="Discussion"></a>

## Discussion

If a single struct applies to each of the samples, they all have this duration.

## See Also

### Properties

- [decodeTimeStamp](decodetimestamp.md): The time at which the sample will be decoded.
- [duration](duration.md): The duration of the sample.
