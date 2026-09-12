> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexaddtime4byteheader(_:_:)](https://developer.apple.com/documentation/iobluetooth/obexaddtime4byteheader(_:_:))

# OBEXAddTime4ByteHeader(\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Add a CFStringRef to a dictionary of OBEXheaders.

## Declaration

```swift
func OBEXAddTime4ByteHeader(_ time4Byte: UInt32, _ dictRef: CFMutableDictionary!) -> OBEXError
```

## Parameters

- `time4Byte`: 4-byte time value you want to add to the OBEX header dictionary.
- `dictRef`: Dictionary you have allocated to hold the headers. Make sure it’s mutable.

<a id="return-value"></a>

## Return Value

Error code, kOBEXSuccess (0) if success.

<a id="Discussion"></a>

## Discussion

Time4Byte headers - OBEX Spec, 2.2.5: 4 Bytes

## See Also

### Miscellaneous

- [OBEXAddApplicationParameterHeader(\_:\_:\_:)](obexaddapplicationparameterheader%28______%29.md): Add bytes representing an application parameter to a dictionary of OBEX headers.
- [OBEXAddAuthorizationChallengeHeader(\_:\_:\_:)](obexaddauthorizationchallengeheader%28______%29.md): Add an authorization challenge header to a dictionary of OBEXheaders.
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
- [OBEXAddTimeISOHeader(\_:\_:\_:)](obexaddtimeisoheader%28______%29.md): Add bytes to a dictionary of OBEXheaders.
- [OBEXAddTypeHeader(\_:\_:)](obexaddtypeheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.

# OBEXAddTime4ByteHeader (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Add a CFStringRef to a dictionary of OBEXheaders.

## Declaration

```objectivec
OBEXError OBEXAddTime4ByteHeader(uint32_t time4Byte, CFMutableDictionaryRef dictRef);
```

## Parameters

- `time4Byte`: 4-byte time value you want to add to the OBEX header dictionary.
- `dictRef`: Dictionary you have allocated to hold the headers. Make sure it’s mutable.

<a id="return-value"></a>

## Return Value

Error code, kOBEXSuccess (0) if success.

<a id="Discussion"></a>

## Discussion

Time4Byte headers - OBEX Spec, 2.2.5: 4 Bytes

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
- [OBEXAddTimeISOHeader](obexaddtimeisoheader%28______%29.md): Add bytes to a dictionary of OBEXheaders.
