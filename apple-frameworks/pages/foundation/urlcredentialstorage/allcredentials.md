> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/allcredentials](https://developer.apple.com/documentation/foundation/urlcredentialstorage/allcredentials)

# allCredentials (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credentials for all available protection spaces.

## Declaration

```swift
var allCredentials: [URLProtectionSpace : [String : URLCredential]] { get }
```

<a id="Discussion"></a>

## Discussion

The dictionary has keys corresponding to the [URLProtectionSpace](../urlprotectionspace.md) instances. The values are dictionaries where the keys are user name strings, and each value is the corresponding [URLCredential](../urlcredential.md) instances.

## See Also

### Retrieving credentials

- [credentials(for:)](credentials%28for_%29.md): Returns a dictionary containing the credentials for the specified protection space.
- [getCredentials(for:task:completionHandler:)](getcredentials%28for_task_completionhandler_%29.md): Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.

# allCredentials (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The credentials for all available protection spaces.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSURLProtectionSpace *,NSDictionary<NSString *,NSURLCredential *> *> * allCredentials;
```

<a id="Discussion"></a>

## Discussion

The dictionary has keys corresponding to the [NSURLProtectionSpace](../urlprotectionspace.md) instances. The values are dictionaries where the keys are user name strings, and each value is the corresponding [NSURLCredential](../urlcredential.md) instances.

## See Also

### Retrieving credentials

- [credentialsForProtectionSpace:](credentials%28for_%29.md): Returns a dictionary containing the credentials for the specified protection space.
- [getCredentialsForProtectionSpace:task:completionHandler:](getcredentials%28for_task_completionhandler_%29.md): Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.
