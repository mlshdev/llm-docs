> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/kscpropnetairportjoinmode-c.var](https://developer.apple.com/documentation/systemconfiguration/kscpropnetairportjoinmode-c.var)

# kSCPropNetAirPortJoinMode

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Global Variable  
**Availability:** macOS 10.2+ (deprecated in 10.9)

The AirPort key `JoinMode`, whose value is of type `CFString`.

## Declaration

```objectivec
extern CFStringRef const kSCPropNetAirPortJoinMode;
```

<a id="Discussion"></a>

## Discussion

This key can be passed the following constants:

- `kSCValNetAirPortJoinModeAutomatic`, which has the value `Automatic`
- `kSCValNetAirPortJoinModePreferred`, which has the value `Preferred`
- `kSCValNetAirPortJoinModeRanked`, which has the value `Ranked`
- `kSCValNetAirPortJoinModeRecent`, which has the value `Recent`
- `kSCValNetAirPortJoinModeStrongest`, which has the value `Strongest`

## See Also

### Constants

- [kSCPropNetAirPortAllowNetCreation](kscpropnetairportallownetcreation-c.var.md): Deprecated. The AirPort key `AllowNetCreation`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetAirPortAuthPassword](kscpropnetairportauthpassword-c.var.md): Deprecated. The AirPort key `AuthPassword`, whose value is of type `CFData`.
- [kSCPropNetAirPortAuthPasswordEncryption](kscpropnetairportauthpasswordencryption-c.var.md): Deprecated. The AirPort key `AuthPasswordEncryption`, whose value is of type `CFString`.
- [kSCPropNetAirPortPowerEnabled](kscpropnetairportpowerenabled-c.var.md): Deprecated. The AirPort key `PowerEnabled`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetAirPortPreferredNetwork](kscpropnetairportpreferrednetwork-c.var.md): Deprecated. The AirPort key `PreferredNetwork`, whose value is of type `CFString`.
- [kSCPropNetAirPortSavePasswords](kscpropnetairportsavepasswords-c.var.md): Deprecated. The AirPort key `SavePasswords`, whose value is of type `CFNumber` and is equal to `0` or `1`.
