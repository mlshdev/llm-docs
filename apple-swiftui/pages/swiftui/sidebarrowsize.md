> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sidebarrowsize](https://developer.apple.com/documentation/swiftui/sidebarrowsize)

# SidebarRowSize

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The standard sizes of sidebar rows.

## Declaration

```swift
enum SidebarRowSize
```

<a id="overview"></a>

## Overview

On macOS, sidebar rows have three different sizes: small, medium, and large. The size is primarily controlled by the current users’ “Sidebar Icon Size” in Appearance settings, and applies to all applications.

On all other platforms, the only supported sidebar size is `.medium`.

This size can be read or written in the environment using `EnvironmentValues.sidebarRowSize`.

## Topics

### Getting row sizes

- [SidebarRowSize.small](sidebarrowsize/small.md): The standard “small” row size
- [SidebarRowSize.medium](sidebarrowsize/medium.md): The standard “medium” row size
- [SidebarRowSize.large](sidebarrowsize/large.md): The standard “large” row size

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the sidebar

- [sidebarRowSize](environmentvalues/sidebarrowsize.md): The current size of sidebar rows.
