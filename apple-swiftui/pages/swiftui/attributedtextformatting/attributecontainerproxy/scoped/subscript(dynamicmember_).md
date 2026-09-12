> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting/attributecontainerproxy/scoped/subscript(dynamicmember:)](https://developer.apple.com/documentation/swiftui/attributedtextformatting/attributecontainerproxy/scoped/subscript(dynamicmember:))

# subscript(dynamicMember:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the value of the attribute to constrain.

## Declaration

```swift
subscript(dynamicMember keyPath: KeyPath<Subscope, Attribute>) -> Attribute.Value? { get set }
```

<a id="overview"></a>

## Overview

For details on how attribute value constraining works, refer to [constrain(\_:)](../../../attributedtextvalueconstraint/constrain%28__%29.md).
