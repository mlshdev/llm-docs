> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchingfunctionnode/init(name:arguments:controldependencies:)](https://developer.apple.com/documentation/metal/mtlfunctionstitchingfunctionnode/init(name:arguments:controldependencies:))

# init(name:arguments:controlDependencies:) (Swift)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new function node.

## Declaration

```swift
init(name: String, arguments: [any MTLFunctionStitchingNode], controlDependencies: [MTLFunctionStitchingFunctionNode])
```

## Parameters

- `name`: The name of the function to call.
- `arguments`: An ordered list of the nodes that provide the function’s arguments.
- `controlDependencies`: The list of nodes that need to run before executing this node.

# initWithName:arguments:controlDependencies: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a new function node.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name arguments:(NSArray<id<MTLFunctionStitchingNode>> *) arguments controlDependencies:(NSArray<MTLFunctionStitchingFunctionNode *> *) controlDependencies;
```

## Parameters

- `name`: The name of the function to call.
- `arguments`: An ordered list of the nodes that provide the function’s arguments.
- `controlDependencies`: The list of nodes that need to run before executing this node.
