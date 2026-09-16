> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/containervalues/tag(for:)

# tag(for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The tag value for the given type if the container values contains one.

## Declaration

```swift
func tag<V>(for type: V.Type) -> V? where V : Hashable
```

## Parameters

- `type`: The type to get the tag value for.

<a id="return-value"></a>

## Return Value

The tag value for the given type if the subview has one, otherwise `nil`.

<a id="discussion"></a>

## Discussion

Tag values are set using the `View/tag` modifier.
