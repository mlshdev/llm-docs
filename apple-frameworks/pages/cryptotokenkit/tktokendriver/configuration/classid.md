> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tktokendriver/configuration/classid

# classID (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The class identifier of the token driver.

## Declaration

```swift
var classID: TKTokenDriver.ClassID { get }
```

<a id="Discussion"></a>

## Discussion

The identifier uses a reverse-DNS format, such as `com.example.id`.

## See Also

### Reporting Configuration Information

- [tokenConfigurations](tokenconfigurations.md): A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.
- [driverConfigurations](driverconfigurations.md): A dictionary of token class configurations which the class identifier of the token driver keys.

# classID (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The class identifier of the token driver.

## Declaration

```objectivec
@property (nonatomic, readonly) TKTokenDriverClassID classID;
```

<a id="Discussion"></a>

## Discussion

The identifier uses a reverse-DNS format, such as `com.example.id`.

## See Also

### Reporting Configuration Information

- [tokenConfigurations](tokenconfigurations.md): A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.
- [driverConfigurations](driverconfigurations.md): A dictionary of token class configurations which the class identifier of the token driver keys.
