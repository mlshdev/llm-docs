> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementcollection-swift.struct/subscript(_:)-3womp

# subscript(\_:)

**Framework:** Game Controller  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS

Accesses the collection’s elements using the element’s name.

## Declaration

```swift
subscript<Name>(elementName: Name) -> Name.PhysicalInputElement? where Name : GCPhysicalInputElementTypedName { get }
```
