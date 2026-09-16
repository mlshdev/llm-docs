> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/equatable()

# equatable()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Prevents the view from updating its child view when its new value is the same as its old value.

## Declaration

```swift
nonisolated func equatable() -> EquatableView<Self>
```

## See Also

### Managing the view hierarchy

- [id(\_:)](id%28__%29.md): Binds a view’s identity to the given proxy value.
- [tag(\_:includeOptional:)](tag%28__includeoptional_%29.md): Sets the unique tag value of this view.
