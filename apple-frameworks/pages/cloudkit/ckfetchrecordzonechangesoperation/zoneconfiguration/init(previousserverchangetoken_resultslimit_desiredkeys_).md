> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration/init(previousserverchangetoken:resultslimit:desiredkeys:)](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/zoneconfiguration/init(previousserverchangetoken:resultslimit:desiredkeys:))

# init(previousServerChangeToken:resultsLimit:desiredKeys:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+ · Swift 4.2+

Creates a zone configuration with the desired keys and a result limit for updates.

## Declaration

```swift
convenience init(previousServerChangeToken: CKServerChangeToken? = nil, resultsLimit: Int? = nil, desiredKeys: [CKRecord.FieldKey]? = nil)
```

## Parameters

- `previousServerChangeToken`: A CloudKit server change token.
- `resultsLimit`: The maximum number of updated records that CloudKit retrieves with an update operation. The default is 0.
- `desiredKeys`: An array of the desired record keys CloudKit retrieves with updates.
