> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialserviceidentifier/init(identifier:type:)](https://developer.apple.com/documentation/authenticationservices/ascredentialserviceidentifier/init(identifier:type:))

# init(identifier:type:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Initializes a credential service identifier instance.

## Declaration

```swift
init(identifier: String, type: ASCredentialServiceIdentifier.IdentifierType)
```

## Parameters

- `identifier`: The string value for the service identifier.
- `type`: The type that the service identifier string represents.

# initWithIdentifier:type: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Initializes a credential service identifier instance.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier type:(ASCredentialServiceIdentifierType) type;
```

## Parameters

- `identifier`: The string value for the service identifier.
- `type`: The type that the service identifier string represents.
