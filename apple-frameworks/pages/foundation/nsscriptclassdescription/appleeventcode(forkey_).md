> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/appleeventcode(forkey:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/appleeventcode(forkey:))

# appleEventCode(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code for the specified attribute or relationship in the receiver.

## Declaration

```swift
func appleEventCode(forKey key: String) -> FourCharCode
```

## Parameters

- `key`: The identifying key for an attribute or relationship of the receiver.

<a id="return-value"></a>

## Return Value

The four-character Apple event code associated with the attribute or relationship identified by `key` in the receiver or, if none exists, in the class description for the receiver’s superclass. Returns `0` if no such attribute or relationship is found.

## See Also

### Getting and comparing Apple event codes

- [appleEventCode](appleeventcode.md): Returns the Apple event code associated with the receiver’s class.
- [matchesAppleEventCode(\_:)](matchesappleeventcode%28__%29.md): Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.

# appleEventCodeForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code for the specified attribute or relationship in the receiver.

## Declaration

```objectivec
- (FourCharCode) appleEventCodeForKey:(NSString *) key;
```

## Parameters

- `key`: The identifying key for an attribute or relationship of the receiver.

<a id="return-value"></a>

## Return Value

The four-character Apple event code associated with the attribute or relationship identified by `key` in the receiver or, if none exists, in the class description for the receiver’s superclass. Returns `0` if no such attribute or relationship is found.

## See Also

### Getting and comparing Apple event codes

- [appleEventCode](appleeventcode.md): Returns the Apple event code associated with the receiver’s class.
- [matchesAppleEventCode:](matchesappleeventcode%28__%29.md): Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.
