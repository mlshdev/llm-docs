> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustomlayer/init(parameters:)](https://developer.apple.com/documentation/coreml/mlcustomlayer/init(parameters:))

# init(parameters:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Initializes the custom layer implementation.

## Declaration

```swift
init(parameters: [String : Any]) throws
```

## Parameters

- `parameters`: The contents of the parameter dictionary from the `.mlmodel` file.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to initialize your custom layer. It is called once, at load time. Use the parameters to configure the custom layer as needed.

If the layer cannot be initialized, your implementation should throw a [customLayer](../mlmodelerror-swift.struct/customlayer.md) error.

# initWithParameterDictionary:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

Initializes the custom layer implementation.

## Declaration

```objectivec
- (instancetype) initWithParameterDictionary:(NSDictionary<NSString *,id> *) parameters error:(NSError **) error;
```

## Parameters

- `parameters`: The contents of the parameter dictionary from the `.mlmodel` file.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](../creating-and-integrating-a-model-with-custom-layers.md)

<a id="Discussion"></a>

## Discussion

Implement this method to initialize your custom layer. It is called once, at load time. Use the parameters to configure the custom layer as needed.

If the layer cannot be initialized, your implementation should throw a [customLayer](../mlmodelerror-swift.struct/customlayer.md) error.
