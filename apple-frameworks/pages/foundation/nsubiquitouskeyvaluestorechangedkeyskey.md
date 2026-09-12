> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestorechangedkeyskey](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestorechangedkeyskey)

# NSUbiquitousKeyValueStoreChangedKeysKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key that indicates which keys changed in the iCloud key-value store.

## Declaration

```swift
let NSUbiquitousKeyValueStoreChangedKeysKey: String
```

<a id="discussion"></a>

## Discussion

When the iCloud key-value store changes due to an external source, the system generates a [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) notification. That notification can include this key. The value of this key is an array of strings, each of which contains the name of a key that changed.

## See Also

### Detecting changes to values

- [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreInitialSyncChange](nsubiquitouskeyvaluestoreinitialsyncchange.md): A constant that indicates the initial attempt to load keys and values from iCloud is in progress.
- [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md): A constant that indicates an attempt to write data exceeded the quota limits.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.

# NSUbiquitousKeyValueStoreChangedKeysKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key that indicates which keys changed in the iCloud key-value store.

## Declaration

```objectivec
extern NSString * const NSUbiquitousKeyValueStoreChangedKeysKey;
```

<a id="discussion"></a>

## Discussion

When the iCloud key-value store changes due to an external source, the system generates a [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) notification. That notification can include this key. The value of this key is an array of strings, each of which contains the name of a key that changed.

## See Also

### Detecting changes to values

- [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreInitialSyncChange](nsubiquitouskeyvaluestoreinitialsyncchange.md): A constant that indicates the initial attempt to load keys and values from iCloud is in progress.
- [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md): A constant that indicates an attempt to write data exceeded the quota limits.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.
