> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/id(_:)](https://developer.apple.com/documentation/swiftui/view/id(_:))

# id(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Binds a view’s identity to the given proxy value.

## Declaration

```swift
nonisolated func id<ID>(_ id: ID) -> some View where ID : Hashable

```

<a id="discussion"></a>

## Discussion

When the proxy value specified by the `id` parameter changes, the identity of the view — for example, its state — is reset.

## See Also

### Managing the view hierarchy

- [tag(\_:includeOptional:)](tag%28__includeoptional_%29.md): Sets the unique tag value of this view.
- [equatable()](equatable%28%29.md): Conforms when `Self` conforms to `Equatable`. Prevents the view from updating its child view when its new value is the same as its old value.
