> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secure-transport](https://developer.apple.com/documentation/security/secure-transport)

# Secure Transport (Swift)

**Framework:** Security  
**Kind:** API Collection

Secure network communication using standardized transport layer security mechanisms.

<a id="Overview"></a>

## Overview

The `Security.SecureTransport` API gives you access to Apple’s implementation of Secure Sockets Layer version 3.0 (SSLv3), Transport Layer Security (TLS) versions 1.0 through 1.2, and Datagram Transport Layer Security (DTLS) version 1.0.

This API imposes no transport layer dependencies. You can use it with BSD Sockets and other protocols. To use this API, you provide callback functions to perform I/O on the underlying network connections. You are also responsible for setting up raw network connections. You pass in an opaque reference to the underlying (connected) entity at the start of an SSL session in the form of an [SSLConnectionRef](sslconnectionref.md) object.

> **Important**

>  This API is considered legacy. Use the [Network](../network.md) framework instead.

## Topics

### First Steps

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md): Establish Secure Sockets Layer (SSL) sessions to facilitate secure communication between client and server.

### Session Context

- [SSLCreateContext(\_:\_:\_:)](sslcreatecontext%28______%29.md): Deprecated. Allocates and returns a new context.
- [SSLProtocolSide](sslprotocolside.md): The flags that indicate whether a context is for the server or client side of a connection.
- [SSLConnectionType](sslconnectiontype.md): The flags that indicate whether a context is to be used for streaming or datagram-based communication.
- [SSLContext](sslcontext.md): An opaque type that represents an SSL session context object.
- [SSLContextGetTypeID()](sslcontextgettypeid%28%29.md): Deprecated. Returns the Core Foundation type ID for context objects.

### Context Options

- [SSLSetSessionOption(\_:\_:\_:)](sslsetsessionoption%28______%29.md): Deprecated. Specifies options for a specific session.
- [SSLGetSessionOption(\_:\_:\_:)](sslgetsessionoption%28______%29.md): Deprecated. Indicates the current setting of Secure Sockets Layer (SSL) session options.
- [SSLSessionOption](sslsessionoption.md): The options that can be set for an SSL session.

### Context Callbacks

- [SSLSetIOFuncs(\_:\_:\_:)](sslsetiofuncs%28______%29.md): Deprecated. Specifies callback functions that perform the network I/O operations.
- [SSLReadFunc](sslreadfunc.md): A pointer to a customized read function that secure transport calls to read data from the connection.
- [SSLWriteFunc](sslwritefunc.md): A pointer to a customized write function that secure transport calls to write data to the connection.

### Session Configuration

- [SSLSetSessionConfig(\_:\_:)](sslsetsessionconfig%28____%29.md): Deprecated. Sets a predefined configuration for the Secure Sockets Layer (SSL) session.
- [SSLSetClientSideAuthenticate(\_:\_:)](sslsetclientsideauthenticate%28____%29.md): Deprecated. Specifies the requirements for client-side authentication.
- [SSLConfig](sslconfig.md): Use these constants to configure Transport Layer Security (TLS) sessions.
- [SSLAuthenticate](sslauthenticate.md): The flags that represent the requirements for client-side authentication.

### I/O Connections

- [SSLSetConnection(\_:\_:)](sslsetconnection%28____%29.md): Deprecated. Specifies an I/O connection for a specific session.
- [SSLGetConnection(\_:\_:)](sslgetconnection%28____%29.md): Deprecated. Retrieves an I/O connection—such as a socket or endpoint—for a specific session.
- [SSLConnectionRef](sslconnectionref.md): A pointer to an opaque I/O connection object.

### Session State

- [SSLHandshake(\_:)](sslhandshake%28__%29.md): Deprecated. Performs the SSL handshake.
- [SSLReHandshake(\_:)](sslrehandshake%28__%29.md): Deprecated. Requests renegotiation of the SSL handshake. Server only.
- [SSLClose(\_:)](sslclose%28__%29.md): Deprecated. Terminates the current SSL session.
- [SSLSetPeerID(\_:\_:\_:)](sslsetpeerid%28______%29.md): Deprecated. Specifies data that is sufficient to uniquely identify the peer of the current session.
- [SSLGetPeerID(\_:\_:\_:)](sslgetpeerid%28______%29.md): Deprecated. Retrieves the current peer ID data.
- [SSLGetSessionState(\_:\_:)](sslgetsessionstate%28____%29.md): Deprecated. Retrieves the state of an SSL session.
- [SSLSessionState](sslsessionstate.md): The flags that represent the state of an SSL session.
- [SSLSetError(\_:\_:)](sslseterror%28____%29.md): Deprecated. Sets the status of a session context.

