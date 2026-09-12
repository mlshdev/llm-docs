> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/storing-a-der-encoded-x-509-certificate](https://developer.apple.com/documentation/security/storing-a-der-encoded-x-509-certificate)

# Storing a DER-Encoded X.509 Certificate (Swift)

**Framework:** Security  
**Kind:** Article

Import and export a certificate from a file.

<a id="overview"></a>

## Overview

Certificates are not secret and you often want to share them to disseminate a public key, but [SecCertificate](seccertificate.md) is an opaque type that you can’t distribute directly. Instead, you create a Distinguished Encoding Rules (DER) encoded data representation of the certificate using the [SecCertificateCopyData(\_:)](seccertificatecopydata%28__%29.md) function:

**Swift**

```swift
let certificate = <# a certificate #>
let certData = SecCertificateCopyData(certificate) as Data
```

**Objective-C**

```objc
SecCertificateRef certificate = <# a certificate #>;
NSData* certData = (NSData*)CFBridgingRelease( // ARC takes ownership
                       SecCertificateCopyData(certificate)
                    );
```

You might send this data object over a network connection or store it in a `.cer` file:

**Swift**

```swift
certData.write(to: <# a URL #>)
```

**Objective-C**

```objc
[certData writeToURL:<# a URL #> atomically:YES];
```

When you receive such a data object, you use the [SecCertificateCreateWithData(\_:\_:)](seccertificatecreatewithdata%28____%29.md) function to reverse the process:

**Swift**

```swift
let certificate = SecCertificateCreateWithData(nil, certData as CFData)
```

**Objective-C**

```objc
SecCertificateRef certificate =
    SecCertificateCreateWithData(NULL, (__bridge CFDataRef)certData);
		 
if (certificate)  { CFRelease(certificate); } // After you are done with it
```

By leaving the first argument empty, you rely on the default allocator to allocate memory for the certificate. Note that in Objective-C, you call [CFRelease](../corefoundation/cfrelease.md) to free the certificate’s memory when you are done with it. In Swift, the system manages the object’s memory automatically.

# Storing a DER-Encoded X.509 Certificate (Objective-C)

**Framework:** Security  
**Kind:** Article

Import and export a certificate from a file.

<a id="overview"></a>

## Overview

Certificates are not secret and you often want to share them to disseminate a public key, but [SecCertificateRef](seccertificate.md) is an opaque type that you can’t distribute directly. Instead, you create a Distinguished Encoding Rules (DER) encoded data representation of the certificate using the [SecCertificateCopyData](seccertificatecopydata%28__%29.md) function:

**Swift**

```swift
let certificate = <# a certificate #>
let certData = SecCertificateCopyData(certificate) as Data
```

**Objective-C**

```objc
SecCertificateRef certificate = <# a certificate #>;
NSData* certData = (NSData*)CFBridgingRelease( // ARC takes ownership
                       SecCertificateCopyData(certificate)
                    );
```

You might send this data object over a network connection or store it in a `.cer` file:

**Swift**

```swift
certData.write(to: <# a URL #>)
```

**Objective-C**

```objc
[certData writeToURL:<# a URL #> atomically:YES];
```

When you receive such a data object, you use the [SecCertificateCreateWithData](seccertificatecreatewithdata%28____%29.md) function to reverse the process:

**Swift**

```swift
let certificate = SecCertificateCreateWithData(nil, certData as CFData)
```

**Objective-C**

```objc
SecCertificateRef certificate =
    SecCertificateCreateWithData(NULL, (__bridge CFDataRef)certData);
		 
if (certificate)  { CFRelease(certificate); } // After you are done with it
```

By leaving the first argument empty, you rely on the default allocator to allocate memory for the certificate. Note that in Objective-C, you call [CFRelease](../corefoundation/cfrelease.md) to free the certificate’s memory when you are done with it. In Swift, the system manages the object’s memory automatically.
