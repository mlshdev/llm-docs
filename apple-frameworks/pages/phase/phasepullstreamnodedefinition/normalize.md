> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepullstreamnodedefinition/normalize](https://developer.apple.com/documentation/phase/phasepullstreamnodedefinition/normalize)

# normalize (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
var normalize: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Determines whether or not the engine should normalize the stream. The default value is NO.

In general, clients are advised to normalize the input. Normalization is required to properly calibrate the output level. If you set this value to NO, it’s advised that you do custom normalization of the audio data prior to passing the buffers to PHASE.

# normalize (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
@property (nonatomic) BOOL normalize;
```

<a id="discussion"></a>

## Discussion

Determines whether or not the engine should normalize the stream. The default value is NO.

In general, clients are advised to normalize the input. Normalization is required to properly calibrate the output level. If you set this value to NO, it’s advised that you do custom normalization of the audio data prior to passing the buffers to PHASE.
