> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/ladomainstatecompanion/statehash(for:)](https://developer.apple.com/documentation/localauthentication/ladomainstatecompanion/statehash(for:))

# stateHash(for:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Returns state hash data for the given companion type.

## Declaration

```swift
func stateHash(for companionType: LACompanionType) -> Data?
```

## Parameters

- `companionType`: The companion type for which state hash data should be returned.

<a id="discussion"></a>

## Discussion

If database of paired devices of the given type was modified state hash data will change. Nature of such database changes cannot be determined but comparing data of state hash after different policy evaluation will reveal the fact database was changed between calls.

# stateHashForCompanionType: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Returns state hash data for the given companion type.

## Declaration

```objectivec
- (NSData *) stateHashForCompanionType:(LACompanionType) companionType;
```

## Parameters

- `companionType`: The companion type for which state hash data should be returned.

<a id="discussion"></a>

## Discussion

If database of paired devices of the given type was modified state hash data will change. Nature of such database changes cannot be determined but comparing data of state hash after different policy evaluation will reveal the fact database was changed between calls.
