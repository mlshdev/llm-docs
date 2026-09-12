> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore)

# NSUbiquitousKeyValueStore (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

An iCloud-based container of key-value pairs you share among instances of your app running on a person’s devices.

## Declaration

```swift
class NSUbiquitousKeyValueStore
```

<a id="overview"></a>

## Overview

Use the shared `NSUbiquitousKeyValueStore` object to store settings, configuration information, and app-specific data in a person’s iCloud account and share it among instances of your app running on all of the person’s devices. The object stores a dictionary of key-value pairs that you provide, and propagates that data to devices with the same Apple account. Sharing data among different devices gives you a way to coordinate your app’s behavior on those devices. For example, a textbook app might save the current page number on someone’s iPhone so that the person can continue reading from the same place on their other devices.

> **Important**

> Don’t store personal or sensitive information in the key-value store. The system stores the information on disk in an unencrypted format. Store personal or sensitive information in the person’s Keychain instead.

Each app has a single iCloud key-value store object, which you retrieve from the [default](nsubiquitouskeyvaluestore/default.md) class property. Use this same object throughout your app to read and write values. Don’t subclass `NSUbiquitousKeyValueStore`.

> **Note**

> To use this object, you must distribute your app through the App Store or Mac App Store, and you must request the [iCloud key-value store entitlement](../bundleresources/entitlements/com.apple.developer.ubiquity-kvstore-identifier.md) in your Xcode project.

The keys in the iCloud key-value store identify the item and its purpose in your app, and the value is a data object you use to implement the corresponding behavior in your app. Values must be property list types such as [Int64](https://developer.apple.com/documentation/swift/int64), [Float](https://developer.apple.com/documentation/swift/float), [Double](https://developer.apple.com/documentation/swift/double), [Bool](https://developer.apple.com/documentation/swift/bool), [String](https://developer.apple.com/documentation/swift/string), [NSNumber](nsnumber.md), [Date](date.md), [Array](https://developer.apple.com/documentation/swift/array), or [Dictionary](https://developer.apple.com/documentation/swift/dictionary). To include other types of objects in the key-value store, archive them to a [Data](data.md) object first and store that object instead. Prefer simple types over custom objects whenever possible.

When you write a new value, the iCloud key-value store saves it in memory initially and writes it to disk asynchronously later. If the device doesn’t have an active Apple account, the changes remain only on the current device. When the person signs into their account, the system forwards any changes to the iCloud server and reconciles the values there with the local ones. As you make more changes, the system keeps the local and server-based copies of the data synchronized, updating each one at appropriate times.

When a value changes on one device, iCloud forwards that change to the person’s other devices. If your app is running on one of those other devices, the system posts [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) to report the change. Register for that notification to keep all instances of your app in sync.

When designing the keys and values you intend to save for your app, consider the following size limitations:

- Your app can have no more than 1024 keys in the iCloud key-value store.
- The total amount of available storage space for all values is 1 megabyte.
- The maximum size for a single value is 1 megabyte. Therefore, if you associate 1 megabyte of data with a single key, you can’t write other keys to the store.
- The maximum length for each key string is 128 characters using the UTF-16 encoding. Key strings don’t count against the 1 megabyte quota for values.

If you exceed any of the prescribed limits during a write operation, the operation fails and the system doesn’t add the keys or values to the store. If a key string exceeds the maximum length, the system raises an exception. If a write operation would exceed your app’s quota, the system posts [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) notification with the change reason set to [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md).

## Topics

### Getting the shared instance

- [default](nsubiquitouskeyvaluestore/default.md): The shared iCloud key-value store object.

### Getting values

- [bool(forKey:)](nsubiquitouskeyvaluestore/bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [double(forKey:)](nsubiquitouskeyvaluestore/double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLong(forKey:)](nsubiquitouskeyvaluestore/longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [string(forKey:)](nsubiquitouskeyvaluestore/string%28forkey_%29.md): Returns the string associated with the specified key.
- [data(forKey:)](nsubiquitouskeyvaluestore/data%28forkey_%29.md): Returns the data object associated with the specified key.
- [object(forKey:)](nsubiquitouskeyvaluestore/object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](nsubiquitouskeyvaluestore/array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](nsubiquitouskeyvaluestore/dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](nsubiquitouskeyvaluestore/dictionaryrepresentation.md): A dictionary with all of the key-value pairs in the iCloud key-value store.

### Setting values

- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-7tt20.md): Sets the value of the specified key to a 64-bit integer value.
- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-3ga7z.md): Sets the value of the specified key to a data object.
- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-40a8f.md): Sets the value of the specified key to an array of property list objects.
- [set(\_:forKey:)](nsubiquitouskeyvaluestore/set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.

### Synchronizing the in-memory cache with iCloud

- [synchronize()](nsubiquitouskeyvaluestore/synchronize%28%29.md): Synchronizes the in-memory keys and values with the ones stored in iCloud.

### Removing keys

- [removeObject(forKey:)](nsubiquitouskeyvaluestore/removeobject%28forkey_%29.md): Removes the value for the specified key from the iCloud key-value store.

### Detecting changes to values

- [didChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreChangedKeysKey](nsubiquitouskeyvaluestorechangedkeyskey.md): A key that indicates which keys changed in the iCloud key-value store.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreInitialSyncChange](nsubiquitouskeyvaluestoreinitialsyncchange.md): A constant that indicates the initial attempt to load keys and values from iCloud is in progress.
- [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md): A constant that indicates an attempt to write data exceeded the quota limits.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### App Preferences

