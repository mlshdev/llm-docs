> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/keys](https://developer.apple.com/documentation/security/keys)

# Keys (Swift)

**Framework:** Security  
**Kind:** API Collection

Generate, store, and use cryptographic keys.

<a id="overview"></a>

## Overview

Cryptographic keys are strings of bytes that you combine with other data in specialized mathematical operations to enhance security. At the lowest level, this usually means participating in either encryption and decryption or digital signing and verification. You can use these basic operations directly, such as when you encrypt data before sending it through an insecure channel. You also use them implicitly, such as when you verify the digital signature on a certificate as a byproduct of a trust evaluation.

Keys vary based on the operations they support. For example, you use public and private key pairs to perform asymmetric encryption, whereas you use symmetric keys to conduct symmetric encryption. Similarly, one key might work for a 1024-bit RSA algorithm, while another might be suitable for a 256-bit elliptic curve algorithm. Use the functions in this section when you need to handle cryptographic keys.

## Topics

### Essentials

- [Getting an Existing Key](getting-an-existing-key.md): Learn how to obtain an existing cryptographic key.
- [Storing Keys in the Keychain](storing-keys-in-the-keychain.md): Store and access cryptographic keys in the keychain.
- [SecKey](seckey.md): An object that represents a cryptographic key.
- [SecKeyGetTypeID()](seckeygettypeid%28%29.md): Returns the unique identifier of the opaque type to which a key object belongs.

### Key Generation

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md): Create both asymmetric and symmetric cryptographic keys.
- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md): Create an extra layer of security for your private keys.
- [SecKeyCreateRandomKey(\_:\_:)](seckeycreaterandomkey%28____%29.md): Generates a new public-private key pair.
- [SecKeyCopyPublicKey(\_:)](seckeycopypublickey%28__%29.md): Gets the public key associated with the given private key.
- [Key Generation Attributes](key-generation-attributes.md): Use attribute dictionary keys during cryptographic key generation.

### Examining Keys

- [SecKeyIsAlgorithmSupported(\_:\_:\_:)](seckeyisalgorithmsupported%28______%29.md): Returns a Boolean indicating whether a key is suitable for an operation using a certain algorithm.
- [SecKeyGetBlockSize(\_:)](seckeygetblocksize%28__%29.md): Gets the block length associated with a cryptographic key.
- [SecKeyCopyAttributes(\_:)](seckeycopyattributes%28__%29.md): Gets the attributes of a given key.
- [SecKeyAlgorithm](seckeyalgorithm.md): The algorithms that cryptographic keys enable.
- [SecKeyOperationType](seckeyoperationtype.md): The types of operations that you can use a cryptographic key to perform.

### Import and Export

- [Storing Keys as Data](storing-keys-as-data.md): Create an external representation of a key for transmission.
- [SecKeyCopyExternalRepresentation(\_:\_:)](seckeycopyexternalrepresentation%28____%29.md): Returns an external representation of the given key suitable for the key’s type.
- [SecKeyCreateWithData(\_:\_:\_:)](seckeycreatewithdata%28______%29.md): Restores a key from an external representation of that key.

### Key Exchange

- [SecKeyCopyKeyExchangeResult(\_:\_:\_:\_:\_:)](seckeycopykeyexchangeresult%28__________%29.md): Performs the Diffie-Hellman style of key exchange with optional key-derivation steps.
- [SecKeyKeyExchangeParameter](seckeykeyexchangeparameter.md): The dictionary keys used to specify Diffie-Hellman key exchange parameters.

### Encryption

- [Using Keys for Encryption](using-keys-for-encryption.md): Perform asymmetric and symmetric encryption and decryption using cryptographic keys.
- [SecKeyCreateEncryptedData(\_:\_:\_:\_:)](seckeycreateencrypteddata%28________%29.md): Encrypts a block of data using a public key and specified algorithm.
- [SecKeyCreateDecryptedData(\_:\_:\_:\_:)](seckeycreatedecrypteddata%28________%29.md): Decrypts a block of data using a private key and specified algorithm.

### Digital Signatures

- [Signing and Verifying](signing-and-verifying.md): Create and evaluate digital signatures to establish the validity of code or data.
- [SecKeyCreateSignature(\_:\_:\_:\_:)](seckeycreatesignature%28________%29.md): Creates the cryptographic signature for a block of data using a private key and specified algorithm.
- [SecKeyVerifySignature(\_:\_:\_:\_:\_:)](seckeyverifysignature%28__________%29.md): Verifies the cryptographic signature of a block of data using a public key and specified algorithm.

### Legacy iOS Key Operations

