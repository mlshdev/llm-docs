> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostbackresponse/error](https://developer.apple.com/documentation/storekittest/skadtestpostbackresponse/error)

# error (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An error the test session reports if sending a test postbacks fails.

## Declaration

```swift
var error: (any Error)? { get set }
```

<a id="discussion"></a>

## Discussion

If the test session encounters an error when attempting to send the test postback with [flushPostbacks(responses:)](../skadtestsession/flushpostbacks%28responses_%29.md), this property contains an [SKAdTestError](../skadtesterror.md) error.

## See Also

### Getting Postback Responses

- [didSucceed](didsucceed.md): A Boolean value that indicates whether the system successfully delivered the test postback.
- [httpResponse](httpresponse.md): The HTTP response from the server receiving the test postback.

# error (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An error the test session reports if sending a test postbacks fails.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSError * error;
```

<a id="discussion"></a>

## Discussion

If the test session encounters an error when attempting to send the test postback with [flushPostbacksWithResponses:](../skadtestsession/flushpostbacks%28responses_%29.md), this property contains an [SKAdTestError](../skadtesterror.md) error.

## See Also

### Getting Postback Responses

- [didSucceed](didsucceed.md): A Boolean value that indicates whether the system successfully delivered the test postback.
- [httpResponse](httpresponse.md): The HTTP response from the server receiving the test postback.
