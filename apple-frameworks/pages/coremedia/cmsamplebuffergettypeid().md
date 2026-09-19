> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffergettypeid()

# CMSampleBufferGetTypeID() (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier of sample buffer objects.

## Declaration

```swift
func CMSampleBufferGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

`CFTypeID` of `CMSampleBuffer` objects.

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is actually a `CMSampleBuffer` by comparing `CFGetTypeID(object)` with `CMSampleBufferGetTypeID()`.

# CMSampleBufferGetTypeID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the type identifier of sample buffer objects.

## Declaration

```objectivec
extern CFTypeID CMSampleBufferGetTypeID();
```

<a id="return-value"></a>

## Return Value

`CFTypeID` of `CMSampleBuffer` objects.

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is actually a `CMSampleBuffer` by comparing `CFGetTypeID(object)` with `CMSampleBufferGetTypeID()`.
