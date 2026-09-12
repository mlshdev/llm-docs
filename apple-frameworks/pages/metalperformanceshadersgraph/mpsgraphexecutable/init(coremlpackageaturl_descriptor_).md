> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/init(coremlpackageaturl:descriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/init(coremlpackageaturl:descriptor:))

# init(coreMLPackageAtURL:descriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Initialize the executable with the Core ML model package at the provided URL.

## Declaration

```swift
init(coreMLPackageAtURL coreMLPackageURL: URL, descriptor compilationDescriptor: MPSGraphCompilationDescriptor?)
```

## Parameters

- `coreMLPackageURL`: The URL where to read the Core ML model package.
- `compilationDescriptor`: Compilation descriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.

# initWithCoreMLPackageAtURL:compilationDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Initialize the executable with the Core ML model package at the provided URL.

## Declaration

```objectivec
- (instancetype) initWithCoreMLPackageAtURL:(NSURL *) coreMLPackageURL compilationDescriptor:(MPSGraphCompilationDescriptor *) compilationDescriptor;
```

## Parameters

- `coreMLPackageURL`: The URL where to read the Core ML model package.
- `compilationDescriptor`: Compilation descriptor to be used to specialize, since the executable was created with a compilationDescriptor already this one overrides those settings to the extent it can.
