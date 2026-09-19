> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/asyncshareablepassconfiguration/init(metadata:action:content:)

# init(metadata:action:content:)

**Framework:** PassKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

## Declaration

```swift
nonisolated init(metadata: [PKShareablePassMetadata], action: PKAddShareablePassConfigurationPrimaryAction, @ViewBuilder content: @escaping (AsyncShareablePassConfiguration<Content>.Result) -> Content)
```

## See Also

### Creating the configuration

- [AsyncShareablePassConfiguration.Result](result.md)
