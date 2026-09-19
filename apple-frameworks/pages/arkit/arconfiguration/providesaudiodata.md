> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arconfiguration/providesaudiodata

# providesAudioData (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value that specifies whether to capture audio during the AR session.

## Declaration

```swift
var providesAudioData: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To receive and handle captured audio data, your session delegate must implement the [session(\_:didOutputAudioSampleBuffer:)](../arsessionobserver/session%28__didoutputaudiosamplebuffer_%29.md) method.

# providesAudioData (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value that specifies whether to capture audio during the AR session.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL providesAudioData;
```

<a id="Discussion"></a>

## Discussion

To receive and handle captured audio data, your session delegate must implement the [session:didOutputAudioSampleBuffer:](../arsessionobserver/session%28__didoutputaudiosamplebuffer_%29.md) method.
