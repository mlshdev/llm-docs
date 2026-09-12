> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/directoryentrycountkey](https://developer.apple.com/documentation/foundation/urlresourcekey/directoryentrycountkey)

# directoryEntryCountKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The key for a count of items in the directory.

## Declaration

```swift
static let directoryEntryCountKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

Not all file systems can provide this information.

## See Also

### Directory keys

- [isDirectoryKey](isdirectorykey.md): A key for determining whether the resource is a directory.
- [parentDirectoryURLKey](parentdirectoryurlkey.md): The container directory of the resource.

# NSURLDirectoryEntryCountKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The key for a count of items in the directory.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLDirectoryEntryCountKey;
```

<a id="Discussion"></a>

## Discussion

Not all file systems can provide this information.

## See Also

### Directory keys

- [NSURLIsDirectoryKey](isdirectorykey.md): A key for determining whether the resource is a directory.
- [NSURLParentDirectoryURLKey](parentdirectoryurlkey.md): The container directory of the resource.
