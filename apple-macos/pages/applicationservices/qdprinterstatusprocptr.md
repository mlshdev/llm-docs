> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/qdprinterstatusprocptr](https://developer.apple.com/documentation/applicationservices/qdprinterstatusprocptr)

# QDPrinterStatusProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias QDPrinterStatusProcPtr = (PrinterStatusOpcode, CGrafPtr?, UnsafeMutableRawPointer?) -> OSStatus
```

# QDPrinterStatusProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef OSStatus (*QDPrinterStatusProcPtr)(PrinterStatusOpcode opcode, CGrafPtr currentPort, void *printerStatus);
```
