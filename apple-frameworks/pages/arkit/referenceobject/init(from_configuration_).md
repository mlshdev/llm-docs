> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceobject/init(from:configuration:)](https://developer.apple.com/documentation/arkit/referenceobject/init(from:configuration:))

# init(from:configuration:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 27.0+

Initializes a reference object from a URL, with reference object configuration.

## Declaration

```swift
init(from url: URL, configuration: ReferenceObject.Configuration) async throws
```

## Parameters

- `url`: Local path to the reference object model.
- `configuration`: Configuration to use for tracking this object.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ObjectTrackingProvider.Error`

## See Also

### Creating reference objects

- [init(from:)](init%28from_%29.md): Creates a reference object from a URL you provide.
- [init(named:from:)](init%28named_from_%29.md): Creates a reference object from a bundle.
- [init(named:from:configuration:)](init%28named_from_configuration_%29.md): Initializes a reference object from a bundle, with reference object configuration.
