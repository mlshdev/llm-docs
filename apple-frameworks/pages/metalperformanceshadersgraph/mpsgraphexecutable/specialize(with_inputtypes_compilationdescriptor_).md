> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/specialize(with:inputtypes:compilationdescriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/specialize(with:inputtypes:compilationdescriptor:))

# specialize(with:inputTypes:compilationDescriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Specialize the executable and optimize it.

## Declaration

```swift
func specialize(with device: MPSGraphDevice?, inputTypes: [MPSGraphType], compilationDescriptor: MPSGraphCompilationDescriptor?)
```

## Parameters

- `device`: Optional MPSGraph device to compile with.
- `inputTypes`: Input types expected to be passed to the executable.
- `compilationDescriptor`: Compilation descriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.

<a id="discussion"></a>

## Discussion

Use this method to choose when specialization happens, else it occurs at encode time automatically.

# specializeWithDevice:inputTypes:compilationDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Specialize the executable and optimize it.

## Declaration

```objectivec
- (void) specializeWithDevice:(MPSGraphDevice *) device inputTypes:(NSArray<MPSGraphType *> *) inputTypes compilationDescriptor:(MPSGraphCompilationDescriptor *) compilationDescriptor;
```

## Parameters

- `device`: Optional MPSGraph device to compile with.
- `inputTypes`: Input types expected to be passed to the executable.
- `compilationDescriptor`: Compilation descriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.

<a id="discussion"></a>

## Discussion

Use this method to choose when specialization happens, else it occurs at encode time automatically.
