> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceobject/init(named:from:)](https://developer.apple.com/documentation/arkit/referenceobject/init(named:from:))

# init(named:from:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a reference object from a bundle.

## Declaration

```swift
init(named: String, from bundle: Bundle? = nil) async throws
```

## Parameters

- `named`: Name of object to load in bundle.
- `bundle`: Bundle to load from. If unspecified, defaults to the main bundle.

## See Also

### Creating reference objects

- [init(from:)](init%28from_%29.md): Creates a reference object from a URL you provide.
- [init(from:configuration:)](init%28from_configuration_%29.md): Initializes a reference object from a URL, with reference object configuration.
- [init(named:from:configuration:)](init%28named_from_configuration_%29.md): Initializes a reference object from a bundle, with reference object configuration.
