> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpasswordprovider/createrequest()](https://developer.apple.com/documentation/authenticationservices/asauthorizationpasswordprovider/createrequest())

# createRequest() (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new password authorization request.

## Declaration

```swift
func createRequest() -> ASAuthorizationPasswordRequest
```

<a id="return-value"></a>

## Return Value

A password authorization request that you can execute with an instance of [ASAuthorizationController](../asauthorizationcontroller.md).

## See Also

### Creating Requests

- [ASAuthorizationPasswordRequest](../asauthorizationpasswordrequest.md): An authorization request that uses credentials stored in the keychain.

# createRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new password authorization request.

## Declaration

```objectivec
- (ASAuthorizationPasswordRequest *) createRequest;
```

<a id="return-value"></a>

## Return Value

A password authorization request that you can execute with an instance of [ASAuthorizationController](../asauthorizationcontroller.md).

## See Also

### Creating Requests

- [ASAuthorizationPasswordRequest](../asauthorizationpasswordrequest.md): An authorization request that uses credentials stored in the keychain.
