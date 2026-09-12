> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceobject/init(named:from:configuration:)](https://developer.apple.com/documentation/arkit/referenceobject/init(named:from:configuration:))

# init(named:from:configuration:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 27.0+

Initializes a reference object from a bundle, with reference object configuration.

## Declaration

```swift
init(named: String, from bundle: Bundle? = nil, configuration: ReferenceObject.Configuration) async throws
```

## Parameters

- `named`: Name of object to load in bundle.
- `bundle`: Bundle to load from. The main Bundle is used if unspecified.
- `configuration`: Configuration to use for tracking this object.

<a id="discussion"></a>

## Discussion

> **Throws**

> `ObjectTrackingProvider.Error`

## See Also

### Creating reference objects

- [init(from:)](init%28from_%29.md): Creates a reference object from a URL you provide.
- [init(named:from:)](init%28named_from_%29.md): Creates a reference object from a bundle.
- [init(from:configuration:)](init%28from_configuration_%29.md): Initializes a reference object from a URL, with reference object configuration.
