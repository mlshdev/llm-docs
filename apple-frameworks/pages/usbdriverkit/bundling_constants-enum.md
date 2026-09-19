> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/bundling_constants-enum

# Bundling Constants

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** API Collection

Constants associated with bulk I/O transfers.

## Topics

### Bundling Options

- [kIOUSBHostPipeBundlingMax](kiousbhostpipebundlingmax.md): The maximum number of elements to transfer in one bundled I/O call.

## See Also

### Interacting with Descriptor Rings

- [CreateMemoryDescriptorRing](iousbhostpipe/creatememorydescriptorring.md)
- [SetMemoryDescriptor](iousbhostpipe/setmemorydescriptor.md)
- [AsyncIOBundled](iousbhostpipe/asynciobundled.md): Enqueues a contiguous group of requests from the descriptor ring.
- [CompleteAsyncIOBundled](iousbhostpipe/completeasynciobundled.md): Handles the completion of an asynchronous bundled transfer.
