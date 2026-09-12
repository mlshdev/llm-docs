> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/stringedited(in:changeinlength:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/stringedited(in:changeinlength:))

# stringEdited(in:changeInLength:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

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
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Notifies the linguistic tagger that the string (if mutable) has changed as specified by the parameters.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (void) stringEditedInRange:(NSRange) newRange changeInLength:(NSInteger) delta;
```

## Parameters

- `newRange`: The range in the final string that was edited.
- `delta`: The change in length.
