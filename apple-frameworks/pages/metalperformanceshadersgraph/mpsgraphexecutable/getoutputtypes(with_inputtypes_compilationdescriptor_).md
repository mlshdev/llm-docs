> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/getoutputtypes(with:inputtypes:compilationdescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/getoutputtypes(with:inputtypes:compilationdescriptor:))

# getOutputTypes(with:inputTypes:compilationDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Get output shapes for a specialized executable.

## Declaration

```swift
func getOutputTypes(with device: MPSGraphDevice?, inputTypes: [MPSGraphType], compilationDescriptor: MPSGraphCompilationDescriptor?) -> [MPSGraphShapedType]?
```

## Parameters

- `device`: Optional MPSGraph device to compile with
- `inputTypes`: Input types expected to be passed to the executable.
- `compilationDescriptor`: CompilationDescriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.

<a id="discussion"></a>

## Discussion

In case specialization has not been done yet then calling this function will specialize for the given input shapes.

# getOutputTypesWithDevice:inputTypes:compilationDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

Get output shapes for a specialized executable.

## Declaration

```objectivec
- (NSArray<MPSGraphShapedType *> *) getOutputTypesWithDevice:(MPSGraphDevice *) device inputTypes:(NSArray<MPSGraphType *> *) inputTypes compilationDescriptor:(MPSGraphCompilationDescriptor *) compilationDescriptor;
```

## Parameters

- `device`: Optional MPSGraph device to compile with
- `inputTypes`: Input types expected to be passed to the executable.
- `compilationDescriptor`: CompilationDescriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.

<a id="discussion"></a>

## Discussion

In case specialization has not been done yet then calling this function will specialize for the given input shapes.
