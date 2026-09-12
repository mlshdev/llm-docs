> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/httpbody](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/httpbody)

# httpBody (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

The HTTP body of the request.

## Declaration

```swift
var httpBody: Data { get }
```

## See Also

### Parsing the Request

- [url](url.md): The complete URL of the request, including all components.
- [httpHeaders](httpheaders.md): The HTTP headers of the request.
- [realm](realm.md): The realm to which the request applies.
- [requestedOperation](requestedoperation.md): The operation for the extension to execute.
- [ASAuthorizationProviderAuthorizationOperation](../asauthorizationproviderauthorizationoperation.md): A type that represents an authorization operation.
- [authorizationOptions](authorizationoptions.md): A collection of options associated with the request.

# httpBody (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

The HTTP body of the request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * httpBody;
```

## See Also

### Parsing the Request

- [url](url.md): The complete URL of the request, including all components.
- [httpHeaders](httpheaders.md): The HTTP headers of the request.
- [realm](realm.md): The realm to which the request applies.
- [requestedOperation](requestedoperation.md): The operation for the extension to execute.
- [ASAuthorizationProviderAuthorizationOperation](../asauthorizationproviderauthorizationoperation.md): A type that represents an authorization operation.
- [authorizationOptions](authorizationoptions.md): A collection of options associated with the request.
