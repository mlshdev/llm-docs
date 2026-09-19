> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/capabilities/init(_:)

# init(\_:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 1.1+ · watchOS 26.2+

Creates capabilities specifying the

## Declaration

```swift
init(@AppExtensionPoint.Capabilities.Builder _ builder: () -> AppExtensionPoint.Capabilities)
```

## Parameters

- `builder`: A result builder that constructs the Capabilities from individual capability types.
