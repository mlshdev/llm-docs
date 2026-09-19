> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nslinguistictagger/stringedited(in:changeinlength:)

# stringEdited(in:changeInLength:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.7+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Notifies the linguistic tagger that the string (if mutable) has changed as specified by the parameters.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func stringEdited(in newRange: NSRange, changeInLength delta: Int)
```

## Parameters

- `newRange`: The range in the final string that was edited.
- `delta`: The change in length.

# stringEditedInRange:changeInLength: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.7+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Notifies the linguistic tagger that the string (if mutable) has changed as specified by the parameters.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (void) stringEditedInRange:(NSRange) newRange changeInLength:(NSInteger) delta;
```

## Parameters

- `newRange`: The range in the final string that was edited.
- `delta`: The change in length.
