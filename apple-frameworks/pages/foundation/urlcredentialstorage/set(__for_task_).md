> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/set(_:for:task:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/set(_:for:task:))

# set(\_:for:task:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.

## Declaration

```swift
func set(_ credential: URLCredential, for protectionSpace: URLProtectionSpace, task: URLSessionTask)
```

## Parameters

- `credential`: The credential to add. If a credential with the same user name already exists in `space`, then `credential` replaces the existing object.
- `protectionSpace`: The protection space to which to add the credential.
- `task`: The task accessing the specified protection space. Subclasses of [URLCredentialStorage](../urlcredentialstorage.md) may use the request URL or other properties of this task to affect how the default credential is stored.

## See Also

### Adding and removing credentials

- [remove(\_:for:)](remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [remove(\_:for:options:)](remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [remove(\_:for:options:task:)](remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [remove(\_:for:options:)](remove%28__for_options_%29.md).
- [set(\_:for:)](set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.

# setCredential:forProtectionSpace:task: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.

## Declaration

```objectivec
- (void) setCredential:(NSURLCredential *) credential forProtectionSpace:(NSURLProtectionSpace *) protectionSpace task:(NSURLSessionTask *) task;
```

## Parameters

- `credential`: The credential to add. If a credential with the same user name already exists in `space`, then `credential` replaces the existing object.
- `protectionSpace`: The protection space to which to add the credential.
- `task`: The task accessing the specified protection space. Subclasses of [NSURLCredentialStorage](../urlcredentialstorage.md) may use the request URL or other properties of this task to affect how the default credential is stored.

## See Also

### Adding and removing credentials

- [removeCredential:forProtectionSpace:](remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [removeCredential:forProtectionSpace:options:](remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [removeCredential:forProtectionSpace:options:task:](remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [removeCredential:forProtectionSpace:options:](remove%28__for_options_%29.md).
- [setCredential:forProtectionSpace:](set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.
