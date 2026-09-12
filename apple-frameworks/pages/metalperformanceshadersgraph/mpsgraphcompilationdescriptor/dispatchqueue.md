> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphcompilationdescriptor/dispatchqueue](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphcompilationdescriptor/dispatchqueue)

# dispatchQueue (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The dispatch queue used for the compilation.

## Declaration

```swift
var dispatchQueue: dispatch_queue_t { get set }
```

<a id="discussion"></a>

## Discussion

Default value is nil.

# dispatchQueue (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The dispatch queue used for the compilation.

## Declaration

```objectivec
@property (atomic, retain, readwrite) dispatch_queue_t dispatchQueue;
```

<a id="discussion"></a>

## Discussion

Default value is nil.
