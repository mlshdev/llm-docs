> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/init(layer:)](https://developer.apple.com/documentation/quartzcore/calayer/init(layer:))

# init(layer:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Override to copy or initialize custom fields of the specified layer.

## Declaration

```swift
init(layer: Any)
```

## Parameters

- `layer`: The layer from which custom fields should be copied.

<a id="return-value"></a>

## Return Value

A layer instance with any custom instance variables copied from `layer`.

<a id="Discussion"></a>

## Discussion

This initializer is used to create shadow copies of layers, for example, for the [presentation()](presentation%28%29.md) method. Using this method in any other situation will produce undefined behavior. For example, do not use this method to initialize a new layer with an existing layer’s content.

If you are implementing a custom layer subclass, you can override this method and use it to copy the values of instance variables into the new object. Subclasses should always invoke the superclass implementation.

This method is the designated initializer for layer objects in the presentation layer.

## See Also

### Creating a layer

- [init()](init%28%29.md): Returns an initialized `CALayer` object.
- [init(remoteClientId:)](init%28remoteclientid_%29.md): Initializes a layer with a remote client ID.

# initWithLayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Override to copy or initialize custom fields of the specified layer.

## Declaration

```objectivec
- (instancetype) initWithLayer:(id) layer;
```

## Parameters

- `layer`: The layer from which custom fields should be copied.

<a id="return-value"></a>

## Return Value

A layer instance with any custom instance variables copied from `layer`.

<a id="Discussion"></a>

## Discussion

This initializer is used to create shadow copies of layers, for example, for the [presentationLayer](presentation%28%29.md) method. Using this method in any other situation will produce undefined behavior. For example, do not use this method to initialize a new layer with an existing layer’s content.

If you are implementing a custom layer subclass, you can override this method and use it to copy the values of instance variables into the new object. Subclasses should always invoke the superclass implementation.

This method is the designated initializer for layer objects in the presentation layer.

## See Also

### Creating a layer

- [layer](layer.md): Creates and returns an instance of the layer object.
- [init](init%28%29.md): Returns an initialized `CALayer` object.
- [layerWithRemoteClientId:](init%28remoteclientid_%29.md): Initializes a layer with a remote client ID.
