> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/columnsformstyle/init()

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A non-scrolling form style with a trailing aligned column of labels next to a leading aligned column of values.

## Declaration

```swift
nonisolated init()
```

<a id="discussion"></a>

## Discussion

Don’t call this initializer directly. Instead, use the [columns](../formstyle/columns.md) static variable to create this style:

```swift
Form {
   ...
}
.formStyle(.columns)
```
