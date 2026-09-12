> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore)

# ASCredentialIdentityStore (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A container that your extension fills to provide credentials through the QuickType bar.

## Declaration

```swift
class ASCredentialIdentityStore
```

<a id="overview"></a>

## Overview

Make credential identities available to users directly as AutoFill suggestions by adding them to the [shared](ascredentialidentitystore/shared.md) instance of the identity store. You can add identities during configuration in your extension’s override of the [prepareInterfaceForExtensionConfiguration()](ascredentialproviderviewcontroller/prepareinterfaceforextensionconfiguration%28%29.md) method. You can also update the shared store from within your extension’s host app.

Be sure to update the shared store whenever your app’s database changes to avoid showing stale identities as AutoFill suggestions. Take advantage of the incremental change methods [saveCredentialIdentities(\_:completion:)](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md) and [removeCredentialIdentities(\_:completion:)](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md) to avoid rewriting the entire store every time you need to make a change.

You can fetch previously saved credential identities with [credentialIdentities(forService:credentialIdentityTypes:)](ascredentialidentitystore/credentialidentities%28forservice_credentialidentitytypes_%29.md). Call this method when preparing to store a credential to check whether your app has a saved credential for this domain.

When the user disables your extension, the system clears and disables your shared store. So before making updates, check to see that the store’s enabled to avoid unnecessary activity:

**Swift**

```swift
let store = ASCredentialIdentityStore.shared
store.getState { state in
    if state.isEnabled {
        // Add, remove, or update identities.
    }
}
```

**Objective-C**

```objc
ASCredentialIdentityStore *store = [ASCredentialIdentityStore sharedStore];
[store getCredentialIdentityStoreStateWithCompletion:^(ASCredentialIdentityStoreState * _Nonnull state) {
    if (state.enabled) {
        // Add, remove, or update identities.
    }
}];
```

## Topics

### Getting the shared store

- [shared](ascredentialidentitystore/shared.md): The shared credential identity store.

### Checking the state of the store

- [getState(\_:)](ascredentialidentitystore/getstate%28__%29.md): Gets the state of the credential identity store.
- [ASCredentialIdentityStoreState](ascredentialidentitystorestate.md): A representation of the state of a credential identity store.

### Adding and removing credential identities

