> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560733-profile_access_procedures](https://developer.apple.com/documentation/applicationservices/1560733-profile_access_procedures)

# Profile Access Procedures

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Specify operations used to access profiles.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmOpenReadAccess](1560733-profile_access_procedures/cmopenreadaccess.md)
- [cmOpenWriteAccess](1560733-profile_access_procedures/cmopenwriteaccess.md): Open the profile for writing. The total size of the profile is specified in the `size` parameter.
- [cmReadAccess](1560733-profile_access_procedures/cmreadaccess.md): Read the number of bytes specified by the `size` parameter.
- [cmWriteAccess](1560733-profile_access_procedures/cmwriteaccess.md): Write the number of bytes specified by the `size` parameter.
- [cmCloseAccess](1560733-profile_access_procedures/cmcloseaccess.md): Close the profile for reading or writing.
- [cmCreateNewAccess](1560733-profile_access_procedures/cmcreatenewaccess.md): Create a new data stream for the profile.
- [cmAbortWriteAccess](1560733-profile_access_procedures/cmabortwriteaccess.md): Cancel the current write attempt.
- [cmBeginAccess](1560733-profile_access_procedures/cmbeginaccess.md): Begin the process of procedural access. This is always the first operation constant passed to the access procedure. If the call is successful, the `cmEndAccess` operation is guaranteed to be the last call to the procedure.
- [cmEndAccess](1560733-profile_access_procedures/cmendaccess.md): End the process of procedural access. This is always the last operation constant passed to the access procedure (unless the `cmBeginAccess` call failed).
