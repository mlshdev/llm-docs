> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516615-cmpismissing/cmpwantsregistermessage](https://developer.apple.com/documentation/coreservices/1516615-cmpismissing/cmpwantsregistermessage)

# cmpWantsRegisterMessage

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

The setting of the `cmpWantsRegisterMessage` bit determines whether the Component Manager calls this component during registration. Set this bit to 1 if your component should be called when it is registered; otherwise, set this bit to 0.

## Declaration

```objectivec
cmpWantsRegisterMessage = 1UL << 31
```
