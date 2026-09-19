> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/samplepropertiescollection/init(samplecount:sizes:timings:attachments:)

# init(sampleCount:sizes:timings:attachments:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a collection with specified sample information.

## Declaration

```swift
init(sampleCount: Int, sizes: CMSampleBuffer.SizePerSample?, timings: CMSampleBuffer.TimingPerSample?, attachments: [CMSampleBuffer.SampleAttachments]? = nil)
```

## Parameters

- `sampleCount`: Number of samples. Must be greater than 0.
- `sizes`: Size information of each sample.
- `timings`: Timing information of each sample.
- `attachments`: Attachments for each sample.
