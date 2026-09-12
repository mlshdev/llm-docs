> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:didcancel:)-1wqin](https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:didcancel:)-1wqin)

# resourceLoader(\_:didCancel:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that a prior authentication challenge has been cancelled.

## Declaration

```swift
optional func resourceLoader(_ resourceLoader: AVAssetResourceLoader, didCancel authenticationChallenge: URLAuthenticationChallenge)
```

## Parameters

- `resourceLoader`: The resource loader.
- `authenticationChallenge`: The authentication challenge that has been cancelled.

## See Also

### Processing authentication challenges

- [resourceLoader(\_:shouldWaitForResponseTo:)](resourceloader%28__shouldwaitforresponseto_%29.md): Tells the delegate that assistance is required of the application to respond to an authentication challenge.

# resourceLoader:didCancelAuthenticationChallenge: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that a prior authentication challenge has been cancelled.

## Declaration

```objectivec
- (void) resourceLoader:(AVAssetResourceLoader *) resourceLoader didCancelAuthenticationChallenge:(NSURLAuthenticationChallenge *) authenticationChallenge;
```

## Parameters

- `resourceLoader`: The resource loader.
- `authenticationChallenge`: The authentication challenge that has been cancelled.

## See Also

### Processing authentication challenges

- [resourceLoader:shouldWaitForResponseToAuthenticationChallenge:](resourceloader%28__shouldwaitforresponseto_%29.md): Tells the delegate that assistance is required of the application to respond to an authentication challenge.
