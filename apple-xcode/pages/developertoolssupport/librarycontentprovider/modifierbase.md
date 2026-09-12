> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/librarycontentprovider/modifierbase](https://developer.apple.com/documentation/developertoolssupport/librarycontentprovider/modifierbase)

# ModifierBase

**Framework:** DeveloperToolsSupport  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type to use as a base for modifier completions.

## Declaration

```swift
associatedtype ModifierBase = Any
```

<a id="discussion"></a>

## Discussion

To verify that the completion for a modifier compiles, you specify modifiers as they apply to some base type. Since most modifiers can modify any SwiftUI view, you typically specify any concrete implementation of the [View](https://developer.apple.com/documentation/swiftui/view) protocol for `ModifierBase`. However, some modifiers apply to more specific types, like [Image](https://developer.apple.com/documentation/swiftui/image) or [Text](https://developer.apple.com/documentation/swiftui/text), or to an entirely different type like [Shape](https://developer.apple.com/documentation/swiftui/shape).

## See Also

### Adding Modifiers

- [modifiers(base:)](modifiers%28base_%29.md): Indicates a collection of SwiftUI view modifiers to add to the Xcode library.
