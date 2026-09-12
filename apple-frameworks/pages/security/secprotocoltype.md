> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secprotocoltype](https://developer.apple.com/documentation/security/secprotocoltype)

# SecProtocolType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The protocol type associated with an Internet password.

## Declaration

```swift
enum SecProtocolType
```

## Topics

### Constants

- [SecProtocolType.FTP](secprotocoltype/ftp.md): Indicates FTP.
- [SecProtocolType.ftpAccount](secprotocoltype/ftpaccount.md): Indicates a client side FTP account. The usage of this constant is deprecated as of macOS 10.3.
- [SecProtocolType.HTTP](secprotocoltype/http.md): Indicates HTTP.
- [SecProtocolType.IRC](secprotocoltype/irc.md): Indicates IRC.
- [SecProtocolType.NNTP](secprotocoltype/nntp.md): Indicates NNTP.
- [SecProtocolType.POP3](secprotocoltype/pop3.md): Indicates POP3.
- [SecProtocolType.SMTP](secprotocoltype/smtp.md): Indicates SMTP.
- [SecProtocolType.SOCKS](secprotocoltype/socks.md): Indicates SOCKS.
- [SecProtocolType.IMAP](secprotocoltype/imap.md): Indicates IMAP.
- [SecProtocolType.LDAP](secprotocoltype/ldap.md): Indicates LDAP.
- [SecProtocolType.appleTalk](secprotocoltype/appletalk.md): Indicates AFP over AppleTalk.
- [SecProtocolType.AFP](secprotocoltype/afp.md): Indicates AFP over TCP.
- [SecProtocolType.telnet](secprotocoltype/telnet.md): Indicates Telnet.
- [SecProtocolType.SSH](secprotocoltype/ssh.md): Indicates SSH.
- [SecProtocolType.FTPS](secprotocoltype/ftps.md): Indicates FTP over TLS/SSL.
- [SecProtocolType.HTTPS](secprotocoltype/https.md): Indicates HTTP over TLS/SSL.
- [SecProtocolType.httpProxy](secprotocoltype/httpproxy.md): Indicates HTTP proxy.
- [SecProtocolType.httpsProxy](secprotocoltype/httpsproxy.md): Indicates HTTPS proxy.
- [SecProtocolType.ftpProxy](secprotocoltype/ftpproxy.md): Indicates FTP proxy.
- [SecProtocolType.CIFS](secprotocoltype/cifs.md): Indicates CIFS.
- [SecProtocolType.SMB](secprotocoltype/smb.md): Indicates SMB.
- [SecProtocolType.RTSP](secprotocoltype/rtsp.md): Indicates RTSP.
- [SecProtocolType.rtspProxy](secprotocoltype/rtspproxy.md): Indicates RTSP proxy.
- [SecProtocolType.DAAP](secprotocoltype/daap.md): Indicates DAAP.
- [SecProtocolType.EPPC](secprotocoltype/eppc.md): Indicates Remote Apple Events.
- [SecProtocolType.IPP](secprotocoltype/ipp.md): Indicates IPP.
- [SecProtocolType.NNTPS](secprotocoltype/nntps.md): Indicates NNTP over TLS/SSL.
- [SecProtocolType.LDAPS](secprotocoltype/ldaps.md): Indicates LDAP over TLS/SSL.
- [SecProtocolType.telnetS](secprotocoltype/telnets.md): Indicates Telnet over TLS/SSL.
- [SecProtocolType.IMAPS](secprotocoltype/imaps.md): Indicates IMAP4 over TLS/SSL.
- [SecProtocolType.IRCS](secprotocoltype/ircs.md): Indicates IRC over TLS/SSL.
- [SecProtocolType.POP3S](secprotocoltype/pop3s.md): Indicates POP3 over TLS/SSL.
- [SecProtocolType.cvSpserver](secprotocoltype/cvspserver.md): Indicates CVS pserver.
- [SecProtocolType.SVN](secprotocoltype/svn.md): Indicates Subversion.
- [SecProtocolType.any](secprotocoltype/any.md): Indicates that any protocol is acceptable.

### Initializers

- [init(rawValue:)](secprotocoltype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecProtocolType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The protocol type associated with an Internet password.

## Declaration

```objectivec
enum SecProtocolType : FourCharCode;
```

## Topics

### Constants

- [kSecProtocolTypeFTP](secprotocoltype/ftp.md): Indicates FTP.
- [kSecProtocolTypeFTPAccount](secprotocoltype/ftpaccount.md): Indicates a client side FTP account. The usage of this constant is deprecated as of macOS 10.3.
- [kSecProtocolTypeHTTP](secprotocoltype/http.md): Indicates HTTP.
- [kSecProtocolTypeIRC](secprotocoltype/irc.md): Indicates IRC.
- [kSecProtocolTypeNNTP](secprotocoltype/nntp.md): Indicates NNTP.
- [kSecProtocolTypePOP3](secprotocoltype/pop3.md): Indicates POP3.
- [kSecProtocolTypeSMTP](secprotocoltype/smtp.md): Indicates SMTP.
- [kSecProtocolTypeSOCKS](secprotocoltype/socks.md): Indicates SOCKS.
- [kSecProtocolTypeIMAP](secprotocoltype/imap.md): Indicates IMAP.
- [kSecProtocolTypeLDAP](secprotocoltype/ldap.md): Indicates LDAP.
- [kSecProtocolTypeAppleTalk](secprotocoltype/appletalk.md): Indicates AFP over AppleTalk.
- [kSecProtocolTypeAFP](secprotocoltype/afp.md): Indicates AFP over TCP.
- [kSecProtocolTypeTelnet](secprotocoltype/telnet.md): Indicates Telnet.
- [kSecProtocolTypeSSH](secprotocoltype/ssh.md): Indicates SSH.
- [kSecProtocolTypeFTPS](secprotocoltype/ftps.md): Indicates FTP over TLS/SSL.
- [kSecProtocolTypeHTTPS](secprotocoltype/https.md): Indicates HTTP over TLS/SSL.
- [kSecProtocolTypeHTTPProxy](secprotocoltype/httpproxy.md): Indicates HTTP proxy.
- [kSecProtocolTypeHTTPSProxy](secprotocoltype/httpsproxy.md): Indicates HTTPS proxy.
- [kSecProtocolTypeFTPProxy](secprotocoltype/ftpproxy.md): Indicates FTP proxy.
- [kSecProtocolTypeCIFS](secprotocoltype/cifs.md): Indicates CIFS.
- [kSecProtocolTypeSMB](secprotocoltype/smb.md): Indicates SMB.
- [kSecProtocolTypeRTSP](secprotocoltype/rtsp.md): Indicates RTSP.
- [kSecProtocolTypeRTSPProxy](secprotocoltype/rtspproxy.md): Indicates RTSP proxy.
- [kSecProtocolTypeDAAP](secprotocoltype/daap.md): Indicates DAAP.
- [kSecProtocolTypeEPPC](secprotocoltype/eppc.md): Indicates Remote Apple Events.
- [kSecProtocolTypeIPP](secprotocoltype/ipp.md): Indicates IPP.
- [kSecProtocolTypeNNTPS](secprotocoltype/nntps.md): Indicates NNTP over TLS/SSL.
- [kSecProtocolTypeLDAPS](secprotocoltype/ldaps.md): Indicates LDAP over TLS/SSL.
- [kSecProtocolTypeTelnetS](secprotocoltype/telnets.md): Indicates Telnet over TLS/SSL.
- [kSecProtocolTypeIMAPS](secprotocoltype/imaps.md): Indicates IMAP4 over TLS/SSL.
- [kSecProtocolTypeIRCS](secprotocoltype/ircs.md): Indicates IRC over TLS/SSL.
- [kSecProtocolTypePOP3S](secprotocoltype/pop3s.md): Indicates POP3 over TLS/SSL.
- [kSecProtocolTypeCVSpserver](secprotocoltype/cvspserver.md): Indicates CVS pserver.
- [kSecProtocolTypeSVN](secprotocoltype/svn.md): Indicates Subversion.
- [kSecProtocolTypeAny](secprotocoltype/any.md): Indicates that any protocol is acceptable.
