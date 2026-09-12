> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472318-hardware_attribute_attribute_sel/gestalthasscsi](https://developer.apple.com/documentation/coreservices/1472318-hardware_attribute_attribute_sel/gestalthasscsi)

# gestaltHasSCSI

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

The `gestaltHasSCSI` bit means the machine is equipped with a SCSI implementation based on the 53C80 chip, which was introduced in the Macintosh Plus. This bit is 0 on computers with a different SCSI implementation.

## Declaration

```objectivec
gestaltHasSCSI = 7
```
