> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/configuredwith(configuration:group:body:)-12vrs](https://developer.apple.com/documentation/cloudkit/ckdatabase/configuredwith(configuration:group:body:)-12vrs)

# configuredWith(configuration:group:body:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Applies a temporary configuration to the database within the scope of a closure.

## Declaration

```swift
@discardableResult func configuredWith<R>(configuration: CKOperation.Configuration? = nil, group: CKOperationGroup? = nil, body: (CKDatabase) throws -> R) rethrows -> R
```

## Parameters

- `configuration`: An interim configuration to apply to the current database.
- `group`: The group to associate with the methods you execute in the closure. Specifying a group helps the system prioritize those method calls, and helps you identify the calls in the server logs in CloudKit Console. For more information, see [CKOperationGroup](../ckoperationgroup.md).
- `body`: The closure to execute with the temporarily configured database.

<a id="discussion"></a>

## Discussion

Use this method to apply a specific configuration to the current database that lasts only for the duration of the trailing closure. For example, you might want to temporarily elevate the quality of service (QoS) for a group of method calls, or allow one or more expensive method calls to execute only while the device is using WiFi.

```swift
func fetchRecords(
    with ids: [CKRecord.ID],
    completionHandler: @escaping (
        Result<[CKRecord.ID : Result<CKRecord, any Error>], any Error>
    ) -> Void
) -> Void {

    // Get a reference to the user's private database.
    let database = CKContainer.default().privateCloudDatabase

    // Create a configuration that denies cellular access.
    let config = CKOperation.Configuration()
    config.allowsCellularAccess = false

    // Configure the database and execute an expensive fetch.
    database.configuredWith(configuration: config) { db in
        db.fetch(withRecordIDs: ids, completionHandler: completionHandler)
    }
}
```

## See Also

### Configuring Database Requests

- [configuredWith(configuration:group:body:)](configuredwith%28configuration_group_body_%29-637p1.md): Applies a temporary configuration to the database within the scope of a closure that supports concurrency.
