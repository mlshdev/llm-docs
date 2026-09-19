> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeychainsettings/lockinterval

# lockInterval (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The number of seconds to wait before the keychain locks.

## Declaration

```swift
var lockInterval: UInt32
```

<a id="Discussion"></a>

## Discussion

If you set [useLockInterval](uselockinterval.md) to [false](https://developer.apple.com/documentation/swift/false), set [lockInterval](lockinterval.md) to `INT_MAX` to indicate that the keychain never locks.

# lockInterval (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The number of seconds to wait before the keychain locks.

## Declaration

```objectivec
UInt32 lockInterval;
```

<a id="Discussion"></a>

## Discussion

If you set [useLockInterval](uselockinterval.md) to [false](https://developer.apple.com/documentation/swift/false), set [lockInterval](lockinterval.md) to `INT_MAX` to indicate that the keychain never locks.
