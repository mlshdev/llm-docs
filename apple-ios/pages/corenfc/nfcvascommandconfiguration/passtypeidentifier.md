> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvascommandconfiguration/passtypeidentifier](https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/passtypeidentifier)

# passTypeIdentifier (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A type identifier for the Wallet Pass.

## Declaration

```swift
var passTypeIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

The reader session uses the string value to calculate the merchant ID value for the `GET VAS DATA` command.

## See Also

### Setting Configuration Items

- [mode](mode-swift.property.md): A VAS protocol mode.
- [VASMode](../vasmode.md): Deprecated. Constants that indicate the VAS protocol mode.
- [url](url.md): A merchant URL.

# passTypeIdentifier (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A type identifier for the Wallet Pass.

## Declaration

```objectivec
@property (nonatomic, retain) NSString * passTypeIdentifier;
```

<a id="Discussion"></a>

## Discussion

The reader session uses the string value to calculate the merchant ID value for the `GET VAS DATA` command.

## See Also

### Setting Configuration Items

- [mode](mode-swift.property.md): A VAS protocol mode.
- [VASMode](../vasmode.md): Deprecated. Constants that indicate the VAS protocol mode.
- [url](url.md): A merchant URL.
