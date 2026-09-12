> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/init(package:descriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/init(package:descriptor:))

# init(package:descriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Initialize the executable with the Metal Performance Shaders Graph package at the provided URL.

## Declaration

```swift
init(package mpsgraphPackageURL: URL, descriptor compilationDescriptor: MPSGraphCompilationDescriptor?)
```

## Parameters

- `mpsgraphPackageURL`: The URL where to read the serialized MPSGraphExecutable.
- `compilationDescriptor`: Compilation descriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.

# initWithMPSGraphPackageAtURL:compilationDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Initialize the executable with the Metal Performance Shaders Graph package at the provided URL.

## Declaration

```objectivec
- (instancetype) initWithMPSGraphPackageAtURL:(NSURL *) mpsgraphPackageURL compilationDescriptor:(MPSGraphCompilationDescriptor *) compilationDescriptor;
```

## Parameters

- `mpsgraphPackageURL`: The URL where to read the serialized MPSGraphExecutable.
- `compilationDescriptor`: Compilation descriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.
