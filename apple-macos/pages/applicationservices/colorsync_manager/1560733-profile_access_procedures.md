> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1560733-profile_access_procedures](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1560733-profile_access_procedures)

# Profile Access Procedures

**Framework:** Application Services

Specify operations used to access profiles.

<a id="overview"></a>

## Overview

When your application calls the `CMOpenProfile`, `CMNewProfile`, `CMCopyProfile`, or `CMNewLinkProfile` functions, it can supply the ColorSync Manager with a profile location structure of type `CMProcedureLocation` to specify a procedure that provides access to a profile. The ColorSync Manager calls your procedure when the profile is created, initialized, opened, read, updated, or closed. The profile access procedure declaration is described in `CMProfileAccessProcPtr`.

When the ColorSync Manager calls your profile access procedure, it passes one of these constants in the `command` parameter to specify an operation. Your procedure must be able to respond to each of these constants.

## Topics

### Constants

- [cmOpenReadAccess](../cmopenreadaccess.md)
- [cmOpenWriteAccess](../cmopenwriteaccess.md): Open the profile for writing. The total size of the profile is specified in the `size` parameter.
- [cmReadAccess](../cmreadaccess.md): Read the number of bytes specified by the `size` parameter.
- [cmWriteAccess](../cmwriteaccess.md): Write the number of bytes specified by the `size` parameter.
- [cmCloseAccess](../cmcloseaccess.md): Close the profile for reading or writing.
- [cmCreateNewAccess](../cmcreatenewaccess.md): Create a new data stream for the profile.
- [cmAbortWriteAccess](../cmabortwriteaccess.md): Cancel the current write attempt.
- [cmBeginAccess](../cmbeginaccess.md): Begin the process of procedural access. This is always the first operation constant passed to the access procedure. If the call is successful, the `cmEndAccess` operation is guaranteed to be the last call to the procedure.
- [cmEndAccess](../cmendaccess.md): End the process of procedural access. This is always the last operation constant passed to the access procedure (unless the `cmBeginAccess` call failed).
