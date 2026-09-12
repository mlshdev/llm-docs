> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/responding-to-requests-to-delete-data](https://developer.apple.com/documentation/cloudkit/responding-to-requests-to-delete-data)

# Responding to Requests to Delete Data

**Interface languages:** Swift, Objective-C

**Framework:** CloudKit  
**Kind:** Article

Provide options for users to delete their CloudKit data from your app.

<a id="overview"></a>

## Overview

If your app stores data in CloudKit on behalf of your users, give them a simple way to delete their data.

<a id="Identify-Containers"></a>

### Identify Containers

To be sure that you delete all of a user’s data that your app stores in CloudKit, cross-reference the list of containers your app has access to in Xcode and assemble a list of those containers’ identifiers. [Identifying an App’s Containers](identifying-an-app-s-containers.md) describes this process.

The example below stores containers in an array to use later for enumeration:

```swift
let containers: [CKContainer] = [
    CKContainer.default(),
    .init(identifier: "iCloud.com.example.myexampleapp.documents"),
    .init(identifier: "iCloud.com.example.myexampleapp.settings")
]
```

<a id="Delete-Records"></a>

### Delete Records

The example below uses an instance of [CKModifyRecordZonesOperation](ckmodifyrecordzonesoperation.md) to delete all records in each container’s private database:

```swift
for container in containers {
    container.privateCloudDatabase.fetchAllRecordZones { zones, error in
        guard let zones = zones, error == nil else {
            print("Error fetching zones.")
            return
        }
        
        let zoneIDs = zones.map { $0.zoneID }
        let deletionOperation = CKModifyRecordZonesOperation(recordZonesToSave: nil, recordZoneIDsToDelete: zoneIDs)
        
        deletionOperation.modifyRecordZonesCompletionBlock = { _, deletedZones, error in
            guard error == nil else {
                let error = error!
                
                print("Error deleting records.", error)
                return
            }

            print("Records successfully deleted in this zone.")
        }
        
        container.privateCloudDatabase.add(deletionOperation)
    }
}
```

## See Also

### Privacy

- [Encrypting User Data](encrypting-user-data.md): Deploy industry-standard security technologies using CloudKit encryption.
- [Providing User Access to CloudKit Data](providing-user-access-to-cloudkit-data.md): Provide users access to the data your app stores on their behalf.
- [Changing Access Controls on User Data](changing-access-controls-on-user-data.md): Restrict access to or remove restrictions from a user’s data at their request.
- [CKFetchWebAuthTokenOperation](ckfetchwebauthtokenoperation.md): An operation that creates an authentication token for use with CloudKit web services.
- [Identifying an App’s Containers](identifying-an-app-s-containers.md): Use Xcode’s Project navigator to find the identifiers of active CloudKit containers.
