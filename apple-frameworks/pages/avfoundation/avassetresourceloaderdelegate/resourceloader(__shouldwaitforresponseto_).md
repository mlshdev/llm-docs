> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:shouldwaitforresponseto:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:shouldwaitforresponseto:))

# resourceLoader(\_:shouldWaitForResponseTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that assistance is required of the application to respond to an authentication challenge.

## Declaration

```swift
optional func resourceLoader(_ resourceLoader: AVAssetResourceLoader, shouldWaitForResponseTo authenticationChallenge: URLAuthenticationChallenge) -> Bool
```

## Parameters

- `resourceLoader`: The resource loader.
- `authenticationChallenge`: The authentication challenge.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the resource loader should wait for a response to the authentication challenge; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Delegates receive this message when assistance is required of the application to respond to an authentication challenge.

Return [true](https://developer.apple.com/documentation/swift/true) if you expect a response either subsequently or immediately to the authenticationChallenger object’s sender.

If you intend to respond to the authentication challenge after your handling of `resourceLoader:shouldWaitForResponseToAuthenticationChallenge:` returns, you must retain the authenticationChallenge until after your response has been made.

## See Also

### Processing authentication challenges

- [resourceLoader(\_:didCancel:)](resourceloader%28__didcancel_%29-1wqin.md): Informs the delegate that a prior authentication challenge has been cancelled.

# resourceLoader:shouldWaitForResponseToAuthenticationChallenge: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that assistance is required of the application to respond to an authentication challenge.

## Declaration

```objectivec
- (BOOL) resourceLoader:(AVAssetResourceLoader *) resourceLoader shouldWaitForResponseToAuthenticationChallenge:(NSURLAuthenticationChallenge *) authenticationChallenge;
```

## Parameters

- `resourceLoader`: The resource loader.
- `authenticationChallenge`: The authentication challenge.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the resource loader should wait for a response to the authentication challenge; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Delegates receive this message when assistance is required of the application to respond to an authentication challenge.

Return [true](https://developer.apple.com/documentation/swift/true) if you expect a response either subsequently or immediately to the authenticationChallenger object’s sender.

If you intend to respond to the authentication challenge after your handling of `resourceLoader:shouldWaitForResponseToAuthenticationChallenge:` returns, you must retain the authenticationChallenge until after your response has been made.

## See Also

### Processing authentication challenges

- [resourceLoader:didCancelAuthenticationChallenge:](resourceloader%28__didcancel_%29-1wqin.md): Informs the delegate that a prior authentication challenge has been cancelled.
