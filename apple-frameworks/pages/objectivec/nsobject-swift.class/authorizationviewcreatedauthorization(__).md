> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/authorizationviewcreatedauthorization(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/authorizationviewcreatedauthorization(_:))

# authorizationViewCreatedAuthorization(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate to indicate the authorization object has been created or changed.

## Declaration

```swift
func authorizationViewCreatedAuthorization(_ view: SFAuthorizationView!)
```

<a id="discussion"></a>

## Discussion

If you have saved a copy of the authorization object for your own purposes, you should discard it and call [authorization()](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/authorization%28%29) for a new authorization object.

# authorizationViewCreatedAuthorization: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sent to the delegate to indicate the authorization object has been created or changed.

## Declaration

```objectivec
- (void) authorizationViewCreatedAuthorization:(SFAuthorizationView *) view;
```

<a id="discussion"></a>

## Discussion

If you have saved a copy of the authorization object for your own purposes, you should discard it and call [authorization](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/authorization%28%29) for a new authorization object.
