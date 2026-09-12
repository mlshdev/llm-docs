> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/init(remoteclientid:)](https://developer.apple.com/documentation/quartzcore/calayer/init(remoteclientid:))

# init(remoteClientId:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes a layer with a remote client ID.

## Declaration

```swift
init(remoteClientId client_id: UInt32)
```

## See Also

### Creating a layer

- [init()](init%28%29.md): Returns an initialized `CALayer` object.
- [init(layer:)](init%28layer_%29.md): Override to copy or initialize custom fields of the specified layer.

# layerWithRemoteClientId: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a layer with a remote client ID.

## Declaration

```objectivec
+ (CALayer *) layerWithRemoteClientId:(uint32_t) client_id;
```

## See Also

### Creating a layer

- [layer](layer.md): Creates and returns an instance of the layer object.
- [init](init%28%29.md): Returns an initialized `CALayer` object.
- [initWithLayer:](init%28layer_%29.md): Override to copy or initialize custom fields of the specified layer.
