> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialpropertynode/init(inputs:outputs:evaluationfunction:)](https://developer.apple.com/documentation/modelio/mdlmaterialpropertynode/init(inputs:outputs:evaluationfunction:))

# init(inputs:outputs:evaluationFunction:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```swift
init(inputs: [MDLMaterialProperty], outputs: [MDLMaterialProperty], evaluationFunction function: @escaping (MDLMaterialPropertyNode) -> Void)
```

# initWithInputs:outputs:evaluationFunction: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithInputs:(NSArray<MDLMaterialProperty *> *) inputs outputs:(NSArray<MDLMaterialProperty *> *) outputs evaluationFunction:(void (^)(MDLMaterialPropertyNode *)) function;
```
