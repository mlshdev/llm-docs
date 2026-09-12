> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterotasoftwareupdaterequestor-9n6nb/announceotaprovider(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterotasoftwareupdaterequestor-9n6nb/announceotaprovider(with:completion:))

# announceOTAProvider(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func announceOTAProvider(with params: MTROTASoftwareUpdateRequestorClusterAnnounceOTAProviderParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func announceOTAProvider(with params: MTROTASoftwareUpdateRequestorClusterAnnounceOTAProviderParams) async throws
```

# announceOTAProviderWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) announceOTAProviderWithParams:(MTROTASoftwareUpdateRequestorClusterAnnounceOTAProviderParams *) params completion:(MTRStatusCompletion) completion;
```
