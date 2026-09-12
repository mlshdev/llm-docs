> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/matchesappleeventcode(_:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/matchesappleeventcode(_:))

# matchesAppleEventCode(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.

## Declaration

```swift
func matchesAppleEventCode(_ appleEventCode: FourCharCode) -> Bool
```

## Parameters

- `appleEventCode`: An Apple event code to compare against the receiver’s primary or secondary codes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s primary four-character Apple event code or any of its secondary codes (its synonyms) matches `code`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and comparing Apple event codes

- [appleEventCode](appleeventcode.md): Returns the Apple event code associated with the receiver’s class.
- [appleEventCode(forKey:)](appleeventcode%28forkey_%29.md): Returns the Apple event code for the specified attribute or relationship in the receiver.

# matchesAppleEventCode: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.

## Declaration

```objectivec
- (BOOL) matchesAppleEventCode:(FourCharCode) appleEventCode;
```

## Parameters

- `appleEventCode`: An Apple event code to compare against the receiver’s primary or secondary codes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s primary four-character Apple event code or any of its secondary codes (its synonyms) matches `code`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting and comparing Apple event codes

- [appleEventCode](appleeventcode.md): Returns the Apple event code associated with the receiver’s class.
- [appleEventCodeForKey:](appleeventcode%28forkey_%29.md): Returns the Apple event code for the specified attribute or relationship in the receiver.
