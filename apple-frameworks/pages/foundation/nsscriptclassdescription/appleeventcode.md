> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/appleeventcode](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/appleeventcode)

# appleEventCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code associated with the receiver’s class.

## Declaration

```swift
var appleEventCode: FourCharCode { get }
```

<a id="return-value"></a>

## Return Value

The Apple event code associated with the receiver’s class. This is the primary code used to identify the class in Apple events.

## See Also

### Getting and comparing Apple event codes

- [appleEventCode(forKey:)](appleeventcode%28forkey_%29.md): Returns the Apple event code for the specified attribute or relationship in the receiver.
- [matchesAppleEventCode(\_:)](matchesappleeventcode%28__%29.md): Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.

# appleEventCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code associated with the receiver’s class.

## Declaration

```objectivec
@property (readonly) FourCharCode appleEventCode;
```

<a id="return-value"></a>

## Return Value

The Apple event code associated with the receiver’s class. This is the primary code used to identify the class in Apple events.

## See Also

### Getting and comparing Apple event codes

- [appleEventCodeForKey:](appleeventcode%28forkey_%29.md): Returns the Apple event code for the specified attribute or relationship in the receiver.
- [matchesAppleEventCode:](matchesappleeventcode%28__%29.md): Returns a Boolean value indicating whether a primary or secondary Apple event code in the receiver matches the passed code.