- [Synchronizing App Preferences with iCloud](synchronizing-app-preferences-with-icloud.md): Store app preferences in iCloud and share them among instances of your app running on a user’s connected devices.

# NSUbiquitousKeyValueStore (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

An iCloud-based container of key-value pairs you share among instances of your app running on a person’s devices.

## Declaration

```objectivec
@interface NSUbiquitousKeyValueStore : NSObject
```

<a id="overview"></a>

## Overview

Use the shared `NSUbiquitousKeyValueStore` object to store settings, configuration information, and app-specific data in a person’s iCloud account and share it among instances of your app running on all of the person’s devices. The object stores a dictionary of key-value pairs that you provide, and propagates that data to devices with the same Apple account. Sharing data among different devices gives you a way to coordinate your app’s behavior on those devices. For example, a textbook app might save the current page number on someone’s iPhone so that the person can continue reading from the same place on their other devices.

> **Important**

> Don’t store personal or sensitive information in the key-value store. The system stores the information on disk in an unencrypted format. Store personal or sensitive information in the person’s Keychain instead.

Each app has a single iCloud key-value store object, which you retrieve from the [defaultStore](nsubiquitouskeyvaluestore/default.md) class property. Use this same object throughout your app to read and write values. Don’t subclass `NSUbiquitousKeyValueStore`.

> **Note**

> To use this object, you must distribute your app through the App Store or Mac App Store, and you must request the [iCloud key-value store entitlement](../bundleresources/entitlements/com.apple.developer.ubiquity-kvstore-identifier.md) in your Xcode project.

