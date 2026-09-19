> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterenergyevse/gettargetswithexpectedvalues(_:expectedvalueinterval:completion:)

# getTargetsWithExpectedValues(\_:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func getTargetsWithExpectedValues(_ expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTREnergyEVSEClusterGetTargetsResponseParams?, (any Error)?) -> Void)
```

```swift
func targets(withExpectedValues expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTREnergyEVSEClusterGetTargetsResponseParams
```

# getTargetsWithExpectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) getTargetsWithExpectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedValues expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTREnergyEVSEClusterGetTargetsResponseParams *data, NSError *error)) completion;
```
