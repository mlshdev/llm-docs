> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsessiondelete](https://developer.apple.com/documentation/iobluetooth/obexsessiondelete)

# OBEXSessionDelete

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Destroy an OBEX session. If connections are open, they will (eventually) be terminated for you.

## Declaration

```objectivec
OBEXError OBEXSessionDelete(OBEXSessionRef inSessionRef);
```

## Parameters

- `inSessionRef`: A valid service reference.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.

<a id="Discussion"></a>

## Discussion

\*\*\* DEPRECATED IN BLUETOOTH 2.2 (OS X v10.6) \*\*\* You should transition your code to Objective-C equivalents. \*\*\* This API may be removed any time in the future.

## See Also

### Miscellaneous

- [GET_HEADER_ID_IS_NULL_TERMINATED_UNICODE_TEXT](get_header_id_is_null_terminated_unicode_text.md): Convenience Macros for working with OBEX Header Identifiers.
- [OBEXAddApplicationParameterHeader](obexaddapplicationparameterheader%28______%29.md): Add bytes representing an application parameter to a dictionary of OBEX headers.
- [OBEXAddAuthorizationChallengeHeader](obexaddauthorizationchallengeheader%28______%29.md): Add an authorization challenge header to a dictionary of OBEXheaders.
- [OBEXAddAuthorizationResponseHeader](obexaddauthorizationresponseheader%28______%29.md): Add an authorization Response header to a dictionary of OBEXheaders.
- [OBEXAddBodyHeader](obexaddbodyheader%28________%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXAddByteSequenceHeader](obexaddbytesequenceheader%28______%29.md): Add a byte sequence header to a dictionary of OBEXheaders.
- [OBEXAddConnectionIDHeader](obexaddconnectionidheader%28______%29.md): Add bytes representing a connection ID to a dictionary of OBEX headers.
- [OBEXAddCountHeader](obexaddcountheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddDescriptionHeader](obexadddescriptionheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddHTTPHeader](obexaddhttpheader%28______%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXAddLengthHeader](obexaddlengthheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddNameHeader](obexaddnameheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddObjectClassHeader](obexaddobjectclassheader%28______%29.md): Add an object class header to a dictionary of OBEXheaders.
- [OBEXAddTargetHeader](obexaddtargetheader%28______%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXAddTime4ByteHeader](obexaddtime4byteheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
