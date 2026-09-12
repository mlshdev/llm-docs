> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/defaultcredential(for:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/defaultcredential(for:))

# defaultCredential(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default credential for the specified protection space.

## Declaration

```swift
func defaultCredential(for space: URLProtectionSpace) -> URLCredential?
```

## Parameters

- `space`: The URL protection space of interest.

<a id="return-value"></a>

## Return Value

The default credential for `space` or `nil` if no default has been set.

<a id="Discussion"></a>

## Discussion

If you override this method, also override [getDefaultCredential(for:task:completionHandler:)](getdefaultcredential%28for_task_completionhandler_%29.md).

## See Also

### Getting and setting default credentials

- [getDefaultCredential(for:task:completionHandler:)](getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential(\_:for:)](setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.
- [setDefaultCredential(\_:for:task:)](setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.

# defaultCredentialForProtectionSpace: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default credential for the specified protection space.

## Declaration

```objectivec
- (NSURLCredential *) defaultCredentialForProtectionSpace:(NSURLProtectionSpace *) space;
```

## Parameters

- `space`: The URL protection space of interest.

<a id="return-value"></a>

## Return Value

The default credential for `space` or `nil` if no default has been set.

<a id="Discussion"></a>

## Discussion

If you override this method, also override [getDefaultCredentialForProtectionSpace:task:completionHandler:](getdefaultcredential%28for_task_completionhandler_%29.md).

## See Also

### Getting and setting default credentials

- [getDefaultCredentialForProtectionSpace:task:completionHandler:](getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential:forProtectionSpace:](setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.
- [setDefaultCredential:forProtectionSpace:task:](setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.
