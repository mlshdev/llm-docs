> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibrarysection/subscript(dynamicmember:)

# subscript(dynamicMember:)

**Framework:** MusicKit  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A subscript that allows your app to access any property of the requested section type directly on this library section object.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<SectionType, T>) -> T { get }
```
