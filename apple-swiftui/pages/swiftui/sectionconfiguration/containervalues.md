> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/sectionconfiguration/containervalues

# containerValues

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The container values associated with the given section.

## Declaration

```swift
var containerValues: ContainerValues { get }
```

<a id="discussion"></a>

## Discussion

Only explicitly created sections are able to have container values, meaning this container values will be empty if the section is implicit.
