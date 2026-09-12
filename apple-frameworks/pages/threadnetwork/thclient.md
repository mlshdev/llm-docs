> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thclient](https://developer.apple.com/documentation/threadnetwork/thclient)

# THClient (Swift)

**Framework:** ThreadNetwork  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A class that supports safely sharing Thread credentials between multiple clients.

## Declaration

```swift
class THClient
```

<a id="overview"></a>

## Overview

Request credentials for either a specific Thread network or for the *preferred network* using [THClient](thclient.md). The preferred network is the default Thread network chosen by the framework for a home.

The ThreadNetwork framework maintains a database of network credentials. The class allows clients to store, list, and delete credentials for a given network from the database.

Some methods in [THClient](thclient.md) use the *team ID*, a string that you store in your application’s `Info.plist`. The ThreadNetwork framework uses the team ID to preserve the privacy of the Thread network credentials across different clients. For example, credentials stored by one client can’t be deleted or modified by another client.

> **Important**

> Thread credentials give you the ability to add any device into the Thread network. Use this information responsibly.

## Topics

### Creating the Client

- [init()](thclient/init%28%29.md): Creates the client object.

### Retrieving Credentials

- [isPreferredNetworkAvailable(completion:)](thclient/ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [checkPreferredNetwork(forActiveOperationalDataset:completion:)](thclient/checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentials(forBorderAgent:completion:)](thclient/retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentials(forExtendedPANID:completion:)](thclient/retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials(\_:)](thclient/retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials(\_:)](thclient/retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.
- [retrieveAllActiveCredentials(\_:)](thclient/retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.

### Storing and Deleting Credentials

- [deleteCredentials(forBorderAgent:completion:)](thclient/deletecredentials%28forborderagent_completion_%29.md): Deletes Thread network credentials from the framework database for a Border Agent.
- [storeCredentials(forBorderAgent:activeOperationalDataSet:completion:)](thclient/storecredentials%28forborderagent_activeoperationaldataset_completion_%29.md): Stores Thread network credentials into the framework database that a Border Agent provides.

### Instance Methods

- [enableCredentialSharingMode(forExtendedPANID:completion:)](thclient/enablecredentialsharingmode%28forextendedpanid_completion_%29.md): Triggers Credential Share mode on a nearby eligible Apple Border Router (tvOS(27.0)).
- [retrieveActiveCredentialsForNearbyNetworks(completion:)](thclient/retrieveactivecredentialsfornearbynetworks%28completion_%29.md): Requests all active Thread credentials with active border routers around from the framework.

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

### Managing clients and sharing credentials

- [com.apple.developer.networking.manage-thread-network-credentials](../bundleresources/entitlements/com.apple.developer.networking.manage-thread-network-credentials.md): A Boolean value that indicates whether the app can use ThreadNetwork.
- [THCredentials](thcredentials.md): A class that contains credentials for a Thread network.

# THClient (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

A class that supports safely sharing Thread credentials between multiple clients.

## Declaration

```objectivec
@interface THClient : NSObject
```

<a id="overview"></a>

## Overview

Request credentials for either a specific Thread network or for the *preferred network* using [THClient](thclient.md). The preferred network is the default Thread network chosen by the framework for a home.

The ThreadNetwork framework maintains a database of network credentials. The class allows clients to store, list, and delete credentials for a given network from the database.

Some methods in [THClient](thclient.md) use the *team ID*, a string that you store in your application’s `Info.plist`. The ThreadNetwork framework uses the team ID to preserve the privacy of the Thread network credentials across different clients. For example, credentials stored by one client can’t be deleted or modified by another client.

> **Important**

> Thread credentials give you the ability to add any device into the Thread network. Use this information responsibly.

## Topics

### Creating the Client

- [init](thclient/init%28%29.md): Creates the client object.

### Retrieving Credentials

- [isPreferredNetworkAvailableWithCompletion:](thclient/ispreferrednetworkavailable%28completion_%29.md): Indicates whether a preferred network is available.
- [checkPreferredNetworkForActiveOperationalDataset:completion:](thclient/checkpreferrednetwork%28foractiveoperationaldataset_completion_%29.md): Determines if the essential operating parameters match the preferred network’s parameters.
- [retrieveCredentialsForBorderAgent:completion:](thclient/retrievecredentials%28forborderagent_completion_%29.md): Requests Thread credentials for a Border Agent.
- [retrieveCredentialsForExtendedPANID:completion:](thclient/retrievecredentials%28forextendedpanid_completion_%29.md): Requests Thread credentials for an extended Personal Area Network (PAN) ID.
- [retrieveAllCredentials:](thclient/retrieveallcredentials%28__%29.md): Requests all Thread credentials from the framework.
- [retrievePreferredCredentials:](thclient/retrievepreferredcredentials%28__%29.md): Requests Thread credentials for the preferred network.
- [retrieveAllActiveCredentials:](thclient/retrieveallactivecredentials%28__%29.md): Returns a set of the active credentials.

### Storing and Deleting Credentials

- [deleteCredentialsForBorderAgent:completion:](thclient/deletecredentials%28forborderagent_completion_%29.md): Deletes Thread network credentials from the framework database for a Border Agent.
- [storeCredentialsForBorderAgent:activeOperationalDataSet:completion:](thclient/storecredentials%28forborderagent_activeoperationaldataset_completion_%29.md): Stores Thread network credentials into the framework database that a Border Agent provides.

### Instance Methods

- [enableCredentialSharingModeForExtendedPANID:completion:](thclient/enablecredentialsharingmode%28forextendedpanid_completion_%29.md): Triggers Credential Share mode on a nearby eligible Apple Border Router (tvOS(27.0)).
- [retrieveActiveCredentialsForNearbyNetworksWithCompletion:](thclient/retrieveactivecredentialsfornearbynetworks%28completion_%29.md): Requests all active Thread credentials with active border routers around from the framework.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Managing clients and sharing credentials

- [com.apple.developer.networking.manage-thread-network-credentials](../bundleresources/entitlements/com.apple.developer.networking.manage-thread-network-credentials.md): A Boolean value that indicates whether the app can use ThreadNetwork.
- [THCredentials](thcredentials.md): A class that contains credentials for a Thread network.
