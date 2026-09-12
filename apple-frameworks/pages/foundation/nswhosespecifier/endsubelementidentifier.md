> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nswhosespecifier/endsubelementidentifier](https://developer.apple.com/documentation/foundation/nswhosespecifier/endsubelementidentifier)

# endSubelementIdentifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the end sub-element identifier for the specifier to the value of a given sub-element.

## Declaration

```swift
var endSubelementIdentifier: NSWhoseSpecifier.SubelementIdentifier { get set }
```

## Parameters

- `subelement`: The end sub-element for the receiver.

## See Also

### Accessing information about a whose specifier

- [endSubelementIndex](endsubelementindex.md): Sets the index position of the last sub-element within the range of objects being tested that pass the specifier’s test.
- [startSubelementIdentifier](startsubelementidentifier.md): Returns the start sub-element identifier for the receiver.
- [startSubelementIndex](startsubelementindex.md): Returns the index position of the first sub-element within the range of objects being tested that pass the receiver’s test.
- [test](test.md): Returns the test object encapsulated by the receiver.

# endSubelementIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the end sub-element identifier for the specifier to the value of a given sub-element.

## Declaration

```objectivec
@property NSWhoseSubelementIdentifier endSubelementIdentifier;
```

## Parameters

- `subelement`: The end sub-element for the receiver.

## See Also

### Accessing information about a whose specifier

- [endSubelementIndex](endsubelementindex.md): Sets the index position of the last sub-element within the range of objects being tested that pass the specifier’s test.
- [startSubelementIdentifier](startsubelementidentifier.md): Returns the start sub-element identifier for the receiver.
- [startSubelementIndex](startsubelementindex.md): Returns the index position of the first sub-element within the range of objects being tested that pass the receiver’s test.
- [test](test.md): Returns the test object encapsulated by the receiver.
