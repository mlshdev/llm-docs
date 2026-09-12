> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterapplicationlauncher/readattributecurrentapp(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterapplicationlauncher/readattributecurrentapp(completion:))

# readAttributeCurrentApp(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeCurrentApp(completion: @escaping @Sendable (MTRApplicationLauncherClusterApplicationEPStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeCurrentApp() async throws -> MTRApplicationLauncherClusterApplicationEPStruct
```

# readAttributeCurrentAppWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeCurrentAppWithCompletion:(void (^)(MTRApplicationLauncherClusterApplicationEPStruct *value, NSError *error)) completion;
```
