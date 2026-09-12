> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msserviceaccount/configurationurl](https://developer.apple.com/documentation/mediasetup/msserviceaccount/configurationurl)

# configurationURL (Swift)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The path to access the configuration endpoint of your streaming media service for HomePod.

## Declaration

```swift
var configurationURL: URL? { get set }
```

## See Also

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientID](clientid.md): A user identifier for the token request.
- [clientSecret](clientsecret.md): A string that authenticates the user’s setup request.

# configurationURL (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The path to access the configuration endpoint of your streaming media service for HomePod.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSURL * configurationURL;
```

## See Also

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientID](clientid.md): A user identifier for the token request.
- [clientSecret](clientsecret.md): A string that authenticates the user’s setup request.
