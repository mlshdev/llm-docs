> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvascommandconfiguration/url](https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/url)

# url (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A merchant URL.

## Declaration

```swift
var url: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The maximum length of the URL is 64 characters, including the schema. To disable the merchant URL, set [url](url.md) to `nil.`

## See Also

### Setting Configuration Items

- [mode](mode-swift.property.md): A VAS protocol mode.
- [VASMode](../vasmode.md): Deprecated. Constants that indicate the VAS protocol mode.
- [passTypeIdentifier](passtypeidentifier.md): A type identifier for the Wallet Pass.

# url (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A merchant URL.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSURL * url;
```

<a id="Discussion"></a>

## Discussion

The maximum length of the URL is 64 characters, including the schema. To disable the merchant URL, set [url](url.md) to `nil.`

## See Also

### Setting Configuration Items

- [mode](mode-swift.property.md): A VAS protocol mode.
- [VASMode](../vasmode.md): Deprecated. Constants that indicate the VAS protocol mode.
- [passTypeIdentifier](passtypeidentifier.md): A type identifier for the Wallet Pass.
