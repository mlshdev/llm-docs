> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredentialstorage](https://developer.apple.com/documentation/foundation/urlcredentialstorage)

# URLCredentialStorage (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The manager of a shared credentials cache.

## Declaration

```swift
class URLCredentialStorage
```

<a id="overview"></a>

## Overview

The shared cache stores and retrieves instances of [URLCredential](urlcredential.md). You can store password-based credentials permanently, based on the [URLCredential.Persistence](urlcredential/persistence-swift.enum.md) they were created with. Certificate-based credentials are never stored permanently.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [URLCredentialStorage](urlcredentialstorage.md) class is meant to be used as-is, but you can subclass it if you have specific needs, such as screening which credentials are stored.

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred to equivalent methods that do not. Therefore, you should override the task-based methods when subclassing, as follows:

- Setting credentials — Override [set(\_:for:task:)](urlcredentialstorage/set%28__for_task_%29.md) instead of or in addition to [set(\_:for:)](urlcredentialstorage/set%28__for_%29.md).
- Getting credentials — Override [getCredentials(for:task:completionHandler:)](urlcredentialstorage/getcredentials%28for_task_completionhandler_%29.md) instead of or in addition to [credentials(for:)](urlcredentialstorage/credentials%28for_%29.md).
- Removing credentials — Override [remove(\_:for:options:task:)](urlcredentialstorage/remove%28__for_options_task_%29.md) instead of or in addition to [remove(\_:for:options:)](urlcredentialstorage/remove%28__for_options_%29.md) and [remove(\_:for:)](urlcredentialstorage/remove%28__for_%29.md).
- Setting default credentials — Override [setDefaultCredential(\_:for:task:)](urlcredentialstorage/setdefaultcredential%28__for_task_%29.md) instead of or in addition to [setDefaultCredential(\_:for:)](urlcredentialstorage/setdefaultcredential%28__for_%29.md).
- Getting default credentials — Override [getDefaultCredential(for:task:completionHandler:)](urlcredentialstorage/getdefaultcredential%28for_task_completionhandler_%29.md) instead of or in addition to [defaultCredential(for:)](urlcredentialstorage/defaultcredential%28for_%29.md).

## Topics

### Getting the credential storage

- [shared](urlcredentialstorage/shared.md): The shared URL credential storage instance.

### Getting and setting default credentials

- [defaultCredential(for:)](urlcredentialstorage/defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [getDefaultCredential(for:task:completionHandler:)](urlcredentialstorage/getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential(\_:for:)](urlcredentialstorage/setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.
- [setDefaultCredential(\_:for:task:)](urlcredentialstorage/setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.

### Adding and removing credentials

- [remove(\_:for:)](urlcredentialstorage/remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [remove(\_:for:options:)](urlcredentialstorage/remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [remove(\_:for:options:task:)](urlcredentialstorage/remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [remove(\_:for:options:)](urlcredentialstorage/remove%28__for_options_%29.md).
- [set(\_:for:)](urlcredentialstorage/set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.
- [set(\_:for:task:)](urlcredentialstorage/set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.

### Retrieving credentials

- [allCredentials](urlcredentialstorage/allcredentials.md): The credentials for all available protection spaces.
- [credentials(for:)](urlcredentialstorage/credentials%28for_%29.md): Returns a dictionary containing the credentials for the specified protection space.
- [getCredentials(for:task:completionHandler:)](urlcredentialstorage/getcredentials%28for_task_completionhandler_%29.md): Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.

### Tracking credential storage changes

- [NSURLCredentialStorageChanged](nsnotification/name-swift.struct/nsurlcredentialstoragechanged.md): Deprecated. A notification posted when the set of stored credentials changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authentication and credentials

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [URLAuthenticationChallenge](urlauthenticationchallenge.md): A challenge from a server requiring authentication from the client.
- [URLCredential](urlcredential.md): `A`n authentication credential consisting of information specific to the type of credential and the type of persistent storage to use, if any.
- [URLProtectionSpace](urlprotectionspace.md): A server or an area on a server, commonly referred to as a realm, that requires authentication.

# NSURLCredentialStorage (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The manager of a shared credentials cache.

## Declaration

```objectivec
@interface NSURLCredentialStorage : NSObject
```

<a id="overview"></a>

## Overview

The shared cache stores and retrieves instances of [NSURLCredential](urlcredential.md). You can store password-based credentials permanently, based on the [NSURLCredentialPersistence](urlcredential/persistence-swift.enum.md) they were created with. Certificate-based credentials are never stored permanently.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [NSURLCredentialStorage](urlcredentialstorage.md) class is meant to be used as-is, but you can subclass it if you have specific needs, such as screening which credentials are stored.

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred to equivalent methods that do not. Therefore, you should override the task-based methods when subclassing, as follows:

- Setting credentials — Override [setCredential:forProtectionSpace:task:](urlcredentialstorage/set%28__for_task_%29.md) instead of or in addition to [setCredential:forProtectionSpace:](urlcredentialstorage/set%28__for_%29.md).
- Getting credentials — Override [getCredentialsForProtectionSpace:task:completionHandler:](urlcredentialstorage/getcredentials%28for_task_completionhandler_%29.md) instead of or in addition to [credentialsForProtectionSpace:](urlcredentialstorage/credentials%28for_%29.md).
- Removing credentials — Override [removeCredential:forProtectionSpace:options:task:](urlcredentialstorage/remove%28__for_options_task_%29.md) instead of or in addition to [removeCredential:forProtectionSpace:options:](urlcredentialstorage/remove%28__for_options_%29.md) and [removeCredential:forProtectionSpace:](urlcredentialstorage/remove%28__for_%29.md).
- Setting default credentials — Override [setDefaultCredential:forProtectionSpace:task:](urlcredentialstorage/setdefaultcredential%28__for_task_%29.md) instead of or in addition to [setDefaultCredential:forProtectionSpace:](urlcredentialstorage/setdefaultcredential%28__for_%29.md).
- Getting default credentials — Override [getDefaultCredentialForProtectionSpace:task:completionHandler:](urlcredentialstorage/getdefaultcredential%28for_task_completionhandler_%29.md) instead of or in addition to [defaultCredentialForProtectionSpace:](urlcredentialstorage/defaultcredential%28for_%29.md).

## Topics

### Getting the credential storage

- [sharedCredentialStorage](urlcredentialstorage/shared.md): The shared URL credential storage instance.

### Getting and setting default credentials

- [defaultCredentialForProtectionSpace:](urlcredentialstorage/defaultcredential%28for_%29.md): Returns the default credential for the specified protection space.
- [getDefaultCredentialForProtectionSpace:task:completionHandler:](urlcredentialstorage/getdefaultcredential%28for_task_completionhandler_%29.md): Gets the default credential for the specified protection space, which is being accessed by the given task, and passes it to the provided completion handler.
- [setDefaultCredential:forProtectionSpace:](urlcredentialstorage/setdefaultcredential%28__for_%29.md): Sets the default credential for a specified protection space.
- [setDefaultCredential:forProtectionSpace:task:](urlcredentialstorage/setdefaultcredential%28__for_task_%29.md): Sets the default credential for a given protection space, which is being accessed by the given task.

### Adding and removing credentials

- [removeCredential:forProtectionSpace:](urlcredentialstorage/remove%28__for_%29.md): Removes the specified credential from the credential storage for the specified protection space.
- [removeCredential:forProtectionSpace:options:](urlcredentialstorage/remove%28__for_options_%29.md): Removes the specified credential from the credential storage for the specified protection space using the given options.
- [removeCredential:forProtectionSpace:options:task:](urlcredentialstorage/remove%28__for_options_task_%29.md): Removes the specified credential from the credential storage for the specified protection space, on behalf of the given task and using the given options.
- [Dictionary key for credential removal options](dictionary-key-for-credential-removal-options.md): Key used by the options dictionary passed in [removeCredential:forProtectionSpace:options:](urlcredentialstorage/remove%28__for_options_%29.md).
- [setCredential:forProtectionSpace:](urlcredentialstorage/set%28__for_%29.md): Adds a credential to the credential storage for the specified protection space.
- [setCredential:forProtectionSpace:task:](urlcredentialstorage/set%28__for_task_%29.md): Adds a credential to the credential storage for the specified protection space, on behalf of the specified task.

### Retrieving credentials

- [allCredentials](urlcredentialstorage/allcredentials.md): The credentials for all available protection spaces.
- [credentialsForProtectionSpace:](urlcredentialstorage/credentials%28for_%29.md): Returns a dictionary containing the credentials for the specified protection space.
- [getCredentialsForProtectionSpace:task:completionHandler:](urlcredentialstorage/getcredentials%28for_task_completionhandler_%29.md): Gets a dictionary containing the credentials for the specified protection space, on behalf of the given task, and passes the dictionary to the provided completion handler.

### Tracking credential storage changes

- [NSURLCredentialStorageChangedNotification](nsnotification/name-swift.struct/nsurlcredentialstoragechanged.md): Deprecated. A notification posted when the set of stored credentials changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Authentication and credentials

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [NSURLAuthenticationChallenge](urlauthenticationchallenge.md): A challenge from a server requiring authentication from the client.
- [NSURLCredential](urlcredential.md): `A`n authentication credential consisting of information specific to the type of credential and the type of persistent storage to use, if any.
- [NSURLProtectionSpace](urlprotectionspace.md): A server or an area on a server, commonly referred to as a realm, that requires authentication.
