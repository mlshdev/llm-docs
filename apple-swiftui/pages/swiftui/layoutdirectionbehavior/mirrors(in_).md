> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutdirectionbehavior/mirrors(in:)](https://developer.apple.com/documentation/swiftui/layoutdirectionbehavior/mirrors(in:))

# LayoutDirectionBehavior.mirrors(in:)

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A behavior that mirrors when the layout direction has the specified value.

## Declaration

```swift
case mirrors(in: LayoutDirection)
```

<a id="discussion"></a>

## Discussion

If you develop your view or shape in an LTR context, you can use `.mirrors(in: .rightToLeft)` (which is equivalent to `.mirrors`) to mirror your content when the layout direction is RTL (and keep the original version in LTR). If you developer in an RTL context, you can use `.mirrors(in: .leftToRight)` to mirror your content when the layout direction is LTR (and keep the original version in RTL).

## See Also

### Getting behaviors

- [LayoutDirectionBehavior.fixed](fixed.md): A behavior that doesn’t mirror when the layout direction changes.
- [mirrors](mirrors.md): A behavior that mirrors when the layout direction is right-to-left.
