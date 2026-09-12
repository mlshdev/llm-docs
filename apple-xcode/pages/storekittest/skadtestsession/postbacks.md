> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestsession/postbacks](https://developer.apple.com/documentation/storekittest/skadtestsession/postbacks)

# postbacks (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An array of test postbacks you set in the testing environment.

## Declaration

```swift
var postbacks: [SKAdTestPostback] { get }
```

<a id="discussion"></a>

## Discussion

Use this property to check that your updates to the test postbacks, such as conversion value updates, are working as expected. See [setPostbacks(\_:)](setpostbacks%28__%29.md) for information on adding postbacks to the test session.

## See Also

### Adding and sending postbacks

- [setPostbacks(\_:)](setpostbacks%28__%29.md): Add test postbacks to the test session.
- [flushPostbacks(responses:)](flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.
- [SKANTestPostbackResponseHandler](../skantestpostbackresponsehandler.md): A type that represents the test postback response handler.

# postbacks (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

An array of test postbacks you set in the testing environment.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<SKAdTestPostback *> * postbacks;
```

<a id="discussion"></a>

## Discussion

Use this property to check that your updates to the test postbacks, such as conversion value updates, are working as expected. See [setPostbacks:error:](setpostbacks%28__%29.md) for information on adding postbacks to the test session.

## See Also

### Adding and sending postbacks

- [setPostbacks:error:](setpostbacks%28__%29.md): Add test postbacks to the test session.
- [flushPostbacksWithResponses:](flushpostbacks%28responses_%29.md): Sends the test postbacks and handles the responses.
- [SKANTestPostbackResponseHandler](../skantestpostbackresponsehandler.md): A type that represents the test postback response handler.
