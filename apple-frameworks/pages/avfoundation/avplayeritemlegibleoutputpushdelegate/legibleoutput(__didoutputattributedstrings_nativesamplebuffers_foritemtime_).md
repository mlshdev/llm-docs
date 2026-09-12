> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutputpushdelegate/legibleoutput(_:didoutputattributedstrings:nativesamplebuffers:foritemtime:)](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutputpushdelegate/legibleoutput(_:didoutputattributedstrings:nativesamplebuffers:foritemtime:))

# legibleOutput(\_:didOutputAttributedStrings:nativeSampleBuffers:forItemTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate to process the delivery of new textual samples.

## Declaration

```swift
optional func legibleOutput(_ output: AVPlayerItemLegibleOutput, didOutputAttributedStrings strings: [NSAttributedString], nativeSampleBuffers nativeSamples: [Any], forItemTime itemTime: CMTime)
```

## Parameters

- `output`: The [AVPlayerItemLegibleOutput](../avplayeritemlegibleoutput.md) source instance.
- `strings`: An array of [NSAttributedString](../../foundation/nsattributedstring.md) objects, each containing both the run of text and the descriptive markup.
- `nativeSamples`: An array of [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) objects, for media subtypes included in the array passed to the `output` object’s [init(mediaSubtypesForNativeRepresentation:)](../avplayeritemlegibleoutput/init%28mediasubtypesfornativerepresentation_%29.md) method.
- `itemTime`: The item time at which the strings should be presented.

<a id="Discussion"></a>

## Discussion

For each media subtype in the array passed in to the `output` object’s  [init(mediaSubtypesForNativeRepresentation:)](../avplayeritemlegibleoutput/init%28mediasubtypesfornativerepresentation_%29.md) method, the delegate receives sample buffers carrying data in its native format via the `nativeSamples` parameter if there is media data of that subtype in the media resource.

For all other media subtypes present in the media resource, the delegate receives attributed strings in a common format via the `strings` parameter.  See [CMTextMarkup](../../coremedia/cmtextmarkup.md) for the string attributes keys and values that are used in the attributed strings.

# legibleOutput:didOutputAttributedStrings:nativeSampleBuffers:forItemTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Asks the delegate to process the delivery of new textual samples.

## Declaration

```objectivec
- (void) legibleOutput:(AVPlayerItemLegibleOutput *) output didOutputAttributedStrings:(NSArray<NSAttributedString *> *) strings nativeSampleBuffers:(NSArray *) nativeSamples forItemTime:(CMTime) itemTime;
```

## Parameters

- `output`: The [AVPlayerItemLegibleOutput](../avplayeritemlegibleoutput.md) source instance.
- `strings`: An array of [NSAttributedString](../../foundation/nsattributedstring.md) objects, each containing both the run of text and the descriptive markup.
- `nativeSamples`: An array of [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) objects, for media subtypes included in the array passed to the `output` object’s [initWithMediaSubtypesForNativeRepresentation:](../avplayeritemlegibleoutput/init%28mediasubtypesfornativerepresentation_%29.md) method.
- `itemTime`: The item time at which the strings should be presented.

<a id="Discussion"></a>

## Discussion

For each media subtype in the array passed in to the `output` object’s  [initWithMediaSubtypesForNativeRepresentation:](../avplayeritemlegibleoutput/init%28mediasubtypesfornativerepresentation_%29.md) method, the delegate receives sample buffers carrying data in its native format via the `nativeSamples` parameter if there is media data of that subtype in the media resource.

For all other media subtypes present in the media resource, the delegate receives attributed strings in a common format via the `strings` parameter.  See [CMTextMarkup](../../coremedia/cmtextmarkup.md) for the string attributes keys and values that are used in the attributed strings.
