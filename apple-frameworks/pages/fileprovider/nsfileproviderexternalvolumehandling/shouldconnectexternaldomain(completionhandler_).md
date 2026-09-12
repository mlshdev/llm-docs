> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderexternalvolumehandling/shouldconnectexternaldomain(completionhandler:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderexternalvolumehandling/shouldconnectexternaldomain(completionhandler:))

# shouldConnectExternalDomain(completionHandler:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Determines whether to connect to a domain from another device.

## Declaration

```swift
func shouldConnectExternalDomain(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func shouldConnectExternalDomain() async throws
```

# shouldConnectExternalDomainWithCompletionHandler: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Determines whether to connect to a domain from another device.

## Declaration

```objectivec
- (void) shouldConnectExternalDomainWithCompletionHandler:(void (^)(NSError *connectionError)) completionHandler;
```
