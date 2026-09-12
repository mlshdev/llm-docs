> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/librarycontentprovider/modifiers(base:)](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider/modifiers(base:))

# modifiers(base:)

**Framework:** DeveloperToolsSupport  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates a collection of SwiftUI view modifiers to add to the Xcode library.

## Declaration

```swift
@LibraryContentBuilder func modifiers(base: Self.ModifierBase) -> [LibraryItem]
```

## Parameters

- `base`: An instance to apply modifiers to when declaring a library item.

<a id="discussion"></a>

## Discussion

Xcode adds the [LibraryItem](../libraryitem.md) instances returned by your implementation of this method to its Modifiers library. The following restrictions apply:

- You must instantiate the library items inline.
- If specified, the item’s `title`, `category`, and `matchingSignature` must be static strings and not `nil`.
- The item’s `visible` value, if specified, must be a literal Boolean value.
- The item’s expression must be a reference expression where the root reference is `base` and the expression contains at least one modifier, like `base.opacity(0.5)`.

## Default Implementations

### LibraryContentProvider Implementations

- [modifiers(base:)](modifiers%28base_%29-4gfkr.md): Indicates a collection of SwiftUI view modifiers to add to the Xcode library.

## See Also

### Adding Modifiers

- [ModifierBase](modifierbase.md): A type to use as a base for modifier completions.