The keys in the iCloud key-value store identify the item and its purpose in your app, and the value is a data object you use to implement the corresponding behavior in your app. Values must be property list types such as [Int64](https://developer.apple.com/documentation/swift/int64), [Float](https://developer.apple.com/documentation/swift/float), [Double](https://developer.apple.com/documentation/swift/double), [Bool](https://developer.apple.com/documentation/swift/bool), [String](https://developer.apple.com/documentation/swift/string), [NSNumber](nsnumber.md), [Date](date.md), [Array](https://developer.apple.com/documentation/swift/array), or [Dictionary](https://developer.apple.com/documentation/swift/dictionary). To include other types of objects in the key-value store, archive them to a [Data](data.md) object first and store that object instead. Prefer simple types over custom objects whenever possible.

When you write a new value, the iCloud key-value store saves it in memory initially and writes it to disk asynchronously later. If the device doesn’t have an active Apple account, the changes remain only on the current device. When the person signs into their account, the system forwards any changes to the iCloud server and reconciles the values there with the local ones. As you make more changes, the system keeps the local and server-based copies of the data synchronized, updating each one at appropriate times.

When a value changes on one device, iCloud forwards that change to the person’s other devices. If your app is running on one of those other devices, the system posts [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) to report the change. Register for that notification to keep all instances of your app in sync.

When designing the keys and values you intend to save for your app, consider the following size limitations:

- Your app can have no more than 1024 keys in the iCloud key-value store.
- The total amount of available storage space for all values is 1 megabyte.
- The maximum size for a single value is 1 megabyte. Therefore, if you associate 1 megabyte of data with a single key, you can’t write other keys to the store.
- The maximum length for each key string is 128 characters using the UTF-16 encoding. Key strings don’t count against the 1 megabyte quota for values.

If you exceed any of the prescribed limits during a write operation, the operation fails and the system doesn’t add the keys or values to the store. If a key string exceeds the maximum length, the system raises an exception. If a write operation would exceed your app’s quota, the system posts [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md) notification with the change reason set to [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md).

## Topics

### Getting the shared instance

- [defaultStore](nsubiquitouskeyvaluestore/default.md): The shared iCloud key-value store object.

### Getting values

- [boolForKey:](nsubiquitouskeyvaluestore/bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [doubleForKey:](nsubiquitouskeyvaluestore/double%28forkey_%29.md): Returns the double value associated with the specified key.
- [longLongForKey:](nsubiquitouskeyvaluestore/longlong%28forkey_%29.md): Returns the 64-bit integer value associated with the specified key.
- [stringForKey:](nsubiquitouskeyvaluestore/string%28forkey_%29.md): Returns the string associated with the specified key.
- [dataForKey:](nsubiquitouskeyvaluestore/data%28forkey_%29.md): Returns the data object associated with the specified key.
- [objectForKey:](nsubiquitouskeyvaluestore/object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](nsubiquitouskeyvaluestore/array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](nsubiquitouskeyvaluestore/dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](nsubiquitouskeyvaluestore/dictionaryrepresentation.md): A dictionary with all of the key-value pairs in the iCloud key-value store.

### Setting values

- [setBool:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-8o8mq.md): Sets the value of the specified key to a Boolean value.
- [setDouble:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-1xml0.md): Sets the value of the specified key to a double value.
- [setLongLong:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-7tt20.md): Sets the value of the specified key to a 64-bit integer value.
- [setString:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-2rlp.md): Sets the value of the specified key to a string value.
- [setData:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-3ga7z.md): Sets the value of the specified key to a data object.
- [setObject:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-9e3de.md): Sets the value of the specified key to a property list object.
- [setArray:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-40a8f.md): Sets the value of the specified key to an array of property list objects.
- [setDictionary:forKey:](nsubiquitouskeyvaluestore/set%28__forkey_%29-9vmlm.md): Sets the value of the specified key to a dictionary of property list objects.

### Synchronizing the in-memory cache with iCloud

- [synchronize](nsubiquitouskeyvaluestore/synchronize%28%29.md): Synchronizes the in-memory keys and values with the ones stored in iCloud.

### Removing keys

- [removeObjectForKey:](nsubiquitouskeyvaluestore/removeobject%28forkey_%29.md): Removes the value for the specified key from the iCloud key-value store.

### Detecting changes to values

- [NSUbiquitousKeyValueStoreDidChangeExternallyNotification](nsubiquitouskeyvaluestore/didchangeexternallynotification.md): Posted when the value of one or more keys changes due to incoming data from iCloud.
- [NSUbiquitousKeyValueStoreChangeReasonKey](nsubiquitouskeyvaluestorechangereasonkey.md): A key that indicates the reason why the key-value store changed.
- [NSUbiquitousKeyValueStoreChangedKeysKey](nsubiquitouskeyvaluestorechangedkeyskey.md): A key that indicates which keys changed in the iCloud key-value store.
- [NSUbiquitousKeyValueStoreServerChange](nsubiquitouskeyvaluestoreserverchange.md): A constant that indicates a value changed in iCloud.
- [NSUbiquitousKeyValueStoreInitialSyncChange](nsubiquitouskeyvaluestoreinitialsyncchange.md): A constant that indicates the initial attempt to load keys and values from iCloud is in progress.
- [NSUbiquitousKeyValueStoreQuotaViolationChange](nsubiquitouskeyvaluestorequotaviolationchange.md): A constant that indicates an attempt to write data exceeded the quota limits.
- [NSUbiquitousKeyValueStoreAccountChange](nsubiquitouskeyvaluestoreaccountchange.md): A constant that indicates the current Apple account changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### App Preferences

- [Synchronizing App Preferences with iCloud](synchronizing-app-preferences-with-icloud.md): Store app preferences in iCloud and share them among instances of your app running on a user’s connected devices.
