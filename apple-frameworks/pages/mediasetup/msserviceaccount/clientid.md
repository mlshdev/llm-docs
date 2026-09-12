> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/msserviceaccount/clientid](https://developer.apple.com/documentation/mediasetup/msserviceaccount/clientid)

# clientID (Swift)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A user identifier for the token request.

## Declaration

```swift
var clientID: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The Media Setup framework uses the `clientID` to create a token request. You can choose the identifier format, but the identifier must be unique to the current account. You can provide a new identifier each time the user begins HomePod setup.

## See Also

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientSecret](clientsecret.md): A string that authenticates the user’s setup request.
- [configurationURL](configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.

# clientID (Objective-C)

**Framework:** Media Setup  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A user identifier for the token request.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * clientID;
```

<a id="Discussion"></a>

## Discussion

The Media Setup framework uses the `clientID` to create a token request. You can choose the identifier format, but the identifier must be unique to the current account. You can provide a new identifier each time the user begins HomePod setup.

## See Also

### Providing Parameters for an OAuth Request

- [authorizationTokenURL](authorizationtokenurl.md): A URL the system can access to request an OAuth token for the user’s HomePod speakers.
- [authorizationScope](authorizationscope.md): A list of permissions for the token request.
- [clientSecret](clientsecret.md): A string that authenticates the user’s setup request.
- [configurationURL](configurationurl.md): The path to access the configuration endpoint of your streaming media service for HomePod.
