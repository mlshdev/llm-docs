> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/referenceobject/init(from:)

# init(from:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a reference object from a URL you provide.

## Declaration

```swift
init(from url: URL) async throws
```

## Parameters

- `url`: Local path to the reference object model.

## See Also

### Creating reference objects

- [init(named:from:)](init%28named_from_%29.md): Creates a reference object from a bundle.
- [init(from:configuration:)](init%28from_configuration_%29.md): Initializes a reference object from a URL, with reference object configuration.
- [init(named:from:configuration:)](init%28named_from_configuration_%29.md): Initializes a reference object from a bundle, with reference object configuration.