### Read Operations

- [SSLRead(\_:\_:\_:\_:)](sslread%28________%29.md): Deprecated. Performs a normal application-level read operation.
- [SSLGetBufferedReadSize(\_:\_:)](sslgetbufferedreadsize%28____%29.md): Deprecated. Determines how much data is available to be read.

### Write Operations

- [SSLWrite(\_:\_:\_:\_:)](sslwrite%28________%29.md): Deprecated. Performs a typical application-level write operation.
- [SSLGetDatagramWriteSize(\_:\_:)](sslgetdatagramwritesize%28____%29.md): Deprecated. Provides the largest packet that the OS guarantees it can send without fragmentation.
- [SSLGetMaxDatagramRecordSize(\_:\_:)](sslgetmaxdatagramrecordsize%28____%29.md): Deprecated. Obtains the maximum datagram record size allowed by the application for a given context.
- [SSLSetMaxDatagramRecordSize(\_:\_:)](sslsetmaxdatagramrecordsize%28____%29.md): Deprecated. Sets the maximum datagram record size allowed by the application for a given context.
- [SSLSetDatagramHelloCookie(\_:\_:\_:)](sslsetdatagramhellocookie%28______%29.md): Deprecated. Sets the cookie value used in the Datagram Transport Layer Security (DTLS) hello message.

### The Peer Domain Name

- [SSLSetPeerDomainName(\_:\_:\_:)](sslsetpeerdomainname%28______%29.md): Deprecated. Specifies the fully qualified domain name of the peer.
- [SSLGetPeerDomainNameLength(\_:\_:)](sslgetpeerdomainnamelength%28____%29.md): Deprecated. Determines the length of a previously set peer domain name.
- [SSLGetPeerDomainName(\_:\_:\_:)](sslgetpeerdomainname%28______%29.md): Deprecated. Retrieves the peer domain name specified previously.
- [SSLCopyRequestedPeerName(\_:\_:\_:)](sslcopyrequestedpeername%28______%29.md): Deprecated. Determines the buffer size needed for the peer domain name.
- [SSLCopyRequestedPeerNameLength(\_:\_:)](sslcopyrequestedpeernamelength%28____%29.md): Deprecated. Obtains the hostname specified by the client in the ServerName extension (SNI). Server only.

### Versions

- [SSLSetProtocolVersionMax(\_:\_:)](sslsetprotocolversionmax%28____%29.md): Deprecated. Sets the maximum protocol version allowed by the application for a given SSL context.
- [SSLSetProtocolVersionMin(\_:\_:)](sslsetprotocolversionmin%28____%29.md): Deprecated. Sets the minimum protocol version allowed by the application for a given SSL context.
- [SSLGetProtocolVersionMax(\_:\_:)](sslgetprotocolversionmax%28____%29.md): Deprecated. Gets the maximum protocol version allowed by the application for a given SSL context.
- [SSLGetProtocolVersionMin(\_:\_:)](sslgetprotocolversionmin%28____%29.md): Deprecated. Gets the minimum protocol version allowed by the application for a given SSL context.
- [SSLGetNegotiatedProtocolVersion(\_:\_:)](sslgetnegotiatedprotocolversion%28____%29.md): Deprecated. Obtains the negotiated protocol version of the active session.
- [tls_protocol_version_t](tls_protocol_version_t.md): The collection of supported TLS and DTLS versions.
- [SSLProtocol](sslprotocol.md): An enumeration of valid SSL protocol versions.

### Application Layer Protocols

- [SSLCopyALPNProtocols(\_:\_:)](sslcopyalpnprotocols%28____%29.md): Deprecated. Gets the list of supported application layer protocols.
- [SSLSetALPNProtocols(\_:\_:)](sslsetalpnprotocols%28____%29.md): Deprecated. Sets the list of supported applicaiton layer protocols.

### Ciphers

