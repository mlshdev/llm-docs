> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/asn-1](https://developer.apple.com/documentation/security/asn-1)

# ASN.1 (Swift)

**Framework:** Security  
**Kind:** API Collection

Encode and decode Distinguished Encoding Rules (DER) and Basic Encoding Rules (BER) data streams.

<a id="Overview"></a>

## Overview

You use an ASN.1 coder to encode and decode both DER and BER data streams based on templates that you supply, which in turn are based upon ASN.1 specifications. You must import this API explicitly:

**Swift**

```swift
import Security.SecAsn1Coder
import Security.SecAsn1Templates
```

**Objective-C**

```objc
#import <Security/SecAsn1Coder.h>
#import <Security/SecAsn1Templates.h>
```

## Topics

### Encoding

- [SecAsn1Item](secasn1item.md): Deprecated. A structure holding DER encoded data.
- [SecAsn1Template_struct](secasn1template_struct.md): Deprecated. A structure that defines one element of a BER or DER encoding.
- [SecAsn1Template_struct](secasn1template_struct.md): Deprecated. A structure that defines one element of a BER or DER encoding.
- [SecAsn1TemplateChooser](secasn1templatechooser.md): Deprecated. Dynamically provides the sub-template to use during encode or decode.
- [SecAsn1TemplateChooserPtr](secasn1templatechooserptr.md): Deprecated. A pointer to the template chooser function.
- [Type Tags](type-tags.md): Recognize BER and DER values for ASN.1 identifier octets.

### OID Comparison

- [SecAsn1Oid](secasn1oid.md): Deprecated. An object identifier.

### Public Key Info

- [SecAsn1AlgId](secasn1algid.md): Deprecated. A structure identifying an ASN.1 algorithm by its OID, and its corresponding parameters.
- [SecAsn1PubKeyInfo](secasn1pubkeyinfo.md): Deprecated. A structure containing a public key and its associated algorithm.

# ASN.1 (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Encode and decode Distinguished Encoding Rules (DER) and Basic Encoding Rules (BER) data streams.

<a id="Overview"></a>

## Overview

You use an ASN.1 coder to encode and decode both DER and BER data streams based on templates that you supply, which in turn are based upon ASN.1 specifications. You must import this API explicitly:

**Swift**

```swift
import Security.SecAsn1Coder
import Security.SecAsn1Templates
```

**Objective-C**

```objc
#import <Security/SecAsn1Coder.h>
#import <Security/SecAsn1Templates.h>
```

## Topics

### Coder Creation

- [SecAsn1CoderCreate](secasn1codercreate.md): Deprecated. Creates an ASN.1 coder object.
- [SecAsn1CoderRelease](secasn1coderrelease.md): Deprecated. Destroys an ASN.1 coder object and releases all of its memory.
- [SecAsn1CoderRef](secasn1coderref.md): Deprecated. An object that represents an ASN.1 coder.

### Encoding

- [SecAsn1EncodeItem](secasn1encodeitem.md): Deprecated. Encodes data in DER format.
- [SecAsn1Item](secasn1item.md): Deprecated. A structure holding DER encoded data.
- [SecAsn1Template_struct](secasn1template_struct.md): Deprecated. A structure that defines one element of a BER or DER encoding.
- [SecAsn1Template_struct](secasn1template_struct.md): Deprecated. A structure that defines one element of a BER or DER encoding.
- [SecAsn1TemplateChooser](secasn1templatechooser.md): Deprecated. Dynamically provides the sub-template to use during encode or decode.
- [SecAsn1TemplateChooserPtr](secasn1templatechooserptr.md): Deprecated. A pointer to the template chooser function.
- [Generic Templates](generic-templates.md): Use templates for each of the simple types.
- [Type Tags](type-tags.md): Recognize BER and DER values for ASN.1 identifier octets.

### Decoding

- [SecAsn1Decode](secasn1decode.md): Deprecated. Decodes untyped DER data.
- [SecAsn1DecodeData](secasn1decodedata.md): Deprecated. Decodes an ASN.1 item in DER format.

### Memory Management

You don’t explicitly free any of the memory allocated in a coder object’s memory pool using these functions. Instead, that memory is automatically freed when you destroy the coder with a call to the [SecAsn1CoderRelease](secasn1coderrelease.md) function.

- [SecAsn1Malloc](secasn1malloc.md): Deprecated. Allocates memory in the coder object’s memory pool.
- [SecAsn1AllocItem](secasn1allocitem.md): Deprecated. Allocates memory for an item’s data field in the coder object’s memory pool.
- [SecAsn1AllocCopy](secasn1alloccopy.md): Deprecated. Allocates memory for an item’s data field in the coder object’s memory pool and copies in a block of data.
- [SecAsn1AllocCopyItem](secasn1alloccopyitem.md): Deprecated. Allocates memory for an item’s data field in the coder object’s memory pool and copies in a block of data from another item.

### OID Comparison

- [SecAsn1OidCompare](secasn1oidcompare.md): Deprecated. Compares two decoded object identifiers.
- [SecAsn1Oid](secasn1oid.md): Deprecated. An object identifier.

### Public Key Info

- [SecAsn1AlgId](secasn1algid.md): Deprecated. A structure identifying an ASN.1 algorithm by its OID, and its corresponding parameters.
- [SecAsn1PubKeyInfo](secasn1pubkeyinfo.md): Deprecated. A structure containing a public key and its associated algorithm.
