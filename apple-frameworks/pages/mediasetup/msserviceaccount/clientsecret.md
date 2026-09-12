> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msserviceaccount/clientsecret](https://developer.apple.com/documentation/mediasetup/msserviceaccount/clientsecret)

# clientSecret (Swift)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A string that authenticates the user’s setup request.

## Declaration

```swift
var clientSecret: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The Media Setup framework uses the `clientSecret` to create a token request. Hashed passwords are acceptable, but plaintext passwords are not.

## See Also

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientID](clientid.md): A user identifier for the token request.
- [configurationURL](configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.

# clientSecret (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A string that authenticates the user’s setup request.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * clientSecret;
```

<a id="Discussion"></a>

## Discussion

The Media Setup framework uses the `clientSecret` to create a token request. Hashed passwords are acceptable, but plaintext passwords are not.

## See Also

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientID](clientid.md): A user identifier for the token request.
- [configurationURL](configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.
