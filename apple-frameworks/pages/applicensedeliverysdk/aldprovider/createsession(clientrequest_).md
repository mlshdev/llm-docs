> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldprovider/createsession(clientrequest:)](https://developer.apple.com/documentation/applicensedeliverysdk/aldprovider/createsession(clientrequest:))

# createSession(clientRequest:)

**Framework:** App License Delivery SDK  
**Kind:** Instance Method

Creates an ALD Session

## Declaration

```swift
func createSession(clientRequest: [UInt8]) throws -> ALDSession
```

## Parameters

- `clientRequest`: License request in actual bytes format

<a id="return-value"></a>

## Return Value

An ALD session on success, or nil when fails

## Mentioned In

- [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md)
