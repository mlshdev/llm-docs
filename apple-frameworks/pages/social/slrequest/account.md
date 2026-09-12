> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest/account](https://developer.apple.com/documentation/social/slrequest/account)

# account (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Account information used to authenticate the request.

## Declaration

```swift
var account: ACAccount! { get set }
```

<a id="Discussion"></a>

## Discussion

The account is used to sign a request with OAuth1 services or to add an access token for OAuth2 services. By associating the account with the request, the necessary tokens are added automatically. The default value is `nil`.

# account (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Account information used to authenticate the request.

## Declaration

```objectivec
@property (nonatomic, retain) ACAccount * account;
```

<a id="Discussion"></a>

## Discussion

The account is used to sign a request with OAuth1 services or to add an access token for OAuth2 services. By associating the account with the request, the necessary tokens are added automatically. The default value is `nil`.
