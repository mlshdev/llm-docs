> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/definition/buildblock(_:_:)](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/definition/buildblock(_:_:))

# buildBlock(\_:\_:)

**Framework:** ExtensionFoundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

## Declaration

```swift
static func buildBlock<each T>(_ name: AppExtensionPoint.Name, _ attributes: repeat each T) -> AppExtensionPoint where repeat each T : AppExtensionPoint.Attribute
```