- [SecKeyGeneratePair(\_:\_:\_:)](seckeygeneratepair%28______%29.md): Deprecated. Creates an asymmetric key pair.
- [SecKeyEncrypt(\_:\_:\_:\_:\_:\_:)](seckeyencrypt%28____________%29.md): Deprecated. Encrypts a block of plaintext.
- [SecKeyDecrypt(\_:\_:\_:\_:\_:\_:)](seckeydecrypt%28____________%29.md): Deprecated. Decrypts a block of ciphertext.
- [SecKeyRawSign(\_:\_:\_:\_:\_:\_:)](seckeyrawsign%28____________%29.md): Deprecated. Generates a digital signature for a block of data.
- [SecKeyRawVerify(\_:\_:\_:\_:\_:\_:)](seckeyrawverify%28____________%29.md): Deprecated. Verifies a digital signature.
- [SecPadding](secpadding.md): Deprecated. The types of padding to use when you create or verify a digital signature.

### Legacy macOS Key Operations

- [SecKeyGeneratePairAsync(\_:\_:\_:)](seckeygeneratepairasync%28______%29.md): Deprecated. Generates a public/private key pair.
- [SecKeyGenerateSymmetric(\_:\_:)](seckeygeneratesymmetric%28____%29.md): Deprecated. Generates a random symmetric key.
- [SecKeyCreateFromData(\_:\_:\_:)](seckeycreatefromdata%28______%29.md): Deprecated. Constructs a SecKeyRef object for a symmetric key.
- [SecKeyDeriveFromPassword(\_:\_:\_:)](seckeyderivefrompassword%28______%29.md): Deprecated. Returns a key object in which the key data is derived from a password.
- [SecKeyWrapSymmetric(\_:\_:\_:\_:)](seckeywrapsymmetric%28________%29.md): Deprecated. Wraps a symmetric key with another key.
- [SecKeyUnwrapSymmetric(\_:\_:\_:\_:)](seckeyunwrapsymmetric%28________%29.md): Deprecated. Unwraps a wrapped symmetric key.
- [SecKeySizes](seckeysizes.md): Deprecated. The supported sizes for keys of various common types.
- [SecKeyUsage](seckeyusage.md): The flags that indicate key usage in the `KeyUsage` extension of a certificate.
- [SecPublicKeyHash](secpublickeyhash.md): A container for a 20-byte public key hash.
- [SecKeyGeneratePairBlock](seckeygeneratepairblock.md): A block called with the results of a call to [SecKeyGeneratePairAsync(\_:\_:\_:)](seckeygeneratepairasync%28______%29.md).
- [SecCredentialType](seccredentialtype.md): Deprecated. The credential type to be returned by [SecKeyGetCredentials](seckeygetcredentials.md).

# Keys (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Generate, store, and use cryptographic keys.

<a id="overview"></a>

## Overview

Cryptographic keys are strings of bytes that you combine with other data in specialized mathematical operations to enhance security. At the lowest level, this usually means participating in either encryption and decryption or digital signing and verification. You can use these basic operations directly, such as when you encrypt data before sending it through an insecure channel. You also use them implicitly, such as when you verify the digital signature on a certificate as a byproduct of a trust evaluation.

Keys vary based on the operations they support. For example, you use public and private key pairs to perform asymmetric encryption, whereas you use symmetric keys to conduct symmetric encryption. Similarly, one key might work for a 1024-bit RSA algorithm, while another might be suitable for a 256-bit elliptic curve algorithm. Use the functions in this section when you need to handle cryptographic keys.

## Topics

### Essentials

- [Getting an Existing Key](getting-an-existing-key.md): Learn how to obtain an existing cryptographic key.
- [Storing Keys in the Keychain](storing-keys-in-the-keychain.md): Store and access cryptographic keys in the keychain.
- [SecKeyRef](seckey.md): An object that represents a cryptographic key.
- [SecKeyGetTypeID](seckeygettypeid%28%29.md): Returns the unique identifier of the opaque type to which a key object belongs.

### Key Generation

- [Generating New Cryptographic Keys](generating-new-cryptographic-keys.md): Create both asymmetric and symmetric cryptographic keys.
- [Protecting keys with the Secure Enclave](protecting-keys-with-the-secure-enclave.md): Create an extra layer of security for your private keys.
- [SecKeyCreateRandomKey](seckeycreaterandomkey%28____%29.md): Generates a new public-private key pair.
- [SecKeyCopyPublicKey](seckeycopypublickey%28__%29.md): Gets the public key associated with the given private key.
- [Key Generation Attributes](key-generation-attributes.md): Use attribute dictionary keys during cryptographic key generation.

### Examining Keys

- [SecKeyIsAlgorithmSupported](seckeyisalgorithmsupported%28______%29.md): Returns a Boolean indicating whether a key is suitable for an operation using a certain algorithm.
- [SecKeyGetBlockSize](seckeygetblocksize%28__%29.md): Gets the block length associated with a cryptographic key.
- [SecKeyCopyAttributes](seckeycopyattributes%28__%29.md): Gets the attributes of a given key.
- [SecKeyAlgorithm](seckeyalgorithm.md): The algorithms that cryptographic keys enable.
- [SecKeyOperationType](seckeyoperationtype.md): The types of operations that you can use a cryptographic key to perform.

