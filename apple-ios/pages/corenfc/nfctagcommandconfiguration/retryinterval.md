> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfctagcommandconfiguration/retryinterval

# retryInterval (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The time between retries, in seconds.

## Declaration

```swift
var retryInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the value of this parameter is `0`.

## See Also

### Configuring a Tag Command

- [maximumRetries](maximumretries.md): The maximum number of retries.

# retryInterval (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The time between retries, in seconds.

## Declaration

```objectivec
@property (nonatomic, assign) NSTimeInterval retryInterval;
```

<a id="Discussion"></a>

## Discussion

By default, the value of this parameter is `0`.

## See Also

### Configuring a Tag Command

- [maximumRetries](maximumretries.md): The maximum number of retries.
