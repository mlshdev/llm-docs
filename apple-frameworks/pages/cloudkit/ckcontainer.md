> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer](https://developer.apple.com/documentation/cloudkit/ckcontainer)

# CKContainer (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A conduit to your app’s databases.

## Declaration

```swift
class CKContainer
```

## Mentioned In

- [Designing and Creating a CloudKit Database](designing-and-creating-a-cloudkit-database.md)
- [Identifying an App’s Containers](identifying-an-app-s-containers.md)

<a id="overview"></a>

## Overview

A container manages all explicit and implicit attempts to access its contents.

Every app has a default container that manages its own content. If you develop a suite of apps, you can access any containers that you have the appropriate entitlements for. Each new container distinguishes between public and private data. CloudKit always stores private data in the appropriate container directory in the user’s iCloud account.

> **Note**

> `CKContainer` instances operate with a [QualityOfService.userInitiated](../foundation/qualityofservice/userinitiated.md) quality of service level by default. For information about quality of service, see [Prioritize Work with Quality of Service Classes](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/PrioritizeWorkWithQoS.html#//apple_ref/doc/uid/TP40015243-CH39) in [Energy Efficiency Guide for iOS Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/index.html#//apple_ref/doc/uid/TP40015243) and [Prioritize Work at the Task Level](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/PrioritizeWorkAtTheTaskLevel.html#//apple_ref/doc/uid/TP40013929-CH35) in [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

<a id="Interacting-with-a-Container"></a>

### Interacting with a Container

A container coordinates all interactions between your app and the server. Most of these interactions involve the following tasks:

- Determining whether the user has an iCloud account, which lets you know if you can write data to the user’s personal storage.
- With the user’s permission, discovering other users who the current user knows, and making the current user’s information discoverable.
- Getting the container or one of its databases to use with an operation.

<a id="Public-and-Private-Databases"></a>

### Public and Private Databases

Each container provides a public and a private database for storing data. The contents of the public database are accessible to all users of the app, whereas the contents of the private database are, by default, visible only to the current user. Content that is specific to a single user usually belongs in that user’s private database, whereas app-related content that you provide (or that users want to share) belongs in the public database.

The public database is always available, regardless of whether the device has an active iCloud account. When there isn’t an iCloud account, your app can fetch records from and query the public database, but it can’t save changes. Saving records to the public database requires an active iCloud account to identify the owner of those records. Access to the private database always requires an active iCloud account on the device.

> **Note**

> The data in a public database counts toward the iCloud storage quota of the app that owns the container. That data doesn’t count toward the storage quota of any single user. Data in the private database counts toward the user’s iCloud storage quota.

<a id="Using-iCloud"></a>

### Using iCloud

Whenever possible, design your app to run gracefully with or without an active iCloud account. Even without an active iCloud account, apps can fetch records from the public database and display that information to the user. If your app requires the ability to write to the public database or requires access to the private database, notify the user of the reason and encourage them to enable iCloud. You can even provide a button that takes the user directly to Settings so that they can enable iCloud. To implement such a button, have the button’s action open the URL that the [openSettingsURLString](../uikit/uiapplication/opensettingsurlstring.md) constant provides.

<a id="User-Records-and-Permissions"></a>

### User Records and Permissions

When a user accesses a container for the first time, CloudKit assigns them a unique identifier and uses it to create two user records — one in the app’s public database and another in that user’s private database. By default, these records don’t contain any identifying personal information, but you can use the record in the user’s private database to store additional, nonsensitive information about that user. Because the public database’s user record is accessible to all users of your app, don’t use it to store information about the user.

While a user record isn’t the same as the user’s [CKUserIdentity](ckuseridentity.md), the identity does provide the identifier of their user record that you can use to fetch that record from either the public database or the user’s private database. For more information, see [userRecordID](ckuseridentity/userrecordid.md).

<a id="Testing-Your-Code-Using-the-Development-Container"></a>

### Testing Your Code Using the Development Container

At runtime, CloudKit uses your app’s `com.apple.developer.icloud-container-environment` entitlement to discover whether you’re using a `Development` or `Production` version of your provisioning profile. When you configure the entitlement for development, CloudKit configures the app’s containers to use the development server. The development environment is a safe place to make changes during the development process without disrupting users of your app. You can add new fields to records programmatically, and you can delete or modify fields using iCloud Dashboard.

Before shipping your app, always test your app’s behavior in the production environment. The production server generates errors when your app tries to add record types or add new fields to existing record types. Testing in the production environment helps you find and fix the places in your code where you’re making those types of changes. You can use CloudKit Dashboard to modify record types in the development environment, and then migrate those changes to the production environment.

> **Note**

> Simulator works only with the development environment. When you’re ready to test your app in a production environment, do so from a device.

## Topics

### Creating Containers

- [default()](ckcontainer/default%28%29.md): Returns the app’s default container.
- [init(identifier:)](ckcontainer/init%28identifier_%29.md): Creates a container for the specified identifier.

### Getting the Public and Private Databases

- [privateCloudDatabase](ckcontainer/privateclouddatabase.md): The user’s private database.
- [publicCloudDatabase](ckcontainer/publicclouddatabase.md): The app’s public database.
- [sharedCloudDatabase](ckcontainer/sharedclouddatabase.md): The database that contains shared data.
- [database(with:)](ckcontainer/database%28with_%29.md): Returns the database with the specified scope.

### Getting the Container’s Identifier

- [containerIdentifier](ckcontainer/containeridentifier.md): The container’s unique identifier.

### Determining the User’s iCloud Access Status

- [accountStatus(completionHandler:)](ckcontainer/accountstatus%28completionhandler_%29.md): Determines whether the system can access the user’s iCloud account.
- [CKAccountStatus](ckaccountstatus.md): Constants that indicate the availability of the user’s iCloud account.

### Requesting and Determining App Permissions

- [requestApplicationPermission(\_:completionHandler:)](ckcontainer/requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [status(forApplicationPermission:completionHandler:)](ckcontainer/status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKContainer.Application](ckcontainer/application.md): A collection of types for app permissions.
- [CKContainer.ApplicationPermissions](ckcontainer/applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKContainer.ApplicationPermissionBlock](ckcontainer/applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
- [CKContainer.ApplicationPermissionStatus](ckcontainer/applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.

### Performing Operations on the Container

- [add(\_:)](ckcontainer/add%28__%29.md): Adds an operation to the container’s queue.

### Discovering User Records

- [discoverAllIdentities(completionHandler:)](ckcontainer/discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentity(withEmailAddress:completionHandler:)](ckcontainer/discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentity(withPhoneNumber:completionHandler:)](ckcontainer/discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentity(withUserRecordID:completionHandler:)](ckcontainer/discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipant(withEmailAddress:completionHandler:)](ckcontainer/fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipant(withPhoneNumber:completionHandler:)](ckcontainer/fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipant(withUserRecordID:completionHandler:)](ckcontainer/fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [fetchUserRecordID(completionHandler:)](ckcontainer/fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

### Fetching Long-Lived Operations

- [fetchAllLongLivedOperationIDs(completionHandler:)](ckcontainer/fetchalllonglivedoperationids%28completionhandler_%29.md): Fetches the IDs of any long-lived operations that are running.
- [fetchLongLivedOperation(withID:completionHandler:)](ckcontainer/fetchlonglivedoperation%28withid_completionhandler_%29.md): Fetches the long-lived operation for the specified operation ID.

### Accessing Container Metadata

- [fetchShareMetadata(with:completionHandler:)](ckcontainer/fetchsharemetadata%28with_completionhandler_%29.md): Fetches the share metadata for the specified share URL.
- [accept(\_:completionHandler:)](ckcontainer/accept%28__completionhandler_%29-949ea.md): Accepts the specified share metadata.
- [CKAccountChanged](../foundation/nsnotification/name-swift.struct/ckaccountchanged.md): A notification that a container posts when the status of an iCloud account changes.

### Instance Methods

- [accept(\_:)](ckcontainer/accept%28__%29-5vv8p.md): Accepts the specified share metadata and returns the accepted share to an awaiting caller.
- [accept(\_:)](ckcontainer/accept%28__%29-t0ny.md): Accepts the specified share metadatas and returns the accepted shares to an awaiting caller.
- [accept(\_:completionHandler:)](ckcontainer/accept%28__completionhandler_%29-7s3t7.md): Accepts the specified share metadatas.
- [allLongLivedOperationIDs()](ckcontainer/alllonglivedoperationids%28%29.md): Fetches the IDs of any long-lived operations that are running and returns them to an awaiting caller.
- [allUserIdentitiesFromContacts()](ckcontainer/alluseridentitiesfromcontacts%28%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [configuredWith(configuration:group:body:)](ckcontainer/configuredwith%28configuration_group_body_%29-40x6k.md): Applies a temporary configuration to the container within the scope of a closure.
- [configuredWith(configuration:group:body:)](ckcontainer/configuredwith%28configuration_group_body_%29-4kc2l.md): Applies a temporary configuration to the container within the scope of a closure that supports concurrency.
- [discoverUserIdentities(forEmailAddresses:completionHandler:)](ckcontainer/discoveruseridentities%28foremailaddresses_completionhandler_%29.md): Deprecated. Fetches the user identities for the specified email addresses.
- [discoverUserIdentities(forPhoneNumbers:completionHandler:)](ckcontainer/discoveruseridentities%28forphonenumbers_completionhandler_%29.md): Deprecated. Fetches the user identities for the specified phone numbers.
- [discoverUserIdentities(forUserRecordIDs:completionHandler:)](ckcontainer/discoveruseridentities%28foruserrecordids_completionhandler_%29.md): Deprecated. Fetches the user identities for the specified user record IDs.
- [fetchShareMetadatas(for:completionHandler:)](ckcontainer/fetchsharemetadatas%28for_completionhandler_%29.md): Fetches share metadatas for the specified share URLs.
- [fetchShareParticipants(forEmailAddresses:completionHandler:)](ckcontainer/fetchshareparticipants%28foremailaddresses_completionhandler_%29.md): Fetches share participants with the specified email addresses.
- [fetchShareParticipants(forPhoneNumbers:completionHandler:)](ckcontainer/fetchshareparticipants%28forphonenumbers_completionhandler_%29.md): Fetches share participants with the specified phone numbers.
- [fetchShareParticipants(forUserRecordIDs:completionHandler:)](ckcontainer/fetchshareparticipants%28foruserrecordids_completionhandler_%29.md): Fetches share participants with the specified user record IDs.
- [longLivedOperation(for:)](ckcontainer/longlivedoperation%28for_%29.md): Fetches the long-lived operation for the specified operation ID and returns it to an awaiting caller.
- [requestShareAccess(for:)](ckcontainer/requestshareaccess%28for_%29.md): Requests access to the specified share URLs, and returns the results to an awaiting caller.
- [shareMetadata(for:)](ckcontainer/sharemetadata%28for_%29.md): Fetches the share metadata for the specified share URL.
- [shareMetadatas(for:)](ckcontainer/sharemetadatas%28for_%29.md): Fetches share metadatas for the specified share URLs and returns them to an awaiting caller.
- [shareParticipant(forEmailAddress:)](ckcontainer/shareparticipant%28foremailaddress_%29.md): Fetches the share participant with the specified email address.
- [shareParticipant(forPhoneNumber:)](ckcontainer/shareparticipant%28forphonenumber_%29.md): Fetches the share participant with the specified phone number.
- [shareParticipant(forUserRecordID:)](ckcontainer/shareparticipant%28foruserrecordid_%29.md): Fetches the share participant with the specified user record ID.
- [shareParticipants(for:)](ckcontainer/shareparticipants%28for_%29.md): Fetches share participants with the specified lookup infos and returns them to an awaiting caller.
- [shareParticipants(forEmailAddresses:)](ckcontainer/shareparticipants%28foremailaddresses_%29.md): Fetches share participants with the specified email addresses and returns them to an awaiting caller.
- [shareParticipants(forPhoneNumbers:)](ckcontainer/shareparticipants%28forphonenumbers_%29.md): Fetches share participants with the specified phone numbers and returns them to an awaiting caller.
- [shareParticipants(forUserRecordIDs:)](ckcontainer/shareparticipants%28foruserrecordids_%29.md): Fetches share participants with the specified user record IDs and returns them to an awaiting caller.
- [userIdentities(forEmailAddresses:)](ckcontainer/useridentities%28foremailaddresses_%29.md): Deprecated. Fetches the user identities for the specified email addresses and returns them to an awaiting caller.
- [userIdentities(forPhoneNumbers:)](ckcontainer/useridentities%28forphonenumbers_%29.md): Deprecated. Fetches the user identities for the specified phone numbers and returns them to an awaiting caller.
- [userIdentities(forUserRecordIDs:)](ckcontainer/useridentities%28foruserrecordids_%29.md): Deprecated. Fetches the user identities for the specified user record IDs and returns them to an awaiting caller.
- [userIdentity(forEmailAddress:)](ckcontainer/useridentity%28foremailaddress_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [userIdentity(forPhoneNumber:)](ckcontainer/useridentity%28forphonenumber_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [userIdentity(forUserRecordID:)](ckcontainer/useridentity%28foruserrecordid_%29.md): Deprecated. Fetches the user identity for the specified user record ID.

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

### Core objects

- [CKDatabase](ckdatabase.md): An object that represents a collection of record zones and subscriptions.
- [CKOperationGroup](ckoperationgroup.md): An explicit association between two or more operations.

# CKContainer (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A conduit to your app’s databases.

## Declaration

```objectivec
@interface CKContainer : NSObject
```

## Mentioned In

- [Designing and Creating a CloudKit Database](designing-and-creating-a-cloudkit-database.md)
- [Identifying an App’s Containers](identifying-an-app-s-containers.md)

<a id="overview"></a>

## Overview

A container manages all explicit and implicit attempts to access its contents.

Every app has a default container that manages its own content. If you develop a suite of apps, you can access any containers that you have the appropriate entitlements for. Each new container distinguishes between public and private data. CloudKit always stores private data in the appropriate container directory in the user’s iCloud account.

> **Note**

> `CKContainer` instances operate with a [NSQualityOfServiceUserInitiated](../foundation/qualityofservice/userinitiated.md) quality of service level by default. For information about quality of service, see [Prioritize Work with Quality of Service Classes](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/PrioritizeWorkWithQoS.html#//apple_ref/doc/uid/TP40015243-CH39) in [Energy Efficiency Guide for iOS Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/index.html#//apple_ref/doc/uid/TP40015243) and [Prioritize Work at the Task Level](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/PrioritizeWorkAtTheTaskLevel.html#//apple_ref/doc/uid/TP40013929-CH35) in [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

<a id="Interacting-with-a-Container"></a>

### Interacting with a Container

A container coordinates all interactions between your app and the server. Most of these interactions involve the following tasks:

- Determining whether the user has an iCloud account, which lets you know if you can write data to the user’s personal storage.
- With the user’s permission, discovering other users who the current user knows, and making the current user’s information discoverable.
- Getting the container or one of its databases to use with an operation.

<a id="Public-and-Private-Databases"></a>

### Public and Private Databases

Each container provides a public and a private database for storing data. The contents of the public database are accessible to all users of the app, whereas the contents of the private database are, by default, visible only to the current user. Content that is specific to a single user usually belongs in that user’s private database, whereas app-related content that you provide (or that users want to share) belongs in the public database.

The public database is always available, regardless of whether the device has an active iCloud account. When there isn’t an iCloud account, your app can fetch records from and query the public database, but it can’t save changes. Saving records to the public database requires an active iCloud account to identify the owner of those records. Access to the private database always requires an active iCloud account on the device.

> **Note**

> The data in a public database counts toward the iCloud storage quota of the app that owns the container. That data doesn’t count toward the storage quota of any single user. Data in the private database counts toward the user’s iCloud storage quota.

<a id="Using-iCloud"></a>

### Using iCloud

Whenever possible, design your app to run gracefully with or without an active iCloud account. Even without an active iCloud account, apps can fetch records from the public database and display that information to the user. If your app requires the ability to write to the public database or requires access to the private database, notify the user of the reason and encourage them to enable iCloud. You can even provide a button that takes the user directly to Settings so that they can enable iCloud. To implement such a button, have the button’s action open the URL that the [UIApplicationOpenSettingsURLString](../uikit/uiapplication/opensettingsurlstring.md) constant provides.

<a id="User-Records-and-Permissions"></a>

### User Records and Permissions

When a user accesses a container for the first time, CloudKit assigns them a unique identifier and uses it to create two user records — one in the app’s public database and another in that user’s private database. By default, these records don’t contain any identifying personal information, but you can use the record in the user’s private database to store additional, nonsensitive information about that user. Because the public database’s user record is accessible to all users of your app, don’t use it to store information about the user.

While a user record isn’t the same as the user’s [CKUserIdentity](ckuseridentity.md), the identity does provide the identifier of their user record that you can use to fetch that record from either the public database or the user’s private database. For more information, see [userRecordID](ckuseridentity/userrecordid.md).

<a id="Testing-Your-Code-Using-the-Development-Container"></a>

### Testing Your Code Using the Development Container

At runtime, CloudKit uses your app’s `com.apple.developer.icloud-container-environment` entitlement to discover whether you’re using a `Development` or `Production` version of your provisioning profile. When you configure the entitlement for development, CloudKit configures the app’s containers to use the development server. The development environment is a safe place to make changes during the development process without disrupting users of your app. You can add new fields to records programmatically, and you can delete or modify fields using iCloud Dashboard.

Before shipping your app, always test your app’s behavior in the production environment. The production server generates errors when your app tries to add record types or add new fields to existing record types. Testing in the production environment helps you find and fix the places in your code where you’re making those types of changes. You can use CloudKit Dashboard to modify record types in the development environment, and then migrate those changes to the production environment.

> **Note**

> Simulator works only with the development environment. When you’re ready to test your app in a production environment, do so from a device.

## Topics

### Creating Containers

- [defaultContainer](ckcontainer/default%28%29.md): Returns the app’s default container.
- [containerWithIdentifier:](ckcontainer/init%28identifier_%29.md): Creates a container for the specified identifier.

### Getting the Public and Private Databases

- [privateCloudDatabase](ckcontainer/privateclouddatabase.md): The user’s private database.
- [publicCloudDatabase](ckcontainer/publicclouddatabase.md): The app’s public database.
- [sharedCloudDatabase](ckcontainer/sharedclouddatabase.md): The database that contains shared data.
- [databaseWithDatabaseScope:](ckcontainer/database%28with_%29.md): Returns the database with the specified scope.

### Getting the Container’s Identifier

- [containerIdentifier](ckcontainer/containeridentifier.md): The container’s unique identifier.

### Determining the User’s iCloud Access Status

- [accountStatusWithCompletionHandler:](ckcontainer/accountstatus%28completionhandler_%29.md): Determines whether the system can access the user’s iCloud account.
- [CKAccountStatus](ckaccountstatus.md): Constants that indicate the availability of the user’s iCloud account.

### Requesting and Determining App Permissions

- [requestApplicationPermission:completionHandler:](ckcontainer/requestapplicationpermission%28__completionhandler_%29.md): Deprecated. Prompts the user to authorize the specified permission.
- [statusForApplicationPermission:completionHandler:](ckcontainer/status%28forapplicationpermission_completionhandler_%29.md): Deprecated. Determines the authorization status of the specified permission.
- [CKApplicationPermissions](ckcontainer/applicationpermissions.md): Constants that represent the permissions that a user grants.
- [CKApplicationPermissionBlock](ckcontainer/applicationpermissionblock.md): Deprecated. A closure that processes the outcome of a permissions request.
- [CKApplicationPermissionStatus](ckcontainer/applicationpermissionstatus.md): Deprecated. Constants that represent the status of a permission.

### Performing Operations on the Container

- [addOperation:](ckcontainer/add%28__%29.md): Adds an operation to the container’s queue.

### Discovering User Records

- [discoverAllIdentitiesWithCompletionHandler:](ckcontainer/discoverallidentities%28completionhandler_%29.md): Deprecated. Fetches all user identities that match entries in the user’s Contacts.
- [discoverUserIdentityWithEmailAddress:completionHandler:](ckcontainer/discoveruseridentity%28withemailaddress_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified email address.
- [discoverUserIdentityWithPhoneNumber:completionHandler:](ckcontainer/discoveruseridentity%28withphonenumber_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified phone number.
- [discoverUserIdentityWithUserRecordID:completionHandler:](ckcontainer/discoveruseridentity%28withuserrecordid_completionhandler_%29.md): Deprecated. Fetches the user identity for the specified user record ID.
- [fetchShareParticipantWithEmailAddress:completionHandler:](ckcontainer/fetchshareparticipant%28withemailaddress_completionhandler_%29.md): Fetches the share participant with the specified email address.
- [fetchShareParticipantWithPhoneNumber:completionHandler:](ckcontainer/fetchshareparticipant%28withphonenumber_completionhandler_%29.md): Fetches the share participant with the specified phone number.
- [fetchShareParticipantWithUserRecordID:completionHandler:](ckcontainer/fetchshareparticipant%28withuserrecordid_completionhandler_%29.md): Fetches the share participant with the specified user record ID.
- [fetchUserRecordIDWithCompletionHandler:](ckcontainer/fetchuserrecordid%28completionhandler_%29.md): Fetches the user record ID of the current user.
- [CKCurrentUserDefaultName](ckcurrentuserdefaultname.md): A constant that provides the current user’s default name.
- [CKOwnerDefaultName](ckownerdefaultname.md): Deprecated. A constant that provides the default owner’s name.

### Fetching Long-Lived Operations

- [fetchAllLongLivedOperationIDsWithCompletionHandler:](ckcontainer/fetchalllonglivedoperationidswithcompletionhandler_.md): Fetches the IDs of any long-lived operations that are running.
- [fetchLongLivedOperationWithID:completionHandler:](ckcontainer/fetchlonglivedoperationwithid_completionhandler_.md): Fetches the long-lived operation for the specified operation ID.

### Accessing Container Metadata

- [fetchShareMetadataWithURL:completionHandler:](ckcontainer/fetchsharemetadata%28with_completionhandler_%29.md): Fetches the share metadata for the specified share URL.
- [acceptShareMetadata:completionHandler:](ckcontainer/accept%28__completionhandler_%29-949ea.md): Accepts the specified share metadata.
- [CKAccountChangedNotification](ckaccountchangednotification.md): A notification that a container posts when the status of an iCloud account changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Core objects

- [CKDatabase](ckdatabase.md): An object that represents a collection of record zones and subscriptions.
- [CKOperationGroup](ckoperationgroup.md): An explicit association between two or more operations.
- [CKRecordValue](ckrecordvalue-c.protocol.md): The protocol that provides strong type-checking for objects that the CloudKit framework stores on the server.
