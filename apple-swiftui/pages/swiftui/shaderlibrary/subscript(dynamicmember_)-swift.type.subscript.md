> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shaderlibrary/subscript(dynamicmember:)-swift.type.subscript](https://developer.apple.com/documentation/swiftui/shaderlibrary/subscript(dynamicmember:)-swift.type.subscript)

# subscript(dynamicMember:)

**Framework:** SwiftUI  
**Kind:** Type Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a new shader function representing the stitchable MSL function called `name` in the default shader library.

## Declaration

```swift
static subscript(dynamicMember name: String) -> ShaderFunction { get }
```

<a id="overview"></a>

## Overview

Typically this subscript is used implicitly via the dynamic member syntax, for example:

let fn = ShaderLibrary.myFunction

which creates a reference to the MSL function called `myFunction()`.
