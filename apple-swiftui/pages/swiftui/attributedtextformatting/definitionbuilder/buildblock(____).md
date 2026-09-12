> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting/definitionbuilder/buildblock(_:_:)](https://developer.apple.com/documentation/swiftui/attributedtextformatting/definitionbuilder/buildblock(_:_:))

# buildBlock(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
@export(implementation) static func buildBlock<F, each D>(_ first: F, _ definition: repeat each D) -> AttributedTextFormatting.TupleDefinition<F.Scope, F, repeat each D> where F : AttributedTextFormattingDefinition, repeat each D : AttributedTextFormattingDefinition
```
