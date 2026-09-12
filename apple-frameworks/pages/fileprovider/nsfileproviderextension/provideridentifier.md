> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/provideridentifier](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/provideridentifier)

# providerIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

A purpose identifier for coordinated reads and writes.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [providerIdentifier](../nsfileprovidermanager/provideridentifier.md) method instead.

## Declaration

```swift
var providerIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a unique string that can be used as a purpose identifier for file coordination. The File Provider extension should use this identifier when performing coordinated reads and writes, to help prevent deadlocks.

Pass this identifier to the file coordinator’s `setPurposeIdentifier:` method before performing a coordinated read or write.

This method returns the containing app’s bundle identifier.

## See Also

### Accessing the document storage

- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for all shared documents.

# providerIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 11.0) · iPadOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

A purpose identifier for coordinated reads and writes.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [providerIdentifier](../nsfileprovidermanager/provideridentifier.md) method instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * providerIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property contains a unique string that can be used as a purpose identifier for file coordination. The File Provider extension should use this identifier when performing coordinated reads and writes, to help prevent deadlocks.

Pass this identifier to the file coordinator’s `setPurposeIdentifier:` method before performing a coordinated read or write.

This method returns the containing app’s bundle identifier.

## See Also

### Accessing the document storage

- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for all shared documents.
