> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560699-x_profiles/cmembeddedusemask](https://developer.apple.com/documentation/applicationservices/1560699-x_profiles/cmembeddedusemask)

# cmEmbeddedUseMask

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmEmbeddedUseMask = 0x00000002
```

<a id="discussion"></a>

## Discussion

This mask provides access to bit 1 of the `flags` field, which specifies whether the profile can be used independently or can only be used as an embedded profile. It has the value 0 if the profile can be used anywhere, 1 if it must be embedded.

You should interpret the setting of this bit as an indication of copyright protection. If the profile developer set this bit to 1, you should use this profile as an embedded profile only and not copy the profile for your own purposes. The profile developer also specifies explicit copyright intention using the `cmCopyrightTag` profile tag (defined in the `CMICCProfile.h` header file).
