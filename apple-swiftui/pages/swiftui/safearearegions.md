> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/safearearegions](https://developer.apple.com/documentation/swiftui/safearearegions)

# SafeAreaRegions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A set of symbolic safe area regions.

## Declaration

```swift
@frozen struct SafeAreaRegions
```

## Topics

### Getting safe area regions

- [all](safearearegions/all.md): All safe area regions.
- [container](safearearegions/container.md): The safe area defined by the device and containers within the user interface, including elements such as top and bottom bars.
- [keyboard](safearearegions/keyboard.md): The safe area matching the current extent of any software keyboard displayed over the view content.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Staying in the safe areas

- [ignoresSafeArea(\_:edges:)](view/ignoressafearea%28__edges_%29.md): Expands the safe area of a view.
- [ignoresSafeArea(\_:edges:alignment:)](view/ignoressafearea%28__edges_alignment_%29.md): Expands the safe area of a view aligning content within the new bounds using the provided alignment.
- [safeAreaInset(edge:alignment:spacing:content:)](view/safeareainset%28edge_alignment_spacing_content_%29.md): Shows the specified content beside the modified view.
- [safeAreaPadding(\_:)](view/safeareapadding%28__%29.md): Adds the provided insets into the safe area of this view.
- [safeAreaPadding(\_:\_:)](view/safeareapadding%28____%29.md): Adds the provided insets into the safe area of this view.
