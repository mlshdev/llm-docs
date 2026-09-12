> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-85vdw/loadcontentsofurl:configuration:completionhandler:](https://developer.apple.com/documentation/coreml/mlcomputeplan-85vdw/loadcontentsofurl:configuration:completionhandler:)

# loadContentsOfURL:configuration:completionHandler:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Construct the compute plan of a model asynchronously given the location of its on-disk representation.

## Declaration

```objectivec
+ (void) loadContentsOfURL:(NSURL *) url configuration:(MLModelConfiguration *) configuration completionHandler:(void (^)(MLComputePlan *computePlan, NSError *error)) handler;
```

## Parameters

- `url`: The location of its on-disk representation (.mlmodelc directory).
- `configuration`: The model configuration.
- `handler`: When the compute plan is constructed successfully or unsuccessfully, the completion handler is invoked with a valid MLComputePlan instance or NSError object.

## See Also

### Loading a compute plan

- [loadModelAsset:configuration:completionHandler:](loadmodelasset_configuration_completionhandler_.md): Construct the compute plan of a model asynchronously given the model asset.
