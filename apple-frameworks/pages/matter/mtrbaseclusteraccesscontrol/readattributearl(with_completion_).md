> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusteraccesscontrol/readattributearl(with:completion:)

# readAttributeARL(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeARL(with params: MTRReadParams?, completion: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeARL(with params: MTRReadParams?) async throws -> [Any]
```

# readAttributeARLWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeARLWithParams:(MTRReadParams *) params completion:(void (^)(NSArray *value, NSError *error)) completion;
```
