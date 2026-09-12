> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationcontroller/requestoptions](https://developer.apple.com/documentation/authenticationservices/asauthorizationcontroller/requestoptions)

# ASAuthorizationController.RequestOptions (Swift)

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Options that modify how a controller performs authorization requests.

## Declaration

```swift
struct RequestOptions
```

## Topics

### Initializers

- [init(rawValue:)](requestoptions/init%28rawvalue_%29.md)

### Constants

- [preferImmediatelyAvailableCredentials](requestoptions/preferimmediatelyavailablecredentials.md): Tells the authorization controller to prefer credentials that are immediately available on the local device.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Executing requests

- [performRequests()](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequests(options:)](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests()](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel()](cancel%28%29.md): Cancels any active authorization requests.

# ASAuthorizationControllerRequestOptions (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Options that modify how a controller performs authorization requests.

## Declaration

```objectivec
enum ASAuthorizationControllerRequestOptions : NSUInteger;
```

## Topics

### Constants

- [ASAuthorizationControllerRequestOptionPreferImmediatelyAvailableCredentials](requestoptions/preferimmediatelyavailablecredentials.md): Tells the authorization controller to prefer credentials that are immediately available on the local device.

## See Also

### Executing requests

- [performRequests](performrequests%28%29.md): Starts the specified authorization flows during controller initialization.
- [performRequestsWithOptions:](performrequests%28options_%29.md): Starts the specified authorization flows during controller initialization.
- [performAutoFillAssistedRequests](performautofillassistedrequests%28%29.md): Initiates the authorization flows for requests that support AutoFill presentation.
- [cancel](cancel%28%29.md): Cancels any active authorization requests.
