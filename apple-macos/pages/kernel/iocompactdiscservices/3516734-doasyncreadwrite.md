> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocompactdiscservices/3516734-doasyncreadwrite](https://developer.apple.com/documentation/kernel/iocompactdiscservices/3516734-doasyncreadwrite)

# doAsyncReadWrite

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn doAsyncReadWrite(IOMemoryDescriptor *buffer, UInt64 block, UInt64 nblks, IOStorageCompletion completion);
```
