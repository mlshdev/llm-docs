> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationdetent/context/subscript(dynamicmember:)](https://developer.apple.com/documentation/swiftui/presentationdetent/context/subscript(dynamicmember:))

# subscript(dynamicMember:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the value specified by the keyPath from the environment.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<EnvironmentValues, T>) -> T { get }
```

<a id="overview"></a>

## Overview

This uses the environment from where the sheet is shown, not the environment where the presentation modifier is applied.
