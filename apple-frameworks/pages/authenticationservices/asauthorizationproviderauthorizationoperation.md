> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderauthorizationoperation](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderauthorizationoperation)

# ASAuthorizationProviderAuthorizationOperation (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

A type that represents an authorization operation.

## Declaration

```swift
struct ASAuthorizationProviderAuthorizationOperation
```

## Topics

### Handling Configuration Removal

- [configurationRemoved](asauthorizationproviderauthorizationoperation/configurationremoved.md): An operation the system invokes when the extension configuration is removed from the system.

### Creating Operations

- [init(\_:)](asauthorizationproviderauthorizationoperation/init%28__%29.md): Creates an authorization operation using the specified string value.
- [init(rawValue:)](asauthorizationproviderauthorizationoperation/init%28rawvalue_%29.md): Creates an authorization operation using the specified raw string value.

### Type Properties

- [directRequest](asauthorizationproviderauthorizationoperation/directrequest.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parsing the Request

- [url](asauthorizationproviderextensionauthorizationrequest/url.md): The complete URL of the request, including all components.
- [httpHeaders](asauthorizationproviderextensionauthorizationrequest/httpheaders.md): The HTTP headers of the request.
- [httpBody](asauthorizationproviderextensionauthorizationrequest/httpbody.md): The HTTP body of the request.
- [realm](asauthorizationproviderextensionauthorizationrequest/realm.md): The realm to which the request applies.
- [requestedOperation](asauthorizationproviderextensionauthorizationrequest/requestedoperation.md): The operation for the extension to execute.
- [authorizationOptions](asauthorizationproviderextensionauthorizationrequest/authorizationoptions.md): A collection of options associated with the request.

# ASAuthorizationProviderAuthorizationOperation (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

A type that represents an authorization operation.

## Declaration

```objectivec
typedef NSString * ASAuthorizationProviderAuthorizationOperation;
```

## Topics

### Handling Configuration Removal

- [ASAuthorizationProviderAuthorizationOperationConfigurationRemoved](asauthorizationproviderauthorizationoperation/configurationremoved.md): An operation the system invokes when the extension configuration is removed from the system.

### Type Properties

- [ASAuthorizationProviderAuthorizationOperationDirectRequest](asauthorizationproviderauthorizationoperation/directrequest.md)

## See Also

### Parsing the Request

- [url](asauthorizationproviderextensionauthorizationrequest/url.md): The complete URL of the request, including all components.
- [httpHeaders](asauthorizationproviderextensionauthorizationrequest/httpheaders.md): The HTTP headers of the request.
- [httpBody](asauthorizationproviderextensionauthorizationrequest/httpbody.md): The HTTP body of the request.
- [realm](asauthorizationproviderextensionauthorizationrequest/realm.md): The realm to which the request applies.
- [requestedOperation](asauthorizationproviderextensionauthorizationrequest/requestedoperation.md): The operation for the extension to execute.
- [authorizationOptions](asauthorizationproviderextensionauthorizationrequest/authorizationoptions.md): A collection of options associated with the request.
