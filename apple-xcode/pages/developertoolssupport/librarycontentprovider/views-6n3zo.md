> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/librarycontentprovider/views-6n3zo](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider/views-6n3zo)

# views

**Framework:** DeveloperToolsSupport  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The SwiftUI views that you want to add to the Xcode library.

## Declaration

```swift
var views: [LibraryItem] { get }
```

<a id="discussion"></a>

## Discussion

Xcode adds the [LibraryItem](../libraryitem.md) instances returned by your implementation of this property to its Views library. The following restrictions apply:

- You must instantiate the library items inline.
- If specified, the item’s `title`, `category`, and `matchingSignature` must be static strings and not `nil`.
- The item’s `visible` value, if specified, must be a literal Boolean value.
- The item’s expression must be an instantiation. That is, it can’t be a reference.
