> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/default](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/default)

# default (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

A property that returns the shared file provider manager object.

## Declaration

```swift
class var `default`: NSFileProviderManager { get }
```

<a id="Discussion"></a>

## Discussion

This property returns a manager for the default domain on iOS. You can access the default domain in both the containing app and the File Provider extension. On macOS, use an explicit domain by calling [init(for:)](init%28for_%29.md) instead.

## See Also

### Accessing File Provider data

- [documentStorageURL](documentstorageurl.md): The root URL for all shared documents.
- [providerIdentifier](provideridentifier.md): A purpose identifier for coordinated reads and writes.

# defaultManager (Objective-C)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

A property that returns the shared file provider manager object.

## Declaration

```objectivec
@property (class, strong, readonly) NSFileProviderManager * defaultManager;
```

<a id="Discussion"></a>

## Discussion

This property returns a manager for the default domain on iOS. You can access the default domain in both the containing app and the File Provider extension. On macOS, use an explicit domain by calling [managerForDomain:](init%28for_%29.md) instead.

## See Also

### Accessing File Provider data

- [documentStorageURL](documentstorageurl.md): The root URL for all shared documents.
- [providerIdentifier](provideridentifier.md): A purpose identifier for coordinated reads and writes.