- [SSLGetNumberSupportedCiphers(\_:\_:)](sslgetnumbersupportedciphers%28____%29.md): Deprecated. Determines the number of cipher suites supported.
- [SSLGetSupportedCiphers(\_:\_:\_:)](sslgetsupportedciphers%28______%29.md): Deprecated. Determines the values of the supported cipher suites.
- [SSLSetEnabledCiphers(\_:\_:\_:)](sslsetenabledciphers%28______%29.md): Deprecated. Specifies a restricted set of SSL cipher suites to be enabled by the current SSL session context.
- [SSLGetNumberEnabledCiphers(\_:\_:)](sslgetnumberenabledciphers%28____%29.md): Deprecated. Determines the number of cipher suites currently enabled.
- [SSLGetEnabledCiphers(\_:\_:\_:)](sslgetenabledciphers%28______%29.md): Deprecated. Determines which SSL cipher suites are currently enabled.
- [SSLGetNegotiatedCipher(\_:\_:)](sslgetnegotiatedcipher%28____%29.md): Deprecated. Retrieves the cipher suite negotiated for this session.
- [SSLSetDiffieHellmanParams(\_:\_:\_:)](sslsetdiffiehellmanparams%28______%29.md): Deprecated. Specifies Diffie-Hellman parameters for a given context.
- [SSLGetDiffieHellmanParams(\_:\_:\_:)](sslgetdiffiehellmanparams%28______%29.md): Deprecated. Retrieves the Diffie-Hellman parameters for a given context.
- [tls_ciphersuite_group_t](tls_ciphersuite_group_t.md): Groups that collect ciphersuites of comparable security properties.
- [tls_ciphersuite_t](tls_ciphersuite_t.md): The collection of valid ciphersuites.
- [SSLCipherSuite](sslciphersuite.md): A type for storing cipher suite values.
- [SSLCiphersuiteGroup](sslciphersuitegroup.md): A mechanism for grouping related cipher suites.
- [SSL Cipher Suite Values](ssl-cipher-suite-values.md): Recognize the set of valid SSL cipher suite values.

### Root Certificates

- [SSLSetCertificateAuthorities(\_:\_:\_:)](sslsetcertificateauthorities%28______%29.md): Deprecated. Adds one or more certificates to a server’s list of certification authorities (CAs) acceptable for client authentication.
- [SSLCopyCertificateAuthorities(\_:\_:)](sslcopycertificateauthorities%28____%29.md): Deprecated. Retrieves the current list of certification authorities.

### Authentication

- [SSLAddDistinguishedName(\_:\_:\_:)](ssladddistinguishedname%28______%29.md): Deprecated. Adds a DER-encoded distinguished name to a list of acceptable names to be specified in requests for client certificates.
- [SSLCopyDistinguishedNames(\_:\_:)](sslcopydistinguishednames%28____%29.md): Deprecated. Retrieves the distinguished names of acceptable certification authorities.
- [SSLSetCertificate(\_:\_:)](sslsetcertificate%28____%29.md): Deprecated. Specifies this connection’s certificate or certificates.
- [SSLGetClientCertificateState(\_:\_:)](sslgetclientcertificatestate%28____%29.md): Deprecated. Retrieves the exchange status of the client certificate.
- [SSLCopyPeerTrust(\_:\_:)](sslcopypeertrust%28____%29.md): Deprecated. Retrieves a trust management object for the certificate used by a session.
- [SSLClientCertificateState](sslclientcertificatestate.md): An enumeration of the states of client certificate exchange.
- [SSLSetOCSPResponse(\_:\_:)](sslsetocspresponse%28____%29.md): Deprecated. Sets the OCSP response for the given SSL session.
- [SSLSetSessionTicketsEnabled(\_:\_:)](sslsetsessionticketsenabled%28____%29.md): Deprecated. Enables or disables session ticket resumption.

### Result Codes

- [Secure Transport Result Codes](secure-transport-result-codes.md): Recognize result codes specific to the secure transport API.

### Legacy Operations

- [SSLSetEncryptionCertificate(\_:\_:)](sslsetencryptioncertificate%28____%29.md): Deprecated. Specifies the encryption certificates used for this connection.

# Secure Transport (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Secure network communication using standardized transport layer security mechanisms.

<a id="Overview"></a>

## Overview

The `Security.SecureTransport` API gives you access to Apple’s implementation of Secure Sockets Layer version 3.0 (SSLv3), Transport Layer Security (TLS) versions 1.0 through 1.2, and Datagram Transport Layer Security (DTLS) version 1.0.

This API imposes no transport layer dependencies. You can use it with BSD Sockets and other protocols. To use this API, you provide callback functions to perform I/O on the underlying network connections. You are also responsible for setting up raw network connections. You pass in an opaque reference to the underlying (connected) entity at the start of an SSL session in the form of an [SSLConnectionRef](sslconnectionref.md) object.

