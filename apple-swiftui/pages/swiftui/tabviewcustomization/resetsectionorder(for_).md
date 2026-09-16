> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/tabviewcustomization/resetsectionorder(for:)

# resetSectionOrder(for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ (deprecated in 27.2) · iPadOS 18.0+ (deprecated in 27.2) · Mac Catalyst 18.0+ (deprecated in 27.2) · macOS 15.0+ (deprecated in 27.2) · visionOS 2.0+ (deprecated in 27.2)

Resets ordering back to the default for the section with `sectionID`, preserving any customized tab visibilities.

> Use the \`section\` subscript and call \`resetTabOrder\` instead.

## Declaration

```swift
mutating func resetSectionOrder(for sectionID: String)
```
