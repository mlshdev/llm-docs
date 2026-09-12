> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1574872-ioframebufferopen](https://developer.apple.com/documentation/iokit/1574872-ioframebufferopen)

# IOFramebufferOpen

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
kern_return_t IOFramebufferOpen(io_service_t service, task_port_t owningTask, unsigned int type, io_connect_t *connect);
```
