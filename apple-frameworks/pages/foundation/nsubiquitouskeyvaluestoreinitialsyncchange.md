> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestoreinitialsyncchange](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestoreinitialsyncchange)

# NSUbiquitousKeyValueStoreInitialSyncChange (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the initial attempt to load keys and values from iCloud is in progress.

## Declaration

```swift
var NSUbiquitousKeyValueStoreInitialSyncChange: Int { get }
```

<a id="discussion"></a>

## Discussion

The system downloads the existing keys and values from iCloud when someone logs into a device using their Apple account. If you try to write a key and value to the iCloud data store while this initial download is in progress, the system generates the [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) notification with this key. Schedule the write operations after a delay to give the system time to download the data and ensure the local copies match the truth in iCloud.

## See Also

### Detecting changes to values

- [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreChangedKeysKey](nsubiquitouskeyvaluestorechangedkeyskey.md): A key that indicates which keys changed in the iCloud key-value store.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md): A constant that indicates an attempt to write data exceeded the quota limits.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.

# NSUbiquitousKeyValueStoreInitialSyncChange (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the initial attempt to load keys and values from iCloud is in progress.

## Declaration

```objectivec
NSUbiquitousKeyValueStoreInitialSyncChange
```

<a id="discussion"></a>

## Discussion

The system downloads the existing keys and values from iCloud when someone logs into a device using their Apple account. If you try to write a key and value to the iCloud data store while this initial download is in progress, the system generates the [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) notification with this key. Schedule the write operations after a delay to give the system time to download the data and ensure the local copies match the truth in iCloud.

## See Also

### Detecting changes to values

- [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreChangedKeysKey](nsubiquitouskeyvaluestorechangedkeyskey.md): A key that indicates which keys changed in the iCloud key-value store.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md): A constant that indicates an attempt to write data exceeded the quota limits.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.