> **Important**

>  This API is considered legacy. Use the [Network](../network.md) framework instead.

## Topics

### First Steps

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md): Establish Secure Sockets Layer (SSL) sessions to facilitate secure communication between client and server.

### Session Context

- [SSLCreateContext](sslcreatecontext%28______%29.md): Deprecated. Allocates and returns a new context.
- [SSLProtocolSide](sslprotocolside.md): The flags that indicate whether a context is for the server or client side of a connection.
- [SSLConnectionType](sslconnectiontype.md): The flags that indicate whether a context is to be used for streaming or datagram-based communication.
- [SSLContextRef](sslcontext.md): An opaque type that represents an SSL session context object.
- [SSLContextGetTypeID](sslcontextgettypeid%28%29.md): Deprecated. Returns the Core Foundation type ID for context objects.

### Context Options

- [SSLSetSessionOption](sslsetsessionoption%28______%29.md): Deprecated. Specifies options for a specific session.
- [SSLGetSessionOption](sslgetsessionoption%28______%29.md): Deprecated. Indicates the current setting of Secure Sockets Layer (SSL) session options.
- [SSLSessionOption](sslsessionoption.md): The options that can be set for an SSL session.

### Context Callbacks

- [SSLSetIOFuncs](sslsetiofuncs%28______%29.md): Deprecated. Specifies callback functions that perform the network I/O operations.
- [SSLReadFunc](sslreadfunc.md): A pointer to a customized read function that secure transport calls to read data from the connection.
- [SSLWriteFunc](sslwritefunc.md): A pointer to a customized write function that secure transport calls to write data to the connection.

### Session Configuration

- [SSLSetSessionConfig](sslsetsessionconfig%28____%29.md): Deprecated. Sets a predefined configuration for the Secure Sockets Layer (SSL) session.
- [SSLSetClientSideAuthenticate](sslsetclientsideauthenticate%28____%29.md): Deprecated. Specifies the requirements for client-side authentication.
- [SSLConfig](sslconfig.md): Use these constants to configure Transport Layer Security (TLS) sessions.
- [SSLAuthenticate](sslauthenticate.md): The flags that represent the requirements for client-side authentication.

### I/O Connections

- [SSLSetConnection](sslsetconnection%28____%29.md): Deprecated. Specifies an I/O connection for a specific session.
- [SSLGetConnection](sslgetconnection%28____%29.md): Deprecated. Retrieves an I/O connection—such as a socket or endpoint—for a specific session.
- [SSLConnectionRef](sslconnectionref.md): A pointer to an opaque I/O connection object.

### Session State

- [SSLHandshake](sslhandshake%28__%29.md): Deprecated. Performs the SSL handshake.
- [SSLReHandshake](sslrehandshake%28__%29.md): Deprecated. Requests renegotiation of the SSL handshake. Server only.
- [SSLClose](sslclose%28__%29.md): Deprecated. Terminates the current SSL session.
- [SSLSetPeerID](sslsetpeerid%28______%29.md): Deprecated. Specifies data that is sufficient to uniquely identify the peer of the current session.
- [SSLGetPeerID](sslgetpeerid%28______%29.md): Deprecated. Retrieves the current peer ID data.
- [SSLGetSessionState](sslgetsessionstate%28____%29.md): Deprecated. Retrieves the state of an SSL session.
- [SSLSessionState](sslsessionstate.md): The flags that represent the state of an SSL session.
- [SSLSetError](sslseterror%28____%29.md): Deprecated. Sets the status of a session context.

### Read Operations

- [SSLRead](sslread%28________%29.md): Deprecated. Performs a normal application-level read operation.
- [SSLGetBufferedReadSize](sslgetbufferedreadsize%28____%29.md): Deprecated. Determines how much data is available to be read.

### Write Operations

- [SSLWrite](sslwrite%28________%29.md): Deprecated. Performs a typical application-level write operation.
- [SSLGetDatagramWriteSize](sslgetdatagramwritesize%28____%29.md): Deprecated. Provides the largest packet that the OS guarantees it can send without fragmentation.
- [SSLGetMaxDatagramRecordSize](sslgetmaxdatagramrecordsize%28____%29.md): Deprecated. Obtains the maximum datagram record size allowed by the application for a given context.
- [SSLSetMaxDatagramRecordSize](sslsetmaxdatagramrecordsize%28____%29.md): Deprecated. Sets the maximum datagram record size allowed by the application for a given context.
- [SSLSetDatagramHelloCookie](sslsetdatagramhellocookie%28______%29.md): Deprecated. Sets the cookie value used in the Datagram Transport Layer Security (DTLS) hello message.

