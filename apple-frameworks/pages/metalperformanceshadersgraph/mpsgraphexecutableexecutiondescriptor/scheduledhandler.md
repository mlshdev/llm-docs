> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutableexecutiondescriptor/scheduledhandler

# scheduledHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification that appears when graph-executable execution is scheduled.

## Declaration

```swift
var scheduledHandler: MPSGraphExecutableScheduledHandler { get set }
```

<a id="discussion"></a>

## Discussion

Default value is nil.

# scheduledHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification that appears when graph-executable execution is scheduled.

## Declaration

```objectivec
@property (atomic, readwrite) MPSGraphExecutableScheduledHandler scheduledHandler;
```

<a id="discussion"></a>

## Discussion

Default value is nil.
