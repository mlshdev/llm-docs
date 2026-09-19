> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkjapanindividualnumbercardmetadata/signingpassword

# signingPassword (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A string that sets the signing password when you provision the pass.

## Declaration

```swift
var signingPassword: String? { get set }
```

## See Also

### Defining configuration

- [authenticationPassword](authenticationpassword.md): A string that specifies the authentication password when provisioning the pass.
- [preview](preview.md): An object that contains information representing the pass for provisioning.

# signingPassword (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A string that sets the signing password when you provision the pass.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * signingPassword;
```

## See Also

### Defining configuration

- [authenticationPassword](authenticationpassword.md): A string that specifies the authentication password when provisioning the pass.
- [preview](preview.md): An object that contains information representing the pass for provisioning.
