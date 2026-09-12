> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/resolved](https://developer.apple.com/documentation/swiftui/shapestyle/resolved)

# Resolved

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The type of shape style this will resolve to.

## Declaration

```swift
associatedtype Resolved : ShapeStyle = Never
```

<a id="discussion"></a>

## Discussion

When you create a custom shape style, Swift infers this type from your implementation of the required `resolve` function.

## See Also

### Resolving a shape style in an environment

- [resolve(in:)](resolve%28in_%29.md): Evaluate to a resolved shape style given the current `environment`.
