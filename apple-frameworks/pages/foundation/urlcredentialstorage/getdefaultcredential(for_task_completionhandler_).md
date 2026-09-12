> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/getdefaultcredential(for:task:completionhandler:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/getdefaultcredential(for:task:completionhandler:))

# getDefaultCredential(for:task:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.

## Declaration

```swift
func getDefaultCredential(for space: URLProtectionSpace, task: URLSessionTask, completionHandler: @escaping @Sendable (URLCredential?) -> Void)
```

```swift
func defaultCredential(for space: URLProtectionSpace, task: URLSessionTask) async -> URLCredential?
```

## Parameters

- `space`: The protection space of interest.
- `task`: The task seeking to use the protection space
- `completionHandler`: A completion handler that receives the default credential as its argument, or `nil` if there is no default credential for this combination of protection space and task.

## See Also

### Getting and setting default credentials

- [defaultCredential(for:)](defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [setDefaultCredential(\_:for:)](setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.
- [setDefaultCredential(\_:for:task:)](setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.

# getDefaultCredentialForProtectionSpace:task:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.

## Declaration

```objectivec
- (void) getDefaultCredentialForProtectionSpace:(NSURLProtectionSpace *) space task:(NSURLSessionTask *) task completionHandler:(void (^)(NSURLCredential *credential)) completionHandler;
```

## Parameters

- `space`: The protection space of interest.
- `task`: The task seeking to use the protection space
- `completionHandler`: A completion handler that receives the default credential as its argument, or `nil` if there is no default credential for this combination of protection space and task.

## See Also

### Getting and setting default credentials

- [defaultCredentialForProtectionSpace:](defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [setDefaultCredential:forProtectionSpace:](setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.
- [setDefaultCredential:forProtectionSpace:task:](setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.
