> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriver/configuration/tokenconfigurations](https://developer.apple.com/documentation/cryptotokenkit/tktokendriver/configuration/tokenconfigurations)

# tokenConfigurations (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.

## Declaration

```swift
var tokenConfigurations: [TKToken.InstanceID : TKToken.Configuration] { get }
```

## See Also

### Reporting Configuration Information

- [classID](classid.md): The class identifier of the token driver.
- [driverConfigurations](driverconfigurations.md): A dictionary of token class configurations which the class identifier of the token driver keys.

# tokenConfigurations (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,TKTokenConfiguration *> * tokenConfigurations;
```

## See Also

### Reporting Configuration Information

- [classID](classid.md): The class identifier of the token driver.
- [driverConfigurations](driverconfigurations.md): A dictionary of token class configurations which the class identifier of the token driver keys.
