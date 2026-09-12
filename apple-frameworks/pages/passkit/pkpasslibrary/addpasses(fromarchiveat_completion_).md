> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/addpasses(fromarchiveat:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/addpasses(fromarchiveat:completion:))

# addPasses(fromArchiveAt:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

## Declaration

```swift
func addPasses(fromArchiveAt passesArchiveFileURL: URL, completion completionHandler: @escaping @Sendable (PKPassLibraryAddPassesStatus) -> Void)
```

```swift
func addPasses(fromArchiveAt passesArchiveFileURL: URL) async -> PKPassLibraryAddPassesStatus
```

# addPassesFromArchiveAtFileURL:completionHandler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) addPassesFromArchiveAtFileURL:(NSURL *) passesArchiveFileURL completionHandler:(void (^)(PKPassLibraryAddPassesStatus )) completionHandler;
```
