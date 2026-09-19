> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterapplicationlauncher/stopapp(withexpectedvalues:expectedvalueinterval:completion:)

# stopApp(withExpectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func stopApp(withExpectedValues expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRApplicationLauncherClusterLauncherResponseParams?, (any Error)?) -> Void)
```

```swift
func stopApp(withExpectedValues expectedValues: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRApplicationLauncherClusterLauncherResponseParams
```

# stopAppWithExpectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) stopAppWithExpectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedValues expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRApplicationLauncherClusterLauncherResponseParams *data, NSError *error)) completion;
```
