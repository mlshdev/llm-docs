> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/ipsec-entity-keys](https://developer.apple.com/documentation/systemconfiguration/ipsec-entity-keys)

# IPSec Entity Keys

**Interface languages:** Swift, Objective-C

**Framework:** System Configuration  
**Kind:** API Collection

Keys that correspond to values in the `kSCEntNetIPSec` dictionary.

## Topics

### Constants

- [kSCPropNetIPSecLocalIdentifier](kscpropnetipseclocalidentifier-swift.var.md): The IPSec key `LocalIdentifier`, whose value is of type `CFString`.
- [kSCPropNetIPSecLocalIdentifierType](kscpropnetipseclocalidentifiertype-swift.var.md): The IPSec key `LocalIdentifierType`, whose value is of type `CFString`.
- [kSCPropNetIPSecAuthenticationMethod](kscpropnetipsecauthenticationmethod-swift.var.md): The IPSec key `AuthenticationMethod`, whose value is of type `CFString`.
- [kSCPropNetIPSecSharedSecret](kscpropnetipsecsharedsecret-swift.var.md): The IPSec key `SharedSecret`, whose value is of type `CFString`.
- [kSCPropNetIPSecSharedSecretEncryption](kscpropnetipsecsharedsecretencryption-swift.var.md): The IPSec key `SharedSecretEncryption`, whose value is of type `CFString`.
- [kSCPropNetIPSecLocalCertificate](kscpropnetipseclocalcertificate-swift.var.md): The IPSec key `LocalCertificate`, whose value is of type `CFData`.
- [kSCPropNetIPSecConnectTime](kscpropnetipsecconnecttime-swift.var.md): The IPSec key ConnectTime.
- [kSCPropNetIPSecRemoteAddress](kscpropnetipsecremoteaddress-swift.var.md): The IPSec key RemoteAddress.
- [kSCPropNetIPSecStatus](kscpropnetipsecstatus-swift.var.md): The IPSec key Status.
- [kSCPropNetIPSecXAuthEnabled](kscpropnetipsecxauthenabled-swift.var.md): The IPSec key XAuthEnabled.
- [kSCPropNetIPSecXAuthName](kscpropnetipsecxauthname-swift.var.md): The IPSec key XAuthName.
- [kSCPropNetIPSecXAuthPassword](kscpropnetipsecxauthpassword-swift.var.md): The IPSec key XAuthPassword.
- [kSCPropNetIPSecXAuthPasswordEncryption](kscpropnetipsecxauthpasswordencryption-swift.var.md): The IPSec key XAuthPasswordEncryption.

### Authentication Method Values

- [kSCValNetIPSecAuthenticationMethodSharedSecret](kscvalnetipsecauthenticationmethodsharedsecret-swift.var.md): The constant value SharedSecret.
- [kSCValNetIPSecAuthenticationMethodCertificate](kscvalnetipsecauthenticationmethodcertificate-swift.var.md): The constant value Certificate.
- [kSCValNetIPSecAuthenticationMethodHybrid](kscvalnetipsecauthenticationmethodhybrid-swift.var.md): The constant value Hybrid.

### Local Identifier Type Values

- [kSCValNetIPSecLocalIdentifierTypeKeyID](kscvalnetipseclocalidentifiertypekeyid-swift.var.md): The constant value KeyID.

### IPSec Shared Secret Encryption Values

- [kSCValNetIPSecSharedSecretEncryptionKeychain](kscvalnetipsecsharedsecretencryptionkeychain-swift.var.md): The constant value Keychain.

### XAuth Password Encryption Values

- [kSCValNetIPSecXAuthPasswordEncryptionKeychain](kscvalnetipsecxauthpasswordencryptionkeychain-swift.var.md): The constant value Keychain.
- [kSCValNetIPSecXAuthPasswordEncryptionPrompt](kscvalnetipsecxauthpasswordencryptionprompt-swift.var.md): The constant value Prompt.

## See Also

### Constants

- [Generic Keys](generic-keys.md): General-purpose keys that apply to multiple dictionaries in the persistent store.
- [Preference Keys](preference-keys.md): Keys that correspond to preferences in the persistent store.
- [Component Keys](component-keys.md): Keys that correspond to components in the persistent store.
- [Network Dictionary Keys](network-dictionary-keys.md): Keys that correspond to values in the `kSCCompNetwork` dictionary.
- [Interface Dictionary Keys](interface-dictionary-keys.md): Keys that correspond to values in the `kSCCompInterface` dictionary.
- [Hostnames Dictionary Keys](hostnames-dictionary-keys.md): Keys that correspond to values in the `kSCCompHostnames` dictionary.
- [Network Entity Keys](network-entity-keys.md): Keys that correspond to network entity dictionaries in the persistent store.
- [DNS Entity Keys](dns-entity-keys.md): Keys that correspond to values in the `kSCEntNetDNS` dictionary.
- [Ethernet Entity Keys](ethernet-entity-keys.md): Keys that correspond to values in the `kSCEntNetEthernet` dictionary.
- [Interface Entity Keys](interface-entity-keys.md): Keys that correspond to values in the `kSCEntNetInterface` dictionary.
- [IPv4 Entity Keys](ipv4-entity-keys.md): Keys that correspond to values in the `kSCEntNetIPv4` dictionary.
- [IPv6 Entity Keys](ipv6-entity-keys.md): Keys that correspond to values in the `kSCEntNetIPv6` dictionary.
- [6to4 Entity Keys](6to4-entity-keys.md): Keys that correspond to values in the `kSCEntNet6to4` dictionary.
- [Link Entity Keys](link-entity-keys.md): Keys that correspond to values in the `kSCEntNetLink` dictionary.
- [Modem Entity Keys](modem-entity-keys.md): Keys that correspond to values in the `kSCEntNetModem` dictionary.
