> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/authenticationtoken](https://developer.apple.com/documentation/passkit/pkpass/authenticationtoken)

# authenticationToken (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The token for authenticating update requests.

## Declaration

```swift
var authenticationToken: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to store an authentication token for your web service. When the device requests an updated copy of the pass, the request’s header includes this authorization token. Use this token to verify that the request is from a valid device and not from an unauthorized source.

Don’t change the authentication token during an update.

## See Also

### Getting the web service information

- [webServiceURL](webserviceurl.md): The URL for the web service.

# authenticationToken (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The token for authenticating update requests.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * authenticationToken;
```

<a id="Discussion"></a>

## Discussion

Use this property to store an authentication token for your web service. When the device requests an updated copy of the pass, the request’s header includes this authorization token. Use this token to verify that the request is from a valid device and not from an unauthorized source.

Don’t change the authentication token during an update.

## See Also

### Getting the web service information

- [webServiceURL](webserviceurl.md): The URL for the web service.
