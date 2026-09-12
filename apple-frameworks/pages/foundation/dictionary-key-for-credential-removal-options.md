> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dictionary-key-for-credential-removal-options](https://developer.apple.com/documentation/foundation/dictionary-key-for-credential-removal-options)

# Dictionary key for credential removal options (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Key used by the options dictionary passed in [remove(\_:for:options:)](urlcredentialstorage/remove%28__for_options_%29.md).

## Topics

### Options

- [NSURLCredentialStorageRemoveSynchronizableCredentials](nsurlcredentialstorageremovesynchronizablecredentials.md): The corresponding value is an `NSNumber` object representing a Boolean value that indicates whether credentials which contain the [URLCredential.Persistence.synchronizable](urlcredential/persistence-swift.enum/synchronizable.md) attribute should be removed.

## See Also

### Adding and removing credentials

- [remove(\_:for:)](urlcredentialstorage/remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [remove(\_:for:options:)](urlcredentialstorage/remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [remove(\_:for:options:task:)](urlcredentialstorage/remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [set(\_:for:)](urlcredentialstorage/set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.
- [set(\_:for:task:)](urlcredentialstorage/set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.

# Dictionary key for credential removal options (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Key used by the options dictionary passed in [removeCredential:forProtectionSpace:options:](urlcredentialstorage/remove%28__for_options_%29.md).

## Topics

### Options

- [NSURLCredentialStorageRemoveSynchronizableCredentials](nsurlcredentialstorageremovesynchronizablecredentials.md): The corresponding value is an `NSNumber` object representing a Boolean value that indicates whether credentials which contain the [NSURLCredentialPersistenceSynchronizable](urlcredential/persistence-swift.enum/synchronizable.md) attribute should be removed.

## See Also

### Adding and removing credentials

- [removeCredential:forProtectionSpace:](urlcredentialstorage/remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [removeCredential:forProtectionSpace:options:](urlcredentialstorage/remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [removeCredential:forProtectionSpace:options:task:](urlcredentialstorage/remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [setCredential:forProtectionSpace:](urlcredentialstorage/set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.
- [setCredential:forProtectionSpace:task:](urlcredentialstorage/set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.
