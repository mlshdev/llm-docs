> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs](https://developer.apple.com/documentation/cloudkitjs)

# CloudKit JS

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Framework  
**Availability:** CloudKit JS 1.0+

Provide access from your web app to your CloudKit app’s containers and databases.

<a id="overview"></a>

## Overview

Use CloudKit JS to build a web interface that lets users access the same public and private databases as your CloudKit app running on iOS or macOS. You must have an existing CloudKit app and enable web services to use CloudKit JS.

<a id="Before-You-Begin"></a>

### Before You Begin

Set up your app’s containers and configure CloudKit JS.

1. Create your app’s containers and schema.

   If you’re new to CloudKit, start by reading [CloudKit Quick Start](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitQuickStart/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014987). You’ll use Xcode to create your app’s containers and use CloudKit Dashboard to view the containers. Then create an iOS or Mac app that uses CloudKit to store your app’s data.
2. In CloudKit Dashboard, enable web services by creating either an API token or server-to-server key.

   Use an API Token from a website or an embedded web view in a native app, or when you need to authenticate the user. To create an API token, read [Obtaining an API Token for an iCloud Container](https://developer.apple.com/documentation/cloudkit/obtaining-an-api-token-for-an-icloud-container).

   Use a server-to-server key to access the public database from a server process or script as an administrator. To create a server-to-server key, read [Accessing CloudKit Using a Server-to-Server Key](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/SettingUpWebServices.html#//apple_ref/doc/uid/TP40015240-CH24-SW6) in [CloudKit Web Services Reference](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/index.html#//apple_ref/doc/uid/TP40015240). See [CloudKit Catalog: An Introduction to CloudKit (Cocoa and JavaScript)](https://developer.apple.com/library/archive/samplecode/CloudAtlas/Introduction/Intro.html#//apple_ref/doc/uid/TP40014599) for a JavaScript sample that uses a server-to-server key.
3. Embed CloudKit JS in your webpage.

   Embed CloudKit JS in your webpage using the `script` tag and link to Apple’s hosted version of CloudKit JS at `https://cdn.apple-CloudKit.com/ck/2/CloudKit.js`.

   ```javascript
   <script src="https://cdn.apple-CloudKit.com/ck/2/CloudKit.js">
   ```

   > **Note**

   >  The CloudKit JS version number is in the URL. For example, `2` specifies CloudKit JS 2.0.
4. Enable JavaScript strict mode.

   To enable strict mode for an entire script, put “use strict” before any other statements.

   ```javascript
   "use strict";
   ```
5. Configure CloudKit JS.

   Use the `CloudKit`.[configure](cloudkitjs/cloudkit/configure.md) method to provide information about your app’s containers to CloudKit JS. Also, specify whether to use the development or production environment. See [CloudKit](cloudkitjs/cloudkit.md) for an example, and see [CloudKit JS Data Types](cloudkitjs/cloudkit-js-data-types.md) for details on the [CloudKit.CloudKitConfig](cloudkitjs/cloudkit.cloudkitconfig.md) properties you can set.

Now you can use the `CloudKit`.[getDefaultContainer](cloudkitjs/cloudkit/getdefaultcontainer.md) method in your JavaScript code to get the app container ([CloudKit.Container](cloudkitjs/cloudkit.container.md)) and its database objects ([CloudKit.Database](cloudkitjs/cloudkit.database.md)).

<a id="Next-Steps"></a>

### Next Steps

To learn CloudKit JS, download the [CloudKit Catalog: An Introduction to CloudKit (Cocoa and JavaScript) ](https://developer.apple.com/library/archive/samplecode/CloudAtlas/Introduction/Intro.html#//apple_ref/doc/uid/TP40014599) sample code project and refer to the CloudKit JS class reference documents for API details. For the hosted version of this sample code project, which allows you to execute CloudKit JS code and see the CloudKit server responses, go to [CloudKit Catalog](https://cdn.apple-CloudKit.com/CloudKit-catalog/).

The following resources provide more information about CloudKit:

- [CloudKit Quick Start](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitQuickStart/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014987) gets you started creating a CloudKit native app.
- [CloudKit](cloudkitjs/cloudkit.md) teaches you how to write native app code.
- [CloudKit Web Services Reference](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/index.html#//apple_ref/doc/uid/TP40015240) describes the HTTP interface to CloudKit containers and databases.
- [iCloud Design Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/iCloudDesignGuide/Chapters/Introduction.html#//apple_ref/doc/uid/TP40012094) provides an overview of all the iCloud services available to apps submitted to the App Store or Mac App Store.

## Topics

### Classes

- [CloudKit](cloudkitjs/cloudkit.md): Use the `CloudKit` namespace to configure CloudKit JS, and to access app containers and global constants.
- [CloudKit.CKError](cloudkitjs/cloudkit.ckerror.md): A [CloudKit.CKError](cloudkitjs/cloudkit.ckerror.md) object encapsulates an error that may occur when you use CloudKit JS. This includes CloudKit server errors and local errors.
- [CloudKit.Container](cloudkitjs/cloudkit.container.md): A [CloudKit.Container](cloudkitjs/cloudkit.container.md) object provides access to an app container, and through the app container, access to its databases. It also contains methods for authenticating and fetching users.
- [CloudKit.Database](cloudkitjs/cloudkit.database.md): A [CloudKit.Database](cloudkitjs/cloudkit.database.md) object represents a public or private database in an app container.
- [CloudKit.DatabaseChangesResponse](cloudkitjs/cloudkit.databasechangesresponse.md): A [CloudKit.DatabaseChangesResponse](cloudkitjs/cloudkit.databasechangesresponse.md) object encapsulates the results of fetching changed record zones in a database.
- [CloudKit.Notification](cloudkitjs/cloudkit.notification.md): A [CloudKit.Notification](cloudkitjs/cloudkit.notification.md) object represents a push notification that was sent to your app. Notifications are triggered by subscriptions that you save to the database. To subscribe to record changes and handle push notifications, see the `saveSubscription` method in [CloudKit.Database](cloudkitjs/cloudkit.database.md).
- [CloudKit.QueryNotification](cloudkitjs/cloudkit.querynotification.md): A [CloudKit.QueryNotification](cloudkitjs/cloudkit.querynotification.md) object represents a push notification that was generated by a subscription object. A query notification is triggered by subscriptions where the `subscriptionType` key is `query`. Use a [CloudKit.QueryNotification](cloudkitjs/cloudkit.querynotification.md) object to get information about the record that changed. To create query subscriptions and handle push notifications, see the [saveSubscriptions](cloudkitjs/cloudkit.database/savesubscriptions.md) method in [CloudKit.Database](cloudkitjs/cloudkit.database.md).
- [CloudKit.QueryResponse](cloudkitjs/cloudkit.queryresponse.md): A [CloudKit.QueryResponse](cloudkitjs/cloudkit.queryresponse.md) object encapsulates the results of using a query to fetch records
- [CloudKit.RecordInfosResponse](cloudkitjs/cloudkit.recordinfosresponse.md): A [CloudKit.RecordInfosResponse](cloudkitjs/cloudkit.recordinfosresponse.md) object encapsulates the results of fetching information about records in general and shared records in particular.
- [CloudKit.RecordsBatchBuilder](cloudkitjs/cloudkit.recordsbatchbuilder.md): A [CloudKit.RecordsBatchBuilder](cloudkitjs/cloudkit.recordsbatchbuilder.md) object encapsulates the results of changes to multiple records in a single database operation.
- [CloudKit.RecordsResponse](cloudkitjs/cloudkit.recordsresponse.md): A [CloudKit.RecordsResponse](cloudkitjs/cloudkit.recordsresponse.md) object encapsulates the results of fetching records.
- [CloudKit.RecordZoneChangesResponse](cloudkitjs/cloudkit.recordzonechangesresponse.md): The [CloudKit.RecordZoneChangesResponse](cloudkitjs/cloudkit.recordzonechangesresponse.md) object encapsulates the results of fetching changes to one or more record zones.
- [CloudKit.RecordZoneNotification](cloudkitjs/cloudkit.recordzonenotification.md): A [CloudKit.RecordZoneNotification](cloudkitjs/cloudkit.recordzonenotification.md) object represents a push notification that was caused by changes to the contents of a record zone. A zone notification is triggered by subscriptions where the `subscriptionType` key is `zone`. Use a [CloudKit.RecordZoneNotification](cloudkitjs/cloudkit.recordzonenotification.md) object to get information about the record that changed. To create zone subscriptions and handle push notifications, see the [saveSubscriptions](cloudkitjs/cloudkit.database/savesubscriptions.md) method in [CloudKit.Database](cloudkitjs/cloudkit.database.md).
- [CloudKit.RecordZonesResponse](cloudkitjs/cloudkit.recordzonesresponse.md): A [CloudKit.RecordZonesResponse](cloudkitjs/cloudkit.recordzonesresponse.md) object encapsulates the results of database operations on a record zone.
- [CloudKit.Response](cloudkitjs/cloudkit.response.md): The [CloudKit.Response](cloudkitjs/cloudkit.response.md) class is an abstract superclass for subclasses that encapsulate the response from server requests. Don’t create instances of this class. Instances of subclasses are returned by methods in the [CloudKit.Container](cloudkitjs/cloudkit.container.md) and [CloudKit.Database](cloudkitjs/cloudkit.database.md) classes. Most of these methods return a `Promise` object that resolves to a subclass of [CloudKit.Response](cloudkitjs/cloudkit.response.md) if the operation is successful.
- [CloudKit.ShareRecordType](cloudkitjs/cloudkit.sharerecordtype.md): Display information about the record type of a shared record.
- [CloudKit.SubscriptionsResponse](cloudkitjs/cloudkit.subscriptionsresponse.md): A [CloudKit.SubscriptionsResponse](cloudkitjs/cloudkit.subscriptionsresponse.md) object encapsulates the results of database operations on subscriptions.
- [CloudKit.UserIdentitiesResponse](cloudkitjs/cloudkit.useridentitiesresponse.md): A [CloudKit.UserIdentitiesResponse](cloudkitjs/cloudkit.useridentitiesresponse.md) object encapsulates the results of fetching user identities.

### Reference

- [CloudKit JS Data Types](cloudkitjs/cloudkit-js-data-types.md): This document describes the CloudKit JS data types that are not described in individual class reference documents.
- [CloudKit JS Enumerations](cloudkitjs/cloudkit-js-enumerations.md)
