> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices](https://developer.apple.com/documentation/authenticationservices)

# Authentication Services (Swift)

**Framework:** Authentication Services  
**Kind:** Framework  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Make it easy for users to log into apps and services.

<a id="overview"></a>

## Overview

Use the Authentication Services framework to improve the experience of users when they enter credentials to establish their identity.

- Give users the ability to sign into your services with their Apple ID.
- Enable users to look up their stored passwords from within the sign-in flow of an app.
- Provide a passwordless registration and authentication workflow for apps and websites using iCloud Keychain or a physical security key.
- Perform automatic security upgrades from weak to strong passwords, or upgrade to using Sign in with Apple.
- Share data between an app and a web browser using technologies like OAuth to leverage existing web-based logins in the app.
- Create a single sign-on (SSO) experience in an enterprise app.

Simple and straightforward sign-up and sign-in flows reduce the burden on the user to remember passwords, which may improve security.

## Topics

### Authorization requests

- [ASAuthorizationController](authenticationservices/asauthorizationcontroller.md): A controller that manages authorization requests that a provider creates.
- [AuthorizationController](authenticationservices/authorizationcontroller.md): A SwiftUI environment value that views use to perform authorization requests.
- [ASAuthorizationResult](authenticationservices/asauthorizationresult.md): Describes the outcome of a successful authorization request.

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](authenticationservices/implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Simplifying User Authentication in a tvOS App](authenticationservices/simplifying-user-authentication-in-a-tvos-app.md): Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.
- [SignInWithAppleButton](authenticationservices/signinwithapplebutton.md): A SwiftUI view that creates the Sign in with Apple button for display.
- [Sign in with Apple Entitlement](bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDProvider](authenticationservices/asauthorizationappleidprovider.md): A mechanism for generating requests to authenticate users based on their Apple ID.
- [ASAuthorizationAppleIDCredential](authenticationservices/asauthorizationappleidcredential.md): A credential that results from a successful Apple ID authentication.

### Passwords

- [Password AutoFill](security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASAuthorizationPasswordProvider](authenticationservices/asauthorizationpasswordprovider.md): A mechanism for generating requests to perform keychain credential sharing.
- [ASPasswordCredential](authenticationservices/aspasswordcredential.md): A password credential.
- [Password use in web browsers](authenticationservices/password-use-in-web-browsers.md): Register and authenticate website users by using passwords.

### Passkeys

- [Public-Private Key Authentication](authenticationservices/public-private-key-authentication.md): Register and authenticate users with passkeys and security keys, without using passwords.
- [Passkey use in web browsers](authenticationservices/passkey-use-in-web-browsers.md): Register and authenticate website users by using passkeys.
- [Performing fast account creation with passkeys](authenticationservices/performing-fast-account-creation-with-passkeys.md): Allow people to quickly create an account with passkeys and associated domains.
- [Connecting to a service with passkeys](authenticationservices/connecting-to-a-service-with-passkeys.md): Allow users to sign in to a service without typing a password.

### Web authentication sessions

- [Authenticating a User Through a Web Service](authenticationservices/authenticating-a-user-through-a-web-service.md): Use a web authentication session to authenticate a user in your app.
- [Securing Logins with iCloud Keychain Verification Codes](authenticationservices/securing-logins-with-icloud-keychain-verification-codes.md): Use time-based codes generated on-device for a secure authentication experience.
- [ASWebAuthenticationSession](authenticationservices/aswebauthenticationsession.md): A session that an app uses to authenticate a user through a web service.
- [WebAuthenticationSession](authenticationservices/webauthenticationsession.md): A SwiftUI environment value that views use to authenticate someone using a web service.
- [Supporting Single Sign-On in a Web Browser App](authenticationservices/supporting-single-sign-on-in-a-web-browser-app.md): Extend your web browser app to handle web authentication requests from other apps.
- [ASWebAuthenticationSessionWebBrowserSessionManager](authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager.md): A session manager that mediates sharing data between an app and a web browser.
- [ASWebAuthenticationSessionWebBrowserSupportCapabilities](bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md): A collection of keys that a browser app uses to declare its ability to handle authentication requests from other apps.

### AutoFill credentials

