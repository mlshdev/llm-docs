> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/addpasses(fromarchivedata:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/addpasses(fromarchivedata:completion:))

# addPasses(fromArchiveData:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

## Declaration

```swift
func addPasses(fromArchiveData passesArchiveData: Data, completion completionHandler: @escaping @Sendable (PKPassLibraryAddPassesStatus) -> Void)
```

```swift
func addPasses(fromArchiveData passesArchiveData: Data) async -> PKPassLibraryAddPassesStatus
```

# addPassesFromArchiveWithData:completionHandler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) addPassesFromArchiveWithData:(NSData *) passesArchiveData completionHandler:(void (^)(PKPassLibraryAddPassesStatus )) completionHandler;
```
