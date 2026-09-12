> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/addpasses(data:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/addpasses(data:completion:))

# addPasses(data:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

## Declaration

```swift
func addPasses(data passesData: [Data], completion completionHandler: @escaping @Sendable (PKPassLibraryAddPassesStatus) -> Void)
```

```swift
func addPasses(data passesData: [Data]) async -> PKPassLibraryAddPassesStatus
```

# addPassesWithData:completionHandler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) addPassesWithData:(NSArray<NSData *> *) passesData completionHandler:(void (^)(PKPassLibraryAddPassesStatus )) completionHandler;
```
