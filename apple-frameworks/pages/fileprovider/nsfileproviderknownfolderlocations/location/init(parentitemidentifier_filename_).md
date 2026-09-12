> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderknownfolderlocations/location/init(parentitemidentifier:filename:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderknownfolderlocations/location/init(parentitemidentifier:filename:))

# init(parentItemIdentifier:filename:) (Swift)

**Framework:** File Provider  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Initialize a location with the filename of the folder in a specified parent.

## Declaration

```swift
init(parentItemIdentifier: NSFileProviderItemIdentifier, filename: String)
```

<a id="discussion"></a>

## Discussion

When replicating a known folder the system will reuse a folder located at the specified filename within the parent if one exists, or create a new item at this location if none exists yet.

# initWithParentItemIdentifier:filename: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Initialize a location with the filename of the folder in a specified parent.

## Declaration

```objectivec
- (instancetype) initWithParentItemIdentifier:(NSFileProviderItemIdentifier) parentItemIdentifier filename:(NSString *) filename;
```

<a id="discussion"></a>

## Discussion

When replicating a known folder the system will reuse a folder located at the specified filename within the parent if one exists, or create a new item at this location if none exists yet.
