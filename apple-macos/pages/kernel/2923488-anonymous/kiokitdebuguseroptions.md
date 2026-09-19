> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/2923488-anonymous/kiokitdebuguseroptions

# kIOKitDebugUserOptions

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.13+

## Declaration

```objectivec
kIOKitDebugUserOptions = 0
	    | kIOLogAttach
	    | kIOLogProbe
	    | kIOLogStart
	    | kIOLogRegister
	    | kIOLogMatch
	    | kIOLogConfig
	    | kIOLogYield
	    | kIOLogPower
	    | kIOLogMapping
	    | kIOLogCatalogue
	    | kIOLogTracePower
	    | kIOLogDebugPower
	    | kOSLogRegistryMods
	    | kIOLogPMRootDomain
	    | kOSRegistryModsMode
	    | kIOLogHibernate
	    | kIOSleepWakeWdogOff
	    | kIOKextSpinDump
	    | kIOWaitQuietPanics
```
