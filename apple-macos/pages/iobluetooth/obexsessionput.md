> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsessionput](https://developer.apple.com/documentation/iobluetooth/obexsessionput)

# OBEXSessionPut

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Send a put command to a remote OBEX server.

## Declaration

```objectivec
OBEXError OBEXSessionPut(OBEXSessionRef inSessionRef, Boolean inIsFinalChunk, void *inHeadersData, size_t inHeadersDataLength, void *inBodyData, size_t inBodyDataLength, OBEXSessionEventCallback inCallback, void *inUserRefCon);
```

## Parameters

- `inSessionRef`: A valid session reference.
- `inIsFinalChunk`: TRUE or FALSE - is this the last chunk of header data for this PUT.
- `inHeadersData`: Headers containing data to PUT. Don’t include your body header data here.
- `inHeadersDataLength`: Size of header data. Don’t include your body header data here.
- `inBodyData`: Data for the BODY header to PUT. DO NOT package your data in an actual BODY header, this will be done for you, based on the finalChunk flag you pass in above (since based on this flag the header ID will be either a BODY or ENDOFBODY header).
- `inBodyDataLength`: Size of Data for the BODY header to PUT.
- `inCallback`: A valid callback. Will be called for progress, errors and completion.
- `inUserRefCon`: Optional parameter; can contain anything you wish. Will be returned in your callback just as you passed it.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.

<a id="Discussion"></a>

## Discussion

As all commands for OBEX sessions, this command is asynchronous only. A NULL callback paramter will result in an error.

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
