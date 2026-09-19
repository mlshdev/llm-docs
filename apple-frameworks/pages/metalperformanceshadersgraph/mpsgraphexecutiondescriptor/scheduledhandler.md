> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutiondescriptor/scheduledhandler

# scheduledHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that graph calls when it schedules the execution.

## Declaration

```swift
var scheduledHandler: MPSGraphScheduledHandler { get set }
```

<a id="discussion"></a>

## Discussion

Default value is nil.

# scheduledHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that graph calls when it schedules the execution.

## Declaration

```objectivec
@property (atomic, readwrite) MPSGraphScheduledHandler scheduledHandler;
```

<a id="discussion"></a>

## Discussion

Default value is nil.
