> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork](https://developer.apple.com/documentation/cfnetwork)

# CFNetwork (Swift)

**Framework:** CFNetwork  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Access network services and handle changes in network configurations. Build on abstractions of network protocols to simplify tasks such as working with BSD sockets, administering HTTP and FTP servers, and managing Bonjour services.

## Topics

### Errors

- [CFNetworkErrors](cfnetwork/cfnetworkerrors.md): This enumeration contains error codes returned under the error domain [kCFErrorDomainCFNetwork](cfnetwork/kcferrordomaincfnetwork.md).
- [Error Dictionary Keys](cfnetwork/error-dictionary-keys.md): Networking-related keys that may be available in a `CFErrorRef` object’s `userInfo` dictionary.
- [Error Domains](cfnetwork/error-domains.md): High-level error domains.

### Hosts

- [CFHost](cfnetwork/cfhost.md): An opaque reference representing an CFHost object.
- [CFHostInfoType](cfnetwork/cfhostinfotype.md): Values indicating the type of data that is to be resolved or the type of data that was resolved.
- [CFHostClientContext](cfnetwork/cfhostclientcontext.md): A structure containing user-defined data and callbacks for CFHost objects.
- [CFHostCancelInfoResolution(\_:\_:)](cfnetwork/cfhostcancelinforesolution%28____%29.md): Deprecated. Cancels the resolution of a host.
- [CFHostCreateCopy(\_:\_:)](cfnetwork/cfhostcreatecopy%28____%29.md): Deprecated. Creates a new host object by copying.
- [CFHostCreateWithAddress(\_:\_:)](cfnetwork/cfhostcreatewithaddress%28____%29.md): Deprecated. Uses an address to create an instance of a host object.
- [CFHostCreateWithName(\_:\_:)](cfnetwork/cfhostcreatewithname%28____%29.md): Deprecated. Uses a name to create an instance of a host object.
- [CFHostGetAddressing(\_:\_:)](cfnetwork/cfhostgetaddressing%28____%29.md): Deprecated. Gets the addresses from a host.
- [CFHostGetNames(\_:\_:)](cfnetwork/cfhostgetnames%28____%29.md): Deprecated. Gets the names from a CFHost.
- [CFHostGetReachability(\_:\_:)](cfnetwork/cfhostgetreachability%28____%29.md): Deprecated. Gets reachability information from a host.
- [CFHostGetTypeID()](cfnetwork/cfhostgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the CFHost opaque type.
- [CFHostScheduleWithRunLoop(\_:\_:\_:)](cfnetwork/cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient(\_:\_:\_:)](cfnetwork/cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostStartInfoResolution(\_:\_:\_:)](cfnetwork/cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop(\_:\_:\_:)](cfnetwork/cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL(\_:\_:)](cfnetwork/cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript(\_:\_:\_:)](cfnetwork/cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript(\_:\_:\_:\_:)](cfnetwork/cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](cfnetwork/cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings()](cfnetwork/cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfnetwork/cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](cfnetwork/property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty(\_:\_:\_:)](corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty(\_:\_:)](corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](cfnetwork/proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](cfnetwork/global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings()](cfnetwork/cfnetworkcopysystemproxysettings%28%29.md).

### HTTP Authentication

- [CFHTTPAuthentication](cfnetwork/cfhttpauthentication.md): An opaque reference representing HTTP authentication information.
- [CFHTTPAuthenticationAppliesToRequest(\_:\_:)](cfnetwork/cfhttpauthenticationappliestorequest%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is associated with a CFHTTPMessage object.
- [CFHTTPAuthenticationCopyDomains(\_:)](cfnetwork/cfhttpauthenticationcopydomains%28__%29.md): Returns an array of domain URLs to which a given CFHTTPAuthentication object can be applied.
- [CFHTTPAuthenticationCopyMethod(\_:)](cfnetwork/cfhttpauthenticationcopymethod%28__%29.md): Gets the strongest authentication method that will be used when a CFHTTPAuthentication object is applied to a request.
- [CFHTTPAuthenticationCopyRealm(\_:)](cfnetwork/cfhttpauthenticationcopyrealm%28__%29.md): Gets an authentication information’s namespace.
- [CFHTTPAuthenticationCreateFromResponse(\_:\_:)](cfnetwork/cfhttpauthenticationcreatefromresponse%28____%29.md): Uses an authentication failure response to create a CFHTTPAuthentication object.
- [CFHTTPAuthenticationGetTypeID()](cfnetwork/cfhttpauthenticationgettypeid%28%29.md): Gets the Core Foundation type identifier for the CFHTTPAuthentication opaque type.
- [CFHTTPAuthenticationIsValid(\_:\_:)](cfnetwork/cfhttpauthenticationisvalid%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is valid.
- [CFHTTPAuthenticationRequiresAccountDomain(\_:)](cfnetwork/cfhttpauthenticationrequiresaccountdomain%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires an account domain.
- [CFHTTPAuthenticationRequiresOrderedRequests(\_:)](cfnetwork/cfhttpauthenticationrequiresorderedrequests%28__%29.md): Returns a Boolean value that indicates whether authentication requests should be made one at a time.
- [CFHTTPAuthenticationRequiresUserNameAndPassword(\_:)](cfnetwork/cfhttpauthenticationrequiresusernameandpassword%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires a username and a password.
- [kCFHTTPAuthenticationAccountDomain](cfnetwork/kcfhttpauthenticationaccountdomain.md): Account domain to use for authentication.
- [kCFHTTPAuthenticationPassword](cfnetwork/kcfhttpauthenticationpassword.md): Password to use for authentication.
- [kCFHTTPAuthenticationSchemeBasic](cfnetwork/kcfhttpauthenticationschemebasic.md): Request the HTTP basic authentication scheme.
- [kCFHTTPAuthenticationSchemeDigest](cfnetwork/kcfhttpauthenticationschemedigest.md): Request the HTTP digest authentication scheme.
- [kCFHTTPAuthenticationSchemeKerberos](cfnetwork/kcfhttpauthenticationschemekerberos.md): Request the HTTP Kerberos authentication scheme.
- [kCFHTTPAuthenticationSchemeNTLM](cfnetwork/kcfhttpauthenticationschementlm.md): Request the HTTP NTLM authentication scheme.
- [kCFHTTPAuthenticationSchemeNegotiate](cfnetwork/kcfhttpauthenticationschemenegotiate.md): Request the HTTP Negotiate authentication scheme.
- [kCFHTTPAuthenticationSchemeNegotiate2](cfnetwork/kcfhttpauthenticationschemenegotiate2.md): Request the HTTP Negotiate v2 authentication scheme.
- [kCFHTTPAuthenticationSchemeXMobileMeAuthToken](cfnetwork/kcfhttpauthenticationschemexmobilemeauthtoken.md): Request the HTTP XMobileMeAuthToken authentication scheme.
- [kCFHTTPAuthenticationUsername](cfnetwork/kcfhttpauthenticationusername.md): Username to use for authentication.

### HTTP Messages

- [CFHTTPMessage](cfnetwork/cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication(\_:\_:\_:\_:\_:\_:)](cfnetwork/cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes(\_:\_:\_:)](cfnetwork/cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary(\_:\_:\_:\_:)](cfnetwork/cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageApplyCredentials(\_:\_:\_:\_:\_:)](cfnetwork/cfhttpmessageapplycredentials%28__________%29.md): Performs the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageCopyAllHeaderFields(\_:)](cfnetwork/cfhttpmessagecopyallheaderfields%28__%29.md): Gets all header fields from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyBody(\_:)](cfnetwork/cfhttpmessagecopybody%28__%29.md): Gets the body from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyHeaderFieldValue(\_:\_:)](cfnetwork/cfhttpmessagecopyheaderfieldvalue%28____%29.md): Gets the value of a header field from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestMethod(\_:)](cfnetwork/cfhttpmessagecopyrequestmethod%28__%29.md): Gets the request method from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestURL(\_:)](cfnetwork/cfhttpmessagecopyrequesturl%28__%29.md): Gets the URL from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyResponseStatusLine(\_:)](cfnetwork/cfhttpmessagecopyresponsestatusline%28__%29.md): Gets the status line from a `CFHTTPMessage` object.
- [CFHTTPMessageCopySerializedMessage(\_:)](cfnetwork/cfhttpmessagecopyserializedmessage%28__%29.md): Serializes a CFHTTPMessage object.
- [CFHTTPMessageCopyVersion(\_:)](cfnetwork/cfhttpmessagecopyversion%28__%29.md): Gets the HTTP version from a `CFHTTPMessage` object.
- [CFHTTPMessageCreateCopy(\_:\_:)](cfnetwork/cfhttpmessagecreatecopy%28____%29.md): Gets a copy of a CFHTTPMessage object.
- [CFHTTPMessageCreateEmpty(\_:\_:)](cfnetwork/cfhttpmessagecreateempty%28____%29.md): Creates and returns a new, empty `CFHTTPMessage` object.
- [CFHTTPMessageCreateRequest(\_:\_:\_:\_:)](cfnetwork/cfhttpmessagecreaterequest%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP request.
- [CFHTTPMessageCreateResponse(\_:\_:\_:\_:)](cfnetwork/cfhttpmessagecreateresponse%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP response.
- [CFHTTPMessageGetResponseStatusCode(\_:)](cfnetwork/cfhttpmessagegetresponsestatuscode%28__%29.md): Gets the status code from a `CFHTTPMessage` object representing an HTTP response.
- [CFHTTPMessageGetTypeID()](cfnetwork/cfhttpmessagegettypeid%28%29.md): Returns the Core Foundation type identifier for the `CFHTTPMessage` opaque type.
- [CFHTTPMessageIsHeaderComplete(\_:)](cfnetwork/cfhttpmessageisheadercomplete%28__%29.md): Determines whether a message header is complete.
- [CFHTTPMessageIsRequest(\_:)](cfnetwork/cfhttpmessageisrequest%28__%29.md): Returns a Boolean indicating whether the HTTP message is a request or a response.
- [CFHTTPMessageSetBody(\_:\_:)](cfnetwork/cfhttpmessagesetbody%28____%29.md): Sets the body of a `CFHTTPMessage` object.
- [CFHTTPMessageSetHeaderFieldValue(\_:\_:\_:)](cfnetwork/cfhttpmessagesetheaderfieldvalue%28______%29.md): Sets the value of a header field in an HTTP message.
- [kCFHTTPVersion1_0](cfnetwork/kcfhttpversion1_0.md): Specifies HTTP version 1.0.
- [kCFHTTPVersion1_1](cfnetwork/kcfhttpversion1_1.md): Specifies HTTP version 1.1.
- [kCFHTTPVersion2_0](cfnetwork/kcfhttpversion2_0.md): HTTP version 2.0.

### FTP

- [CFFTPCreateParsedResourceListing(\_:\_:\_:\_:)](cfnetwork/cfftpcreateparsedresourcelisting%28________%29.md): Deprecated. Parses an FTP listing to a dictionary.
- [kCFFTPResourceGroup](cfnetwork/kcfftpresourcegroup.md): Deprecated. CFDictionary key for getting the CFString containing the name of a group that shares the FTP resource.
- [kCFFTPResourceLink](cfnetwork/kcfftpresourcelink.md): Deprecated. CFDictionary key for getting the CFString containing the symbolic link information. If the item is a symbolic link, the CFString contains the path to the item that the link references.
- [kCFFTPResourceModDate](cfnetwork/kcfftpresourcemoddate.md): Deprecated. CFDictionary key for getting the CFDate containing the last date and time the FTP resource was modified.
- [kCFFTPResourceMode](cfnetwork/kcfftpresourcemode.md): Deprecated. CFDictionary key for getting the CFNumber containing the access permissions, defined in `sys/types.h`, of the FTP resource.
- [kCFFTPResourceName](cfnetwork/kcfftpresourcename.md): Deprecated. CFDictionary key for getting the CFString containing the name of the FTP resource.
- [kCFFTPResourceOwner](cfnetwork/kcfftpresourceowner.md): Deprecated. CFDictionary key for getting the CFString containing the name of the owner of the FTP resource.
- [kCFFTPResourceSize](cfnetwork/kcfftpresourcesize.md): Deprecated. CFDictionary key for getting the CFNumber containing the size in bytes of the FTP resource.
- [kCFFTPResourceType](cfnetwork/kcfftpresourcetype.md): Deprecated. CFDictionary key for getting the CFNumber containing the type of the FTP resource as defined in `sys/dirent.h`.

### Network Diagnostics

- [CFNetDiagnostic](cfnetwork/cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetwork/cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively(\_:\_:)](cfnetwork/cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams(\_:\_:\_:)](cfnetwork/cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL(\_:\_:)](cfnetwork/cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively(\_:)](cfnetwork/cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName(\_:\_:)](cfnetwork/cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

### Network Services

- [CFNetService](cfnetwork/cfnetservice.md): An opaque reference representing a CFNetService.
- [CFNetServiceBrowser](cfnetwork/cfnetservicebrowser.md): An opaque reference representing a CFNetServiceBrowser.
- [CFNetServiceBrowserFlags](cfnetwork/cfnetservicebrowserflags.md): Flags that the system passes to net service browser callbacks.
- [CFNetServiceMonitor](cfnetwork/cfnetservicemonitor.md): An opaque reference for a service monitor.
- [CFNetServiceMonitorType](cfnetwork/cfnetservicemonitortype.md): Record type specifier used to tell a service monitor the type of record changes to watch for.
- [CFNetServiceClientContext](cfnetwork/cfnetserviceclientcontext.md): A structure provided when a CFNetService is associated with a callback function or when a CFNetServiceBrowser is created.
- [CFNetServiceRegisterFlags](cfnetwork/cfnetserviceregisterflags.md): Options to use when registering a service on the network.
- [CFNetServicesError](cfnetwork/cfnetserviceserror.md): Error codes that may be returned by CFNetServices functions or passed to CFNetServices callback functions.
- [CFNetServiceBrowserInvalidate(\_:)](cfnetwork/cfnetservicebrowserinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service browser object.
- [CFNetServiceBrowserScheduleWithRunLoop(\_:\_:\_:)](cfnetwork/cfnetservicebrowserschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceBrowser on a run loop.
- [CFNetServiceBrowserCreate(\_:\_:\_:)](cfnetwork/cfnetservicebrowsercreate%28______%29.md): Deprecated. Creates an instance of a Network Service browser object.
- [CFNetServiceBrowserGetTypeID()](cfnetwork/cfnetservicebrowsergettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service browser object.
- [CFNetServiceBrowserSearchForDomains(\_:\_:\_:)](cfnetwork/cfnetservicebrowsersearchfordomains%28______%29.md): Deprecated. Searches for domains.
- [CFNetServiceBrowserSearchForServices(\_:\_:\_:\_:)](cfnetwork/cfnetservicebrowsersearchforservices%28________%29.md): Deprecated. Searches a domain for services of a specified type.
- [CFNetServiceBrowserStopSearch(\_:\_:)](cfnetwork/cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.
- [CFNetServiceBrowserUnscheduleFromRunLoop(\_:\_:\_:)](cfnetwork/cfnetservicebrowserunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceBrowser from a run loop and mode.
- [CFNetServiceCancel(\_:)](cfnetwork/cfnetservicecancel%28__%29.md): Deprecated. Cancels a service registration or a service resolution.
- [CFNetServiceCreate(\_:\_:\_:\_:\_:)](cfnetwork/cfnetservicecreate%28__________%29.md): Deprecated. Creates an instance of a Network Service object.
- [CFNetServiceCreateCopy(\_:\_:)](cfnetwork/cfnetservicecreatecopy%28____%29.md): Deprecated. Creates a copy of a CFNetService object.
- [CFNetServiceCreateDictionaryWithTXTData(\_:\_:)](cfnetwork/cfnetservicecreatedictionarywithtxtdata%28____%29.md): Deprecated. Uses TXT record data to create a dictionary.
- [CFNetServiceCreateTXTDataWithDictionary(\_:\_:)](cfnetwork/cfnetservicecreatetxtdatawithdictionary%28____%29.md): Deprecated. Flattens a set of key/value pairs into a CFDataRef suitable for passing to [CFNetServiceSetTXTData(\_:\_:)](cfnetwork/cfnetservicesettxtdata%28____%29.md).
- [CFNetServiceGetAddressing(\_:)](cfnetwork/cfnetservicegetaddressing%28__%29.md): Deprecated. Gets the IP addressing from a CFNetService.
- [CFNetServiceGetDomain(\_:)](cfnetwork/cfnetservicegetdomain%28__%29.md): Deprecated. Gets the domain from a CFNetService.
- [CFNetServiceGetName(\_:)](cfnetwork/cfnetservicegetname%28__%29.md): Deprecated. Gets the name from a CFNetService.
- [CFNetServiceGetPortNumber(\_:)](cfnetwork/cfnetservicegetportnumber%28__%29.md): Deprecated. This function gets the port number from a CFNetService.
- [CFNetServiceGetTXTData(\_:)](cfnetwork/cfnetservicegettxtdata%28__%29.md): Deprecated. Queries a network service for the contents of its TXT records.
- [CFNetServiceGetTargetHost(\_:)](cfnetwork/cfnetservicegettargethost%28__%29.md): Deprecated. Queries a CFNetService for its target hosts.
- [CFNetServiceGetType(\_:)](cfnetwork/cfnetservicegettype%28__%29.md): Deprecated. Gets the type from a CFNetService.
- [CFNetServiceGetTypeID()](cfnetwork/cfnetservicegettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service object.
- [CFNetServiceMonitorCreate(\_:\_:\_:\_:)](cfnetwork/cfnetservicemonitorcreate%28________%29.md): Deprecated. Creates an instance of a NetServiceMonitor object that watches for record changes.
- [CFNetServiceMonitorGetTypeID()](cfnetwork/cfnetservicemonitorgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for all CFNetServiceMonitor instances.
- [CFNetServiceMonitorInvalidate(\_:)](cfnetwork/cfnetservicemonitorinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service monitor object.
- [CFNetServiceMonitorScheduleWithRunLoop(\_:\_:\_:)](cfnetwork/cfnetservicemonitorschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceMonitor on a run loop.
- [CFNetServiceMonitorStart(\_:\_:\_:)](cfnetwork/cfnetservicemonitorstart%28______%29.md): Deprecated. Starts monitoring.
- [CFNetServiceMonitorStop(\_:\_:)](cfnetwork/cfnetservicemonitorstop%28____%29.md): Deprecated. Stops a CFNetServiceMonitor.
- [CFNetServiceMonitorUnscheduleFromRunLoop(\_:\_:\_:)](cfnetwork/cfnetservicemonitorunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceMonitor from a run loop.
- [CFNetServiceRegisterWithOptions(\_:\_:\_:)](cfnetwork/cfnetserviceregisterwithoptions%28______%29.md): Deprecated. Makes a CFNetService available on the network.
- [CFNetServiceResolveWithTimeout(\_:\_:\_:)](cfnetwork/cfnetserviceresolvewithtimeout%28______%29.md): Deprecated. Gets the IP address or addresses for a CFNetService.
- [CFNetServiceSetClient(\_:\_:\_:)](cfnetwork/cfnetservicesetclient%28______%29.md): Deprecated. Associates a callback function with a CFNetService or disassociates a callback function from a CFNetService.
- [CFNetServiceSetTXTData(\_:\_:)](cfnetwork/cfnetservicesettxtdata%28____%29.md): Deprecated. Sets the TXT record for a CFNetService.
- [CFNetServiceUnscheduleFromRunLoop(\_:\_:\_:)](cfnetwork/cfnetserviceunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetService from a run loop.
- [CFNetServiceScheduleWithRunLoop(\_:\_:\_:)](cfnetwork/cfnetserviceschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetService on a run loop.

### Streams

- [CFReadStreamCreateForHTTPRequest(\_:\_:)](cfnetwork/cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
- [CFReadStreamCreateForStreamedHTTPRequest(\_:\_:\_:)](cfnetwork/cfreadstreamcreateforstreamedhttprequest%28______%29.md): Deprecated. Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.
- [kCFStreamPropertyHTTPAttemptPersistentConnection](cfnetwork/kcfstreampropertyhttpattemptpersistentconnection.md): Deprecated.
- [kCFStreamPropertyHTTPFinalRequest](cfnetwork/kcfstreampropertyhttpfinalrequest.md): Deprecated. HTTP Final Request property. A value of type CFHTTPMessage containing the final message transmitted by the stream after all modifications (including authentication, connection policy, redirects, and so on) have been made. This property cannot be set.
- [kCFStreamPropertyHTTPFinalURL](cfnetwork/kcfstreampropertyhttpfinalurl.md): Deprecated. HTTP Final URL property. A value of type CFURL containing the final HTTP URL. This value differs from the URL in the original HTTP request if an autoredirection occurred. This property cannot be set.
- [kCFStreamPropertyHTTPProxy](cfnetwork/kcfstreampropertyhttpproxy.md): Deprecated.
- [kCFStreamPropertyHTTPProxyHost](cfnetwork/kcfstreampropertyhttpproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPProxyPort](cfnetwork/kcfstreampropertyhttpproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPRequestBytesWrittenCount](cfnetwork/kcfstreampropertyhttprequestbyteswrittencount.md): Deprecated.
- [kCFStreamPropertyHTTPResponseHeader](cfnetwork/kcfstreampropertyhttpresponseheader.md): Deprecated. HTTP Response Header property. When copied by [CFReadStreamCopyProperty(\_:\_:)](corefoundation/cfreadstreamcopyproperty%28____%29.md), the header of an HTTP response message is returned.
- [kCFStreamPropertyHTTPSProxyHost](cfnetwork/kcfstreampropertyhttpsproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPSProxyPort](cfnetwork/kcfstreampropertyhttpsproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPShouldAutoredirect](cfnetwork/kcfstreampropertyhttpshouldautoredirect.md): Deprecated. HTTP Should Auto Redirect property. Set this property to `kCFBooleanTrue` to enable autoredirection; set this property to `kCFBooleanFalse` to disable autoredirection.
- [CFWriteStreamCreateWithFTPURL(\_:\_:)](cfnetwork/cfwritestreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP write stream.
- [CFReadStreamCreateWithFTPURL(\_:\_:)](cfnetwork/cfreadstreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP read stream.
- [kCFStreamPropertyFTPAttemptPersistentConnection](cfnetwork/kcfstreampropertyftpattemptpersistentconnection.md): Deprecated.
- [kCFStreamPropertyFTPFetchResourceInfo](cfnetwork/kcfstreampropertyftpfetchresourceinfo.md): Deprecated.
- [kCFStreamPropertyFTPFileTransferOffset](cfnetwork/kcfstreampropertyftpfiletransferoffset.md): Deprecated. FTP File Transfer Offset stream property key for set and copy operations. The value of this property is a CFNumber of type `kCFNumberLongLongType` representing the file offset at which to start the transfer.
- [kCFStreamPropertyFTPPassword](cfnetwork/kcfstreampropertyftppassword.md): Deprecated. FTP Password stream property key for set and copy operations. A value of type CFString for storing the login password. Don’t set this property when anonymous FTP is desired.
- [kCFStreamPropertyFTPProxy](cfnetwork/kcfstreampropertyftpproxy.md): Deprecated. FTP Proxy stream property key for set and copy operations. The property is a value of type CFDictionary that holds proxy dictionary key-value pairs. The dictionary returned by SystemConfiguration can also be set as the value of this property.
- [kCFStreamPropertyFTPProxyHost](cfnetwork/kcfstreampropertyftpproxyhost.md): Deprecated.
- [kCFStreamPropertyFTPProxyPassword](cfnetwork/kcfstreampropertyftpproxypassword.md): Deprecated.
- [kCFStreamPropertyFTPProxyPort](cfnetwork/kcfstreampropertyftpproxyport.md): Deprecated.
- [kCFStreamPropertyFTPProxyUser](cfnetwork/kcfstreampropertyftpproxyuser.md): Deprecated.
- [kCFStreamPropertyFTPResourceSize](cfnetwork/kcfstreampropertyftpresourcesize.md): Deprecated. FTP Resource Size read stream property key copy operations. This property stores a CFNumber of type `kCFNumberLongLongType` representing the size of a resource in bytes.
- [kCFStreamPropertyFTPUsePassiveMode](cfnetwork/kcfstreampropertyftpusepassivemode.md): Deprecated. FTP Passive Mode stream property key for set and copy operations. Set this property to `kCFBooleanTrue` to enable passive mode; set this property to `kCFBooleanFalse` to disable passive mode.
- [kCFStreamPropertyFTPUserName](cfnetwork/kcfstreampropertyftpusername.md): Deprecated. FTP User Name stream property key for set and copy operations. A value of type CFString for storing the login user name. Don’t set this property when anonymous FTP is desired.
- [CFSocketStreamSOCKSGetError(\_:)](cfnetwork/cfsocketstreamsocksgeterror%28__%29.md): This function gets error codes in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.
- [CFSocketStreamSOCKSGetErrorSubdomain(\_:)](cfnetwork/cfsocketstreamsocksgeterrorsubdomain%28__%29.md): Gets the error subdomain associated with errors in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.
- [CFStreamCreatePairWithSocketToCFHost(\_:\_:\_:\_:\_:)](cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService(\_:\_:\_:\_:)](cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.
- [kCFStreamNetworkServiceType](cfnetwork/kcfstreamnetworkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See [Stream Service Types](corefoundation/stream-service-types.md) for a list of possible values.
- [kCFStreamNetworkServiceTypeBackground](cfnetwork/kcfstreamnetworkservicetypebackground.md): Specifies that the stream is a background download.
- [kCFStreamNetworkServiceTypeCallSignaling](cfnetwork/kcfstreamnetworkservicetypecallsignaling.md): A call signaling service.
- [kCFStreamNetworkServiceTypeVideo](cfnetwork/kcfstreamnetworkservicetypevideo.md): Specifies that the stream is providing interactive video data.
- [kCFStreamNetworkServiceTypeVoIP](cfnetwork/kcfstreamnetworkservicetypevoip.md): Deprecated. Specifies that the stream is providing VoIP service.
- [kCFStreamNetworkServiceTypeVoice](cfnetwork/kcfstreamnetworkservicetypevoice.md): Specifies that the stream is providing interactive voice data.
- [kCFStreamErrorDomainFTP](cfnetwork/kcfstreamerrordomainftp.md): The error code is an FTP error code.
- [kCFStreamErrorDomainHTTP](cfnetwork/kcfstreamerrordomainhttp.md): The error code is an HTTP error code.
- [kCFStreamErrorDomainMach](cfnetwork/kcfstreamerrordomainmach.md): The error code is a Mach error code defined in `mach/error.h`.
- [kCFStreamErrorDomainNetDB](cfnetwork/kcfstreamerrordomainnetdb.md): The error code is an error code defined in `netdb.h`.
- [kCFStreamErrorDomainNetServices](cfnetwork/kcfstreamerrordomainnetservices.md): The error code is a `CFNetService` error code. For details, see the [CFNetServicesError](cfnetwork/cfnetserviceserror.md) enumeration.
- [kCFStreamErrorDomainSOCKS](corefoundation/kcfstreamerrordomainsocks.md): The error code is a SOCKS proxy error.
- [kCFStreamErrorDomainSSL](corefoundation/kcfstreamerrordomainssl.md): The error code is an SSL error code as defined in `Security/SecureTransport.h`.
- [kCFStreamErrorDomainSystemConfiguration](cfnetwork/kcfstreamerrordomainsystemconfiguration.md): The error code is a system configuration error code as defined in `System/ConfigurationSystemConfiguration.h`.
- [kCFStreamErrorDomainWinSock](cfnetwork/kcfstreamerrordomainwinsock.md): When running CFNetwork code on Windows, this domain returns error codes associated with the underlying TCP/IP stack. You should also note that non-networking errors such as `ENOMEM` are delivered through the POSIX domain. See the header `winsock2.h` for relevant error codes.
- [kCFStreamPropertyConnectionIsCellular](cfnetwork/kcfstreampropertyconnectioniscellular.md): A boolean value indicating whether the stream is connected over a cellular (WWAN) interface. This is a read-only property, and is `false` until the connection has been established.
- [kCFStreamPropertyNoCellular](cfnetwork/kcfstreampropertynocellular.md): A Boolean value indicating that the connection should not be established over a cellular (WWAN) connection. This value can only be set *before* you open the stream.
- [kCFStreamPropertyProxyLocalBypass](cfnetwork/kcfstreampropertyproxylocalbypass.md): Proxy Local Bypass property key.
- [kCFStreamPropertySOCKSPassword](corefoundation/kcfstreampropertysockspassword.md): Constant for the key required to set a user’s password.
- [kCFStreamPropertySOCKSProxy](corefoundation/kcfstreampropertysocksproxy.md): SOCKS proxy property key.
- [kCFStreamPropertySOCKSProxyHost](corefoundation/kcfstreampropertysocksproxyhost.md): Constant for the SOCKS proxy host key.
- [kCFStreamPropertySOCKSProxyPort](corefoundation/kcfstreampropertysocksproxyport.md): Constant for the SOCKS proxy host port key.
- [kCFStreamPropertySOCKSUser](corefoundation/kcfstreampropertysocksuser.md): Constant for the key required to set a user name.
- [kCFStreamPropertySOCKSVersion](corefoundation/kcfstreampropertysocksversion.md): Constant for the SOCKS version key.
- [kCFStreamPropertySSLContext](cfnetwork/kcfstreampropertysslcontext.md)
- [kCFStreamPropertySSLPeerCertificates](cfnetwork/kcfstreampropertysslpeercertificates.md): Deprecated. SSL Peer Certificates property key for copy operations, which return a `CFArray` object containing `SecCertificateRef` objects.
- [kCFStreamPropertySSLPeerTrust](cfnetwork/kcfstreampropertysslpeertrust.md): SSL Peer Trust property key for copy operations, which return a `SecTrustRef` object containing the result of the SSL handshake.
- [kCFStreamPropertySSLSettings](cfnetwork/kcfstreampropertysslsettings.md): SSL Settings property key for set operations.
- [kCFStreamPropertyShouldCloseNativeSocket](corefoundation/kcfstreampropertyshouldclosenativesocket.md): Should Close Native Socket property key.
- [kCFStreamPropertySocketExtendedBackgroundIdleMode](cfnetwork/kcfstreampropertysocketextendedbackgroundidlemode.md): A Boolean value to request that the system keep a socket open and delays reclaiming it when the process moves to the background.
- [kCFStreamPropertySocketRemoteHost](cfnetwork/kcfstreampropertysocketremotehost.md): The key’s value is a `CFHostRef` for the remote host if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketRemoteNetService](cfnetwork/kcfstreampropertysocketremotenetservice.md): The key’s value is a `CFNetServiceRef` for the remote network service if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketSecurityLevel](corefoundation/kcfstreampropertysocketsecuritylevel.md): Socket Security Level property key.
- [kCFStreamSSLAllowsAnyRoot](cfnetwork/kcfstreamsslallowsanyroot.md): Deprecated. Security property key whose value indicates whether root certificates should be allowed.
- [kCFStreamSSLAllowsExpiredCertificates](cfnetwork/kcfstreamsslallowsexpiredcertificates.md): Deprecated. Security property key whose value indicates whether expired certificates are allowed.
- [kCFStreamSSLAllowsExpiredRoots](cfnetwork/kcfstreamsslallowsexpiredroots.md): Deprecated. Security property whose value indicates whether expired root certificates are allowed.
- [kCFStreamSSLCertificates](cfnetwork/kcfstreamsslcertificates.md): Security property key whose value is a CFArray of SecCertificateRefs except for the first element in the array, which is a SecIdentityRef.
- [kCFStreamSSLIsServer](cfnetwork/kcfstreamsslisserver.md): Security property key whose value indicates whether the connection is to act as a server in the SSL process.
- [kCFStreamSSLLevel](cfnetwork/kcfstreamssllevel.md): Security property key whose value specifies the stream’s security level.
- [kCFStreamSSLPeerName](cfnetwork/kcfstreamsslpeername.md): Security property key whose value overrides the name used for certificate verification.
- [kCFStreamSSLValidatesCertificateChain](cfnetwork/kcfstreamsslvalidatescertificatechain.md): Security property key whose value indicates whether the certificate chain should be validated.
- [kCFStreamSocketSOCKSVersion4](corefoundation/kcfstreamsocketsocksversion4.md): Constant used in the `kCFStreamSockerSOCKSVersion` key to specify SOCKS4 as the SOCKS version for the stream.
- [kCFStreamSocketSOCKSVersion5](corefoundation/kcfstreamsocketsocksversion5.md): Constant used in the `kCFStreamSOCKSVersion` key to specify SOCKS5 as the SOCKS version for the stream.
- [kCFStreamSocketSecurityLevelNegotiatedSSL](corefoundation/kcfstreamsocketsecuritylevelnegotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelNone](corefoundation/kcfstreamsocketsecuritylevelnone.md): Specifies that no security level be set.
- [kCFStreamSocketSecurityLevelSSLv2](corefoundation/kcfstreamsocketsecuritylevelsslv2.md): Deprecated. Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelSSLv3](corefoundation/kcfstreamsocketsecuritylevelsslv3.md): Deprecated. Specifies that SSL version 3 be set as the security protocol for a socket stream pair.
- [kCFStreamSocketSecurityLevelTLSv1](corefoundation/kcfstreamsocketsecurityleveltlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.
- [CFStreamErrorHTTP](cfnetwork/cfstreamerrorhttp.md): Error codes that a read stream for an HTTP request may return.
- [CFStreamErrorHTTPAuthentication](cfnetwork/cfstreamerrorhttpauthentication.md): Authentication error codes that may be returned when trying to apply authentication to a request.
- [Secure Sockets (SOCKS) Errors](cfnetwork/1518266-secure-sockets-socks-errors.md): Error codes returned by the `kCFStreamErrorDomainSOCKS` error domain.

### Reference

- [CFNetwork Data Types](cfnetwork/cfnetwork-data-types.md): Callback types for various network services.
- [CFNetwork Enumerations](cfnetwork/cfnetwork-enumerations.md): Enumerated values related to SOCKS.
- [CFNetwork Constants](cfnetwork/cfnetwork-constants.md): Constants for use with CFNetwork.

# CFNetwork (Objective-C)

**Framework:** CFNetwork  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Access network services and handle changes in network configurations. Build on abstractions of network protocols to simplify tasks such as working with BSD sockets, administering HTTP and FTP servers, and managing Bonjour services.

## Topics

### Errors

- [CFNetworkErrors](cfnetwork/cfnetworkerrors.md): This enumeration contains error codes returned under the error domain [kCFErrorDomainCFNetwork](cfnetwork/kcferrordomaincfnetwork.md).
- [Error Dictionary Keys](cfnetwork/error-dictionary-keys.md): Networking-related keys that may be available in a `CFErrorRef` object’s `userInfo` dictionary.
- [Error Domains](cfnetwork/error-domains.md): High-level error domains.

### Hosts

- [CFHostRef](cfnetwork/cfhost.md): An opaque reference representing an CFHost object.
- [CFHostInfoType](cfnetwork/cfhostinfotype.md): Values indicating the type of data that is to be resolved or the type of data that was resolved.
- [CFHostClientContext](cfnetwork/cfhostclientcontext.md): A structure containing user-defined data and callbacks for CFHost objects.
- [CFHostCancelInfoResolution](cfnetwork/cfhostcancelinforesolution%28____%29.md): Deprecated. Cancels the resolution of a host.
- [CFHostCreateCopy](cfnetwork/cfhostcreatecopy%28____%29.md): Deprecated. Creates a new host object by copying.
- [CFHostCreateWithAddress](cfnetwork/cfhostcreatewithaddress%28____%29.md): Deprecated. Uses an address to create an instance of a host object.
- [CFHostCreateWithName](cfnetwork/cfhostcreatewithname%28____%29.md): Deprecated. Uses a name to create an instance of a host object.
- [CFHostGetAddressing](cfnetwork/cfhostgetaddressing%28____%29.md): Deprecated. Gets the addresses from a host.
- [CFHostGetNames](cfnetwork/cfhostgetnames%28____%29.md): Deprecated. Gets the names from a CFHost.
- [CFHostGetReachability](cfnetwork/cfhostgetreachability%28____%29.md): Deprecated. Gets reachability information from a host.
- [CFHostGetTypeID](cfnetwork/cfhostgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the CFHost opaque type.
- [CFHostScheduleWithRunLoop](cfnetwork/cfhostschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFHost on a run loop.
- [CFHostSetClient](cfnetwork/cfhostsetclient%28______%29.md): Deprecated. Associates a client context and a callback function with a CFHost object or disassociates a client context and callback function that were previously set.
- [CFHostStartInfoResolution](cfnetwork/cfhoststartinforesolution%28______%29.md): Deprecated. Starts resolution for a host object.
- [CFHostUnscheduleFromRunLoop](cfnetwork/cfhostunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFHost from a run loop.

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL](cfnetwork/cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript](cfnetwork/cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript](cfnetwork/cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL](cfnetwork/cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings](cfnetwork/cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfnetwork/cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](cfnetwork/property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty](corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty](corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](cfnetwork/proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](cfnetwork/global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings](cfnetwork/cfnetworkcopysystemproxysettings%28%29.md).

### HTTP Authentication

- [CFHTTPAuthenticationRef](cfnetwork/cfhttpauthentication.md): An opaque reference representing HTTP authentication information.
- [CFHTTPAuthenticationAppliesToRequest](cfnetwork/cfhttpauthenticationappliestorequest%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is associated with a CFHTTPMessage object.
- [CFHTTPAuthenticationCopyDomains](cfnetwork/cfhttpauthenticationcopydomains%28__%29.md): Returns an array of domain URLs to which a given CFHTTPAuthentication object can be applied.
- [CFHTTPAuthenticationCopyMethod](cfnetwork/cfhttpauthenticationcopymethod%28__%29.md): Gets the strongest authentication method that will be used when a CFHTTPAuthentication object is applied to a request.
- [CFHTTPAuthenticationCopyRealm](cfnetwork/cfhttpauthenticationcopyrealm%28__%29.md): Gets an authentication information’s namespace.
- [CFHTTPAuthenticationCreateFromResponse](cfnetwork/cfhttpauthenticationcreatefromresponse%28____%29.md): Uses an authentication failure response to create a CFHTTPAuthentication object.
- [CFHTTPAuthenticationGetTypeID](cfnetwork/cfhttpauthenticationgettypeid%28%29.md): Gets the Core Foundation type identifier for the CFHTTPAuthentication opaque type.
- [CFHTTPAuthenticationIsValid](cfnetwork/cfhttpauthenticationisvalid%28____%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object is valid.
- [CFHTTPAuthenticationRequiresAccountDomain](cfnetwork/cfhttpauthenticationrequiresaccountdomain%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires an account domain.
- [CFHTTPAuthenticationRequiresOrderedRequests](cfnetwork/cfhttpauthenticationrequiresorderedrequests%28__%29.md): Returns a Boolean value that indicates whether authentication requests should be made one at a time.
- [CFHTTPAuthenticationRequiresUserNameAndPassword](cfnetwork/cfhttpauthenticationrequiresusernameandpassword%28__%29.md): Returns a Boolean value that indicates whether a CFHTTPAuthentication object uses an authentication method that requires a username and a password.
- [kCFHTTPAuthenticationAccountDomain](cfnetwork/kcfhttpauthenticationaccountdomain.md): Account domain to use for authentication.
- [kCFHTTPAuthenticationPassword](cfnetwork/kcfhttpauthenticationpassword.md): Password to use for authentication.
- [kCFHTTPAuthenticationSchemeBasic](cfnetwork/kcfhttpauthenticationschemebasic.md): Request the HTTP basic authentication scheme.
- [kCFHTTPAuthenticationSchemeDigest](cfnetwork/kcfhttpauthenticationschemedigest.md): Request the HTTP digest authentication scheme.
- [kCFHTTPAuthenticationSchemeKerberos](cfnetwork/kcfhttpauthenticationschemekerberos.md): Request the HTTP Kerberos authentication scheme.
- [kCFHTTPAuthenticationSchemeNTLM](cfnetwork/kcfhttpauthenticationschementlm.md): Request the HTTP NTLM authentication scheme.
- [kCFHTTPAuthenticationSchemeNegotiate](cfnetwork/kcfhttpauthenticationschemenegotiate.md): Request the HTTP Negotiate authentication scheme.
- [kCFHTTPAuthenticationSchemeNegotiate2](cfnetwork/kcfhttpauthenticationschemenegotiate2.md): Request the HTTP Negotiate v2 authentication scheme.
- [kCFHTTPAuthenticationSchemeXMobileMeAuthToken](cfnetwork/kcfhttpauthenticationschemexmobilemeauthtoken.md): Request the HTTP XMobileMeAuthToken authentication scheme.
- [kCFHTTPAuthenticationUsername](cfnetwork/kcfhttpauthenticationusername.md): Username to use for authentication.

### HTTP Messages

- [CFHTTPMessageRef](cfnetwork/cfhttpmessage.md): An opaque reference representing an HTTP message.
- [CFHTTPMessageAddAuthentication](cfnetwork/cfhttpmessageaddauthentication%28____________%29.md): Adds authentication information to a request.
- [CFHTTPMessageAppendBytes](cfnetwork/cfhttpmessageappendbytes%28______%29.md): Appends data to a `CFHTTPMessage` object.
- [CFHTTPMessageApplyCredentialDictionary](cfnetwork/cfhttpmessageapplycredentialdictionary%28________%29.md): Use a dictionary containing authentication credentials to perform the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageApplyCredentials](cfnetwork/cfhttpmessageapplycredentials%28__________%29.md): Performs the authentication method specified by a `CFHTTPAuthentication` object.
- [CFHTTPMessageCopyAllHeaderFields](cfnetwork/cfhttpmessagecopyallheaderfields%28__%29.md): Gets all header fields from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyBody](cfnetwork/cfhttpmessagecopybody%28__%29.md): Gets the body from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyHeaderFieldValue](cfnetwork/cfhttpmessagecopyheaderfieldvalue%28____%29.md): Gets the value of a header field from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestMethod](cfnetwork/cfhttpmessagecopyrequestmethod%28__%29.md): Gets the request method from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyRequestURL](cfnetwork/cfhttpmessagecopyrequesturl%28__%29.md): Gets the URL from a `CFHTTPMessage` object.
- [CFHTTPMessageCopyResponseStatusLine](cfnetwork/cfhttpmessagecopyresponsestatusline%28__%29.md): Gets the status line from a `CFHTTPMessage` object.
- [CFHTTPMessageCopySerializedMessage](cfnetwork/cfhttpmessagecopyserializedmessage%28__%29.md): Serializes a CFHTTPMessage object.
- [CFHTTPMessageCopyVersion](cfnetwork/cfhttpmessagecopyversion%28__%29.md): Gets the HTTP version from a `CFHTTPMessage` object.
- [CFHTTPMessageCreateCopy](cfnetwork/cfhttpmessagecreatecopy%28____%29.md): Gets a copy of a CFHTTPMessage object.
- [CFHTTPMessageCreateEmpty](cfnetwork/cfhttpmessagecreateempty%28____%29.md): Creates and returns a new, empty `CFHTTPMessage` object.
- [CFHTTPMessageCreateRequest](cfnetwork/cfhttpmessagecreaterequest%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP request.
- [CFHTTPMessageCreateResponse](cfnetwork/cfhttpmessagecreateresponse%28________%29.md): Creates and returns a `CFHTTPMessage` object for an HTTP response.
- [CFHTTPMessageGetResponseStatusCode](cfnetwork/cfhttpmessagegetresponsestatuscode%28__%29.md): Gets the status code from a `CFHTTPMessage` object representing an HTTP response.
- [CFHTTPMessageGetTypeID](cfnetwork/cfhttpmessagegettypeid%28%29.md): Returns the Core Foundation type identifier for the `CFHTTPMessage` opaque type.
- [CFHTTPMessageIsHeaderComplete](cfnetwork/cfhttpmessageisheadercomplete%28__%29.md): Determines whether a message header is complete.
- [CFHTTPMessageIsRequest](cfnetwork/cfhttpmessageisrequest%28__%29.md): Returns a Boolean indicating whether the HTTP message is a request or a response.
- [CFHTTPMessageSetBody](cfnetwork/cfhttpmessagesetbody%28____%29.md): Sets the body of a `CFHTTPMessage` object.
- [CFHTTPMessageSetHeaderFieldValue](cfnetwork/cfhttpmessagesetheaderfieldvalue%28______%29.md): Sets the value of a header field in an HTTP message.
- [kCFHTTPVersion1_0](cfnetwork/kcfhttpversion1_0.md): Specifies HTTP version 1.0.
- [kCFHTTPVersion1_1](cfnetwork/kcfhttpversion1_1.md): Specifies HTTP version 1.1.
- [kCFHTTPVersion2_0](cfnetwork/kcfhttpversion2_0.md): HTTP version 2.0.

### FTP

- [CFFTPCreateParsedResourceListing](cfnetwork/cfftpcreateparsedresourcelisting%28________%29.md): Deprecated. Parses an FTP listing to a dictionary.
- [kCFFTPResourceGroup](cfnetwork/kcfftpresourcegroup.md): Deprecated. CFDictionary key for getting the CFString containing the name of a group that shares the FTP resource.
- [kCFFTPResourceLink](cfnetwork/kcfftpresourcelink.md): Deprecated. CFDictionary key for getting the CFString containing the symbolic link information. If the item is a symbolic link, the CFString contains the path to the item that the link references.
- [kCFFTPResourceModDate](cfnetwork/kcfftpresourcemoddate.md): Deprecated. CFDictionary key for getting the CFDate containing the last date and time the FTP resource was modified.
- [kCFFTPResourceMode](cfnetwork/kcfftpresourcemode.md): Deprecated. CFDictionary key for getting the CFNumber containing the access permissions, defined in `sys/types.h`, of the FTP resource.
- [kCFFTPResourceName](cfnetwork/kcfftpresourcename.md): Deprecated. CFDictionary key for getting the CFString containing the name of the FTP resource.
- [kCFFTPResourceOwner](cfnetwork/kcfftpresourceowner.md): Deprecated. CFDictionary key for getting the CFString containing the name of the owner of the FTP resource.
- [kCFFTPResourceSize](cfnetwork/kcfftpresourcesize.md): Deprecated. CFDictionary key for getting the CFNumber containing the size in bytes of the FTP resource.
- [kCFFTPResourceType](cfnetwork/kcfftpresourcetype.md): Deprecated. CFDictionary key for getting the CFNumber containing the type of the FTP resource as defined in `sys/dirent.h`.

### Network Diagnostics

- [CFNetDiagnosticRef](cfnetwork/cfnetdiagnostic.md): An opaque reference representing a CFNetDiagnostic.
- [CFNetDiagnosticStatusValues](cfnetwork/cfnetdiagnosticstatusvalues.md): Deprecated. Constants for diagnostic status values.
- [CFNetDiagnosticCopyNetworkStatusPassively](cfnetwork/cfnetdiagnosticcopynetworkstatuspassively%28____%29.md): Deprecated. Gets a network status value.
- [CFNetDiagnosticCreateWithStreams](cfnetwork/cfnetdiagnosticcreatewithstreams%28______%29.md): Deprecated. Creates a network diagnostic object from a pair of CFStreams.
- [CFNetDiagnosticCreateWithURL](cfnetwork/cfnetdiagnosticcreatewithurl%28____%29.md): Deprecated. Creates a CFNetDiagnosticRef from a CFURLRef.
- [CFNetDiagnosticDiagnoseProblemInteractively](cfnetwork/cfnetdiagnosticdiagnoseprobleminteractively%28__%29.md): Deprecated. Opens a Network Diagnostics window.
- [CFNetDiagnosticSetName](cfnetwork/cfnetdiagnosticsetname%28____%29.md): Deprecated. Overrides the displayed application name.

### Network Services

- [CFNetServiceRef](cfnetwork/cfnetservice.md): An opaque reference representing a CFNetService.
- [CFNetServiceBrowserRef](cfnetwork/cfnetservicebrowser.md): An opaque reference representing a CFNetServiceBrowser.
- [CFNetServiceBrowserFlags](cfnetwork/cfnetservicebrowserflags.md): Flags that the system passes to net service browser callbacks.
- [CFNetServiceMonitorRef](cfnetwork/cfnetservicemonitor.md): An opaque reference for a service monitor.
- [CFNetServiceMonitorType](cfnetwork/cfnetservicemonitortype.md): Record type specifier used to tell a service monitor the type of record changes to watch for.
- [CFNetServiceClientContext](cfnetwork/cfnetserviceclientcontext.md): A structure provided when a CFNetService is associated with a callback function or when a CFNetServiceBrowser is created.
- [CFNetServiceRegisterFlags](cfnetwork/cfnetserviceregisterflags.md): Options to use when registering a service on the network.
- [CFNetServicesError](cfnetwork/cfnetserviceserror.md): Error codes that may be returned by CFNetServices functions or passed to CFNetServices callback functions.
- [CFNetServiceBrowserInvalidate](cfnetwork/cfnetservicebrowserinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service browser object.
- [CFNetServiceBrowserScheduleWithRunLoop](cfnetwork/cfnetservicebrowserschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceBrowser on a run loop.
- [CFNetServiceBrowserCreate](cfnetwork/cfnetservicebrowsercreate%28______%29.md): Deprecated. Creates an instance of a Network Service browser object.
- [CFNetServiceBrowserGetTypeID](cfnetwork/cfnetservicebrowsergettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service browser object.
- [CFNetServiceBrowserSearchForDomains](cfnetwork/cfnetservicebrowsersearchfordomains%28______%29.md): Deprecated. Searches for domains.
- [CFNetServiceBrowserSearchForServices](cfnetwork/cfnetservicebrowsersearchforservices%28________%29.md): Deprecated. Searches a domain for services of a specified type.
- [CFNetServiceBrowserStopSearch](cfnetwork/cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.
- [CFNetServiceBrowserUnscheduleFromRunLoop](cfnetwork/cfnetservicebrowserunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceBrowser from a run loop and mode.
- [CFNetServiceCancel](cfnetwork/cfnetservicecancel%28__%29.md): Deprecated. Cancels a service registration or a service resolution.
- [CFNetServiceCreate](cfnetwork/cfnetservicecreate%28__________%29.md): Deprecated. Creates an instance of a Network Service object.
- [CFNetServiceCreateCopy](cfnetwork/cfnetservicecreatecopy%28____%29.md): Deprecated. Creates a copy of a CFNetService object.
- [CFNetServiceCreateDictionaryWithTXTData](cfnetwork/cfnetservicecreatedictionarywithtxtdata%28____%29.md): Deprecated. Uses TXT record data to create a dictionary.
- [CFNetServiceCreateTXTDataWithDictionary](cfnetwork/cfnetservicecreatetxtdatawithdictionary%28____%29.md): Deprecated. Flattens a set of key/value pairs into a CFDataRef suitable for passing to [CFNetServiceSetTXTData](cfnetwork/cfnetservicesettxtdata%28____%29.md).
- [CFNetServiceGetAddressing](cfnetwork/cfnetservicegetaddressing%28__%29.md): Deprecated. Gets the IP addressing from a CFNetService.
- [CFNetServiceGetDomain](cfnetwork/cfnetservicegetdomain%28__%29.md): Deprecated. Gets the domain from a CFNetService.
- [CFNetServiceGetName](cfnetwork/cfnetservicegetname%28__%29.md): Deprecated. Gets the name from a CFNetService.
- [CFNetServiceGetPortNumber](cfnetwork/cfnetservicegetportnumber%28__%29.md): Deprecated. This function gets the port number from a CFNetService.
- [CFNetServiceGetTXTData](cfnetwork/cfnetservicegettxtdata%28__%29.md): Deprecated. Queries a network service for the contents of its TXT records.
- [CFNetServiceGetTargetHost](cfnetwork/cfnetservicegettargethost%28__%29.md): Deprecated. Queries a CFNetService for its target hosts.
- [CFNetServiceGetType](cfnetwork/cfnetservicegettype%28__%29.md): Deprecated. Gets the type from a CFNetService.
- [CFNetServiceGetTypeID](cfnetwork/cfnetservicegettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service object.
- [CFNetServiceMonitorCreate](cfnetwork/cfnetservicemonitorcreate%28________%29.md): Deprecated. Creates an instance of a NetServiceMonitor object that watches for record changes.
- [CFNetServiceMonitorGetTypeID](cfnetwork/cfnetservicemonitorgettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for all CFNetServiceMonitor instances.
- [CFNetServiceMonitorInvalidate](cfnetwork/cfnetservicemonitorinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service monitor object.
- [CFNetServiceMonitorScheduleWithRunLoop](cfnetwork/cfnetservicemonitorschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceMonitor on a run loop.
- [CFNetServiceMonitorStart](cfnetwork/cfnetservicemonitorstart%28______%29.md): Deprecated. Starts monitoring.
- [CFNetServiceMonitorStop](cfnetwork/cfnetservicemonitorstop%28____%29.md): Deprecated. Stops a CFNetServiceMonitor.
- [CFNetServiceMonitorUnscheduleFromRunLoop](cfnetwork/cfnetservicemonitorunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceMonitor from a run loop.
- [CFNetServiceRegister](cfnetwork/cfnetserviceregister.md): Deprecated. Makes a CFNetService available on the network.
- [CFNetServiceRegisterWithOptions](cfnetwork/cfnetserviceregisterwithoptions%28______%29.md): Deprecated. Makes a CFNetService available on the network.
- [CFNetServiceResolve](cfnetwork/cfnetserviceresolve.md): Deprecated. This function updates the specified CFNetService with the IP address or addresses associated with the service. Call [CFNetServiceGetAddressing](cfnetwork/cfnetservicegetaddressing%28__%29.md) to get the addresses.
- [CFNetServiceResolveWithTimeout](cfnetwork/cfnetserviceresolvewithtimeout%28______%29.md): Deprecated. Gets the IP address or addresses for a CFNetService.
- [CFNetServiceSetClient](cfnetwork/cfnetservicesetclient%28______%29.md): Deprecated. Associates a callback function with a CFNetService or disassociates a callback function from a CFNetService.
- [CFNetServiceSetTXTData](cfnetwork/cfnetservicesettxtdata%28____%29.md): Deprecated. Sets the TXT record for a CFNetService.
- [CFNetServiceUnscheduleFromRunLoop](cfnetwork/cfnetserviceunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetService from a run loop.
- [CFNetServiceScheduleWithRunLoop](cfnetwork/cfnetserviceschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetService on a run loop.

### Streams

- [CFReadStreamCreateForHTTPRequest](cfnetwork/cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
- [CFReadStreamCreateForStreamedHTTPRequest](cfnetwork/cfreadstreamcreateforstreamedhttprequest%28______%29.md): Deprecated. Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.
- [kCFStreamPropertyHTTPAttemptPersistentConnection](cfnetwork/kcfstreampropertyhttpattemptpersistentconnection.md): Deprecated.
- [kCFStreamPropertyHTTPFinalRequest](cfnetwork/kcfstreampropertyhttpfinalrequest.md): Deprecated. HTTP Final Request property. A value of type CFHTTPMessage containing the final message transmitted by the stream after all modifications (including authentication, connection policy, redirects, and so on) have been made. This property cannot be set.
- [kCFStreamPropertyHTTPFinalURL](cfnetwork/kcfstreampropertyhttpfinalurl.md): Deprecated. HTTP Final URL property. A value of type CFURL containing the final HTTP URL. This value differs from the URL in the original HTTP request if an autoredirection occurred. This property cannot be set.
- [kCFStreamPropertyHTTPProxy](cfnetwork/kcfstreampropertyhttpproxy.md): Deprecated.
- [kCFStreamPropertyHTTPProxyHost](cfnetwork/kcfstreampropertyhttpproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPProxyPort](cfnetwork/kcfstreampropertyhttpproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPRequestBytesWrittenCount](cfnetwork/kcfstreampropertyhttprequestbyteswrittencount.md): Deprecated.
- [kCFStreamPropertyHTTPResponseHeader](cfnetwork/kcfstreampropertyhttpresponseheader.md): Deprecated. HTTP Response Header property. When copied by [CFReadStreamCopyProperty](corefoundation/cfreadstreamcopyproperty%28____%29.md), the header of an HTTP response message is returned.
- [kCFStreamPropertyHTTPSProxyHost](cfnetwork/kcfstreampropertyhttpsproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPSProxyPort](cfnetwork/kcfstreampropertyhttpsproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPShouldAutoredirect](cfnetwork/kcfstreampropertyhttpshouldautoredirect.md): Deprecated. HTTP Should Auto Redirect property. Set this property to `kCFBooleanTrue` to enable autoredirection; set this property to `kCFBooleanFalse` to disable autoredirection.
- [CFWriteStreamCreateWithFTPURL](cfnetwork/cfwritestreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP write stream.
- [CFReadStreamCreateWithFTPURL](cfnetwork/cfreadstreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP read stream.
- [kCFStreamPropertyFTPAttemptPersistentConnection](cfnetwork/kcfstreampropertyftpattemptpersistentconnection.md): Deprecated.
- [kCFStreamPropertyFTPFetchResourceInfo](cfnetwork/kcfstreampropertyftpfetchresourceinfo.md): Deprecated.
- [kCFStreamPropertyFTPFileTransferOffset](cfnetwork/kcfstreampropertyftpfiletransferoffset.md): Deprecated. FTP File Transfer Offset stream property key for set and copy operations. The value of this property is a CFNumber of type `kCFNumberLongLongType` representing the file offset at which to start the transfer.
- [kCFStreamPropertyFTPPassword](cfnetwork/kcfstreampropertyftppassword.md): Deprecated. FTP Password stream property key for set and copy operations. A value of type CFString for storing the login password. Don’t set this property when anonymous FTP is desired.
- [kCFStreamPropertyFTPProxy](cfnetwork/kcfstreampropertyftpproxy.md): Deprecated. FTP Proxy stream property key for set and copy operations. The property is a value of type CFDictionary that holds proxy dictionary key-value pairs. The dictionary returned by SystemConfiguration can also be set as the value of this property.
- [kCFStreamPropertyFTPProxyHost](cfnetwork/kcfstreampropertyftpproxyhost.md): Deprecated.
- [kCFStreamPropertyFTPProxyPassword](cfnetwork/kcfstreampropertyftpproxypassword.md): Deprecated.
- [kCFStreamPropertyFTPProxyPort](cfnetwork/kcfstreampropertyftpproxyport.md): Deprecated.
- [kCFStreamPropertyFTPProxyUser](cfnetwork/kcfstreampropertyftpproxyuser.md): Deprecated.
- [kCFStreamPropertyFTPResourceSize](cfnetwork/kcfstreampropertyftpresourcesize.md): Deprecated. FTP Resource Size read stream property key copy operations. This property stores a CFNumber of type `kCFNumberLongLongType` representing the size of a resource in bytes.
- [kCFStreamPropertyFTPUsePassiveMode](cfnetwork/kcfstreampropertyftpusepassivemode.md): Deprecated. FTP Passive Mode stream property key for set and copy operations. Set this property to `kCFBooleanTrue` to enable passive mode; set this property to `kCFBooleanFalse` to disable passive mode.
- [kCFStreamPropertyFTPUserName](cfnetwork/kcfstreampropertyftpusername.md): Deprecated. FTP User Name stream property key for set and copy operations. A value of type CFString for storing the login user name. Don’t set this property when anonymous FTP is desired.
- [CFSocketStreamSOCKSGetError](cfnetwork/cfsocketstreamsocksgeterror%28__%29.md): This function gets error codes in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.
- [CFSocketStreamSOCKSGetErrorSubdomain](cfnetwork/cfsocketstreamsocksgeterrorsubdomain%28__%29.md): Gets the error subdomain associated with errors in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.
- [CFStreamCreatePairWithSocketToCFHost](cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService](cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.
- [kCFStreamNetworkServiceType](cfnetwork/kcfstreamnetworkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See [Stream Service Types](corefoundation/stream-service-types.md) for a list of possible values.
- [kCFStreamNetworkServiceTypeBackground](cfnetwork/kcfstreamnetworkservicetypebackground.md): Specifies that the stream is a background download.
- [kCFStreamNetworkServiceTypeCallSignaling](cfnetwork/kcfstreamnetworkservicetypecallsignaling.md): A call signaling service.
- [kCFStreamNetworkServiceTypeVideo](cfnetwork/kcfstreamnetworkservicetypevideo.md): Specifies that the stream is providing interactive video data.
- [kCFStreamNetworkServiceTypeVoIP](cfnetwork/kcfstreamnetworkservicetypevoip.md): Deprecated. Specifies that the stream is providing VoIP service.
- [kCFStreamNetworkServiceTypeVoice](cfnetwork/kcfstreamnetworkservicetypevoice.md): Specifies that the stream is providing interactive voice data.
- [kCFStreamErrorDomainFTP](cfnetwork/kcfstreamerrordomainftp.md): The error code is an FTP error code.
- [kCFStreamErrorDomainHTTP](cfnetwork/kcfstreamerrordomainhttp.md): The error code is an HTTP error code.
- [kCFStreamErrorDomainMach](cfnetwork/kcfstreamerrordomainmach.md): The error code is a Mach error code defined in `mach/error.h`.
- [kCFStreamErrorDomainNetDB](cfnetwork/kcfstreamerrordomainnetdb.md): The error code is an error code defined in `netdb.h`.
- [kCFStreamErrorDomainNetServices](cfnetwork/kcfstreamerrordomainnetservices.md): The error code is a `CFNetService` error code. For details, see the [CFNetServicesError](cfnetwork/cfnetserviceserror.md) enumeration.
- [kCFStreamErrorDomainSOCKS](corefoundation/kcfstreamerrordomainsocks.md): The error code is a SOCKS proxy error.
- [kCFStreamErrorDomainSSL](corefoundation/kcfstreamerrordomainssl.md): The error code is an SSL error code as defined in `Security/SecureTransport.h`.
- [kCFStreamErrorDomainSystemConfiguration](cfnetwork/kcfstreamerrordomainsystemconfiguration.md): The error code is a system configuration error code as defined in `System/ConfigurationSystemConfiguration.h`.
- [kCFStreamErrorDomainWinSock](cfnetwork/kcfstreamerrordomainwinsock.md): When running CFNetwork code on Windows, this domain returns error codes associated with the underlying TCP/IP stack. You should also note that non-networking errors such as `ENOMEM` are delivered through the POSIX domain. See the header `winsock2.h` for relevant error codes.
- [kCFStreamPropertyConnectionIsCellular](cfnetwork/kcfstreampropertyconnectioniscellular.md): A boolean value indicating whether the stream is connected over a cellular (WWAN) interface. This is a read-only property, and is `false` until the connection has been established.
- [kCFStreamPropertyNoCellular](cfnetwork/kcfstreampropertynocellular.md): A Boolean value indicating that the connection should not be established over a cellular (WWAN) connection. This value can only be set *before* you open the stream.
- [kCFStreamPropertyProxyLocalBypass](cfnetwork/kcfstreampropertyproxylocalbypass.md): Proxy Local Bypass property key.
- [kCFStreamPropertySOCKSPassword](corefoundation/kcfstreampropertysockspassword.md): Constant for the key required to set a user’s password.
- [kCFStreamPropertySOCKSProxy](corefoundation/kcfstreampropertysocksproxy.md): SOCKS proxy property key.
- [kCFStreamPropertySOCKSProxyHost](corefoundation/kcfstreampropertysocksproxyhost.md): Constant for the SOCKS proxy host key.
- [kCFStreamPropertySOCKSProxyPort](corefoundation/kcfstreampropertysocksproxyport.md): Constant for the SOCKS proxy host port key.
- [kCFStreamPropertySOCKSUser](corefoundation/kcfstreampropertysocksuser.md): Constant for the key required to set a user name.
- [kCFStreamPropertySOCKSVersion](corefoundation/kcfstreampropertysocksversion.md): Constant for the SOCKS version key.
- [kCFStreamPropertySSLContext](cfnetwork/kcfstreampropertysslcontext.md)
- [kCFStreamPropertySSLPeerCertificates](cfnetwork/kcfstreampropertysslpeercertificates.md): Deprecated. SSL Peer Certificates property key for copy operations, which return a `CFArray` object containing `SecCertificateRef` objects.
- [kCFStreamPropertySSLPeerTrust](cfnetwork/kcfstreampropertysslpeertrust.md): SSL Peer Trust property key for copy operations, which return a `SecTrustRef` object containing the result of the SSL handshake.
- [kCFStreamPropertySSLSettings](cfnetwork/kcfstreampropertysslsettings.md): SSL Settings property key for set operations.
- [kCFStreamPropertyShouldCloseNativeSocket](corefoundation/kcfstreampropertyshouldclosenativesocket.md): Should Close Native Socket property key.
- [kCFStreamPropertySocketExtendedBackgroundIdleMode](cfnetwork/kcfstreampropertysocketextendedbackgroundidlemode.md): A Boolean value to request that the system keep a socket open and delays reclaiming it when the process moves to the background.
- [kCFStreamPropertySocketRemoteHost](cfnetwork/kcfstreampropertysocketremotehost.md): The key’s value is a `CFHostRef` for the remote host if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketRemoteNetService](cfnetwork/kcfstreampropertysocketremotenetservice.md): The key’s value is a `CFNetServiceRef` for the remote network service if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketSecurityLevel](corefoundation/kcfstreampropertysocketsecuritylevel.md): Socket Security Level property key.
- [kCFStreamSSLAllowsAnyRoot](cfnetwork/kcfstreamsslallowsanyroot.md): Deprecated. Security property key whose value indicates whether root certificates should be allowed.
- [kCFStreamSSLAllowsExpiredCertificates](cfnetwork/kcfstreamsslallowsexpiredcertificates.md): Deprecated. Security property key whose value indicates whether expired certificates are allowed.
- [kCFStreamSSLAllowsExpiredRoots](cfnetwork/kcfstreamsslallowsexpiredroots.md): Deprecated. Security property whose value indicates whether expired root certificates are allowed.
- [kCFStreamSSLCertificates](cfnetwork/kcfstreamsslcertificates.md): Security property key whose value is a CFArray of SecCertificateRefs except for the first element in the array, which is a SecIdentityRef.
- [kCFStreamSSLIsServer](cfnetwork/kcfstreamsslisserver.md): Security property key whose value indicates whether the connection is to act as a server in the SSL process.
- [kCFStreamSSLLevel](cfnetwork/kcfstreamssllevel.md): Security property key whose value specifies the stream’s security level.
- [kCFStreamSSLPeerName](cfnetwork/kcfstreamsslpeername.md): Security property key whose value overrides the name used for certificate verification.
- [kCFStreamSSLValidatesCertificateChain](cfnetwork/kcfstreamsslvalidatescertificatechain.md): Security property key whose value indicates whether the certificate chain should be validated.
- [kCFStreamSocketSOCKSVersion4](corefoundation/kcfstreamsocketsocksversion4.md): Constant used in the `kCFStreamSockerSOCKSVersion` key to specify SOCKS4 as the SOCKS version for the stream.
- [kCFStreamSocketSOCKSVersion5](corefoundation/kcfstreamsocketsocksversion5.md): Constant used in the `kCFStreamSOCKSVersion` key to specify SOCKS5 as the SOCKS version for the stream.
- [kCFStreamSocketSecurityLevelNegotiatedSSL](corefoundation/kcfstreamsocketsecuritylevelnegotiatedssl.md): Specifies that the highest level security protocol that can be negotiated be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelNone](corefoundation/kcfstreamsocketsecuritylevelnone.md): Specifies that no security level be set.
- [kCFStreamSocketSecurityLevelSSLv2](corefoundation/kcfstreamsocketsecuritylevelsslv2.md): Deprecated. Specifies that SSL version 2 be set as the security protocol for a socket stream.
- [kCFStreamSocketSecurityLevelSSLv3](corefoundation/kcfstreamsocketsecuritylevelsslv3.md): Deprecated. Specifies that SSL version 3 be set as the security protocol for a socket stream pair.
- [kCFStreamSocketSecurityLevelTLSv1](corefoundation/kcfstreamsocketsecurityleveltlsv1.md): Specifies that TLS version 1 be set as the security protocol for a socket stream.
- [CFStreamErrorHTTP](cfnetwork/cfstreamerrorhttp.md): Error codes that a read stream for an HTTP request may return.
- [CFStreamErrorHTTPAuthentication](cfnetwork/cfstreamerrorhttpauthentication.md): Authentication error codes that may be returned when trying to apply authentication to a request.

### Reference

- [CFNetwork Data Types](cfnetwork/cfnetwork-data-types.md): Callback types for various network services.
- [CFNetwork Enumerations](cfnetwork/cfnetwork-enumerations.md): Enumerated values related to SOCKS.
- [CFNetwork Constants](cfnetwork/cfnetwork-constants.md): Constants for use with CFNetwork.