- [Providing one-time passcodes to AutoFill](authenticationservices/providing-one-time-passcodes-to-autofill.md): Help people efficiently perform multifactor authentication.
- [AutoFill Credential Provider Entitlement](bundleresources/entitlements/com.apple.developer.authentication-services.autofill-credential-provider.md): A Boolean value that indicates whether the app may, with user permission, provide user names and passwords for AutoFill in Safari and other apps.
- [ASCredentialProviderViewController](authenticationservices/ascredentialproviderviewcontroller.md): A view controller that a credential manager app uses to extend AutoFill.

### Credential migration

- [ASCredentialExportManager](authenticationservices/ascredentialexportmanager.md): A class to manage exporting credentials.
- [ASCredentialImportManager](authenticationservices/ascredentialimportmanager.md): A class to manage importing credentials.

### Single sign-on (SSO)

- [Enterprise single sign-on (SSO)](authenticationservices/enterprise-single-sign-on-sso.md)
- [Platform Single Sign-on (SSO)](authenticationservices/platform-single-sign-on-sso.md): Provide a Platform Single Sign-on (Platform SSO) extension to integrate your identity provider with macOS.

### Apple TV authentication

- [customAuthorizationMethods](authenticationservices/asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
- [authorizationController(\_:didCompleteWithCustomMethod:)](authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationCustomMethod](authenticationservices/asauthorizationcustommethod.md): The custom authorization method.

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](authenticationservices/upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationController](authenticationservices/asaccountauthenticationmodificationcontroller.md): An object that performs a request to modify an account’s authentication properties.
- [ASAccountAuthenticationModificationViewController](authenticationservices/asaccountauthenticationmodificationviewcontroller.md): A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.
- [ASAccountAuthenticationModificationExtensionContext](authenticationservices/asaccountauthenticationmodificationextensioncontext.md): An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.

### Updating credential managers

- [ASCredentialUpdater](authenticationservices/ascredentialupdater.md): Deprecated. A class to pass credential update events to credential managers enabled on the system.

### Reference

- [AuthenticationServices Enumerations](authenticationservices/authenticationservices-enumerations.md)
- [AuthenticationServices Data Types](authenticationservices/authenticationservices-data-types.md)

### Classes

- [ASAuthorizationAccountCreationPlatformPublicKeyCredential](authenticationservices/asauthorizationaccountcreationplatformpublickeycredential.md)
- [ASAuthorizationAccountCreationPlatformPublicKeyCredentialRequest](authenticationservices/asauthorizationaccountcreationplatformpublickeycredentialrequest.md)
- [ASAuthorizationAccountCreationProvider](authenticationservices/asauthorizationaccountcreationprovider.md)
- [ASAuthorizationProviderExtensionUserLoginConfiguration](authenticationservices/asauthorizationproviderextensionuserloginconfiguration.md)
- [ASCredentialDataManager](authenticationservices/ascredentialdatamanager.md): This class allows submitting credentials and events to any credential manager enabled on the system.
- [ASDeliveredVerificationCodesManager](authenticationservices/asdeliveredverificationcodesmanager.md): This class allows interacting with one-time codes delivered to the system.
- [ASGeneratePasswordsRequest](authenticationservices/asgeneratepasswordsrequest.md)
- [ASGeneratedPassword](authenticationservices/asgeneratedpassword.md)
- [ASOneTimeCodeCredentialIdentity](authenticationservices/asonetimecodecredentialidentity.md)
- [ASSavePasswordRequest](authenticationservices/assavepasswordrequest.md)

### Structures

- [ASAuthorizationProviderExtensionEncryptionAlgorithm](authenticationservices/asauthorizationproviderextensionencryptionalgorithm.md)
- [ASAuthorizationProviderExtensionSigningAlgorithm](authenticationservices/asauthorizationproviderextensionsigningalgorithm.md)
- [ASAutoFillURLScope](authenticationservices/asautofillurlscope.md): This structure represents the subset of URL components supported for the AutoFill of credentials.
- [ASEmailIdentifier](authenticationservices/asemailidentifier.md)
- [ASImportableCredentialScope](authenticationservices/asimportablecredentialscope.md): The scope for where a credential should be usable.
- [ASImportableEditableField](authenticationservices/asimportableeditablefield.md): A field that someone can edit within a credential.
- [ASImportableFIDO2Extensions](authenticationservices/asimportablefido2extensions.md): A representation of FIDO2 extensions as defined in CXF.
- [ASImportableFIDO2HMACCredential](authenticationservices/asimportablefido2hmaccredential.md): A representation of FIDO2 HMAC Credentials as defined in CXF.
- [ASImportableFIDO2LargeBlob](authenticationservices/asimportablefido2largeblob.md): A representation of FIDO2 LargeBlob extensions as defined in CXF.
- [ASPhoneNumberIdentifier](authenticationservices/asphonenumberidentifier.md)
- [ASPublicKeyCredentialClientData](authenticationservices/aspublickeycredentialclientdata-swift.struct.md)
- [ASVerificationCode](authenticationservices/asverificationcode.md): This is an instance of a verification code.
- [CredentialDataManager](authenticationservices/credentialdatamanager.md)
- [DeliveredVerificationCodesManager](authenticationservices/deliveredverificationcodesmanager.md)

