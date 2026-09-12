> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/init()](https://developer.apple.com/documentation/quartzcore/calayer/init())

# init() (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns an initialized `CALayer` object.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized `CALayer` object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for layer objects that are not in the presentation layer.

## See Also

### Creating a layer

- [init(layer:)](init%28layer_%29.md): Override to copy or initialize custom fields of the specified layer.
- [init(remoteClientId:)](init%28remoteclientid_%29.md): Initializes a layer with a remote client ID.

# init (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns an initialized `CALayer` object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized `CALayer` object.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for layer objects that are not in the presentation layer.

## See Also

### Creating a layer

- [layer](layer.md): Creates and returns an instance of the layer object.
- [initWithLayer:](init%28layer_%29.md): Override to copy or initialize custom fields of the specified layer.
- [layerWithRemoteClientId:](init%28remoteclientid_%29.md): Initializes a layer with a remote client ID.
