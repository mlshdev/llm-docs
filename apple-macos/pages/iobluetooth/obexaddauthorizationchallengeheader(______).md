> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexaddauthorizationchallengeheader(_:_:_:)](https://developer.apple.com/documentation/iobluetooth/obexaddauthorizationchallengeheader(_:_:_:))

# OBEXAddAuthorizationChallengeHeader(\_:\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Add an authorization challenge header to a dictionary of OBEXheaders.

## Declaration

```swift
func OBEXAddAuthorizationChallengeHeader(_ inHeaderData: UnsafeRawPointer!, _ inHeaderDataLength: UInt32, _ dictRef: CFMutableDictionary!) -> OBEXError
```

## Parameters

- `inHeaderData`: Bytes you want to put in the authorization challenge header.
- `inHeaderDataLength`: Length of the bytes you want to put in authorization challenge header.
- `dictRef`: Dictionary you have allocated to hold the headers. Make sure it’s mutable.

<a id="return-value"></a>

## Return Value

Error code, kOBEXSuccess (0) if success.

<a id="Discussion"></a>

## Discussion

Authorization Challenge header - OBEX Spec, 2.2.13: Authorization Challenge.

## See Also

### Miscellaneous

- [OBEXAddApplicationParameterHeader(\_:\_:\_:)](obexaddapplicationparameterheader%28______%29.md): Add bytes representing an application parameter to a dictionary of OBEX headers.
- [OBEXAddAuthorizationResponseHeader(\_:\_:\_:)](obexaddauthorizationresponseheader%28______%29.md): Add an authorization Response header to a dictionary of OBEXheaders.
- [OBEXAddBodyHeader(\_:\_:\_:\_:)](obexaddbodyheader%28________%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXAddByteSequenceHeader(\_:\_:\_:)](obexaddbytesequenceheader%28______%29.md): Add a byte sequence header to a dictionary of OBEXheaders.
- [OBEXAddConnectionIDHeader(\_:\_:\_:)](obexaddconnectionidheader%28______%29.md): Add bytes representing a connection ID to a dictionary of OBEX headers.
- [OBEXAddCountHeader(\_:\_:)](obexaddcountheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddDescriptionHeader(\_:\_:)](obexadddescriptionheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddHTTPHeader(\_:\_:\_:)](obexaddhttpheader%28______%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXAddLengthHeader(\_:\_:)](obexaddlengthheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddNameHeader(\_:\_:)](obexaddnameheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddObjectClassHeader(\_:\_:\_:)](obexaddobjectclassheader%28______%29.md): Add an object class header to a dictionary of OBEXheaders.
- [OBEXAddTargetHeader(\_:\_:\_:)](obexaddtargetheader%28______%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXAddTime4ByteHeader(\_:\_:)](obexaddtime4byteheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddTimeISOHeader(\_:\_:\_:)](obexaddtimeisoheader%28______%29.md): Add bytes to a dictionary of OBEXheaders.
- [OBEXAddTypeHeader(\_:\_:)](obexaddtypeheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.

# OBEXAddAuthorizationChallengeHeader (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Add an authorization challenge header to a dictionary of OBEXheaders.

## Declaration

```objectivec
OBEXError OBEXAddAuthorizationChallengeHeader(const void *inHeaderData, uint32_t inHeaderDataLength, CFMutableDictionaryRef dictRef);
```

## Parameters

- `inHeaderData`: Bytes you want to put in the authorization challenge header.
- `inHeaderDataLength`: Length of the bytes you want to put in authorization challenge header.
- `dictRef`: Dictionary you have allocated to hold the headers. Make sure it’s mutable.

<a id="return-value"></a>

## Return Value

Error code, kOBEXSuccess (0) if success.

<a id="Discussion"></a>

## Discussion

Authorization Challenge header - OBEX Spec, 2.2.13: Authorization Challenge.

## See Also

### Miscellaneous

- [GET_HEADER_ID_IS_NULL_TERMINATED_UNICODE_TEXT](get_header_id_is_null_terminated_unicode_text.md): Convenience Macros for working with OBEX Header Identifiers.
- [OBEXAddApplicationParameterHeader](obexaddapplicationparameterheader%28______%29.md): Add bytes representing an application parameter to a dictionary of OBEX headers.
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
- [OBEXAddTimeISOHeader](obexaddtimeisoheader%28______%29.md): Add bytes to a dictionary of OBEXheaders.
