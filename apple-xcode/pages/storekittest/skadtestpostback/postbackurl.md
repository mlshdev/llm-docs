> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostback/postbackurl](https://developer.apple.com/documentation/storekittest/skadtestpostback/postbackurl)

# postbackURL (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A URL on your server where the testing environment sends test postbacks.

## Declaration

```swift
var postbackURL: String { get }
```

<a id="discussion"></a>

## Discussion

The testing environment sends the test postback to the [postbackURL](postbackurl.md) when you call [flushPostbacks(responses:)](../skadtestsession/flushpostbacks%28responses_%29.md).

> **Note**

>  Ensure that your test server is running and accepting connections before calling [flushPostbacks(responses:)](../skadtestsession/flushpostbacks%28responses_%29.md).

# postbackURL (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

A URL on your server where the testing environment sends test postbacks.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * postbackURL;
```

<a id="discussion"></a>

## Discussion

The testing environment sends the test postback to the [postbackURL](postbackurl.md) when you call [flushPostbacksWithResponses:](../skadtestsession/flushpostbacks%28responses_%29.md).

> **Note**

>  Ensure that your test server is running and accepting connections before calling [flushPostbacksWithResponses:](../skadtestsession/flushpostbacks%28responses_%29.md).
