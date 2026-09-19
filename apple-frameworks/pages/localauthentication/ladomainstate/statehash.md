> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/ladomainstate/statehash

# stateHash (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Contains combined state hash data for biometry and companion state hashes.

## Declaration

```swift
var stateHash: Data? { get }
```

<a id="discussion"></a>

## Discussion

```
     the list of paired companions has not changed.
```

# stateHash (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Contains combined state hash data for biometry and companion state hashes.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * stateHash;
```

<a id="discussion"></a>

## Discussion

```
     the list of paired companions has not changed.
```
