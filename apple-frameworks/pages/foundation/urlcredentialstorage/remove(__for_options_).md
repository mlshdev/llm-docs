> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage/remove(_:for:options:)](https://developer.apple.com/documentation/foundation/urlcredentialstorage/remove(_:for:options:))

# remove(\_:for:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified credential from the credential storage for the specified protection space using the given options.

## Declaration

```swift
func remove(_ credential: URLCredential, for space: URLProtectionSpace, options: [String : Any]? = nil)
```

## Parameters

- `credential`: The credential to remove.
- `space`: The protection space from which to remove the credential.
- `options`: A dictionary containing options to consider when removing the credential.

  For possible keys, see [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md). You should use this when trying to delete a credential that has the [URLCredential.Persistence.synchronizable](../urlcredential/persistence-swift.enum/synchronizable.md) policy.

  > **Note**

  >  When credential objects that have a [URLCredential.Persistence.synchronizable](../urlcredential/persistence-swift.enum/synchronizable.md) policy are removed, the credential will be removed on all devices that contain this credential.

<a id="Discussion"></a>

## Discussion

The credential is removed from both persistent and temporary storage.

If you override this method, also override [remove(\_:for:options:task:)](remove%28__for_options_task_%29.md).

## See Also

### Adding and removing credentials

- [remove(\_:for:)](remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [remove(\_:for:options:task:)](remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [remove(\_:for:options:)](remove%28__for_options_%29.md).
- [set(\_:for:)](set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.
- [set(\_:for:task:)](set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.

# removeCredential:forProtectionSpace:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified credential from the credential storage for the specified protection space using the given options.

## Declaration

```objectivec
- (void) removeCredential:(NSURLCredential *) credential forProtectionSpace:(NSURLProtectionSpace *) space options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `credential`: The credential to remove.
- `space`: The protection space from which to remove the credential.
- `options`: A dictionary containing options to consider when removing the credential.

  For possible keys, see [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md). You should use this when trying to delete a credential that has the [NSURLCredentialPersistenceSynchronizable](../urlcredential/persistence-swift.enum/synchronizable.md) policy.

  > **Note**

  >  When credential objects that have a [NSURLCredentialPersistenceSynchronizable](../urlcredential/persistence-swift.enum/synchronizable.md) policy are removed, the credential will be removed on all devices that contain this credential.

<a id="Discussion"></a>

## Discussion

The credential is removed from both persistent and temporary storage.

If you override this method, also override [removeCredential:forProtectionSpace:options:task:](remove%28__for_options_task_%29.md).

## See Also

### Adding and removing credentials

- [removeCredential:forProtectionSpace:](remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [removeCredential:forProtectionSpace:options:task:](remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](../dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [removeCredential:forProtectionSpace:options:](remove%28__for_options_%29.md).
- [setCredential:forProtectionSpace:](set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.
- [setCredential:forProtectionSpace:task:](set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.