### Variables

- [ASCredentialExchangeActivity](authenticationservices/ascredentialexchangeactivity.md): The activity type used in user activity objects sent to importing apps.
- [ASCredentialImportToken](authenticationservices/ascredentialimporttoken.md): The key for the token in the user info dictionary of the user activity sent to importing apps.

### Enumerations

- [ASContactIdentifier](authenticationservices/ascontactidentifier.md)
- [ASContactIdentifierRequest](authenticationservices/ascontactidentifierrequest.md)
- [ASImportableExtension](authenticationservices/asimportableextension.md): A representation of CXF extensions.

# Authentication Services (Objective-C)

**Framework:** Authentication Services  
**Kind:** Framework  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Make it easy for users to log into apps and services.

<a id="overview"></a>

## Overview

Use the Authentication Services framework to improve the experience of users when they enter credentials to establish their identity.

- Give users the ability to sign into your services with their Apple ID.
- Enable users to look up their stored passwords from within the sign-in flow of an app.
- Provide a passwordless registration and authentication workflow for apps and websites using iCloud Keychain or a physical security key.
- Perform automatic security upgrades from weak to strong passwords, or upgrade to using Sign in with Apple.
- Share data between an app and a web browser using technologies like OAuth to leverage existing web-based logins in the app.
- Create a single sign-on (SSO) experience in an enterprise app.

Simple and straightforward sign-up and sign-in flows reduce the burden on the user to remember passwords, which may improve security.

## Topics

### Authorization requests

- [ASAuthorizationController](authenticationservices/asauthorizationcontroller.md): A controller that manages authorization requests that a provider creates.

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](authenticationservices/implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Simplifying User Authentication in a tvOS App](authenticationservices/simplifying-user-authentication-in-a-tvos-app.md): Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.
- [Sign in with Apple Entitlement](bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDProvider](authenticationservices/asauthorizationappleidprovider.md): A mechanism for generating requests to authenticate users based on their Apple ID.
- [ASAuthorizationAppleIDCredential](authenticationservices/asauthorizationappleidcredential.md): A credential that results from a successful Apple ID authentication.

### Passwords

- [Password AutoFill](security/password-autofill.md): Streamline your app’s login and onboarding procedures.
- [ASAuthorizationPasswordProvider](authenticationservices/asauthorizationpasswordprovider.md): A mechanism for generating requests to perform keychain credential sharing.
- [ASPasswordCredential](authenticationservices/aspasswordcredential.md): A password credential.
- [Password use in web browsers](authenticationservices/password-use-in-web-browsers.md): Register and authenticate website users by using passwords.

### Passkeys

- [Public-Private Key Authentication](authenticationservices/public-private-key-authentication.md): Register and authenticate users with passkeys and security keys, without using passwords.
- [Passkey use in web browsers](authenticationservices/passkey-use-in-web-browsers.md): Register and authenticate website users by using passkeys.

### Web authentication sessions

- [Authenticating a User Through a Web Service](authenticationservices/authenticating-a-user-through-a-web-service.md): Use a web authentication session to authenticate a user in your app.
- [Securing Logins with iCloud Keychain Verification Codes](authenticationservices/securing-logins-with-icloud-keychain-verification-codes.md): Use time-based codes generated on-device for a secure authentication experience.
- [ASWebAuthenticationSession](authenticationservices/aswebauthenticationsession.md): A session that an app uses to authenticate a user through a web service.
- [Supporting Single Sign-On in a Web Browser App](authenticationservices/supporting-single-sign-on-in-a-web-browser-app.md): Extend your web browser app to handle web authentication requests from other apps.
- [ASWebAuthenticationSessionWebBrowserSessionManager](authenticationservices/aswebauthenticationsessionwebbrowsersessionmanager.md): A session manager that mediates sharing data between an app and a web browser.
- [ASWebAuthenticationSessionWebBrowserSupportCapabilities](bundleresources/information-property-list/aswebauthenticationsessionwebbrowsersupportcapabilities.md): A collection of keys that a browser app uses to declare its ability to handle authentication requests from other apps.

