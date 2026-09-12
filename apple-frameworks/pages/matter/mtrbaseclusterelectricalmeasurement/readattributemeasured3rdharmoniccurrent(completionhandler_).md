> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalmeasurement/readattributemeasured3rdharmoniccurrent(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalmeasurement/readattributemeasured3rdharmoniccurrent(completionhandler:))

# readAttributeMeasured3rdHarmonicCurrent(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMeasured3rdHarmonicCurrentWithCompletion:

## Declaration

```swift
func readAttributeMeasured3rdHarmonicCurrent(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeMeasured3rdHarmonicCurrent() async throws -> NSNumber
```

# readAttributeMeasured3rdHarmonicCurrentWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMeasured3rdHarmonicCurrentWithCompletion:

## Declaration

```objectivec
- (void) readAttributeMeasured3rdHarmonicCurrentWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
