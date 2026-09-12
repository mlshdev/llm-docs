> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationrequest/provider](https://developer.apple.com/documentation/authenticationservices/asauthorizationrequest/provider)

# provider (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The provider servicing the request.

## Declaration

```swift
var provider: any ASAuthorizationProvider { get }
```

## See Also

### Inspecting the Provider

- [ASAuthorizationProvider](../asauthorizationprovider.md): An interface that authorization providers must implement.

# provider (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The provider servicing the request.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) id<ASAuthorizationProvider> provider;
```

## See Also

### Inspecting the Provider

- [ASAuthorizationProvider](../asauthorizationprovider.md): An interface that authorization providers must implement.
