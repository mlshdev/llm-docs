> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/mechanismcompanion/statehash](https://developer.apple.com/documentation/localauthentication/laenvironment/mechanismcompanion/statehash)

# stateHash (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var stateHash: Data? { get }
```

<a id="discussion"></a>

## Discussion

Hash of the current companion pairing as returned by @c LAContext.domainState.companion.stateHash(for:)

If no companion are paired for this companion type, @c stateHash property is @c nil. If at least one companion is paired for this companion type, @c stateHash is not @c nil and it changes whenever the set of paired companions of this type is changed.

# stateHash (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * stateHash;
```

<a id="discussion"></a>

## Discussion

Hash of the current companion pairing as returned by @c LAContext.domainState.companion.stateHash(for:)

If no companion are paired for this companion type, @c stateHash property is @c nil. If at least one companion is paired for this companion type, @c stateHash is not @c nil and it changes whenever the set of paired companions of this type is changed.
