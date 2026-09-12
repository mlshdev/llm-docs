> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560699-x_profiles/cmiccreservedflagsmask](https://developer.apple.com/documentation/applicationservices/1560699-x_profiles/cmiccreservedflagsmask)

# cmICCReservedFlagsMask

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmICCReservedFlagsMask = 0x0000FFFF
```

<a id="discussion"></a>

## Discussion

This mask provides access to bits 0 through 15 of the `flags` field, which are defined and reserved by the ICC. For more information, see the International Color Consortium Profile Format Specification, and the next two mask definitions.

To obtain a copy of the ICC specification, or to get other information about the ICC, visit the ICC Web site at [http://www.color.org/](http://www.color.org/).