### Import and Export

- [Storing Keys as Data](storing-keys-as-data.md): Create an external representation of a key for transmission.
- [SecKeyCopyExternalRepresentation](seckeycopyexternalrepresentation%28____%29.md): Returns an external representation of the given key suitable for the key’s type.
- [SecKeyCreateWithData](seckeycreatewithdata%28______%29.md): Restores a key from an external representation of that key.

### Key Exchange

- [SecKeyCopyKeyExchangeResult](seckeycopykeyexchangeresult%28__________%29.md): Performs the Diffie-Hellman style of key exchange with optional key-derivation steps.
- [SecKeyKeyExchangeParameter](seckeykeyexchangeparameter.md): The dictionary keys used to specify Diffie-Hellman key exchange parameters.

### Encryption

- [Using Keys for Encryption](using-keys-for-encryption.md): Perform asymmetric and symmetric encryption and decryption using cryptographic keys.
- [SecKeyCreateEncryptedData](seckeycreateencrypteddata%28________%29.md): Encrypts a block of data using a public key and specified algorithm.
- [SecKeyCreateDecryptedData](seckeycreatedecrypteddata%28________%29.md): Decrypts a block of data using a private key and specified algorithm.

### Digital Signatures

- [Signing and Verifying](signing-and-verifying.md): Create and evaluate digital signatures to establish the validity of code or data.
- [SecKeyCreateSignature](seckeycreatesignature%28________%29.md): Creates the cryptographic signature for a block of data using a private key and specified algorithm.
- [SecKeyVerifySignature](seckeyverifysignature%28__________%29.md): Verifies the cryptographic signature of a block of data using a public key and specified algorithm.

### Legacy iOS Key Operations

- [SecKeyGeneratePair](seckeygeneratepair%28______%29.md): Deprecated. Creates an asymmetric key pair.
- [SecKeyEncrypt](seckeyencrypt%28____________%29.md): Deprecated. Encrypts a block of plaintext.
- [SecKeyDecrypt](seckeydecrypt%28____________%29.md): Deprecated. Decrypts a block of ciphertext.
- [SecKeyRawSign](seckeyrawsign%28____________%29.md): Deprecated. Generates a digital signature for a block of data.
- [SecKeyRawVerify](seckeyrawverify%28____________%29.md): Deprecated. Verifies a digital signature.
- [SecPadding](secpadding.md): Deprecated. The types of padding to use when you create or verify a digital signature.

### Legacy macOS Key Operations

- [SecKeyGeneratePairAsync](seckeygeneratepairasync%28______%29.md): Deprecated. Generates a public/private key pair.
- [SecKeyGenerateSymmetric](seckeygeneratesymmetric%28____%29.md): Deprecated. Generates a random symmetric key.
- [SecKeyCreateFromData](seckeycreatefromdata%28______%29.md): Deprecated. Constructs a SecKeyRef object for a symmetric key.
- [SecKeyDeriveFromPassword](seckeyderivefrompassword%28______%29.md): Deprecated. Returns a key object in which the key data is derived from a password.
- [SecKeyWrapSymmetric](seckeywrapsymmetric%28________%29.md): Deprecated. Wraps a symmetric key with another key.
- [SecKeyUnwrapSymmetric](seckeyunwrapsymmetric%28________%29.md): Deprecated. Unwraps a wrapped symmetric key.
- [SecKeyGetCredentials](seckeygetcredentials.md): Deprecated. Returns an access credential for a key.
- [SecKeyGetCSPHandle](seckeygetcsphandle.md): Deprecated. Returns the CSSM CSP handle for a key.
- [SecKeyGetCSSMKey](seckeygetcssmkey.md): Deprecated. Retrieves a pointer to the `CSSM_KEY` structure containing the key stored in a keychain item.
- [SecKeySizes](seckeysizes.md): Deprecated. The supported sizes for keys of various common types.
- [SecKeyUsage](seckeyusage.md): The flags that indicate key usage in the `KeyUsage` extension of a certificate.
- [SecPublicKeyHash](secpublickeyhash.md): A container for a 20-byte public key hash.
- [SecKeyCreatePair](seckeycreatepair.md): Deprecated. Creates an asymmetric key pair and stores it in a keychain.
- [SecKeyGenerate](seckeygenerate.md): Deprecated. Creates a symmetric key and optionally stores it in a keychain.
- [SecKeyGeneratePairBlock](seckeygeneratepairblock.md): A block called with the results of a call to [SecKeyGeneratePairAsync](seckeygeneratepairasync%28______%29.md).
- [SecCredentialType](seccredentialtype.md): Deprecated. The credential type to be returned by [SecKeyGetCredentials](seckeygetcredentials.md).
- [OpaqueSecKeyRef](opaqueseckeyref.md)
