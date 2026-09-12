> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/logs](https://developer.apple.com/documentation/metal/mtlcommandbuffer/logs)

# logs

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The messages the command buffer records as the GPU runs its commands.

## Declaration

```objectivec
@property (readonly) id<MTLLogContainer> logs;
```

<a id="discussion"></a>

## Discussion

The value of this property is valid only after the command buffer finishes executing.

## Default Implementations

### MTLCommandBuffer Implementations

- [logs](logs-518l2.md): The messages the command buffer records as the GPU runs its commands.
