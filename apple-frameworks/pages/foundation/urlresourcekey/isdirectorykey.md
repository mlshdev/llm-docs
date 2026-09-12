> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/isdirectorykey](https://developer.apple.com/documentation/foundation/urlresourcekey/isdirectorykey)

# isDirectoryKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key for determining whether the resource is a directory.

## Declaration

```swift
static let isDirectoryKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a read-only Boolean `NSNumber` object.

## See Also

### Directory keys

- [parentDirectoryURLKey](parentdirectoryurlkey.md): The container directory of the resource.
- [directoryEntryCountKey](directoryentrycountkey.md): The key for a count of items in the directory.

# NSURLIsDirectoryKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key for determining whether the resource is a directory.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLIsDirectoryKey;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a read-only Boolean `NSNumber` object.

## See Also

### Directory keys

- [NSURLParentDirectoryURLKey](parentdirectoryurlkey.md): The container directory of the resource.
- [NSURLDirectoryEntryCountKey](directoryentrycountkey.md): The key for a count of items in the directory.
