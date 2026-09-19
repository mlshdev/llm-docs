> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/init(vasmode:passtypeidentifier:url:)-9bh8w

# init(vasMode:passTypeIdentifier:url:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a VAS command configuration object.

## Declaration

```swift
init(vasMode mode: NFCVASCommandConfiguration.Mode, passTypeIdentifier: String, url: URL?)
```

## Parameters

- `mode`: A VAS operation mode.
- `passTypeIdentifier`: A type identifier for the Wallet pass.
- `url`: A URL when `mode` is `VASModeURLOnly`; otherwise set to `nil`. The maximum length of the URL is 64 characters, including the schema.

<a id="return-value"></a>

## Return Value

A newly initialized VAS command configuration object.

# initWithVASMode:passTypeIdentifier:url: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a VAS command configuration object.

## Declaration

```objectivec
- (instancetype) initWithVASMode:(NFCVASMode) mode passTypeIdentifier:(NSString *) passTypeIdentifier url:(NSURL *) url;
```

## Parameters

- `mode`: A VAS operation mode.
- `passTypeIdentifier`: A type identifier for the Wallet pass.
- `url`: A URL when `mode` is `VASModeURLOnly`; otherwise set to `nil`. The maximum length of the URL is 64 characters, including the schema.

<a id="return-value"></a>

## Return Value

A newly initialized VAS command configuration object.
