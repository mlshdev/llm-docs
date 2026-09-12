> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit](https://developer.apple.com/documentation/cloudkit)

# CloudKit (Swift)

**Framework:** CloudKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Store structured app and user data in iCloud containers that all users of your app can share.

<a id="overview"></a>

## Overview

The CloudKit framework provides interfaces for moving data between your app and your iCloud containers. You use CloudKit to store your app’s existing data in the cloud so that the user can access it on multiple devices. You can also store data in a public area where all users can access it.

<a id="Using-the-CloudKit-framework"></a>

### Using the CloudKit framework

CloudKit isn’t a replacement for your app’s existing data objects. Instead, CloudKit provides complementary services for managing the transfer of data to and from iCloud servers. Because it provides minimal offline caching support, CloudKit relies on the presence of the network and, optionally, a valid iCloud account. A valid iCloud account is only necessary when you want to save data that is specific to a single user. Apps can always store data in a public area that is readable by all users.

Records are at the heart of all data transactions in CloudKit. A record is a dictionary of key-value pairs that represents the data you want to save. You can add new keys and values to records at any time, and you can create links between related records to organize your data. The [CKRecord](cloudkit/ckrecord.md) class defines the interfaces for managing the contents of records. CloudKit also relies heavily on the use of [Operation](foundation/operation.md) objects to manage the asynchronous transfer of data to and from the server.

Before using CloudKit, make sure it’s the most suitable option for your app. For more information, see [Deciding whether CloudKit is right for your app](cloudkit/deciding-whether-cloudkit-is-right-for-your-app.md).

> **Note**

>  The classes of the CloudKit framework aren’t for subclassing. Use these classes as-is to save, retrieve, and manipulate data in iCloud. In addition, many of the protocols of this framework aren’t for adoption by classes outside of CloudKit and UIKit. Each protocol reference document includes information about whether you can adopt the protocol in your own classes.

## Topics

### Essentials

- [Deciding whether CloudKit is right for your app](cloudkit/deciding-whether-cloudkit-is-right-for-your-app.md): Explore the various options you have for using iCloud to store and sync your app’s data.
- [Enabling CloudKit in Your App](cloudkit/enabling-cloudkit-in-your-app.md): Configure your app to store data in iCloud using CloudKit.

### Schemas

- [Designing and Creating a CloudKit Database](cloudkit/designing-and-creating-a-cloudkit-database.md): Create a schema to store your app’s objects as records in iCloud using CloudKit.
- [Managing iCloud Containers with CloudKit Database App](cloudkit/managing-icloud-containers-with-cloudkit-database-app.md): Inspect and modify the schema and data for your app’s iCloud container.
- [CKRecordZone](cloudkit/ckrecordzone.md): A database partition that contains related records.
- [CKRecord](cloudkit/ckrecord.md): A collection of key-value pairs that store your app’s data.
- [CKRecord.Reference](cloudkit/ckrecord/reference.md): A relationship between two records in a record zone.
- [CKAsset](cloudkit/ckasset.md): An external file that belongs to a record.
- [Integrating a Text-Based Schema into Your Workflow](cloudkit/integrating-a-text-based-schema-into-your-workflow.md): Define and update your schema with the CloudKit Schema Language.

### Records

- [Local Records](cloudkit/local-records.md): Manipulate records on-device and save changes to the server.
- [Remote Records](cloudkit/remote-records.md): Use subscriptions and change tokens to efficiently manage modifications to remote records.
- [CKSyncEngine](cloudkit/cksyncengine-5sie5.md): An object that manages the synchronization of local and remote record data.
- [Shared Records](cloudkit/shared-records.md): Share one or more records with other iCloud users.

### User discovery

- [CKUserIdentity](cloudkit/ckuseridentity.md): The identity of a user.
- [CKUserIdentity.LookupInfo](cloudkit/ckuseridentity/lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

### Core objects

- [CKContainer](cloudkit/ckcontainer.md): A conduit to your app’s databases.
- [CKDatabase](cloudkit/ckdatabase.md): An object that represents a collection of record zones and subscriptions.
- [CKOperationGroup](cloudkit/ckoperationgroup.md): An explicit association between two or more operations.

### Privacy

- [Encrypting User Data](cloudkit/encrypting-user-data.md): Deploy industry-standard security technologies using CloudKit encryption.
- [Providing User Access to CloudKit Data](cloudkit/providing-user-access-to-cloudkit-data.md): Provide users access to the data your app stores on their behalf.
- [Changing Access Controls on User Data](cloudkit/changing-access-controls-on-user-data.md): Restrict access to or remove restrictions from a user’s data at their request.
- [CKFetchWebAuthTokenOperation](cloudkit/ckfetchwebauthtokenoperation.md): An operation that creates an authentication token for use with CloudKit web services.
- [Responding to Requests to Delete Data](cloudkit/responding-to-requests-to-delete-data.md): Provide options for users to delete their CloudKit data from your app.
- [Identifying an App’s Containers](cloudkit/identifying-an-app-s-containers.md): Use Xcode’s Project navigator to find the identifiers of active CloudKit containers.

### Errors

- [CKErrorDomain](cloudkit/ckerrordomain.md): The error domain for CloudKit errors.
- [CKError](cloudkit/ckerror.md): A type that describes a CloudKit error.
- [CKError.Code](cloudkit/ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](cloudkit/ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](cloudkit/ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](cloudkit/ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](cloudkit/record-changed-error-keys.md): Constants that represent conflicting records in a save operation.

### Deprecated

- [Deprecated Symbols](cloudkit/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Classes

- [CKShareRequestAccessOperation](cloudkit/cksharerequestaccessoperation.md)

### Variables

- [CKRecordParentKey](cloudkit/ckrecordparentkey-1elhg.md)
- [CKRecordShareKey](cloudkit/ckrecordsharekey-gc8w.md)
- [CKRecordTypeShare](cloudkit/ckrecordtypeshare-7lec1.md)
- [CKRecordTypeUserRecord](cloudkit/ckrecordtypeuserrecord-6iwgn.md)
- [CKRecordZoneDefaultName](cloudkit/ckrecordzonedefaultname-1uuiu.md)
- [CKShareThumbnailImageDataKey](cloudkit/cksharethumbnailimagedatakey-rxjd.md)
- [CKShareTitleKey](cloudkit/cksharetitlekey-1cs9j.md)
- [CKShareTypeKey](cloudkit/cksharetypekey-5m83p.md)

# CloudKit (Objective-C)

**Framework:** CloudKit  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Store structured app and user data in iCloud containers that all users of your app can share.

<a id="overview"></a>

## Overview

The CloudKit framework provides interfaces for moving data between your app and your iCloud containers. You use CloudKit to store your app’s existing data in the cloud so that the user can access it on multiple devices. You can also store data in a public area where all users can access it.

<a id="Using-the-CloudKit-framework"></a>

### Using the CloudKit framework

CloudKit isn’t a replacement for your app’s existing data objects. Instead, CloudKit provides complementary services for managing the transfer of data to and from iCloud servers. Because it provides minimal offline caching support, CloudKit relies on the presence of the network and, optionally, a valid iCloud account. A valid iCloud account is only necessary when you want to save data that is specific to a single user. Apps can always store data in a public area that is readable by all users.

Records are at the heart of all data transactions in CloudKit. A record is a dictionary of key-value pairs that represents the data you want to save. You can add new keys and values to records at any time, and you can create links between related records to organize your data. The [CKRecord](cloudkit/ckrecord.md) class defines the interfaces for managing the contents of records. CloudKit also relies heavily on the use of [NSOperation](foundation/operation.md) objects to manage the asynchronous transfer of data to and from the server.

Before using CloudKit, make sure it’s the most suitable option for your app. For more information, see [Deciding whether CloudKit is right for your app](cloudkit/deciding-whether-cloudkit-is-right-for-your-app.md).

> **Note**

>  The classes of the CloudKit framework aren’t for subclassing. Use these classes as-is to save, retrieve, and manipulate data in iCloud. In addition, many of the protocols of this framework aren’t for adoption by classes outside of CloudKit and UIKit. Each protocol reference document includes information about whether you can adopt the protocol in your own classes.

## Topics

### Essentials

- [Deciding whether CloudKit is right for your app](cloudkit/deciding-whether-cloudkit-is-right-for-your-app.md): Explore the various options you have for using iCloud to store and sync your app’s data.
- [Enabling CloudKit in Your App](cloudkit/enabling-cloudkit-in-your-app.md): Configure your app to store data in iCloud using CloudKit.

### Schemas

- [Designing and Creating a CloudKit Database](cloudkit/designing-and-creating-a-cloudkit-database.md): Create a schema to store your app’s objects as records in iCloud using CloudKit.
- [Managing iCloud Containers with CloudKit Database App](cloudkit/managing-icloud-containers-with-cloudkit-database-app.md): Inspect and modify the schema and data for your app’s iCloud container.
- [CKRecordZone](cloudkit/ckrecordzone.md): A database partition that contains related records.
- [CKRecord](cloudkit/ckrecord.md): A collection of key-value pairs that store your app’s data.
- [CKReference](cloudkit/ckrecord/reference.md): A relationship between two records in a record zone.
- [CKAsset](cloudkit/ckasset.md): An external file that belongs to a record.
- [Integrating a Text-Based Schema into Your Workflow](cloudkit/integrating-a-text-based-schema-into-your-workflow.md): Define and update your schema with the CloudKit Schema Language.

### Records

- [Local Records](cloudkit/local-records.md): Manipulate records on-device and save changes to the server.
- [Remote Records](cloudkit/remote-records.md): Use subscriptions and change tokens to efficiently manage modifications to remote records.
- [CKSyncEngine](cloudkit/cksyncengine-4b4w9.md): An object that manages the synchronization of local and remote record data.
- [Shared Records](cloudkit/shared-records.md): Share one or more records with other iCloud users.

### User discovery

- [CKUserIdentity](cloudkit/ckuseridentity.md): The identity of a user.
- [CKUserIdentityLookupInfo](cloudkit/ckuseridentity/lookupinfo-swift.class.md): The criteria to use when searching for discoverable iCloud users.

### Core objects

- [CKContainer](cloudkit/ckcontainer.md): A conduit to your app’s databases.
- [CKDatabase](cloudkit/ckdatabase.md): An object that represents a collection of record zones and subscriptions.
- [CKOperationGroup](cloudkit/ckoperationgroup.md): An explicit association between two or more operations.
- [CKRecordValue](cloudkit/ckrecordvalue-c.protocol.md): The protocol that provides strong type-checking for objects that the CloudKit framework stores on the server.

### Privacy

- [Encrypting User Data](cloudkit/encrypting-user-data.md): Deploy industry-standard security technologies using CloudKit encryption.
- [Providing User Access to CloudKit Data](cloudkit/providing-user-access-to-cloudkit-data.md): Provide users access to the data your app stores on their behalf.
- [Changing Access Controls on User Data](cloudkit/changing-access-controls-on-user-data.md): Restrict access to or remove restrictions from a user’s data at their request.
- [CKFetchWebAuthTokenOperation](cloudkit/ckfetchwebauthtokenoperation.md): An operation that creates an authentication token for use with CloudKit web services.
- [Responding to Requests to Delete Data](cloudkit/responding-to-requests-to-delete-data.md): Provide options for users to delete their CloudKit data from your app.
- [Identifying an App’s Containers](cloudkit/identifying-an-app-s-containers.md): Use Xcode’s Project navigator to find the identifiers of active CloudKit containers.

### Errors

- [CKErrorDomain](cloudkit/ckerrordomain.md): The error domain for CloudKit errors.
- [CKErrorCode](cloudkit/ckerror/code.md): The error codes that CloudKit returns.
- [CKErrorRetryAfterKey](cloudkit/ckerrorretryafterkey.md): The key to retrieve the number of seconds to wait before you retry a request.
- [CKErrorUserDidResetEncryptedDataKey](cloudkit/ckerroruserdidresetencrypteddatakey.md): The key that determines whether CloudKit deletes a record zone because of a user action.
- [CKPartialErrorsByItemIDKey](cloudkit/ckpartialerrorsbyitemidkey.md): The key to retrieve partial errors.
- [Record Changed Error Keys](cloudkit/record-changed-error-keys.md): Constants that represent conflicting records in a save operation.

### Deprecated

- [Deprecated Symbols](cloudkit/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Classes

- [CKShareAccessRequester](cloudkit/ckshare/accessrequester.md)
- [CKShareBlockedIdentity](cloudkit/ckshare/blockedidentity.md)
- [CKShareRequestAccessOperation](cloudkit/cksharerequestaccessoperation.md)
- [CKSyncEngineFetchChangesContext](cloudkit/cksyncenginefetchchangescontext.md): The context of an attempt to fetch changes from the server.
- [CKSyncEngineFetchChangesScope](cloudkit/cksyncenginefetchchangesscope.md): A scope in which the sync engine will fetch changes from the server.
- [CKSyncEngineSendChangesScope](cloudkit/cksyncenginesendchangesscope.md): A scope in which the sync engine will send changes to the server.

### Macros

- [CKSHARE_REQUEST_ACCESS_INTERFACES_AVAILABILITY](cloudkit/ckshare_request_access_interfaces_availability.md)
- [CK_EXTERN](cloudkit/ck_extern.md)
- [CK_EXTERN_HIDDEN](cloudkit/ck_extern_hidden.md)
- [CK_HIDDEN](cloudkit/ck_hidden.md)
- [CK_NEWLY_UNAVAILABLE](cloudkit/ck_newly_unavailable.md)
- [CK_SHARE_ACCESS_REQUESTER_AVAILABILITY](cloudkit/ck_share_access_requester_availability.md)
- [CK_SHARE_BLOCKED_IDENTITY_AVAILABILITY](cloudkit/ck_share_blocked_identity_availability.md)
- [CK_SUBCLASSING_DEPRECATED](cloudkit/ck_subclassing_deprecated.md)
- [CK_SUBCLASSING_EXTERNALLY_RESTRICTED](cloudkit/ck_subclassing_externally_restricted.md)
- [CK_SUBCLASSING_RESTRICTED](cloudkit/ck_subclassing_restricted.md)
- [CK_SWIFT_AVAILABILITY](cloudkit/ck_swift_availability.md)
- [CK_SWIFT_DEPRECATED](cloudkit/ck_swift_deprecated.md)
- [CK_UNAVAILABLE](cloudkit/ck_unavailable.md)

### Enumerations

- [CKRecordZoneEncryptionScope](cloudkit/ckrecordzone/encryptionscope-swift.enum.md)
- [CKShareParticipantType](cloudkit/ckshareparticipanttype.md): Deprecated. The role of a participant.
