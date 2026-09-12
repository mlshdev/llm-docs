> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/warning(_:)](https://developer.apple.com/documentation/swift/warning(_:))

# warning(\_:)

**Framework:** Swift  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces the given warning message during compilation.

## Declaration

```swift
@freestanding(declaration) macro warning(_ message: String)
```

<a id="overview"></a>

## Overview

Compilation proceeds after emitting the message as a nonfatal warning.

## See Also

### Generating Compile-Time Diagnostics

- [error(\_:)](error%28__%29.md): Emits the given message as a fatal error and terminates the compilation process.
