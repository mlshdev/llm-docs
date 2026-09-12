> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexheaderstobytes(_:)](https://developer.apple.com/documentation/iobluetooth/obexheaderstobytes(_:))

# OBEXHeadersToBytes(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Converts a dictionary of headers to a data pointer, from which you can extract as bytes and pass to the OBEX command/response functions.

## Declaration

```swift
func OBEXHeadersToBytes(_ dictionaryOfHeaders: CFDictionary!) -> Unmanaged<CFMutableData>!
```

## Parameters

- `dictionaryOfHeaders`: Dictionary that you have added headers to with the above OBEXAddXXXHeader functions.

<a id="return-value"></a>

## Return Value

Mutable data ref containing the bytes of all headers.

<a id="Discussion"></a>

## Discussion

Returns a CFMutableDataRef containing all the header data found in the dictionary, formatted according to the OBEX/IrMC spec. YOU MUST RELEASE IT when you are finished with it (ie. when the OBEX request is complete). All OBEX-specification defined headers are supported and should be returned to the dictionary. Use the keys defined above to get headers from dictionary. Example usage:

```objc
 
   Example usage:
 
   CFMutableDictionaryRef	dictionary;
   CFMutableDataRef		mGetHeadersDataRef;
   uint8_t* 				headerDataPtr;
   uint32_t 				headerDataLength;
 
   dictionary = CFDictionaryCreateMutable( kCFAllocatorDefault, 0, &kCFCopyStringDictionaryKeyCallBacks, &kCFTypeDictionaryValueCallBacks );
 
   // Package up desired headers.
 
   OBEXAddTypeHeader( CFSTR( "text/x-vCard" ), dictionary );
 
   mGetHeadersDataRef = OBEXHeadersToBytes( dictionary );
 
   headerDataPtr = CFDataGetBytePtr( mGetHeadersDataRef );
   headerDataLength = CFDataGetLength( mGetHeadersDataRef );
 
   // From here I can pass it to any OBEX command, such as OBEXPut...
 
```

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
- [OBEXAddTime4ByteHeader(\_:\_:)](obexaddtime4byteheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddTimeISOHeader(\_:\_:\_:)](obexaddtimeisoheader%28______%29.md): Add bytes to a dictionary of OBEXheaders.

# OBEXHeadersToBytes (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Converts a dictionary of headers to a data pointer, from which you can extract as bytes and pass to the OBEX command/response functions.

## Declaration

```objectivec
CFMutableDataRefOBEXHeadersToBytes(CFDictionaryRef dictionaryOfHeaders);
```

## Parameters

- `dictionaryOfHeaders`: Dictionary that you have added headers to with the above OBEXAddXXXHeader functions.

<a id="return-value"></a>

## Return Value

Mutable data ref containing the bytes of all headers.

<a id="Discussion"></a>

## Discussion

Returns a CFMutableDataRef containing all the header data found in the dictionary, formatted according to the OBEX/IrMC spec. YOU MUST RELEASE IT when you are finished with it (ie. when the OBEX request is complete). All OBEX-specification defined headers are supported and should be returned to the dictionary. Use the keys defined above to get headers from dictionary. Example usage:

```objc
 
   Example usage:
 
   CFMutableDictionaryRef	dictionary;
   CFMutableDataRef		mGetHeadersDataRef;
   uint8_t* 				headerDataPtr;
   uint32_t 				headerDataLength;
 
   dictionary = CFDictionaryCreateMutable( kCFAllocatorDefault, 0, &kCFCopyStringDictionaryKeyCallBacks, &kCFTypeDictionaryValueCallBacks );
 
   // Package up desired headers.
 
   OBEXAddTypeHeader( CFSTR( "text/x-vCard" ), dictionary );
 
   mGetHeadersDataRef = OBEXHeadersToBytes( dictionary );
 
   headerDataPtr = CFDataGetBytePtr( mGetHeadersDataRef );
   headerDataLength = CFDataGetLength( mGetHeadersDataRef );
 
   // From here I can pass it to any OBEX command, such as OBEXPut...
 
```

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
