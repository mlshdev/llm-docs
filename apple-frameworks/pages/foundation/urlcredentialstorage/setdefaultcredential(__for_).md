> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/setdefaultcredential(_:for:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/setdefaultcredential(_:for:))

# setDefaultCredential(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the default credential for a specified protection space.

## Declaration

```swift
func setDefaultCredential(_ credential: URLCredential, for space: URLProtectionSpace)
```

## Parameters

- `credential`: The URL credential to set as the default for `space`. If the receiver does not contain `credential` in the specified protection space it will be added.
- `space`: The protection space whose default credential is being set.

<a id="Discussion"></a>

## Discussion

If you override this method, also override [setDefaultCredential(\_:for:task:)](setdefaultcredential%28__for_task_%29.md).

## See Also

### Getting and setting default credentials

- [defaultCredential(for:)](defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [getDefaultCredential(for:task:completionHandler:)](getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential(\_:for:task:)](setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.

# setDefaultCredential:forProtectionSpace: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the default credential for a specified protection space.

## Declaration

```objectivec
- (void) setDefaultCredential:(NSURLCredential *) credential forProtectionSpace:(NSURLProtectionSpace *) space;
```

## Parameters

- `credential`: The URL credential to set as the default for `space`. If the receiver does not contain `credential` in the specified protection space it will be added.
- `space`: The protection space whose default credential is being set.

<a id="Discussion"></a>

## Discussion

If you override this method, also override [setDefaultCredential:forProtectionSpace:task:](setdefaultcredential%28__for_task_%29.md).

## See Also

### Getting and setting default credentials

- [defaultCredentialForProtectionSpace:](defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [getDefaultCredentialForProtectionSpace:task:completionHandler:](getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential:forProtectionSpace:task:](setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.
