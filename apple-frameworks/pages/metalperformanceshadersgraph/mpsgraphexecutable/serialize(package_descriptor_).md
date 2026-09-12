> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/serialize(package:descriptor:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/serialize(package:descriptor:))

# serialize(package:descriptor:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Serialize the MPSGraph executable at the provided url.

## Declaration

```swift
func serialize(package url: URL, descriptor: MPSGraphExecutableSerializationDescriptor?)
```

## Parameters

- `url`: The URL where to serialize the MPSGraph executable.
- `descriptor`: The descriptor to be used to serialize the graph.

# serializeToMPSGraphPackageAtURL:descriptor: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Serialize the MPSGraph executable at the provided url.

## Declaration

```objectivec
- (void) serializeToMPSGraphPackageAtURL:(NSURL *) url descriptor:(MPSGraphExecutableSerializationDescriptor *) descriptor;
```

## Parameters

- `url`: The URL where to serialize the MPSGraph executable.
- `descriptor`: The descriptor to be used to serialize the graph.
