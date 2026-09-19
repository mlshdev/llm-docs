> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnrecognizedtextobservation/topcandidates(_:)

# topCandidates(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Requests the *n* top candidates for a recognized text string.

## Declaration

```swift
func topCandidates(_ maxCandidateCount: Int) -> [VNRecognizedText]
```

## Parameters

- `maxCandidateCount`: The maximum number of candidates to return. This can’t exceed 10.

<a id="return-value"></a>

## Return Value

An array of the *n* top candidates, sorted by decreasing confidence score.

<a id="Discussion"></a>

## Discussion

This function returns no more than *n* candidates, but it may return fewer than *n* candidates.

## See Also

### Obtaining Recognized Text

- [VNRecognizedText](../vnrecognizedtext.md): Text recognized in an image through a text recognition request.

# topCandidates: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Requests the *n* top candidates for a recognized text string.

## Declaration

```objectivec
- (NSArray<VNRecognizedText *> *) topCandidates:(NSUInteger) maxCandidateCount;
```

## Parameters

- `maxCandidateCount`: The maximum number of candidates to return. This can’t exceed 10.

<a id="return-value"></a>

## Return Value

An array of the *n* top candidates, sorted by decreasing confidence score.

<a id="Discussion"></a>

## Discussion

This function returns no more than *n* candidates, but it may return fewer than *n* candidates.

## See Also

### Obtaining Recognized Text

- [VNRecognizedText](../vnrecognizedtext.md): Text recognized in an image through a text recognition request.
