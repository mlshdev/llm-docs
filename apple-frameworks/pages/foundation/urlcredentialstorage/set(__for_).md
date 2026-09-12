> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/set(_:for:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/set(_:for:))

# set(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a credential to the credential storage for the specified protection space.

## Declaration

```swift
func set(_ credential: URLCredential, for space: URLProtectionSpace)
```

## Parameters

- `credential`: The credential to add. If a credential with the same user name already exists in `space`, then `credential` replaces the existing object.
- `space`: The protection space to which to add the credential.

<a id="Discussion"></a>

## Discussion

If the credential is not yet in the set for the protection space, it will be added to it.

If you override this method, also override [set(\_:for:task:)](set%28__for_task_%29.md).

## See Also

### Adding and removing credentials

- [remove(\_:for:)](remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [remove(\_:for:options:)](remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [remove(\_:for:options:task:)](remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [remove(\_:for:options:)](remove%28__for_options_%29.md).
- [set(\_:for:task:)](set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.

# setCredential:forProtectionSpace: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a credential to the credential storage for the specified protection space.

## Declaration

```objectivec
- (void) setCredential:(NSURLCredential *) credential forProtectionSpace:(NSURLProtectionSpace *) space;
```

## Parameters

- `credential`: The credential to add. If a credential with the same user name already exists in `space`, then `credential` replaces the existing object.
- `space`: The protection space to which to add the credential.

<a id="Discussion"></a>

## Discussion

If the credential is not yet in the set for the protection space, it will be added to it.

If you override this method, also override [setCredential:forProtectionSpace:task:](set%28__for_task_%29.md).

## See Also

### Adding and removing credentials

- [removeCredential:forProtectionSpace:](remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [removeCredential:forProtectionSpace:options:](remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [removeCredential:forProtectionSpace:options:task:](remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [removeCredential:forProtectionSpace:options:](remove%28__for_options_%29.md).
- [setCredential:forProtectionSpace:task:](set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.
