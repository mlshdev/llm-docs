> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/init(authorizationrequests:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/init(authorizationrequests:))

# init(authorizationRequests:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a controller from a collection of authorization requests.

## Declaration

```swift
init(authorizationRequests: [ASAuthorizationRequest])
```

## Parameters

- `authorizationRequests`: One or more authorization requests that this controller can perform.

# initWithAuthorizationRequests: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a controller from a collection of authorization requests.

## Declaration

```objectivec
- (instancetype) initWithAuthorizationRequests:(NSArray<ASAuthorizationRequest *> *) authorizationRequests;
```

## Parameters

- `authorizationRequests`: One or more authorization requests that this controller can perform.
