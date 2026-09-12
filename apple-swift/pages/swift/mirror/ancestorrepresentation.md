> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mirror/ancestorrepresentation](https://developer.apple.com/documentation/swift/mirror/ancestorrepresentation)

# Mirror.AncestorRepresentation

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The representation to use for ancestor classes.

## Declaration

```swift
enum AncestorRepresentation
```

<a id="overview"></a>

## Overview

A class that conforms to the `CustomReflectable` protocol can control how its mirror represents ancestor classes by initializing the mirror with an `AncestorRepresentation`. This setting has no effect on mirrors reflecting value type instances.

## Topics

### Enumeration Cases

- [Mirror.AncestorRepresentation.customized(\_:)](ancestorrepresentation/customized%28__%29.md): Uses the nearest ancestor’s implementation of `customMirror` to create a mirror for that ancestor.
- [Mirror.AncestorRepresentation.generated](ancestorrepresentation/generated.md): Generates a default mirror for all ancestor classes.
- [Mirror.AncestorRepresentation.suppressed](ancestorrepresentation/suppressed.md): Suppresses the representation of all ancestor classes.
