> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeychainsettings/uselockinterval](https://developer.apple.com/documentation/security/seckeychainsettings/uselockinterval)

# useLockInterval (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A Boolean value indicating whether the keychain automatically locks after a certain period of time.

## Declaration

```swift
var useLockInterval: DarwinBoolean
```

<a id="Discussion"></a>

## Discussion

Use [lockInterval](lockinterval.md) to indicate the time in seconds after which the keychain should automatically be locked.

# useLockInterval (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A Boolean value indicating whether the keychain automatically locks after a certain period of time.

## Declaration

```objectivec
Boolean useLockInterval;
```

<a id="Discussion"></a>

## Discussion

Use [lockInterval](lockinterval.md) to indicate the time in seconds after which the keychain should automatically be locked.
