> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msserviceaccount/authorizationtokenurl](https://developer.apple.com/documentation/mediasetup/msserviceaccount/authorizationtokenurl)

# authorizationTokenURL (Swift)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A URL the system can access to request an OAuth token for the user’s HomePod speakers.

## Declaration

```swift
var authorizationTokenURL: URL? { get set }
```

## See Also

### Providing Parameters for an OAuth Request

- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientID](clientid.md): A user identifier for the token request.
- [clientSecret](clientsecret.md): A string that authenticates the user’s setup request.
- [configurationURL](configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.

# authorizationTokenURL (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A URL the system can access to request an OAuth token for the user’s HomePod speakers.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSURL * authorizationTokenURL;
```

## See Also

### Providing Parameters for an OAuth Request

- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientID](clientid.md): A user identifier for the token request.
- [clientSecret](clientsecret.md): A string that authenticates the user’s setup request.
- [configurationURL](configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.
