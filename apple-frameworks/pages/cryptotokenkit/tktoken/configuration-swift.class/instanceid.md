> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tktoken/configuration-swift.class/instanceid

# instanceID (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The unique, persistent identifier of this token that the token implementation creates.

## Declaration

```swift
var instanceID: TKToken.InstanceID { get }
```

<a id="Discussion"></a>

## Discussion

The instance identifier often represents some kind of serial number of the target hardware.

## See Also

### Reporting Configuration Information

- [configurationData](configurationdata.md): Additional configuration information for the token instance.

# instanceID (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The unique, persistent identifier of this token that the token implementation creates.

## Declaration

```objectivec
@property (nonatomic, readonly) TKTokenInstanceID instanceID;
```

<a id="Discussion"></a>

## Discussion

The instance identifier often represents some kind of serial number of the target hardware.

## See Also

### Reporting Configuration Information

- [configurationData](configurationdata.md): Additional configuration information for the token instance.
