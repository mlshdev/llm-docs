> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostbackresponse](https://developer.apple.com/documentation/storekittest/skadtestpostbackresponse)

# SKAdTestPostbackResponse (Swift)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The status and error information for a postback that the system sends in the testing environment.

## Declaration

```swift
class SKAdTestPostbackResponse
```

## Topics

### Getting Postback Responses

- [didSucceed](skadtestpostbackresponse/didsucceed.md): A Boolean value that indicates whether the system successfully delivered the test postback.
- [httpResponse](skadtestpostbackresponse/httpresponse.md): The HTTP response from the server receiving the test postback.
- [error](skadtestpostbackresponse/error.md): An error the test session reports if sending a test postbacks fails.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Ad impression and postback testing

- [Testing and validating ad impression signatures and postbacks for SKAdNetwork](testing-and-validating-ad-impression-signatures-and-postbacks-for-skadnetwork.md): Validate your ad impressions and test your postbacks by creating unit tests using the StoreKit Test framework.
- [SKAdTestSession](skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostback](skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackVersion](skadtestpostbackversion.md): A constant that indicates the postback version.

# SKAdTestPostbackResponse (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The status and error information for a postback that the system sends in the testing environment.

## Declaration

```objectivec
@interface SKAdTestPostbackResponse : NSObject
```

## Topics

### Getting Postback Responses

- [didSucceed](skadtestpostbackresponse/didsucceed.md): A Boolean value that indicates whether the system successfully delivered the test postback.
- [httpResponse](skadtestpostbackresponse/httpresponse.md): The HTTP response from the server receiving the test postback.
- [error](skadtestpostbackresponse/error.md): An error the test session reports if sending a test postbacks fails.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Ad impression and postback testing

- [SKAdTestSession](skadtestsession.md): The class you use to test ad impressions and postbacks in Xcode.
- [SKAdTestPostback](skadtestpostback.md): A test postback that contains ad conversion information in the testing environment.
- [SKAdTestPostbackVersion](skadtestpostbackversion.md): A constant that indicates the postback version.
