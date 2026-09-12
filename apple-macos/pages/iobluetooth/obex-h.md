> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obex-h](https://developer.apple.com/documentation/iobluetooth/obex-h)

# OBEX.h (Swift)

**Framework:** IOBluetooth  
**Kind:** API Collection

Public OBEX technology interfaces.

<a id="overview"></a>

## Overview

Contains generic OBEX constants, structs, and C API used for all OBEX communication over any transport. For specific transport API, see that transport’s C API. For example, if you wanted to know more about the Bluetooth OBEX implementation, see OBEXBluetooth.h.

The file also contains API that will assist in the construction and deconstruction of OBEX headers to and from raw bytes, as well as the creation of vCards and vEvents.

<a id="Included-Headers"></a>

### Included Headers

- \<stdio.h\>
- \<stdint.h\>
- \<CoreServices/CoreServices.h\>
- \<IOBluetooth/IOBluetoothUserLib.h\>

## Topics

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
- [OBEXAddTypeHeader(\_:\_:)](obexaddtypeheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddUserDefinedHeader(\_:\_:\_:)](obexadduserdefinedheader%28______%29.md): Add a user-defined custom header to a dictionary of OBEXheaders.
- [OBEXAddWhoHeader(\_:\_:\_:)](obexaddwhoheader%28______%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXGetHeaders(\_:\_:)](obexgetheaders%28____%29.md): Take a data blob and looks for OBEX headers.
- [OBEXHeadersToBytes(\_:)](obexheaderstobytes%28__%29.md): Converts a dictionary of headers to a data pointer, from which you can extract as bytes and pass to the OBEX command/response functions.

### Data Types

See the Overview for header-level documentation.

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandResponseData](obexconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.

### Constants

See the Overview for header-level documentation.

- [OBEXConnectFlagValues](obexconnectflagvalues.md): Flags for Connect command.
- [OBEXError](obexerror.md): Codes for OBEX errors. If the return value was not in the following range, then it is most likely resulting from kernel code/IOKit, and you should consult IOReturn.h for those codes.
- [OBEXHeaderIdentifiers](obexheaderidentifiers.md): Identifiers for OBEX Headers.
- [OBEXNonceFlagValues](obexnonceflagvalues.md): Flags for Nonce command during digest challenge.
- [OBEXOpCodeCommandValues](obexopcodecommandvalues.md): Operation OpCode values for commands.
- [OBEXOpCodeResponseValues](obexopcoderesponsevalues.md): Response opCode values.
- [OBEXOpCodeSessionValues](obexopcodesessionvalues.md): Operation OpCode values for sessions. From the OBEX 1.3 specification.
- [OBEXPutFlagValues](obexputflagvalues.md)
- [OBEXRealmValues](obexrealmvalues.md): Values for Realm during digest response.
- [OBEXSessionEventTypes](obexsessioneventtypes.md): Type identifiers for OBEX sessions.
- [OBEXSessionParameterTags](obexsessionparametertags.md): Tags for SessionParameters.
- [OBEXVersions](obexversions.md): The available/supported OBEX versions.

### Macros

- [OBEX Convenience Macros](obex-convenience-macros.md): Convenience Macros for working with OBEX Header Identifiers.

## See Also

### Reference

- [Bluetooth.h User-Space](bluetooth-h-user-space.md): Bluetooth wireless technology
- [IOBluetoothUserLib.h](iobluetoothuserlib-h.md): Public Interfaces for Apple’s implementation of Bluetooth technology.
- [IOBluetoothUtilities.h](iobluetoothutilities-h.md): See the Overview section above for header-level documentation.
- [OBEXBluetooth.h](obexbluetooth-h.md): Object Exchange over Bluetooth.
- [OBEXFileTransferServices.h](obexfiletransferservices-h.md)
- [IOBluetooth Structures](iobluetooth-structures.md)
- [IOBluetooth Enumerations](iobluetooth-enumerations.md)
- [IOBluetooth Constants](iobluetooth-constants.md)
- [IOBluetooth Functions](iobluetooth-functions.md)
- [IOBluetooth Data Types](iobluetooth-data-types.md)

# OBEX.h (Objective-C)

**Framework:** IOBluetooth  
**Kind:** API Collection

Public OBEX technology interfaces.

<a id="overview"></a>

## Overview

Contains generic OBEX constants, structs, and C API used for all OBEX communication over any transport. For specific transport API, see that transport’s C API. For example, if you wanted to know more about the Bluetooth OBEX implementation, see OBEXBluetooth.h.

The file also contains API that will assist in the construction and deconstruction of OBEX headers to and from raw bytes, as well as the creation of vCards and vEvents.

<a id="Included-Headers"></a>

### Included Headers

- \<stdio.h\>
- \<stdint.h\>
- \<CoreServices/CoreServices.h\>
- \<IOBluetooth/IOBluetoothUserLib.h\>

## Topics

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
- [OBEXAddTimeISOHeader](obexaddtimeisoheader%28______%29.md): Add bytes to a dictionary of OBEXheaders.
- [OBEXAddTypeHeader](obexaddtypeheader%28____%29.md): Add a CFStringRef to a dictionary of OBEXheaders.
- [OBEXAddUserDefinedHeader](obexadduserdefinedheader%28______%29.md): Add a user-defined custom header to a dictionary of OBEXheaders.
- [OBEXAddWhoHeader](obexaddwhoheader%28______%29.md): Add bytes of data to a dictionary of OBEXheaders.
- [OBEXCreateVCard](obexcreatevcard.md): Deprecated. Creates a formatted vCard, ready to be sent over OBEX or whatever.
- [OBEXCreateVEvent](obexcreatevevent.md): Deprecated. Creates a formatted vEvent, ready to be sent over OBEX or whatever. You probably will embed the output in a vCalendar event.
- [OBEXGetHeaders](obexgetheaders%28____%29.md): Take a data blob and looks for OBEX headers.
- [OBEXHeadersToBytes](obexheaderstobytes%28__%29.md): Converts a dictionary of headers to a data pointer, from which you can extract as bytes and pass to the OBEX command/response functions.
- [OBEXSessionAbort](obexsessionabort.md): Deprecated. Send an abort command to a remote OBEX server.
- [OBEXSessionAbortResponse](obexsessionabortresponse.md): Deprecated. Send a response to a abort command to the remote client.
- [OBEXSessionConnect](obexsessionconnect.md): Deprecated. Establishes an OBEX connection to the target device for the session. If a transport connection is not open yet, it will be opened if possible.
- [OBEXSessionConnectResponse](obexsessionconnectresponse.md): Deprecated. Send a response to a connect command to the remote client.
- [OBEXSessionDelete](obexsessiondelete.md): Deprecated. Destroy an OBEX session. If connections are open, they will (eventually) be terminated for you.
- [OBEXSessionDisconnect](obexsessiondisconnect.md): Deprecated. Send a disconnect command to a remote OBEX server.
- [OBEXSessionDisconnectResponse](obexsessiondisconnectresponse.md): Deprecated. Send a response to a disconnect command to the remote client.
- [OBEXSessionGet](obexsessionget.md): Deprecated. Send a get command to a remote OBEX server.
- [OBEXSessionGetAvailableCommandPayloadLength](obexsessiongetavailablecommandpayloadlength.md): Deprecated. Gets space available for your data for a particular command response you are trying to send.
- [OBEXSessionGetAvailableCommandResponsePayloadLength](obexsessiongetavailablecommandresponsepayloadlength.md): Deprecated. Gets space available for your data for a particular command response you are trying to send.
- [OBEXSessionGetMaxPacketLength](obexsessiongetmaxpacketlength.md): Deprecated. Gets current max packet length.
- [OBEXSessionGetResponse](obexsessiongetresponse.md): Deprecated. Send a response to a get command to the remote client.
- [OBEXSessionHasOpenOBEXConnection](obexsessionhasopenobexconnection.md): Deprecated. Allows you to test the session for an open OBEX connection for a particular session.
- [OBEXSessionPut](obexsessionput.md): Deprecated. Send a put command to a remote OBEX server.
- [OBEXSessionPutResponse](obexsessionputresponse.md): Deprecated. Send a response to a put command to the remote client.
- [OBEXSessionSetPath](obexsessionsetpath.md): Deprecated. Send a set path command to a remote OBEX server.
- [OBEXSessionSetPathResponse](obexsessionsetpathresponse.md): Deprecated. Send a response to a set path command to the remote client.
- [OBEXSessionSetServerCallback](obexsessionsetservercallback.md): Deprecated.

### Data Types

See the Overview for header-level documentation.

- [OBEXSessionEvent](obexsessionevent.md)
- [OBEXAbortCommandData](obexabortcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXAbortCommandResponseData](obexabortcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandData](obexconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXConnectCommandResponseData](obexconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandData](obexdisconnectcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXDisconnectCommandResponseData](obexdisconnectcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXErrorData](obexerrordata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandData](obexgetcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXGetCommandResponseData](obexgetcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandData](obexputcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXPutCommandResponseData](obexputcommandresponsedata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandData](obexsetpathcommanddata.md): Part of the OBEXSessionEvent structure.
- [OBEXSetPathCommandResponseData](obexsetpathcommandresponsedata.md): Part of the OBEXSessionEvent structure.

### Constants

See the Overview for header-level documentation.

- [OBEXConnectFlagValues](obexconnectflagvalues.md): Flags for Connect command.
- [OBEXError](obexerror.md): Codes for OBEX errors. If the return value was not in the following range, then it is most likely resulting from kernel code/IOKit, and you should consult IOReturn.h for those codes.
- [OBEXHeaderIdentifiers](obexheaderidentifiers.md): Identifiers for OBEX Headers.
- [OBEXNonceFlagValues](obexnonceflagvalues.md): Flags for Nonce command during digest challenge.
- [OBEXOpCodeCommandValues](obexopcodecommandvalues.md): Operation OpCode values for commands.
- [OBEXOpCodeResponseValues](obexopcoderesponsevalues.md): Response opCode values.
- [OBEXOpCodeSessionValues](obexopcodesessionvalues.md): Operation OpCode values for sessions. From the OBEX 1.3 specification.
- [OBEXPutFlagValues](obexputflagvalues.md)
- [OBEXRealmValues](obexrealmvalues.md): Values for Realm during digest response.
- [OBEXSessionEventTypes](obexsessioneventtypes.md): Type identifiers for OBEX sessions.
- [OBEXSessionParameterTags](obexsessionparametertags.md): Tags for SessionParameters.
- [OBEXVersions](obexversions.md): The available/supported OBEX versions.

### Macros

- [OBEX Convenience Macros](obex-convenience-macros.md): Convenience Macros for working with OBEX Header Identifiers.

## See Also

### Reference

- [Bluetooth.h User-Space](bluetooth-h-user-space.md): Bluetooth wireless technology
- [IOBluetoothUserLib.h](iobluetoothuserlib-h.md): Public Interfaces for Apple’s implementation of Bluetooth technology.
- [IOBluetoothUtilities.h](iobluetoothutilities-h.md): See the Overview section above for header-level documentation.
- [OBEXBluetooth.h](obexbluetooth-h.md): Object Exchange over Bluetooth.
- [OBEXFileTransferServices.h](obexfiletransferservices-h.md)
- [IOBluetooth Structures](iobluetooth-structures.md)
- [IOBluetooth Enumerations](iobluetooth-enumerations.md)
- [IOBluetooth Constants](iobluetooth-constants.md)
- [IOBluetooth Functions](iobluetooth-functions.md)
- [IOBluetooth Data Types](iobluetooth-data-types.md)
