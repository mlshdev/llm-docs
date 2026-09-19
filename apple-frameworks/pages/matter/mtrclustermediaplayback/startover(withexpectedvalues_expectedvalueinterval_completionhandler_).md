> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclustermediaplayback/startover(withexpectedvalues:expectedvalueinterval:completionhandler:)

# startOver(withExpectedValues:expectedValueInterval:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use startOverWithExpectedValues:expectedValueInterval:completion:

## Declaration

```swift
func startOver(withExpectedValues expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completionHandler: @escaping @Sendable (MTRMediaPlaybackClusterPlaybackResponseParams?, (any Error)?) -> Void)
```

```swift
func startOver(withExpectedValues expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRMediaPlaybackClusterPlaybackResponseParams
```

# startOverWithExpectedValues:expectedValueInterval:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use startOverWithExpectedValues:expectedValueInterval:completion:

## Declaration

```objectivec
- (void) startOverWithExpectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedValues expectedValueInterval:(NSNumber *) expectedValueIntervalMs completionHandler:(void (^)(MTRMediaPlaybackClusterPlaybackResponseParams *data, NSError *error)) completionHandler;
```
