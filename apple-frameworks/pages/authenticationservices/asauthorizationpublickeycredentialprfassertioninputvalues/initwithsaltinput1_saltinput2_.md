> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialprfassertioninputvalues/initwithsaltinput1:saltinput2:

# initWithSaltInput1:saltInput2:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes an input values object with the given salts.

## Declaration

```objectivec
- (instancetype) initWithSaltInput1:(NSData *) saltInput1 saltInput2:(NSData *) saltInput2;
```

## Parameters

- `saltInput1`: A salt for the hashing function.
- `saltInput2`: An optional second salt for the hashing function.
