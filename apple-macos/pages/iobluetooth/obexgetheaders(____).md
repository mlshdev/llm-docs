> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexgetheaders(_:_:)](https://developer.apple.com/documentation/iobluetooth/obexgetheaders(_:_:))

# OBEXGetHeaders(\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Take a data blob and looks for OBEX headers.

## Declaration

```swift
func OBEXGetHeaders(_ inData: UnsafeRawPointer!, _ inDataSize: Int) -> CFDictionary!
```

## Parameters

- `inData`: The data chunk with the headers you are interested in.
- `inDataSize`: The size of the buffer you are passing in.

<a id="return-value"></a>

## Return Value

A CFDictionary with the headers found in the data blob inside it.

<a id="Discussion"></a>

## Discussion

You should use this when your callback for PUTs, GETs, etc. give you a data chunk and a size. Pass these params to this function and you will receive a dictionary back full of the parse headers. You can use the CFDictionary calls to get objects out of it, based on the header keys defined above. You are responsible for releasing the CFDictionary returned to you. Example usage:

```objc
 
   CFDictionaryRef   dictionary = OBEXGetHeaders( data, dataLength );
   if( dictionary )
   {
   	if( CFDictionaryGetCountOfKey( dictionary, kOBEXHeaderIDKeyName ) > 0 )
   	{
   		CFStringRef theStringRef;
 
   		theStringRef = (CFStringRef) CFDictionaryGetValue( dictionary, kOBEXHeaderIDKeyName );
   		if( theStringRef )
   		{
   			// Display it, use it as a filename, whatever.
   		}
   	}
 
   	if( CFDictionaryGetCountOfKey( dictionary, kOBEXHeaderIDKeyConnectionID ) > 0 )
   	{
   		CFDataRef theDataRef;
 
   		theDataRef = (CFDataRef) CFDictionaryGetValue( dictionary, kOBEXHeaderIDKeyConnectionID );
   		if( theDataRef )
   		{
   			// now we have data representing the connection ID.
   		}
   	}
 
   	CFRelease( dictionary );
   }
 
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

# OBEXGetHeaders (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Take a data blob and looks for OBEX headers.

## Declaration

```objectivec
CFDictionaryRefOBEXGetHeaders(const void *inData, size_t inDataSize);
```

## Parameters

- `inData`: The data chunk with the headers you are interested in.
- `inDataSize`: The size of the buffer you are passing in.

<a id="return-value"></a>

## Return Value

A CFDictionary with the headers found in the data blob inside it.

<a id="Discussion"></a>

## Discussion

You should use this when your callback for PUTs, GETs, etc. give you a data chunk and a size. Pass these params to this function and you will receive a dictionary back full of the parse headers. You can use the CFDictionary calls to get objects out of it, based on the header keys defined above. You are responsible for releasing the CFDictionary returned to you. Example usage:

```objc
 
   CFDictionaryRef   dictionary = OBEXGetHeaders( data, dataLength );
   if( dictionary )
   {
   	if( CFDictionaryGetCountOfKey( dictionary, kOBEXHeaderIDKeyName ) > 0 )
   	{
   		CFStringRef theStringRef;
 
   		theStringRef = (CFStringRef) CFDictionaryGetValue( dictionary, kOBEXHeaderIDKeyName );
   		if( theStringRef )
   		{
   			// Display it, use it as a filename, whatever.
   		}
   	}
 
   	if( CFDictionaryGetCountOfKey( dictionary, kOBEXHeaderIDKeyConnectionID ) > 0 )
   	{
   		CFDataRef theDataRef;
 
   		theDataRef = (CFDataRef) CFDictionaryGetValue( dictionary, kOBEXHeaderIDKeyConnectionID );
   		if( theDataRef )
   		{
   			// now we have data representing the connection ID.
   		}
   	}
 
   	CFRelease( dictionary );
   }
 
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