- [saveCredentialIdentities(\_:completion:)](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentities(\_:completion:)](ascredentialidentitystore/replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentities(\_:)](ascredentialidentitystore/removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentities(\_:completion:)](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

### Fetching saved credential identities

- [credentialIdentities(forService:credentialIdentityTypes:)](ascredentialidentitystore/credentialidentities%28forservice_credentialidentitytypes_%29.md): Retrieves an array of all previously saved credential identities in the store for your extension.
- [ASCredentialServiceIdentifier](ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialIdentityStore.IdentityTypes](ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.

### Recognizing errors

- [ASCredentialIdentityStoreError](ascredentialidentitystoreerror.md): A credential identity store error.
- [ASCredentialIdentityStoreErrorDomain](ascredentialidentitystoreerrordomain.md): The domain for a credential identity store error.
- [ASCredentialIdentityStoreError.Code](ascredentialidentitystoreerror/code.md): Constants that represent credential identity store error codes.

### Deprecated methods

- [saveCredentialIdentities(\_:completion:)](ascredentialidentitystore/savecredentialidentities%28__completion_%29-5vs4m.md): Deprecated. Saves the given credential identities to the store.
- [replaceCredentialIdentities(with:completion:)](ascredentialidentitystore/replacecredentialidentities%28with_completion_%29.md): Deprecated. Replaces existing credential identities with new credential identities.
- [removeCredentialIdentities(\_:completion:)](ascredentialidentitystore/removecredentialidentities%28__completion_%29-2ygnf.md): Deprecated. Removes the given credential identities from the store.

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

## See Also

### Configuring the credential provider extension

- [prepareInterfaceForExtensionConfiguration()](ascredentialproviderviewcontroller/prepareinterfaceforextensionconfiguration%28%29.md): Prepares the interface to enable the user to configure the extension.

# ASCredentialIdentityStore (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A container that your extension fills to provide credentials through the QuickType bar.

## Declaration

```objectivec
@interface ASCredentialIdentityStore : NSObject
```

<a id="overview"></a>

## Overview

Make credential identities available to users directly as AutoFill suggestions by adding them to the [sharedStore](ascredentialidentitystore/shared.md) instance of the identity store. You can add identities during configuration in your extension’s override of the [prepareInterfaceForExtensionConfiguration](ascredentialproviderviewcontroller/prepareinterfaceforextensionconfiguration%28%29.md) method. You can also update the shared store from within your extension’s host app.

Be sure to update the shared store whenever your app’s database changes to avoid showing stale identities as AutoFill suggestions. Take advantage of the incremental change methods [saveCredentialIdentityEntries:completion:](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md) and [removeCredentialIdentityEntries:completion:](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md) to avoid rewriting the entire store every time you need to make a change.

You can fetch previously saved credential identities with [credentialIdentities(forService:credentialIdentityTypes:)](ascredentialidentitystore/credentialidentities%28forservice_credentialidentitytypes_%29.md). Call this method when preparing to store a credential to check whether your app has a saved credential for this domain.

When the user disables your extension, the system clears and disables your shared store. So before making updates, check to see that the store’s enabled to avoid unnecessary activity:

**Swift**

```swift
let store = ASCredentialIdentityStore.shared
store.getState { state in
    if state.isEnabled {
        // Add, remove, or update identities.
    }
}
```

**Objective-C**

```objc
ASCredentialIdentityStore *store = [ASCredentialIdentityStore sharedStore];
[store getCredentialIdentityStoreStateWithCompletion:^(ASCredentialIdentityStoreState * _Nonnull state) {
    if (state.enabled) {
        // Add, remove, or update identities.
    }
}];
```

## Topics

### Getting the shared store

- [sharedStore](ascredentialidentitystore/shared.md): The shared credential identity store.

### Checking the state of the store

- [getCredentialIdentityStoreStateWithCompletion:](ascredentialidentitystore/getstate%28__%29.md): Gets the state of the credential identity store.
- [ASCredentialIdentityStoreState](ascredentialidentitystorestate.md): A representation of the state of a credential identity store.

### Adding and removing credential identities

- [saveCredentialIdentityEntries:completion:](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentityEntries:completion:](ascredentialidentitystore/replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentitiesWithCompletion:](ascredentialidentitystore/removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentityEntries:completion:](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

### Fetching saved credential identities

- [getCredentialIdentitiesForService:credentialIdentityTypes:completionHandler:](ascredentialidentitystore/getcredentialidentitiesforservice_credentialidentitytypes_completionhandler_.md): Retrieves an array of all previously saved credential identities in the store for your extension.
- [ASCredentialServiceIdentifier](ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.
- [ASCredentialIdentityTypes](ascredentialidentitystore/identitytypes.md): The defined identity types for use in retrieving credentials.

### Recognizing errors

- [ASCredentialIdentityStoreErrorDomain](ascredentialidentitystoreerrordomain.md): The domain for a credential identity store error.
- [ASCredentialIdentityStoreErrorCode](ascredentialidentitystoreerror/code.md): Constants that represent credential identity store error codes.

### Deprecated methods

- [saveCredentialIdentities:completion:](ascredentialidentitystore/savecredentialidentities%28__completion_%29-5vs4m.md): Deprecated. Saves the given credential identities to the store.
- [replaceCredentialIdentitiesWithIdentities:completion:](ascredentialidentitystore/replacecredentialidentities%28with_completion_%29.md): Deprecated. Replaces existing credential identities with new credential identities.
- [removeCredentialIdentities:completion:](ascredentialidentitystore/removecredentialidentities%28__completion_%29-2ygnf.md): Deprecated. Removes the given credential identities from the store.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring the credential provider extension

- [prepareInterfaceForExtensionConfiguration](ascredentialproviderviewcontroller/prepareinterfaceforextensionconfiguration%28%29.md): Prepares the interface to enable the user to configure the extension.
