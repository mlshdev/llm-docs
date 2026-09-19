> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/ladomainstatebiometry/statehash

# stateHash (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Contains state hash data for the available biometry type. Returns `nil` if no biometry entities are enrolled.

## Declaration

```swift
var stateHash: Data? { get }
```

<a id="discussion"></a>

## Discussion

If biometric database was modified (fingers, faces were removed or added), `stateHash` data will change. Nature of such database changes cannot be determined but comparing data of `stateHash` after different evaluatePolicy calls will reveal the fact database was changed between the calls.

```
     the state of biometry has not changed.
```

# stateHash (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Contains state hash data for the available biometry type. Returns `nil` if no biometry entities are enrolled.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * stateHash;
```

<a id="discussion"></a>

## Discussion

If biometric database was modified (fingers, faces were removed or added), `stateHash` data will change. Nature of such database changes cannot be determined but comparing data of `stateHash` after different evaluatePolicy calls will reveal the fact database was changed between the calls.

```
     the state of biometry has not changed.
```
