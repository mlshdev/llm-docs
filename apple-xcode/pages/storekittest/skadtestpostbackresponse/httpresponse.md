> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestpostbackresponse/httpresponse](https://developer.apple.com/documentation/storekittest/skadtestpostbackresponse/httpresponse)

# httpResponse (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The HTTP response from the server receiving the test postback.

## Declaration

```swift
var httpResponse: HTTPURLResponse? { get set }
```

<a id="discussion"></a>

## Discussion

This property contains your server’s full HTTP response.

## See Also

### Getting Postback Responses

- [didSucceed](didsucceed.md): A Boolean value that indicates whether the system successfully delivered the test postback.
- [error](error.md): An error the test session reports if sending a test postbacks fails.

# httpResponse (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The HTTP response from the server receiving the test postback.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSHTTPURLResponse * httpResponse;
```

<a id="discussion"></a>

## Discussion

This property contains your server’s full HTTP response.

## See Also

### Getting Postback Responses

- [didSucceed](didsucceed.md): A Boolean value that indicates whether the system successfully delivered the test postback.
- [error](error.md): An error the test session reports if sending a test postbacks fails.
