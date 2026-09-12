> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/disabling-and-enabling-system-integrity-protection](https://developer.apple.com/documentation/security/disabling-and-enabling-system-integrity-protection)

# Disabling and Enabling System Integrity Protection

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** Article

Disable system protections only temporarily during development to test drivers, kernel extensions, and other low-level code.

<a id="overview"></a>

## Overview

System Integrity Protection (SIP) in macOS protects the entire system by preventing the execution of unauthorized code. The system automatically authorizes apps that the user downloads from the App Store. The system also authorizes apps that a developer notarizes and distributes directly to users. The system prevents the launching of all other apps by default.

During development, it may be necessary for you to disable SIP temporarily to install and test your code. You don’t need to disable SIP to run and debug apps from Xcode, but you might need to disable it to install system extensions, such as DriverKit drivers.

<a id="Disable-System-Integrity-Protection-Temporarily"></a>

### Disable System Integrity Protection Temporarily

To disable SIP, do the following:

1. Restart your computer in [Recovery mode](https://support.apple.com/en-us/HT201314).
2. Launch Terminal from the Utilities menu.
3. Run the command `csrutil disable`.
4. Restart your computer.

> **Warning**

>  Disable SIP only temporarily to perform necessary tasks, and reenable it as soon as possible. Failure to reenable SIP when you are done testing leaves your computer vulnerable to malicious code.

<a id="Enable-System-Integrity-Protection"></a>

### Enable System Integrity Protection

To reenable SIP, do the following:

1. Restart your computer in [Recovery mode](https://support.apple.com/en-us/HT201314).
2. Launch Terminal from the Utilities menu.
3. Run the command `csrutil enable`.
4. Restart your computer.
