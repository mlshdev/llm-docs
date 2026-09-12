> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/simplifying-user-authentication-in-a-tvos-app](https://developer.apple.com/documentation/authenticationservices/simplifying-user-authentication-in-a-tvos-app)

# Simplifying User Authentication in a tvOS App (Swift)

**Framework:** Authentication Services  
**Kind:** Sample Code  
**Availability:** tvOS 15.0+ · Xcode 13.0+

Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC21 session [10279: Simplify sign in for your tvOS apps](https://developer.apple.com/wwdc21/10279/).

<a id="Configure-the-Sample-Code-Project"></a>

### Configure the Sample Code Project

To configure the sample code project, perform the following steps in Xcode:

1. Add your Apple ID account and assign the target to a team so Xcode can enable the `Associated Domains` capability with your provisioning profile.
2. Configure your [web credentials domain](https://developer.apple.com/documentation/xcode/supporting-associated-domains) in the `Associated Domains` capability and your website’s associated domains file.
3. Set up an Apple TV running tvOS 15 and an iPhone or iPad running iOS 15 or iPadOS 15.
4. Add the same Apple ID to both devices. Alternatively, you may [pair](https://support.apple.com/en-us/HT208088) the iPhone or iPad with the Apple TV.
5. Set the Apple TV as the run destination in the scheme pop-up menu.
6. In the toolbar, click Run, or choose Product \> Run.

## See Also

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [SignInWithAppleButton](signinwithapplebutton.md): A SwiftUI view that creates the Sign in with Apple button for display.
- [Sign in with Apple Entitlement](../bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md): A mechanism for generating requests to authenticate users based on their Apple ID.
- [ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md): A credential that results from a successful Apple ID authentication.

# Simplifying User Authentication in a tvOS App (Objective-C)

**Framework:** Authentication Services  
**Kind:** Sample Code  
**Availability:** tvOS 15.0+ · Xcode 13.0+

Build a fluid sign-in experience for your tvOS apps using AuthenticationServices.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC21 session [10279: Simplify sign in for your tvOS apps](https://developer.apple.com/wwdc21/10279/).

<a id="Configure-the-Sample-Code-Project"></a>

### Configure the Sample Code Project

To configure the sample code project, perform the following steps in Xcode:

1. Add your Apple ID account and assign the target to a team so Xcode can enable the `Associated Domains` capability with your provisioning profile.
2. Configure your [web credentials domain](https://developer.apple.com/documentation/xcode/supporting-associated-domains) in the `Associated Domains` capability and your website’s associated domains file.
3. Set up an Apple TV running tvOS 15 and an iPhone or iPad running iOS 15 or iPadOS 15.
4. Add the same Apple ID to both devices. Alternatively, you may [pair](https://support.apple.com/en-us/HT208088) the iPhone or iPad with the Apple TV.
5. Set the Apple TV as the run destination in the scheme pop-up menu.
6. In the toolbar, click Run, or choose Product \> Run.

## See Also

### Sign In with Apple

- [Implementing User Authentication with Sign in with Apple](implementing-user-authentication-with-sign-in-with-apple.md): Provide a way for users of your app to set up an account and start using your services.
- [Sign in with Apple Entitlement](../bundleresources/entitlements/com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
- [ASAuthorizationAppleIDProvider](asauthorizationappleidprovider.md): A mechanism for generating requests to authenticate users based on their Apple ID.
- [ASAuthorizationAppleIDCredential](asauthorizationappleidcredential.md): A credential that results from a successful Apple ID authentication.
