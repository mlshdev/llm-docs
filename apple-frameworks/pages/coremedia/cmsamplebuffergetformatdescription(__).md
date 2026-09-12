> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffergetformatdescription(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffergetformatdescription(_:))

# CMSampleBufferGetFormatDescription(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the format description of the samples in a sample buffer.

## Declaration

```swift
func CMSampleBufferGetFormatDescription(_ sbuf: CMSampleBuffer) -> CMFormatDescription?
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The format description of the samples in the `CMSampleBuffer` or `NULL` if there is an error.

<a id="Discussion"></a>

## Discussion

On return, the caller doesn’t own the returned `formatDesc`, and must retain it explicitly if the caller needs to maintain a reference to it.

# CMSampleBufferGetFormatDescription (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the format description of the samples in a sample buffer.

## Declaration

```objectivec
extern CMFormatDescriptionRefCMSampleBufferGetFormatDescription(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

The format description of the samples in the `CMSampleBuffer` or `NULL` if there is an error.

<a id="Discussion"></a>

## Discussion

On return, the caller doesn’t own the returned `formatDesc`, and must retain it explicitly if the caller needs to maintain a reference to it.
