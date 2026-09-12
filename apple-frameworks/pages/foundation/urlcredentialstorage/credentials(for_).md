> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/credentials(for:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/credentials(for:))

# credentials(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing the credentials for the specified protection space.

## Declaration

```swift
func credentials(for space: URLProtectionSpace) -> [String : URLCredential]?
```

## Parameters

- `space`: The protection space whose credentials you want to retrieve.

<a id="return-value"></a>

## Return Value

A dictionary containing the credentials for the specified protection space. The dictionary’s keys are user name strings, and each value is the corresponding [URLCredential](../urlcredential.md).

<a id="Discussion"></a>

## Discussion

If you override this method, also override [getCredentials(for:task:completionHandler:)](getcredentials%28for_task_completionhandler_%29.md).

## See Also

### Retrieving credentials

- [allCredentials](allcredentials.md): The credentials for all available protection spaces.
- [getCredentials(for:task:completionHandler:)](getcredentials%28for_task_completionhandler_%29.md): Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.

# credentialsForProtectionSpace: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing the credentials for the specified protection space.

## Declaration

```objectivec
- (NSDictionary<NSString *,NSURLCredential *> *) credentialsForProtectionSpace:(NSURLProtectionSpace *) space;
```

## Parameters

- `space`: The protection space whose credentials you want to retrieve.

<a id="return-value"></a>

## Return Value

A dictionary containing the credentials for the specified protection space. The dictionary’s keys are user name strings, and each value is the corresponding [NSURLCredential](../urlcredential.md).

<a id="Discussion"></a>

## Discussion

If you override this method, also override [getCredentialsForProtectionSpace:task:completionHandler:](getcredentials%28for_task_completionhandler_%29.md).

## See Also

### Retrieving credentials

- [allCredentials](allcredentials.md): The credentials for all available protection spaces.
- [getCredentialsForProtectionSpace:task:completionHandler:](getcredentials%28for_task_completionhandler_%29.md): Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.
