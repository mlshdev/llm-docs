> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphoptions](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphoptions)

# MPSGraphOptions (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The options available to a graph.

## Declaration

```swift
enum MPSGraphOptions
```

## Topics

### Enumeration Cases

- [MPSGraphOptions.none](mpsgraphoptions/none.md): No Options.
- [MPSGraphOptions.synchronizeResults](mpsgraphoptions/synchronizeresults.md): The graph synchronizes results to the CPU using a blit encoder if on a discrete GPU at the end of execution.
- [MPSGraphOptions.verbose](mpsgraphoptions/verbose.md): The framework prints more logging info.

### Initializers

- [init(rawValue:)](mpsgraphoptions/init%28rawvalue_%29.md)

### Type Properties

- [default](mpsgraphoptions/default.md): The framework uses these options as default if not overriden.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphOptions (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The options available to a graph.

## Declaration

```objectivec
enum MPSGraphOptions : uint64_t;
```

## Topics

### Enumeration Cases

- [MPSGraphOptionsDefault](mpsgraphoptions/default.md): The framework uses these options as default if not overriden.
- [MPSGraphOptionsNone](mpsgraphoptions/none.md): No Options.
- [MPSGraphOptionsSynchronizeResults](mpsgraphoptions/synchronizeresults.md): The graph synchronizes results to the CPU using a blit encoder if on a discrete GPU at the end of execution.
- [MPSGraphOptionsVerbose](mpsgraphoptions/verbose.md): The framework prints more logging info.
