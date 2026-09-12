> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/setdefaultcredential(_:for:task:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/setdefaultcredential(_:for:task:))

# setDefaultCredential(\_:for:task:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the default credential for a given protection space, which is being accessed by the given task.

## Declaration

```swift
func setDefaultCredential(_ credential: URLCredential, for protectionSpace: URLProtectionSpace, task: URLSessionTask)
```

## Parameters

- `credential`: The URL credential to set as the default for the protection space. If the receiver does not contain `credential` in the specified protection space it will be added.
- `protectionSpace`: The protection space whose default credential is being set.
- `task`: The task accessing the specified protection space. Subclasses of [URLCredentialStorage](../urlcredentialstorage.md) may use the request URL or other properties of this task to affect how the default credential is stored.

## See Also

### Getting and setting default credentials

- [defaultCredential(for:)](defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [getDefaultCredential(for:task:completionHandler:)](getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential(\_:for:)](setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.

# setDefaultCredential:forProtectionSpace:task: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the default credential for a given protection space, which is being accessed by the given task.

## Declaration

```objectivec
- (void) setDefaultCredential:(NSURLCredential *) credential forProtectionSpace:(NSURLProtectionSpace *) protectionSpace task:(NSURLSessionTask *) task;
```

## Parameters

- `credential`: The URL credential to set as the default for the protection space. If the receiver does not contain `credential` in the specified protection space it will be added.
- `protectionSpace`: The protection space whose default credential is being set.
- `task`: The task accessing the specified protection space. Subclasses of [NSURLCredentialStorage](../urlcredentialstorage.md) may use the request URL or other properties of this task to affect how the default credential is stored.

## See Also

### Getting and setting default credentials

- [defaultCredentialForProtectionSpace:](defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [getDefaultCredentialForProtectionSpace:task:completionHandler:](getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential:forProtectionSpace:](setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.
