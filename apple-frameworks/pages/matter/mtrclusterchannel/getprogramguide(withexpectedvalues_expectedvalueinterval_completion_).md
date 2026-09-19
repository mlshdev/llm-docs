> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterchannel/getprogramguide(withexpectedvalues:expectedvalueinterval:completion:)

# getProgramGuide(withExpectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func getProgramGuide(withExpectedValues expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRChannelClusterProgramGuideResponseParams?, (any Error)?) -> Void)
```

```swift
func programGuide(withExpectedValues expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRChannelClusterProgramGuideResponseParams
```

# getProgramGuideWithExpectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) getProgramGuideWithExpectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedValues expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRChannelClusterProgramGuideResponseParams *data, NSError *error)) completion;
```
