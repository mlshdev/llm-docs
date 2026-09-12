> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/parsing-an-identity](https://developer.apple.com/documentation/security/parsing-an-identity)

# Parsing an Identity (Swift)

**Framework:** Security  
**Kind:** Article

Extract the private key and certificate from an identity.

<a id="overview"></a>

## Overview

After you have an identity, you can extract the private key from it with a call to the [SecIdentityCopyPrivateKey(\_:\_:)](secidentitycopyprivatekey%28____%29.md) function:

**Swift**

```swift
var privateKey: SecKey?
let status = SecIdentityCopyPrivateKey(identity, &privateKey)
guard status == errSecSuccess else { throw <# an error #> }
```

**Objective-C**

```objc
SecKeyRef privateKey = NULL;
OSStatus status = SecIdentityCopyPrivateKey(identity,
                                            &privateKey);
if (status != errSecSuccess) { <# Handle error #> }
else                         { <# Use private key #> }
 
if (privateKey)  { CFRelease(privateKey); } // After you are done with it
```

Similarly, you can extract the certificate with a call to the [SecIdentityCopyCertificate(\_:\_:)](secidentitycopycertificate%28____%29.md) function:

**Swift**

```swift
var certificate: SecCertificate?
let status = SecIdentityCopyCertificate(identity, &certificate)
guard status == errSecSuccess else { throw <# an error #> }
```

**Objective-C**

```objc
SecCertificateRef certificate = NULL;
OSStatus status = SecIdentityCopyCertificate(identity,
                                             &certificate);
if (status != errSecSuccess) { <# Handle error #> }
else                         { <# Use certificate #> }
 
if (certificate) { CFRelease(certificate); }  // After you are done with it
```

In both cases, you inspect the returned status value to determine whether an error occurred during the extraction. In Objective-C, you are responsible for freeing the associated memory with a call to [CFRelease](../corefoundation/cfrelease.md) when you’re done with these objects. In Swift, the system manages the memory automatically, releasing it when the object goes out of scope.

# Parsing an Identity (Objective-C)

**Framework:** Security  
**Kind:** Article

Extract the private key and certificate from an identity.

<a id="overview"></a>

## Overview

After you have an identity, you can extract the private key from it with a call to the [SecIdentityCopyPrivateKey](secidentitycopyprivatekey%28____%29.md) function:

**Swift**

```swift
var privateKey: SecKey?
let status = SecIdentityCopyPrivateKey(identity, &privateKey)
guard status == errSecSuccess else { throw <# an error #> }
```

**Objective-C**

```objc
SecKeyRef privateKey = NULL;
OSStatus status = SecIdentityCopyPrivateKey(identity,
                                            &privateKey);
if (status != errSecSuccess) { <# Handle error #> }
else                         { <# Use private key #> }
 
if (privateKey)  { CFRelease(privateKey); } // After you are done with it
```

Similarly, you can extract the certificate with a call to the [SecIdentityCopyCertificate](secidentitycopycertificate%28____%29.md) function:

**Swift**

```swift
var certificate: SecCertificate?
let status = SecIdentityCopyCertificate(identity, &certificate)
guard status == errSecSuccess else { throw <# an error #> }
```

**Objective-C**

```objc
SecCertificateRef certificate = NULL;
OSStatus status = SecIdentityCopyCertificate(identity,
                                             &certificate);
if (status != errSecSuccess) { <# Handle error #> }
else                         { <# Use certificate #> }
 
if (certificate) { CFRelease(certificate); }  // After you are done with it
```

In both cases, you inspect the returned status value to determine whether an error occurred during the extraction. In Objective-C, you are responsible for freeing the associated memory with a call to [CFRelease](../corefoundation/cfrelease.md) when you’re done with these objects. In Swift, the system manages the memory automatically, releasing it when the object goes out of scope.
