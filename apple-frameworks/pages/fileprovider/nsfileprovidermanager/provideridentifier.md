> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/provideridentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/provideridentifier)

# providerIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

A purpose identifier for coordinated reads and writes.

## Declaration

```swift
var providerIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a unique string that can be used as a purpose identifier for file coordination. The File Provider extension should use this identifier when performing coordinated reads and writes, to help prevent deadlocks.

Pass this identifier to the file coordinator’s `setPurposeIdentifier:` method before performing a coordinated read or write.

This method returns the containing app’s bundle identifier.

> **Note**

>  While this property is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Accessing File Provider data

- [default](default.md): A property that returns the shared file provider manager object.
- [documentStorageURL](documentstorageurl.md): The root URL for all shared documents.

# providerIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

A purpose identifier for coordinated reads and writes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * providerIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property contains a unique string that can be used as a purpose identifier for file coordination. The File Provider extension should use this identifier when performing coordinated reads and writes, to help prevent deadlocks.

Pass this identifier to the file coordinator’s `setPurposeIdentifier:` method before performing a coordinated read or write.

This method returns the containing app’s bundle identifier.

> **Note**

>  While this property is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Accessing File Provider data

- [defaultManager](default.md): A property that returns the shared file provider manager object.
- [documentStorageURL](documentstorageurl.md): The root URL for all shared documents.