### AutoFill credentials

- [Providing one-time passcodes to AutoFill](authenticationservices/providing-one-time-passcodes-to-autofill.md): Help people efficiently perform multifactor authentication.
- [AutoFill Credential Provider Entitlement](bundleresources/entitlements/com.apple.developer.authentication-services.autofill-credential-provider.md): A Boolean value that indicates whether the app may, with user permission, provide user names and passwords for AutoFill in Safari and other apps.
- [ASCredentialProviderViewController](authenticationservices/ascredentialproviderviewcontroller.md): A view controller that a credential manager app uses to extend AutoFill.

### Single sign-on (SSO)

- [Enterprise single sign-on (SSO)](authenticationservices/enterprise-single-sign-on-sso.md)
- [Platform Single Sign-on (SSO)](authenticationservices/platform-single-sign-on-sso.md): Provide a Platform Single Sign-on (Platform SSO) extension to integrate your identity provider with macOS.

### Apple TV authentication

- [customAuthorizationMethods](authenticationservices/asauthorizationcontroller/customauthorizationmethods.md): An array of custom authorization methods for the user to choose.
- [authorizationController:didCompleteWithCustomMethod:](authenticationservices/asauthorizationcontrollerdelegate/authorizationcontroller%28__didcompletewithcustommethod_%29.md): Informs the delegate when authorization completes, and specifies the custom method the user selected.
- [ASAuthorizationCustomMethod](authenticationservices/asauthorizationcustommethod.md): The custom authorization method.

### Automatic security upgrades

- [Upgrading Account Security With an Account Authentication Modification Extension](authenticationservices/upgrading-account-security-with-an-account-authentication-modification-extension.md): Automatically and transparently convert accounts to Sign in with Apple or to use strong passwords for improved security.
- [ASAccountAuthenticationModificationController](authenticationservices/asaccountauthenticationmodificationcontroller.md): An object that performs a request to modify an account’s authentication properties.
- [ASAccountAuthenticationModificationViewController](authenticationservices/asaccountauthenticationmodificationviewcontroller.md): A view controller that can upgrade user passwords to strong passwords, or convert accounts to use Sign in with Apple.
- [ASAccountAuthenticationModificationExtensionContext](authenticationservices/asaccountauthenticationmodificationextensioncontext.md): An object that you interact with to change an account’s password or to upgrade to Sign in with Apple.

### Reference

- [AuthenticationServices Enumerations](authenticationservices/authenticationservices-enumerations.md)
- [AuthenticationServices Data Types](authenticationservices/authenticationservices-data-types.md)

### Classes

- [ASAuthorizationProviderExtensionUserLoginConfiguration](authenticationservices/asauthorizationproviderextensionuserloginconfiguration.md)
- [ASAuthorizationPublicKeyCredentialLargeBlobRegistrationInput](authenticationservices/asauthorizationpublickeycredentiallargeblobregistrationinput-c.class.md)
- [ASAuthorizationPublicKeyCredentialPRFAssertionInputValues](authenticationservices/asauthorizationpublickeycredentialprfassertioninputvalues.md): The values to use as inputs to the salts for deriving the symmetric key.
- [ASAuthorizationPublicKeyCredentialPRFAssertionOutput](authenticationservices/asauthorizationpublickeycredentialprfassertionoutput-c.class.md): A type to represent outputs of the web authentication PRF extension, when requesting them during an assertion.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationInput](authenticationservices/asauthorizationpublickeycredentialprfregistrationinput-c.class.md): A type that encapsulates input for PRF extensions during registration.
- [ASAuthorizationPublicKeyCredentialPRFRegistrationOutput](authenticationservices/asauthorizationpublickeycredentialprfregistrationoutput-c.class.md): A type to represent outputs of the web authentication PRF extension, when requesting them during a registration.
- [ASGeneratePasswordsRequest](authenticationservices/asgeneratepasswordsrequest.md)
- [ASGeneratedPassword](authenticationservices/asgeneratedpassword.md)
- [ASOneTimeCodeCredentialIdentity](authenticationservices/asonetimecodecredentialidentity.md)
- [ASPublicKeyCredentialClientData](authenticationservices/aspublickeycredentialclientdata-c.class.md): This object represents the client data for a public key credential request, as defined in the WebAuthentication standard.
- [ASSavePasswordRequest](authenticationservices/assavepasswordrequest.md)

