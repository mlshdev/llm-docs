> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/epoch](https://developer.apple.com/documentation/coremedia/cmtime/epoch)

# epoch (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The epoch of the time.

## Declaration

```swift
var epoch: CMTimeEpoch
```

<a id="Discussion"></a>

## Discussion

Use the epoch to differentiate between equal timestamps that are different due to looping, multi-item sequencing, and so on.

## See Also

### Accessing Time Values

- [value](value.md): A time value that represents the numerator of a rational time.
- [timescale](timescale.md): A timescale that represents the denominator of a rational time.
- [flags](flags.md): The flags associated with a time.

# epoch (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The epoch of the time.

## Declaration

```objectivec
CMTimeEpoch epoch;
```

<a id="Discussion"></a>

## Discussion

Use the epoch to differentiate between equal timestamps that are different due to looping, multi-item sequencing, and so on.

## See Also

### Accessing Time Values

- [value](value.md): A time value that represents the numerator of a rational time.
- [timescale](timescale.md): A timescale that represents the denominator of a rational time.
- [flags](flags.md): The flags associated with a time.
