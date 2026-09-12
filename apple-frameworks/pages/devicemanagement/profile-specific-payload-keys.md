> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/profile-specific-payload-keys](https://developer.apple.com/documentation/devicemanagement/profile-specific-payload-keys)

# Profile-specific payload keys

**Interface language:** Data

**Framework:** Device Management  
**Kind:** API Collection

Apply settings to devices using configuration profiles.

<a id="overview"></a>

## Overview

In addition to the standard payload keys (described in [Define a profile](configuring-multiple-devices-using-profiles.md#Define-a-profile)) each payload can contain keys specific to a payload type. These payload specific keys are described in detail, below.

For profiles that use paths, consider them to be case sensitive.

## Topics

### General

- [TopLevel](toplevel.md): The top-level payload properties for all profiles.
- [CommonPayloadKeys](commonpayloadkeys.md): The properties common to all payloads.

### Accounts

- [Accounts](accounts.md): The payload that configures guest accounts.
- [CalDAV](caldav.md): The payload that configures a Calendar account.
- [CardDAV](carddav.md): The payload that configures a Contacts account.
- [GoogleAccount](googleaccount.md): The payload that configures a Google account.
- [LDAP](ldap.md): The payload that configures a Lightweight Directory Access Protocol (LDAP) account.
- [MobileAccounts](mobileaccounts.md): The payload that configures mobile accounts on the device.
- [SubscribedCalendars](subscribedcalendars.md): The payload that configures subscribed calendars.

### AirPlay

- [AirPlay](airplay.md): The payload that configures AirPlay settings.
- [AirPlaySecurity](airplaysecurity.md): The payload that configures Apple TV for a particular style of AirPlay security.

### App management

- [AppLock](applock.md): The payload that configures a device to run a single app.
- [AssociatedDomains](associateddomains.md): The payload that configures associated domains.
- [AutonomousSingleAppMode](autonomoussingleappmode.md): The payload that configures Autonomous Single App mode.
- [NSExtensionManagement](nsextensionmanagement.md): The payload that configures the extensions that the system allows or disallows to run on the device.

### App Store

- [AppStore](appstore.md): The payload that configures macOS App Store restrictions.

### Apple TV

- [ConferenceRoomDisplay](conferenceroomdisplay.md): The payload that configures Conference Room Display mode for Apple TV.
- [TVRemote](tvremote.md): The payload that configures the Apple TV remote.

### Authentication

- [DirectoryService](directoryservice.md): The payload that configures an Active Directory (AD) domain.
- [ExtensibleSingleSignOn](extensiblesinglesignon.md): The payload that configures an app extension that performs single sign-on (SSO).
- [ExtensibleSingleSignOnKerberos](extensiblesinglesignonkerberos.md): The payload that configures an app extension that performs single sign-on with the Kerberos extension.
- [Identification](identification.md): Deprecated. The payload that configures the names of the account user.
- [IdentityPreference](identitypreference.md): The payload that configures the user’s identity on the device.
- [SingleSignOn](singlesignon.md): Deprecated. The payload that configures single sign-on (SSO).

### Certificates

- [ACMECertificate](acmecertificate.md): The payload that configures Automated Certificate Management Environment (ACME) settings.
- [ActiveDirectoryCertificate](activedirectorycertificate.md): The payload that configures Active Directory Certificate settings.
- [CertificatePEM](certificatepem.md): The payload that configures a PEM-formatted certificate.
- [CertificatePKCS1](certificatepkcs1.md): The payload that configures a PKCS #1-formatted certificate.
- [CertificatePKCS12](certificatepkcs12.md): The payload that configures a PKCS #12-formatted certificate.
- [CertificateRoot](certificateroot.md): The payload that configures a root certificate.
- [CertificatePreference](certificatepreference.md): The payload that configures a certificate preference.
- [CertificateRevocation](certificaterevocation.md): The payload that configures certificate revocation checking.
- [CertificateTransparency](certificatetransparency.md): The payload that configures certificate transparency enforcement.
- [SCEP](scep.md): The payload that configures Simple Certificate Enrollment Protocol (SCEP) settings.

### Ethernet

- [8021XGlobalEthernet](8021xglobalethernet.md): The payload that configures the default fallback global Ethernet interface.
- [8021XFirstActiveEthernet](8021xfirstactiveethernet.md): The payload that configures the first wired, active Ethernet interface.
- [8021XFirstEthernet](8021xfirstethernet.md): The payload that configures the first wired Ethernet interface.
- [8021XSecondActiveEthernet](8021xsecondactiveethernet.md): The payload that configures the second wired, active Ethernet interface.
- [8021XSecondEthernet](8021xsecondethernet.md): The payload that configures the second wired Ethernet interface.
- [8021XThirdActiveEthernet](8021xthirdactiveethernet.md): The payload that configures the third wired, active Ethernet interface.
- [8021XThirdEthernet](8021xthirdethernet.md): The payload that configures the third wired Ethernet interface.

### FileVault

- [FDEFileVault](fdefilevault.md): The payload that configures FileVault.
- [FDEFileVaultOptions](fdefilevaultoptions.md): The payload that configures FileVault options.
- [FDERecoveryKeyEscrow](fderecoverykeyescrow.md): The payload that configures FileVault recovery key escrow.

### Login

- [LoginItemsManagedItems](loginitemsmanageditems.md): The payload that configures a device’s login items.
- [LoginWindowLoginItems](loginwindowloginitems.md): The payload that configures login behavior.
- [LoginWindow](loginwindow.md): The payload that configures Login Window behavior.
- [LoginWindowScripts](loginwindowscripts.md): The payload that configures scripts to run at login and logout.
- [ServiceManagementManagedLoginItems](servicemanagementmanagedloginitems.md): This payload that configures managed login items, which auto-enables and auto-allows matched items.

### Mail

- [ExchangeActiveSync](exchangeactivesync.md): The payload that configures Exchange ActiveSync accounts.
- [ExchangeWebServices](exchangewebservices.md): The payload that configures an Exchange Web Services accounts.
- [Mail](mail.md): The payload that configures a Mail account.

### Managed devices

- [EducationConfiguration](educationconfiguration.md): The payload that configures the users, groups, and departments within an educational organization.
- [LightsOutManagementLOM](lightsoutmanagementlom.md): The payload that configures lights-out management (LOM) settings.
- [ManagedPreferences](managedpreferences.md): The payload that configures managed preferences.
- [MDM](mdm.md): The payload that configures mobile device management (MDM) settings.
- [ProfileRemovalPassword](profileremovalpassword.md): The payload that configures profile removal.

### Media management

- [MediaManagementDiscBurning](mediamanagementdiscburning.md): The payload that configures disc-burning settings.

### Networking

- [Cellular](cellular.md): The payload that configures cellular settings.
- [CellularPrivateNetwork](cellularprivatenetwork.md): The payload that provides device info on private network deployments, including geographical location, preference over Wi-Fi, and network deployment type.
- [ContentCachingService](contentcachingservice.md): Deprecated. The payload that configures the Content Caching service.
- [DNSSettings](dnssettings.md): Deprecated. The payload that configures encrypted DNS settings.
- [Domains](domains.md): The payload that configures the domains under an organization’s management.
- [Firewall](firewall.md): The payload that configures the firewall.
- [NetworkUsageRules](networkusagerules.md): The payload that configures network-usage rules.
- [Relay](relay.md): Deprecated. The payload that configures relay settings.
- [WiFi](wifi.md): The payload that configures Wi-Fi settings.
- [WiFiManagedSettings](wifimanagedsettings.md): The payload that configures managed Wi-Fi settings.

### Parental controls

- [ParentalControlsApplicationRestrictions](parentalcontrolsapplicationrestrictions.md): Deprecated. The payload that configures parental controls for apps.
- [ParentalControlsContentFilter](parentalcontrolscontentfilter.md): The payload that configures the parental control web content filters.
- [ParentalControlsDictionary](parentalcontrolsdictionary.md): The payload that configures parental control dictionary restrictions.
- [ParentalControlsGameCenter](parentalcontrolsgamecenter.md): The payload that configures Game Center parental controls.
- [ParentalControlsTimeLimits](parentalcontrolstimelimits.md): The payload that configures parental control time limits.

### Preferences

- [GlobalPreferences](globalpreferences.md): The payload to configure global preferences.
- [UserPreferences](userpreferences.md): The payload that configures iCloud password preferences.

### Printing

- [AirPrint](airprint.md): The payload that configures AirPrint printer discoverability in the user’s printer list.
- [Printing](printing.md): The payload that configures printers.

### Privacy

- [PrivacyPreferencesPolicyControl](privacypreferencespolicycontrol.md): The payload that configures privacy preferences.

### Proxies

- [DNSProxy](dnsproxy.md): Deprecated. The payload that configures DNS proxies.
- [GlobalHTTPProxy](globalhttpproxy.md): The payload that configures a global HTTP proxy.
- [NetworkProxyConfiguration](networkproxyconfiguration.md): The payload that configures network proxies for a device.

### Restrictions

- [Restrictions](restrictions.md): The payload that configures restrictions on a device.

### Security

- [Passcode](passcode.md): Deprecated. The payload that configures a passcode policy.
- [SecurityPreferences](securitypreferences.md): The payload that configures security preferences.
- [SmartCard](smartcard.md): The payload that configures a smart card.

### System configuration

- [Declarations](declarations.md): The payload that applies a set of declarations to the device through the Settings app.
- [EnergySaver](energysaver.md): The payload that configures Energy Saver settings.
- [FileProvider](fileprovider.md): The payload that configures file provider settings.
- [Font](font.md): The payload that configures fonts.
- [LockScreenMessage](lockscreenmessage.md): The payload that configures a Lock Screen message.
- [Screensaver](screensaver.md): The payload that configures the screen saver.
- [SystemExtensions](systemextensions.md): The payload that configures system extensions.
- [SystemLogging](systemlogging.md): The payload that configures system logging.
- [TimeServer](timeserver.md): The payload that configures the time server.

### System policy

- [SystemPolicyControl](systempolicycontrol.md): The payload that configures the system policy for assessments.
- [SystemPolicyKernelExtensions](systempolicykernelextensions.md): The payload that configures the kernel extension policies.
- [SystemPolicyManaged](systempolicymanaged.md): The payload that configures the Finder’s contextual menu to bypass the system policy.
- [SystemPolicyRule](systempolicyrule.md): The payload that configures the system policy.

### System migration

- [SystemMigration](systemmigration.md): The payload that configures system migration.

### User experience

- [Accessibility](accessibility.md): The payload that configures the accessibility features of the device.
- [Desktop](desktop.md): The payload that configures the desktop wallpaper.
- [Dock](dock.md): The payload that configures the Dock.
- [Finder](finder.md): The payload that configures Finder settings.
- [HomeScreenLayout](homescreenlayout.md): The payload that configures the Home Screen layout.
- [ManagedMenuExtras](managedmenuextras.md): The payload that configures menu extras.
- [Notifications](notifications.md): The payload that configures notifications.
- [ScreensaverUser](screensaveruser.md): The payload that configures a user’s screen saver settings.
- [SetupAssistant](setupassistant.md): The payload that configures Setup Assistant settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

### VPN

- [AppLayerVPN](applayervpn.md): The payload that configures a per-app VPN.
- [AppToAppLayerVPNMapping](apptoapplayervpnmapping.md): The payload that configures per-app VPN settings.
- [VPN](vpn.md): The payload that configures a VPN.

### Web

- [WebClip](webclip.md): The profile that configures web clips on the device.
- [WebContentFilter](webcontentfilter.md): The payload that configures web content filters.

### Xsan

- [Xsan](xsan.md): The payload that configures an Xsan client system.
- [XsanPreferences](xsanpreferences.md): The payload that configures the Xsan preferences that define the volumes that automatically mount at startup.

### Deprecated

- [APN](apn.md): Deprecated. The payload that configures access point names.
- [FDERecoveryKeyRedirection](fderecoverykeyredirection.md): Deprecated. The payload that configures FileVault recovery key redirection.
- [MediaManagementAllowedMedia](mediamanagementallowedmedia.md): Deprecated. The payload that configures media management.
- [ParentalControlDictationAndProfanity](parentalcontroldictationandprofanity.md): Deprecated. The payload that configures parental control for dictation and profanity.
- [ShareKit](sharekit.md): Deprecated. The payload that configures ShareKit.
- [SystemPreferences](systempreferences.md): Deprecated. The payload that configures the preference panes.
