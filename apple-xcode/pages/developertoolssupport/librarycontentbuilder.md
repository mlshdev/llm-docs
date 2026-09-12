> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/librarycontentbuilder](https://developer.apple.com/documentation/developertoolssupport/librarycontentbuilder)

# LibraryContentBuilder

**Framework:** DeveloperToolsSupport  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A function builder for generating arrays of library items without requiring full array literal syntax.

## Declaration

```swift
@resultBuilder struct LibraryContentBuilder
```

<a id="overview"></a>

## Overview

Use the library content function builder to simplify the implementation of protocol requirements from you which provide arrays of library items. For example, without the builder, you would have to explicitly put items in an array in a [views](librarycontentprovider/views.md) implementation:

```swift
struct LibraryViewContent: LibraryContentProvider {
    var views: [LibraryItem] {
        [
            LibraryItem(MyFirstView()),
            LibraryItem(MySecondView())
        ]
    }
}
```

With the builder, you can omit the array literal syntax:

```swift
struct LibraryViewContent: LibraryContentProvider {
    @LibraryContentBuilder
    var views: [LibraryItem] {
        LibraryItem(MyFirstView())
        LibraryItem(MySecondView())
    }
}
```

In practice, the Swift compiler infers the need for a library content builder attribute and adds it at build time, so that you never need to explicitly write the attribute in your code, even though it’s technically in use:

```swift
struct LibraryViewContent: LibraryContentProvider {
    var views: [LibraryItems] {
        LibraryItem(MyFirstView())
        LibraryItem(MySecondView())
    }
}
```

## Topics

### Type Methods

- [buildBlock(\_:)](librarycontentbuilder/buildblock%28__%29.md)
- [buildExpression(\_:)](librarycontentbuilder/buildexpression%28__%29-8x2oz.md)
- [buildExpression(\_:)](librarycontentbuilder/buildexpression%28__%29-90ip4.md)
