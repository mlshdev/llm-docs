> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/attributedtextformatting/attributecontainerproxy/subscript(dynamicmember:)

# subscript(dynamicMember:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the value of the attribute to constrain.

## Declaration

```swift
subscript(dynamicMember keyPath: KeyPath<AttributeDynamicLookup, Attribute>) -> Attribute.Value? { get set }
```

<a id="overview"></a>

## Overview

For details on how attribute value constraining works, refer to [constrain(\_:)](../../attributedtextvalueconstraint/constrain%28__%29.md).
