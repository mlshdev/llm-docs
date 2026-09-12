> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexcreatevevent](https://developer.apple.com/documentation/iobluetooth/obexcreatevevent)

# OBEXCreateVEvent

**Interface language:** Objective-C

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Creates a formatted vEvent, ready to be sent over OBEX or whatever. You probably will embed the output in a vCalendar event.

## Declaration

```objectivec
CFDataRefOBEXCreateVEvent(const char *inCharset, uint32_t inCharsetLength, const char *inEncoding, uint32_t inEncodingLength, const char *inEventStartDate, uint32_t inEventStartDateLength, const char *inEventEndDate, uint32_t inEventEndDateLength, const char *inAlarmDate, uint32_t inAlarmDateLength, const char *inCategory, uint32_t inCategoryLength, const char *inSummary, uint32_t inSummaryLength, const char *inLocation, uint32_t inLocationLength, const char *inXIRMCLUID, uint32_t inXIRMCLUIDLength);
```

## Parameters

- `inCharset`: The Charset the passed data is in. Pass in a #defined charset for ease of use.
- `inCharsetLength`: The length of the Charset passed data.
- `inEncoding`: The encoding of the summary and location fields.
- `inEventStartDate`: Start of event date, in the (ISO8601) format: YYYYMMDDTHHMMSS. e.g. 19960415T083000 = 8:30 am on April 15, 1996. All time values should be in LOCAL time.
- `inEventEndDate`: End of event date.
- `inAlarmDate`: Date of Alarm for event, in the format: YYYYMMDDTHHMMSS.
- `inCategory`: Category of event, such as “MEETING” or “PHONE CALL”.
- `inSummary`: Summary of event. Max length is 36 bytes. Longer will result in a bad argument error.
- `inLocation`: Summary of event. Max length is 20 bytes. Longer will result in a bad argument error.
- `inXIRMCLUID`: The IRMC Local Unique Identifier Label, max length 12 bytes. Longer will result in a bad argument error.

<a id="return-value"></a>

## Return Value

A valid CFDataRef - nil if we failed.

<a id="Discussion"></a>

## Discussion

All parameters are optional. The CFDataRef returned to you is NOT retained. Retain it if you want to keep it. Be aware that certain devices such as Ericsson phones MUST have certain fields, such as a start and end date.

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
