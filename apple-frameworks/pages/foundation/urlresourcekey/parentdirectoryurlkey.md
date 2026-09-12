> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/parentdirectoryurlkey](https://developer.apple.com/documentation/foundation/urlresourcekey/parentdirectoryurlkey)

# parentDirectoryURLKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The container directory of the resource.

## Declaration

```swift
static let parentDirectoryURLKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a read-only `NSURL` object, or `nil` if the resource is the root directory of its volume.

## See Also

### Directory keys

- [isDirectoryKey](isdirectorykey.md): A key for determining whether the resource is a directory.
- [directoryEntryCountKey](directoryentrycountkey.md): The key for a count of items in the directory.

# NSURLParentDirectoryURLKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The container directory of the resource.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLParentDirectoryURLKey;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a read-only `NSURL` object, or `nil` if the resource is the root directory of its volume.

## See Also

### Directory keys

- [NSURLIsDirectoryKey](isdirectorykey.md): A key for determining whether the resource is a directory.
- [NSURLDirectoryEntryCountKey](directoryentrycountkey.md): The key for a count of items in the directory.
