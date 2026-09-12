> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalmeasurement/readattributemeasured5thharmoniccurrent(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalmeasurement/readattributemeasured5thharmoniccurrent(completionhandler:))

# readAttributeMeasured5thHarmonicCurrent(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMeasured5thHarmonicCurrentWithCompletion:

## Declaration

```swift
func readAttributeMeasured5thHarmonicCurrent(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeMeasured5thHarmonicCurrent() async throws -> NSNumber
```

# readAttributeMeasured5thHarmonicCurrentWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMeasured5thHarmonicCurrentWithCompletion:

## Declaration

```objectivec
- (void) readAttributeMeasured5thHarmonicCurrentWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
