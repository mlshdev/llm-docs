> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1514661-ioserviceofpathtobsdname

# IOServiceOFPathToBSDName(\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```swift
func IOServiceOFPathToBSDName(_ mainPort: mach_port_t, _ openFirmwarePath: UnsafePointer<CChar>!, _ bsdName: UnsafeMutablePointer<CChar>!) -> kern_return_t
```

# IOServiceOFPathToBSDName (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
kern_return_t IOServiceOFPathToBSDName(mach_port_t mainPort, const io_name_t openFirmwarePath, io_name_t bsdName);
```
