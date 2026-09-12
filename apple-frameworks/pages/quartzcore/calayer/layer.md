> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/layer](https://developer.apple.com/documentation/quartzcore/calayer/layer)

# layer

**Interface language:** Objective-C

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns an instance of the layer object.

## Declaration

```objectivec
+ (instancetype) layer;
```

<a id="return-value"></a>

## Return Value

The initialized layer object or `nil` if initialization was not successful.

<a id="Discussion"></a>

## Discussion

If you subclass `CALayer`, you may override this method and use it to provide an instance of your specific subclass.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Creating a layer

- [init](init%28%29.md): Returns an initialized `CALayer` object.
- [initWithLayer:](init%28layer_%29.md): Override to copy or initialize custom fields of the specified layer.
- [layerWithRemoteClientId:](init%28remoteclientid_%29.md): Initializes a layer with a remote client ID.
