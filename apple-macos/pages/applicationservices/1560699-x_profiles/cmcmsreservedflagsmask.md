> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560699-x_profiles/cmcmsreservedflagsmask](https://developer.apple.com/documentation/applicationservices/1560699-x_profiles/cmcmsreservedflagsmask)

# cmCMSReservedFlagsMask

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmCMSReservedFlagsMask = (int)0xFFFF0000
```

<a id="discussion"></a>

## Discussion

This mask provides access to bits 16 through 31 of the `flags` field, which are available for a color management system (CMS) vendor, such as ColorSync. ColorSync’s default CMM uses bits 16 through 19 to provide hints for color matching, as described in the following three mask definitions. Other CMM vendors should follow the same conventions.
