> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkjapanindividualnumbercardmetadata/preview](https://developer.apple.com/documentation/passkit/pkjapanindividualnumbercardmetadata/preview)

# preview (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

An object that contains information representing the pass for provisioning.

## Declaration

```swift
var preview: PKAddPassMetadataPreview { get set }
```

## See Also

### Defining configuration

- [authenticationPassword](authenticationpassword.md): A string that specifies the authentication password when provisioning the pass.
- [signingPassword](signingpassword.md): A string that sets the signing password when you provision the pass.

# preview (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

An object that contains information representing the pass for provisioning.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nonnull) PKAddPassMetadataPreview * preview;
```

## See Also

### Defining configuration

- [authenticationPassword](authenticationpassword.md): A string that specifies the authentication password when provisioning the pass.
- [signingPassword](signingpassword.md): A string that sets the signing password when you provision the pass.
