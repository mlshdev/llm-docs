> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/devicemanagement-declarations](https://developer.apple.com/documentation/devicemanagement/devicemanagement-declarations)

# Declarations

**Interface language:** Data

**Framework:** Device Management  
**Kind:** API Collection

Configure devices using declarative device management.

## Topics

### Configurations

- [AccessibilitySettings](accessibilitysettings.md): The declaration to configure accessibility settings.
- [AccountCalDAV](accountcaldav.md): The declaration to configure a Calendar account.
- [AccountCardDAV](accountcarddav.md): The declaration to configure a Contacts account.
- [AccountExchange](accountexchange.md): The declaration to configure an Exchange account.
- [AccountGoogle](accountgoogle.md): The declaration to configure a Google account.
- [AccountLDAP](accountldap.md): The declaration to configure a Lightweight Directory Access Protocol (LDAP) account.
- [AccountMail](accountmail.md): The declaration to configure a Mail account.
- [AccountSubscribedCalendar](accountsubscribedcalendar.md): The declaration to configure a subscribed calendar.
- [AppManaged](appmanaged.md): The declaration to configure a managed app.
- [AppSettings](appsettings.md): The declaration to configure app settings.
- [AudioAccessorySettings](audioaccessorysettings.md): The declaration to configure audio accessory settings.
- [ContentCaching](contentcaching.md): The declaration to configure the Content Caching service.
- [DiskManagementSettings](diskmanagementsettings.md): The declaration to configure disk management settings on the device.
- [ExtensibleSSO](extensiblesso.md): The declaration to configure Extensible Single Sign-On.
- [ExternalIntelligenceSettings](externalintelligencesettings.md): The declaration to configure External Intelligence Integrations settings.
- [IntelligenceSettings](intelligencesettings.md): The declaration to configure Apple Intelligence settings.
- [KeyboardSettings](keyboardsettings.md): The declaration to configure keyboard settings.
- [LegacyInteractiveProfile](legacyinteractiveprofile.md): The declaration to configure an interactive legacy profile.
- [LegacyProfile](legacyprofile.md): The declaration to configure a legacy profile.
- [ManagementStatusSubscriptions](managementstatussubscriptions.md): The declaration to configure status subscriptions.
- [ManagementTest](managementtest.md): The declaration to configure a declarative device management test.
- [MathSettings](mathsettings.md): The declaration to configure the math and calculator apps.
- [MigrationAssistantSettings](migrationassistantsettings.md): The declaration to configure Migration Assistant settings.
- [NetworkDNSProxy](networkdnsproxy.md): The declaration to configure DNS proxy settings.
- [NetworkDNSSettings](networkdnssettings.md): The declaration to configure encrypted DNS settings.
- [NetworkRelay](networkrelay.md): The declaration to configure Network Relay settings.
- [NetworkVPNAlwaysOn](networkvpnalwayson.md): The declaration to configure a VPN using the Always On sub-type.
- [NetworkVPNIKEV2](networkvpnikev2.md): The declaration to configure a VPN using the IKEv2 sub-type.
- [NetworkVPNIPSec](networkvpnipsec.md): The declaration to configure a VPN using the IPSec sub-type.
- [NetworkVPNVPNPlugin](networkvpnvpnplugin.md): The declaration to configure a VPN using the VPN plugin sub-type.
- [Package](package.md): The declaration to configure a package.
- [PasscodeSettings](passcodesettings.md): The declaration to configure passcode policy settings.
- [SafariBookmarks](safaribookmarks.md): The declaration to configure managed bookmarks in Safari.
- [SafariExtensionSettings](safariextensionsettings.md): The declaration to configure Safari Extensions.
- [SafariSettings](safarisettings.md): The declaration to configure Safari settings.
- [ScreenSharingConnection](screensharingconnection.md): The declaration to configure a connection to a screen-sharing host.
- [ScreenSharingConnectionGroup](screensharingconnectiongroup.md): The declaration to configure a group of screen-sharing connections.
- [ScreenSharingHostSettings](screensharinghostsettings.md): The declaration to configure screen-sharing host settings and restrictions.
- [SecurityCertificate](securitycertificate.md): The declaration to configure a certificate.
- [SecurityIdentity](securityidentity.md): The declaration to configure an identity.
- [SecurityPasskeyAttestation](securitypasskeyattestation.md): The declaration to configure the device to allow WebAuthn enterprise attestation for certain passkeys.
- [ServicesBackgroundTasks](servicesbackgroundtasks.md): The declaration to configure background tasks.
- [ServicesConfigurationFiles](servicesconfigurationfiles.md): The declaration to configure managed configuration files for services.
- [SiriSettings](sirisettings.md): The declaration to configure Siri settings.
- [SoftwareUpdateEnforcementSpecific](softwareupdateenforcementspecific.md): The declaration to configure a software update enforcement policy for a specific OS release.
- [SoftwareUpdateSettings](softwareupdatesettings.md): The declaration to configure software updates.
- [WatchEnrollment](watchenrollment.md): The declaration to configure an MDMv1 profile for Apple Watch enrollment.
- [WebContentFilterPlugin](webcontentfilterplugin.md): The declaration to configure a WebContent Filter that uses a plugin.

### Activations

- [ActivationSimple](activationsimple.md): The declaration to activate a set of configurations.

### Assets

- [AssetCredentialACME](assetcredentialacme.md): A reference to an ACME identity.
- [AssetCredentialCertificate](assetcredentialcertificate.md): A reference to one PKCS #1 or PEM encoded certificate.
- [AssetCredentialIdentity](assetcredentialidentity.md): A reference to a PKCS #12 password-protected identity.
- [AssetCredentialSCEP](assetcredentialscep.md): A reference to a SCEP identity.
- [AssetCredentialUserNameAndPassword](assetcredentialusernameandpassword.md): A reference to data that describes a credential that represents a user name and password.
- [AssetData](assetdata.md): A reference to arbitrary data with a specific media type.
- [AssetUserIdentity](assetuseridentity.md): The user-identity data.

### Credentials

- [ACMECredential](acmecredential.md): An ACME identity that the device generates.
- [IdentityCredential](identitycredential.md): The data for a PKCS #12 password-protected identity.
- [SCEPCredential](scepcredential.md): A SCEP identity that the device generates.
- [UserNameAndPasswordCredential](usernameandpasswordcredential.md): Data that describes a credential that represents a user name and password.

### Management

- [ManagementOrganizationInformation](managementorganizationinformation.md): The declaration to configure the managing organization’s contact information.
- [ManagementProperties](managementproperties.md): The declaration to configure the properties on the device.
- [ManagementServerCapabilities](managementservercapabilities.md): The declaration to configure the server’s feature set.

### Base declaration

- [DeclarationBase](declarationbase.md): Keys common to all declarations used with the Remote Management protocol.

## See Also

### Declarative management

- [Status items](status-items.md): Monitor device state using status reports.
