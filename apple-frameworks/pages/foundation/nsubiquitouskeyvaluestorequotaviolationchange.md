> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestorequotaviolationchange](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestorequotaviolationchange)

# NSUbiquitousKeyValueStoreQuotaViolationChange (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates an attempt to write data exceeded the quota limits.

## Declaration

```swift
var NSUbiquitousKeyValueStoreQuotaViolationChange: Int { get }
```

<a id="discussion"></a>

## Discussion

The system enforces the following limitations for data you save to the iCloud key-value store:

- Your app can have no more than 1024 keys in the iCloud key-value store.
- The total amount of available storage space for all values is 1 megabyte.
- The maximum size for a single value is 1 megabyte. Therefore, if you associate 1 megabyte of data with a single key, you can’t write other keys to the store.

## See Also

### Detecting changes to values

- [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreChangedKeysKey](nsubiquitouskeyvaluestorechangedkeyskey.md): A key that indicates which keys changed in the iCloud key-value store.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreInitialSyncChange](nsubiquitouskeyvaluestoreinitialsyncchange.md): A constant that indicates the initial attempt to load keys and values from iCloud is in progress.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.

# NSUbiquitousKeyValueStoreQuotaViolationChange (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates an attempt to write data exceeded the quota limits.

## Declaration

```objectivec
NSUbiquitousKeyValueStoreQuotaViolationChange
```

<a id="discussion"></a>

## Discussion

The system enforces the following limitations for data you save to the iCloud key-value store:

- Your app can have no more than 1024 keys in the iCloud key-value store.
- The total amount of available storage space for all values is 1 megabyte.
- The maximum size for a single value is 1 megabyte. Therefore, if you associate 1 megabyte of data with a single key, you can’t write other keys to the store.

## See Also

### Detecting changes to values

- [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreChangedKeysKey](nsubiquitouskeyvaluestorechangedkeyskey.md): A key that indicates which keys changed in the iCloud key-value store.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreInitialSyncChange](nsubiquitouskeyvaluestoreinitialsyncchange.md): A constant that indicates the initial attempt to load keys and values from iCloud is in progress.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.
