> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/url](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionauthorizationrequest/url)

# url (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

The complete URL of the request, including all components.

## Declaration

```swift
var url: URL { get }
```

## See Also

### Parsing the Request

- [httpHeaders](httpheaders.md): The HTTP headers of the request.
- [httpBody](httpbody.md): The HTTP body of the request.
- [realm](realm.md): The realm to which the request applies.
- [requestedOperation](requestedoperation.md): The operation for the extension to execute.
- [ASAuthorizationProviderAuthorizationOperation](../asauthorizationproviderauthorizationoperation.md): A type that represents an authorization operation.
- [authorizationOptions](authorizationoptions.md): A collection of options associated with the request.

# url (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

The complete URL of the request, including all components.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * url;
```

## See Also

### Parsing the Request

- [httpHeaders](httpheaders.md): The HTTP headers of the request.
- [httpBody](httpbody.md): The HTTP body of the request.
- [realm](realm.md): The realm to which the request applies.
- [requestedOperation](requestedoperation.md): The operation for the extension to execute.
- [ASAuthorizationProviderAuthorizationOperation](../asauthorizationproviderauthorizationoperation.md): A type that represents an authorization operation.
- [authorizationOptions](authorizationoptions.md): A collection of options associated with the request.
