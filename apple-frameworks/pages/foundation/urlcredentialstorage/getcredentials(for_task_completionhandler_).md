> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/getcredentials(for:task:completionhandler:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/getcredentials(for:task:completionhandler:))

# getCredentials(for:task:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.

## Declaration

```swift
func getCredentials(for protectionSpace: URLProtectionSpace, task: URLSessionTask, completionHandler: @escaping @Sendable ([String : URLCredential]?) -> Void)
```

```swift
func credentials(for protectionSpace: URLProtectionSpace, task: URLSessionTask) async -> [String : URLCredential]?
```

## Parameters

- `protectionSpace`: The protection space whose credentials you want to retrieve.
- `task`: The task accessing the specified protection space.
- `completionHandler`: A completion handler that receives a single argument with the credentials for the specified protection space and task. The dictionary’s keys are user name strings, and the corresponding value is a [URLCredential](../urlcredential.md). If no credential has been set for this space, the argument to the completion handler is `nil`.

## See Also

### Retrieving credentials

- [allCredentials](allcredentials.md): The credentials for all available protection spaces.
- [credentials(for:)](credentials%28for_%29.md): Returns a dictionary containing the credentials for the specified protection space.

# getCredentialsForProtectionSpace:task:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.

## Declaration

```objectivec
- (void) getCredentialsForProtectionSpace:(NSURLProtectionSpace *) protectionSpace task:(NSURLSessionTask *) task completionHandler:(void (^)(NSDictionary<NSString *,NSURLCredential *> *credentials)) completionHandler;
```

## Parameters

- `protectionSpace`: The protection space whose credentials you want to retrieve.
- `task`: The task accessing the specified protection space.
- `completionHandler`: A completion handler that receives a single argument with the credentials for the specified protection space and task. The dictionary’s keys are user name strings, and the corresponding value is a [NSURLCredential](../urlcredential.md). If no credential has been set for this space, the argument to the completion handler is `nil`.

## See Also

### Retrieving credentials

- [allCredentials](allcredentials.md): The credentials for all available protection spaces.
- [credentialsForProtectionSpace:](credentials%28for_%29.md): Returns a dictionary containing the credentials for the specified protection space.