### The Peer Domain Name

- [SSLSetPeerDomainName](sslsetpeerdomainname%28______%29.md): Deprecated. Specifies the fully qualified domain name of the peer.
- [SSLGetPeerDomainNameLength](sslgetpeerdomainnamelength%28____%29.md): Deprecated. Determines the length of a previously set peer domain name.
- [SSLGetPeerDomainName](sslgetpeerdomainname%28______%29.md): Deprecated. Retrieves the peer domain name specified previously.
- [SSLCopyRequestedPeerName](sslcopyrequestedpeername%28______%29.md): Deprecated. Determines the buffer size needed for the peer domain name.
- [SSLCopyRequestedPeerNameLength](sslcopyrequestedpeernamelength%28____%29.md): Deprecated. Obtains the hostname specified by the client in the ServerName extension (SNI). Server only.

### Versions

- [SSLSetProtocolVersionMax](sslsetprotocolversionmax%28____%29.md): Deprecated. Sets the maximum protocol version allowed by the application for a given SSL context.
- [SSLSetProtocolVersionMin](sslsetprotocolversionmin%28____%29.md): Deprecated. Sets the minimum protocol version allowed by the application for a given SSL context.
- [SSLGetProtocolVersionMax](sslgetprotocolversionmax%28____%29.md): Deprecated. Gets the maximum protocol version allowed by the application for a given SSL context.
- [SSLGetProtocolVersionMin](sslgetprotocolversionmin%28____%29.md): Deprecated. Gets the minimum protocol version allowed by the application for a given SSL context.
- [SSLGetNegotiatedProtocolVersion](sslgetnegotiatedprotocolversion%28____%29.md): Deprecated. Obtains the negotiated protocol version of the active session.
- [tls_protocol_version_t](tls_protocol_version_t.md): The collection of supported TLS and DTLS versions.
- [SSLProtocol](sslprotocol.md): An enumeration of valid SSL protocol versions.

### Application Layer Protocols

- [SSLCopyALPNProtocols](sslcopyalpnprotocols%28____%29.md): Deprecated. Gets the list of supported application layer protocols.
- [SSLSetALPNProtocols](sslsetalpnprotocols%28____%29.md): Deprecated. Sets the list of supported applicaiton layer protocols.

### Ciphers

- [SSLGetNumberSupportedCiphers](sslgetnumbersupportedciphers%28____%29.md): Deprecated. Determines the number of cipher suites supported.
- [SSLGetSupportedCiphers](sslgetsupportedciphers%28______%29.md): Deprecated. Determines the values of the supported cipher suites.
- [SSLSetEnabledCiphers](sslsetenabledciphers%28______%29.md): Deprecated. Specifies a restricted set of SSL cipher suites to be enabled by the current SSL session context.
- [SSLGetNumberEnabledCiphers](sslgetnumberenabledciphers%28____%29.md): Deprecated. Determines the number of cipher suites currently enabled.
- [SSLGetEnabledCiphers](sslgetenabledciphers%28______%29.md): Deprecated. Determines which SSL cipher suites are currently enabled.
- [SSLGetNegotiatedCipher](sslgetnegotiatedcipher%28____%29.md): Deprecated. Retrieves the cipher suite negotiated for this session.
- [SSLSetDiffieHellmanParams](sslsetdiffiehellmanparams%28______%29.md): Deprecated. Specifies Diffie-Hellman parameters for a given context.
- [SSLGetDiffieHellmanParams](sslgetdiffiehellmanparams%28______%29.md): Deprecated. Retrieves the Diffie-Hellman parameters for a given context.
- [tls_ciphersuite_group_t](tls_ciphersuite_group_t.md): Groups that collect ciphersuites of comparable security properties.
- [tls_ciphersuite_t](tls_ciphersuite_t.md): The collection of valid ciphersuites.
- [SSLCipherSuite](sslciphersuite.md): A type for storing cipher suite values.
- [SSLCiphersuiteGroup](sslciphersuitegroup.md): A mechanism for grouping related cipher suites.
- [SSL Cipher Suite Values](ssl-cipher-suite-values.md): Recognize the set of valid SSL cipher suite values.

### Root Certificates

