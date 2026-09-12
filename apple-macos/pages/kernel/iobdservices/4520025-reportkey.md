> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdservices/4520025-reportkey](https://developer.apple.com/documentation/kernel/iobdservices/4520025-reportkey)

# reportKey

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 15.4)

## Declaration

```objectivec
virtual IOReturn reportKey(IOMemoryDescriptor *buffer, const DVDKeyClass keyClass, const UInt32 lba, const UInt8 agid, const DVDKeyFormat keyFormat);
```
