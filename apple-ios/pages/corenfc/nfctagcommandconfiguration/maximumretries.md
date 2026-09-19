> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctagcommandconfiguration/maximumretries

# maximumRetries (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The maximum number of retries.

## Declaration

```swift
var maximumRetries: Int { get set }
```

<a id="Discussion"></a>

## Discussion

You can specify up to 256 retries. By default, the value of this parameter is `0`.

## See Also

### Configuring a Tag Command

- [retryInterval](retryinterval.md): The time between retries, in seconds.

# maximumRetries (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The maximum number of retries.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger maximumRetries;
```

<a id="Discussion"></a>

## Discussion

You can specify up to 256 retries. By default, the value of this parameter is `0`.

## See Also

### Configuring a Tag Command

- [retryInterval](retryinterval.md): The time between retries, in seconds.
