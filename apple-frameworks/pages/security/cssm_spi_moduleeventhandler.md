> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_spi_moduleeventhandler](https://developer.apple.com/documentation/security/cssm_spi_moduleeventhandler)

# CSSM_SPI_ModuleEventHandler

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
typedef int (*)(const struct cssm_guid *, void *, unsigned int, unsigned int, unsigned int) CSSM_SPI_ModuleEventHandler;
```
