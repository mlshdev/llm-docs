> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionprocess/configuration/init(appextensionidentity:oninterruption:)

# init(appExtensionIdentity:onInterruption:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

## Declaration

```swift
init(appExtensionIdentity: AppExtensionIdentity, onInterruption: @escaping () -> Void = {})
```
