> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterbasicinformation/readattributeproductappearance(completion:)

# readAttributeProductAppearance(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func readAttributeProductAppearance(completion: @escaping @Sendable (MTRBasicInformationClusterProductAppearanceStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeProductAppearance() async throws -> MTRBasicInformationClusterProductAppearanceStruct
```

# readAttributeProductAppearanceWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) readAttributeProductAppearanceWithCompletion:(void (^)(MTRBasicInformationClusterProductAppearanceStruct *value, NSError *error)) completion;
```
