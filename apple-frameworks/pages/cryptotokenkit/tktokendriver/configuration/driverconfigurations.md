> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriver/configuration/driverconfigurations](https://developer.apple.com/documentation/cryptotokenkit/tktokendriver/configuration/driverconfigurations)

# driverConfigurations (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of token class configurations which the class identifier of the token driver keys.

## Declaration

```swift
class var driverConfigurations: [TKTokenDriver.ClassID : TKTokenDriver.Configuration] { get }
```

<a id="Discussion"></a>

## Discussion

If the app hosting the token extension calls this method, it returns a list of configurations for hosted token extensions. Otherwise, this method returns an empty array.

## See Also

### Reporting Configuration Information

- [classID](classid.md): The class identifier of the token driver.
- [tokenConfigurations](tokenconfigurations.md): A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.

# driverConfigurations (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A dictionary of token class configurations which the class identifier of the token driver keys.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSDictionary<NSString *,TKTokenDriverConfiguration *> * driverConfigurations;
```

<a id="Discussion"></a>

## Discussion

If the app hosting the token extension calls this method, it returns a list of configurations for hosted token extensions. Otherwise, this method returns an empty array.

## See Also

### Reporting Configuration Information

- [classID](classid.md): The class identifier of the token driver.
- [tokenConfigurations](tokenconfigurations.md): A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.
