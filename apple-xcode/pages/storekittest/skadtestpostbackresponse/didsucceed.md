> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostbackresponse/didsucceed](https://developer.apple.com/documentation/storekittest/skadtestpostbackresponse/didsucceed)

# didSucceed (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A Boolean value that indicates whether the system successfully delivered the test postback.

## Declaration

```swift
var didSucceed: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The value is `true` if the system successfully delivered the test postback and received an HTTP 200 response.

## See Also

### Getting Postback Responses

- [httpResponse](httpresponse.md): The HTTP response from the server receiving the test postback.
- [error](error.md): An error the test session reports if sending a test postbacks fails.

# didSucceed (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A Boolean value that indicates whether the system successfully delivered the test postback.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL didSucceed;
```

<a id="discussion"></a>

## Discussion

The value is `true` if the system successfully delivered the test postback and received an HTTP 200 response.

## See Also

### Getting Postback Responses

- [httpResponse](httpresponse.md): The HTTP response from the server receiving the test postback.
- [error](error.md): An error the test session reports if sending a test postbacks fails.
