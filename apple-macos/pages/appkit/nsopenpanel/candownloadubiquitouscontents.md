> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel/candownloadubiquitouscontents](https://developer.apple.com/documentation/appkit/nsopenpanel/candownloadubiquitouscontents)

# canDownloadUbiquitousContents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates how the panel responds to iCloud documents that aren’t fully downloaded locally.

## Declaration

```swift
var canDownloadUbiquitousContents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel disallows opening non-local iCloud files. If the user selects a non-local file, the panel attempts to download that file. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the user may select and open non-local files. Your app is responsible for downloading the files and reporting progress or any issues.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), except for applications linked against the OS X v10.9 SDK or earlier that have adopted iCloud by specifying a ubiquitous container identifier entitlement.

For a better user experience, set this property to [false](https://developer.apple.com/documentation/swift/false) and download the file’s contents with an [NSFileCoordinator](https://developer.apple.com/documentation/foundation/nsfilecoordinator) object. Show the dlownload progress using a [Progress](https://developer.apple.com/documentation/foundation/progress) or [NSMetadataQuery](https://developer.apple.com/documentation/foundation/nsmetadataquery) object.

## See Also

### Supporting iCloud Documents

- [canResolveUbiquitousConflicts](canresolveubiquitousconflicts.md): A Boolean value that indicates how the panel responds to iCloud documents that have conflicting versions.

# canDownloadUbiquitousContents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates how the panel responds to iCloud documents that aren’t fully downloaded locally.

## Declaration

```objectivec
@property BOOL canDownloadUbiquitousContents;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel disallows opening non-local iCloud files. If the user selects a non-local file, the panel attempts to download that file. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the user may select and open non-local files. Your app is responsible for downloading the files and reporting progress or any issues.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), except for applications linked against the OS X v10.9 SDK or earlier that have adopted iCloud by specifying a ubiquitous container identifier entitlement.

For a better user experience, set this property to [false](https://developer.apple.com/documentation/swift/false) and download the file’s contents with an [NSFileCoordinator](https://developer.apple.com/documentation/foundation/nsfilecoordinator) object. Show the dlownload progress using a [NSProgress](https://developer.apple.com/documentation/foundation/progress) or [NSMetadataQuery](https://developer.apple.com/documentation/foundation/nsmetadataquery) object.

## See Also

### Supporting iCloud Documents

- [canResolveUbiquitousConflicts](canresolveubiquitousconflicts.md): A Boolean value that indicates how the panel responds to iCloud documents that have conflicting versions.
