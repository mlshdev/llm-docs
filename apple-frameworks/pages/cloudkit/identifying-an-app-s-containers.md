> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/identifying-an-app-s-containers](https://developer.apple.com/documentation/cloudkit/identifying-an-app-s-containers)

# Identifying an App’s Containers

**Interface languages:** Swift, Objective-C

**Framework:** CloudKit  
**Kind:** Article

Use Xcode’s Project navigator to find the identifiers of active CloudKit containers.

<a id="overview"></a>

## Overview

An app’s Xcode project manages which CloudKit containers are available to that app. When you write code that needs to provide container identifiers for all of the containers your app uses, reference the list of active containers in Xcode.

<a id="Identify-the-Containers-Your-App-Uses"></a>

### Identify the Containers Your App Uses

In your app’s Xcode project, select Signing & Capabilities \> iCloud in the Project navigator.

![A screenshot of an Xcode project’s Signing & Capabilities pane. The project contains the iCloud capability with the CloudKit option in a selected state. There are three custom CloudKit containers — app, docs, and settings — and each is in a selected state.](https://developer.apple.com/images/com.apple.cloudkit/media-3743337@2x.png)

After you identify the containers that your app uses, you can create instances of [CKContainer](ckcontainer.md) in your app and interact with CloudKit data.

```swift
// These constants correspond to the containers you configure for your
// target in your project's Signing & Capabilities tab.
let app = CKContainer(identifier: "iCloud.com.example.MyCloudKitApp.app")
let docs = CKContainer(identifier: "iCloud.com.example.MyCloudKitApp.docs")
let settings = CKContainer(identifier: "iCloud.com.example.MyCloudKitApp.settings")
```

## See Also

### Privacy

- [Encrypting User Data](encrypting-user-data.md): Deploy industry-standard security technologies using CloudKit encryption.
- [Providing User Access to CloudKit Data](providing-user-access-to-cloudkit-data.md): Provide users access to the data your app stores on their behalf.
- [Changing Access Controls on User Data](changing-access-controls-on-user-data.md): Restrict access to or remove restrictions from a user’s data at their request.
- [CKFetchWebAuthTokenOperation](ckfetchwebauthtokenoperation.md): An operation that creates an authentication token for use with CloudKit web services.
- [Responding to Requests to Delete Data](responding-to-requests-to-delete-data.md): Provide options for users to delete their CloudKit data from your app.