### Variables

- [ASAuthorizationProviderExtensionEncryptionAlgorithmECDHE_A256GCM](authenticationservices/asauthorizationproviderextensionencryptionalgorithm/ecdhe_a256gcm.md): A encryption algorithm that uses NIST P-256 elliptic curve key agreement, ConcatKDF key derivation with a 256-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
- [ASAuthorizationProviderExtensionEncryptionAlgorithmHPKE_Curve25519_SHA256_ChachaPoly](authenticationservices/asauthorizationproviderextensionencryptionalgorithm/hpke_curve25519_sha256_chachapoly.md): A cipher suite for HPKE that uses X25519 elliptic curve key agreement, SHA-2 key derivation with a 256-bit digest, and the ChaCha20 stream cipher with the Poly1305 message authentication code.
- [ASAuthorizationProviderExtensionEncryptionAlgorithmHPKE_P256_SHA256_AES_GCM_256](authenticationservices/asauthorizationproviderextensionencryptionalgorithm/hpke_p256_sha256_aes_gcm_256.md): A cipher suite for HPKE that uses NIST P-256 elliptic curve key agreement, SHA-2 key derivation with a 256-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
- [ASAuthorizationProviderExtensionEncryptionAlgorithmHPKE_P384_SHA384_AES_GCM_256](authenticationservices/asauthorizationproviderextensionencryptionalgorithm/hpke_p384_sha384_aes_gcm_256.md): A cipher suite that you use for HPKE using NIST P-384 elliptic curve key agreement, SHA-2 key derivation with a 384-bit digest, and the Advanced Encryption Standard cipher in Galois/Counter Mode with a key length of 256 bits.
- [ASAuthorizationProviderExtensionSigningAlgorithmEd25519](authenticationservices/asauthorizationproviderextensionsigningalgorithm/ed25519.md)
- [ASAuthorizationProviderExtensionSigningAlgorithmES256](authenticationservices/asauthorizationproviderextensionsigningalgorithm/es256.md)
- [ASAuthorizationProviderExtensionSigningAlgorithmES384](authenticationservices/asauthorizationproviderextensionsigningalgorithm/es384.md)
- [ASGeneratedPasswordKindAlphanumeric](authenticationservices/asgeneratedpassword/kind-swift.struct/alphanumeric.md): A password that only contains alphanumeric characters.
- [ASGeneratedPasswordKindPassphrase](authenticationservices/asgeneratedpassword/kind-swift.struct/passphrase.md): A password that contains multiple words or phrases.
- [ASGeneratedPasswordKindStrong](authenticationservices/asgeneratedpassword/kind-swift.struct/strong.md): A password that contains alphanumeric characters and special characters.

### Macros

- [AS_API_AVAILABLE](authenticationservices/as_api_available.md)
- [AS_EXTERN](authenticationservices/as_extern.md)
- [AS_HEADER_AUDIT_BEGIN](authenticationservices/as_header_audit_begin.md)
- [AS_HEADER_AUDIT_END](authenticationservices/as_header_audit_end.md)
- [AS_SWIFT_SENDABLE](authenticationservices/as_swift_sendable.md)

### Type Aliases

- [ASAuthorizationProviderExtensionEncryptionAlgorithm](authenticationservices/asauthorizationproviderextensionencryptionalgorithm.md)
- [ASAuthorizationProviderExtensionSigningAlgorithm](authenticationservices/asauthorizationproviderextensionsigningalgorithm.md)
- [ASGeneratedPasswordKind](authenticationservices/asgeneratedpassword/kind-swift.struct.md)

### Enumerations

- [ASAuthorizationPlatformPublicKeyCredentialRegistrationRequestStyle](authenticationservices/asauthorizationplatformpublickeycredentialregistrationrequest/requeststyle-swift.enum.md)
- [ASSavePasswordRequestEvent](authenticationservices/assavepasswordrequest/event-swift.enum.md)
