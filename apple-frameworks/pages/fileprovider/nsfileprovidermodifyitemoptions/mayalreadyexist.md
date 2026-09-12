> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermodifyitemoptions/mayalreadyexist](https://developer.apple.com/documentation/fileprovider/nsfileprovidermodifyitemoptions/mayalreadyexist)

# mayAlreadyExist (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

An option that indicates the changes may already exist in your remote storage.

## Declaration

```swift
static var mayAlreadyExist: NSFileProviderModifyItemOptions { get }
```

<a id="discussion"></a>

## Discussion

This option applies when moving the item to a location where it may refer to an item that already exists. This situation may occur when merging two directories together.

## See Also

### Choosing Modify Item Options

- [failOnConflict](failonconflict.md): An option to fail an upload in the event of a version conflict.

# NSFileProviderModifyItemMayAlreadyExist (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.0+ · visionOS 1.0+

An option that indicates the changes may already exist in your remote storage.

## Declaration

```objectivec
NSFileProviderModifyItemMayAlreadyExist
```

<a id="discussion"></a>

## Discussion

This option applies when moving the item to a location where it may refer to an item that already exists. This situation may occur when merging two directories together.

## See Also

### Choosing Modify Item Options

- [NSFileProviderModifyItemFailOnConflict](failonconflict.md): An option to fail an upload in the event of a version conflict.
