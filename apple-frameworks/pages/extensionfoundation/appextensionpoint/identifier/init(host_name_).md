> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/identifier/init(host:name:)

# init(host:name:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Creates an identifier for binding to a host app’s extension point.

## Declaration

```swift
init(host bundleIdentifier: StaticString, name: StaticString)
```

## Parameters

- `name`: The name of the host app’s extension point. This name must match the value in the [AppExtensionPoint.Name](../name.md) portion of an extension point definition.

## See Also

### Creating an identifier attribute

- [init(\_:)](init%28__%29.md): Creates an identifier for binding to a system-defined extension point.
