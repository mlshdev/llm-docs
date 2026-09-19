> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/identifier/init(_:)

# init(\_:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Creates an identifier for binding to a system-defined extension point.

## Declaration

```swift
init(_ value: StaticString)
```

## Parameters

- `value`: The name of the system-defined extension point.

## See Also

### Creating an identifier attribute

- [init(host:name:)](init%28host_name_%29.md): Creates an identifier for binding to a host app’s extension point.
