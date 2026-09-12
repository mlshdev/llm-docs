> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifysoundrequest/overlapfactor](https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest/overlapfactor)

# overlapFactor (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The amount of overlap between successive analysis windows when the model operates on a fixed-size audio block.

## Declaration

```swift
var overlapFactor: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The property defaults to `0.5` (50%) and supports values in the range `[0.0, 1.0]`.

Sound analyses that use a fixed-size audio block typically benefit with an overlap factor that’s greater than zero. An overlap factor of `0.0` may negatively affect your sound classifier’s accuracy because a sound may span two analysis windows. However, an overlap factor of `0.5` ensures each sound aligns near the center of at least one analysis window.

> **Important**

>  Higher overlap factors increase computational complexity, especially for values greater than `0.5`.

## See Also

### Configuring a Request

- [windowDuration](windowduration.md): The duration of the audio buffer the request sends to the underlying sound classifier for each prediction.

# overlapFactor (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The amount of overlap between successive analysis windows when the model operates on a fixed-size audio block.

## Declaration

```objectivec
@property (assign, readwrite) double overlapFactor;
```

<a id="Discussion"></a>

## Discussion

The property defaults to `0.5` (50%) and supports values in the range `[0.0, 1.0]`.

Sound analyses that use a fixed-size audio block typically benefit with an overlap factor that’s greater than zero. An overlap factor of `0.0` may negatively affect your sound classifier’s accuracy because a sound may span two analysis windows. However, an overlap factor of `0.5` ensures each sound aligns near the center of at least one analysis window.

> **Important**

>  Higher overlap factors increase computational complexity, especially for values greater than `0.5`.

## See Also

### Configuring a Request

- [windowDuration](windowduration.md): The duration of the audio buffer the request sends to the underlying sound classifier for each prediction.
