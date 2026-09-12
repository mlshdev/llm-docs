> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioplatformexpert/1451551-registerserviceintree](https://developer.apple.com/documentation/kernel/ioplatformexpert/1451551-registerserviceintree)

# RegisterServiceInTree

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool RegisterServiceInTree(IOService *theService, OSDictionary *theTreeNode, OSDictionary *theTreeParentNode, IOService *theProvider);
```
