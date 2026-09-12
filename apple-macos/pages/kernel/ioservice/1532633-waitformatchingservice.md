> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/1532633-waitformatchingservice](https://developer.apple.com/documentation/kernel/ioservice/1532633-waitformatchingservice)

# waitForMatchingService

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IOService> waitForMatchingService(OSDictionary *matching, uint64_t timeout);
```
