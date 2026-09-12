> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel/canresolveubiquitousconflicts](https://developer.apple.com/documentation/appkit/nsopenpanel/canresolveubiquitousconflicts)

# canResolveUbiquitousConflicts (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates how the panel responds to iCloud documents that have conflicting versions.

## Declaration

```swift
var canResolveUbiquitousConflicts: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), and the user attempts to open one or more documents with conflicts, the panel displays the conflict resolution UI. The user must resolve any conflicts before opening the documents. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the your application is responsible for handling any conflicts.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), except for applications linked against the OS X v10.9 SDK or earlier that have adopted iCloud by specifying a ubiquitous container identifier entitlement.

For a better user experience, set this property to [false](https://developer.apple.com/documentation/swift/false) and check the [ubiquitousItemHasUnresolvedConflictsKey](https://developer.apple.com/documentation/foundation/urlresourcekey/ubiquitousitemhasunresolvedconflictskey) key of each item. When a conflict exists, retrieve a [NSFileVersion](https://developer.apple.com/documentation/foundation/nsfileversion) object for each version and present your own UI to resolve that conflict.

## See Also

### Supporting iCloud Documents

- [canDownloadUbiquitousContents](candownloadubiquitouscontents.md): A Boolean value that indicates how the panel responds to iCloud documents that aren’t fully downloaded locally.

# canResolveUbiquitousConflicts (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates how the panel responds to iCloud documents that have conflicting versions.

## Declaration

```objectivec
@property BOOL canResolveUbiquitousConflicts;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), and the user attempts to open one or more documents with conflicts, the panel displays the conflict resolution UI. The user must resolve any conflicts before opening the documents. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the your application is responsible for handling any conflicts.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), except for applications linked against the OS X v10.9 SDK or earlier that have adopted iCloud by specifying a ubiquitous container identifier entitlement.

For a better user experience, set this property to [false](https://developer.apple.com/documentation/swift/false) and check the [NSURLUbiquitousItemHasUnresolvedConflictsKey](https://developer.apple.com/documentation/foundation/urlresourcekey/ubiquitousitemhasunresolvedconflictskey) key of each item. When a conflict exists, retrieve a [NSFileVersion](https://developer.apple.com/documentation/foundation/nsfileversion) object for each version and present your own UI to resolve that conflict.

## See Also

### Supporting iCloud Documents

- [canDownloadUbiquitousContents](candownloadubiquitouscontents.md): A Boolean value that indicates how the panel responds to iCloud documents that aren’t fully downloaded locally.