- [SSLSetCertificateAuthorities](sslsetcertificateauthorities%28______%29.md): Deprecated. Adds one or more certificates to a server’s list of certification authorities (CAs) acceptable for client authentication.
- [SSLCopyCertificateAuthorities](sslcopycertificateauthorities%28____%29.md): Deprecated. Retrieves the current list of certification authorities.

### Authentication

- [SSLAddDistinguishedName](ssladddistinguishedname%28______%29.md): Deprecated. Adds a DER-encoded distinguished name to a list of acceptable names to be specified in requests for client certificates.
- [SSLCopyDistinguishedNames](sslcopydistinguishednames%28____%29.md): Deprecated. Retrieves the distinguished names of acceptable certification authorities.
- [SSLSetCertificate](sslsetcertificate%28____%29.md): Deprecated. Specifies this connection’s certificate or certificates.
- [SSLGetClientCertificateState](sslgetclientcertificatestate%28____%29.md): Deprecated. Retrieves the exchange status of the client certificate.
- [SSLCopyPeerTrust](sslcopypeertrust%28____%29.md): Deprecated. Retrieves a trust management object for the certificate used by a session.
- [SSLClientCertificateState](sslclientcertificatestate.md): An enumeration of the states of client certificate exchange.
- [SSLSetOCSPResponse](sslsetocspresponse%28____%29.md): Deprecated. Sets the OCSP response for the given SSL session.
- [SSLSetSessionTicketsEnabled](sslsetsessionticketsenabled%28____%29.md): Deprecated. Enables or disables session ticket resumption.

### Result Codes

- [Secure Transport Result Codes](secure-transport-result-codes.md): Recognize result codes specific to the secure transport API.

### Legacy Operations

- [SSLNewContext](sslnewcontext.md): Deprecated. Creates a new Secure Sockets Layer (SSL) session context.
- [SSLDisposeContext](ssldisposecontext.md): Deprecated. Disposes of a Secure Sockets Layer (SSL) session context.
- [SSLSetProtocolVersionEnabled](sslsetprotocolversionenabled.md): Deprecated. Sets the allowed Secure Sockets Layer (SSL) protocol versions.
- [SSLGetProtocolVersionEnabled](sslgetprotocolversionenabled.md): Deprecated. Retrieves the enabled status of a given protocol.
- [SSLSetRsaBlinding](sslsetrsablinding.md): Deprecated. Enables or disables RSA blinding.
- [SSLGetRsaBlinding](sslgetrsablinding.md): Deprecated. Obtains a value indicating whether RSA blinding is enabled.
- [SSLSetProtocolVersion](sslsetprotocolversion.md): Deprecated. Sets the SSL protocol version.
- [SSLGetProtocolVersion](sslgetprotocolversion.md): Deprecated. Gets the SSL protocol version.
- [SSLSetAllowsAnyRoot](sslsetallowsanyroot.md): Deprecated. Specifies whether root certificates from unrecognized certification authorities are allowed.
- [SSLGetAllowsAnyRoot](sslgetallowsanyroot.md): Deprecated. Obtains a value specifying whether an unknown root is allowed.
- [SSLSetAllowsExpiredRoots](sslsetallowsexpiredroots.md): Deprecated. Specifies whether expired root certificates are allowed.
- [SSLGetAllowsExpiredRoots](sslgetallowsexpiredroots.md): Deprecated. Retrieves the value indicating whether expired roots are allowed.
- [SSLSetTrustedRoots](sslsettrustedroots.md): Deprecated. Augments or replaces the default set of trusted root certificates for this session.
- [SSLCopyTrustedRoots](sslcopytrustedroots.md): Deprecated. Retrieves the current list of trusted root certificates.
- [SSLSetAllowsExpiredCerts](sslsetallowsexpiredcerts.md): Deprecated. Specifies whether certificate expiration times are ignored.
- [SSLGetAllowsExpiredCerts](sslgetallowsexpiredcerts.md): Deprecated. Retrieves the value specifying whether expired certificates are allowed.
- [SSLSetEnableCertVerify](sslsetenablecertverify.md): Deprecated. Enables or disables peer certificate chain validation.
- [SSLGetEnableCertVerify](sslgetenablecertverify.md): Deprecated. Determines whether peer certificate chain validation is currently enabled.
- [SSLSetEncryptionCertificate](sslsetencryptioncertificate%28____%29.md): Deprecated. Specifies the encryption certificates used for this connection.
- [SSLCopyPeerCertificates](sslcopypeercertificates.md): Deprecated. Retrieves a peer certificate and its certificate chain.
