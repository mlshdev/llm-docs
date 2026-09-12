> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skantestpostbackresponsehandler](https://developer.apple.com/documentation/storekittest/skantestpostbackresponsehandler)

# SKANTestPostbackResponseHandler (Swift)

**Framework:** StoreKit Test  
**Kind:** Type Alias  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A type that represents the test postback response handler.

## Declaration

```swift
typealias SKANTestPostbackResponseHandler = ([String : SKAdTestPostbackResponse]?, (any Error)?) -> Void
```

<a id="discussion"></a>

## Discussion

The system calls the response handler and provides one of two values:

- A dictionary with a key that identifies a test postback using its [transactionIdentifier](skadtestpostback/transactionidentifier.md) value, and the associated value of the response, [SKAdTestPostbackResponse](skadtestpostbackresponse.md) that you receive when calling [flushPostbacks(responses:)](skadtestsession/flushpostbacks%28responses_%29.md)
- An [SKAdTestError](skadtesterror.md) error

## See Also

### Adding and sending postbacks

- [setPostbacks(\_:)](skadtestsession/setpostbacks%28__%29.md): Add test postbacks to the test session.
- [postbacks](skadtestsession/postbacks.md): An array of test postbacks you set in the testing environment.
- [flushPostbacks(responses:)](skadtestsession/flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.

# SKANTestPostbackResponseHandler (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Type Alias  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A type that represents the test postback response handler.

## Declaration

```objectivec
typedef void (^)(NSDictionary<NSString *,SKAdTestPostbackResponse *> *, NSError *) SKANTestPostbackResponseHandler;
```

<a id="discussion"></a>

## Discussion

The system calls the response handler and provides one of two values:

- A dictionary with a key that identifies a test postback using its [transactionIdentifier](skadtestpostback/transactionidentifier.md) value, and the associated value of the response, [SKAdTestPostbackResponse](skadtestpostbackresponse.md) that you receive when calling [flushPostbacksWithResponses:](skadtestsession/flushpostbacks%28responses_%29.md)
- An [SKAdTestError](skadtesterror.md) error

## See Also

### Adding and sending postbacks

- [setPostbacks:error:](skadtestsession/setpostbacks%28__%29.md): Add test postbacks to the test session.
- [postbacks](skadtestsession/postbacks.md): An array of test postbacks you set in the testing environment.
- [flushPostbacksWithResponses:](skadtestsession/flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.
